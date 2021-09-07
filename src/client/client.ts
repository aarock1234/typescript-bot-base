import { Cookie, CookiesGetFilter, CookiesSetDetails, net, Session, session } from 'electron';
import { v4 as uuidv4 } from 'uuid';

import { RequestOptions, ResponseOptions } from '../interface/interface';
import { ClientRequest, ClientRequestConstructorOptions, IncomingMessage } from 'electron';

export class Response {
	responseOptions!: ResponseOptions;
	constructor(responseOptions: ResponseOptions) {
		this.responseOptions = responseOptions;
	}

	wasSuccessful(): boolean {
		return this.getError() == '';
	}

	getError(): string {
		return this.responseOptions.error ?? '';
	}

	getBody(): Buffer {
		return this.responseOptions.body ?? Buffer.from('');
	}

	getBodyString(encoding?: BufferEncoding): string {
		return this.responseOptions.body?.toString(encoding ?? 'ascii') ?? '';
	}

	getBodyJson(): any {
		try {
			return JSON.parse(this.getBodyString() ?? '{}');
		} catch (_) {
			return {};
		}
	}

	getStatusCode(): Number {
		return this.responseOptions.statusCode ?? -1;
	}
}

export class Request {
	request!: ClientRequest;
	requestOptions!: RequestOptions;
	requestBody!: Buffer;
	constructor(requestOptions: RequestOptions) {
		this.requestOptions = requestOptions;

		if (Buffer.isBuffer(this.requestOptions.body)) {
			this.requestBody = this.requestOptions.body;
		} else if (!this.isEmptyObject(this.requestOptions.body ?? {})) {
			this.requestBody = Buffer.from(JSON.stringify(this.requestOptions.body));
		}
	}

	isEmptyObject(obj: Object) {
		return !Object.keys(obj).length;
	}

	setBody(bodyJson: Object) {
		const jsonString: string = JSON.stringify(bodyJson);

		this.requestBody = Buffer.from(jsonString);
	}

	setBodyBuffer(bodyBuffer: Buffer) {
		this.requestBody = bodyBuffer;
	}

	doRequest(): Promise<Response> {
		return new Promise(async (resolve, reject) => {
			const proxySplit = (this.requestOptions.proxy ?? '').split(':');
			if ((proxySplit ?? []).length > 1) {
				const currentProxy = await this.requestOptions.session?.resolveProxy('');

				if (currentProxy != `PROXY ${proxySplit[0]}:${proxySplit[1]}`) {
					await this.requestOptions.session?.setProxy({
						mode: 'direct' /** Makes Charles not work, etc. */,
						proxyRules: `${proxySplit[0]}:${proxySplit[1]}`,
					});
				}

				this.request.on('login', (_, callback) => {
					proxySplit.length > 3 ? callback(proxySplit[2], proxySplit[3]) : callback();
				});
			} else {
				await this.requestOptions.session?.setProxy({
					mode: 'direct' /** Makes Charles not work, etc. */,
					proxyRules: '',
				});
			}

			const parsedURL: URL = new URL(this.requestOptions.url);

			let formattedOptions: ClientRequestConstructorOptions = {
				url: parsedURL.toString(),
				method: this.requestOptions.method,
				session: this.requestOptions.session,
				protocol: parsedURL.protocol,
				redirect: this.requestOptions.followRedirects ? 'manual' : 'error',
			};

			const requestTimeout = setTimeout(() => {
				this.request?.abort();
				reject(
					new Response({
						url: formattedOptions.url,
						error: 'timeout',
					})
				);
			}, this.requestOptions.timeout ?? 30000);

			this.request = net.request(formattedOptions);

			Object.keys(this.requestOptions.headers ?? {}).map((key: string) => {
				this.request.setHeader(key, this.requestOptions?.headers?.[key] as string);
			});

			if (this.requestBody?.length > 0) {
				this.request.write(this.requestBody.toString());
			}

			this.request.on('error', (requestError: Error) => {
				clearTimeout(requestTimeout);

				switch (requestError.message) {
					case 'net::ERR_TUNNEL_CONNECTION_FAILED':
						reject(
							new Response({
								url: formattedOptions.url,
								error: 'tunnel',
							})
						);
					case 'ERR_NO_SUPPORTED_PROXIES':
						reject(
							new Response({
								url: formattedOptions.url,
								error: 'proxy',
							})
						);
					default:
						reject(
							new Response({
								url: formattedOptions.url,
								error: 'generic',
							})
						);
				}
			});

			this.request.on('redirect', (_, __, redirectUrl: string) => {
				if (this.requestOptions.followRedirects) {
					formattedOptions.url = redirectUrl;
					this.request.followRedirect();
				}
			});

			this.request.on('response', (requestResponse: IncomingMessage) => {
				clearTimeout(requestTimeout);

				let bodyBuffer = Buffer.from('');

				requestResponse.on('data', (chunk: Buffer) => {
					bodyBuffer = Buffer.concat([bodyBuffer, chunk]);
				});

				requestResponse.on('end', () => {
					resolve(
						new Response({
							url: formattedOptions.url,
							statusCode: requestResponse.statusCode,
							body: bodyBuffer,
							headers: requestResponse.headers,
						})
					);
				});
			});

			this.request.end();
		});
	}
}

export default class Client {
	session!: Session;
	constructor() {
		this.session = session.fromPartition(uuidv4());
	}

	urlOrigin(url: string) {
		return new URL(url).origin;
	}

	newRequest(requestOptions: RequestOptions): Request {
		requestOptions.session = this.session;

		return new Request(requestOptions);
	}

	setCookie(cookie: CookiesSetDetails) {
		this.session.cookies.set(cookie);
	}

	removeCookie(url: string, name: string) {
		this.session.cookies.remove(url, name);
	}

	async getCookies(filter?: CookiesGetFilter): Promise<Cookie[]> {
		return this.session.cookies.get(filter ?? {});
	}
}
