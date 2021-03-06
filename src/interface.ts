import { Session } from 'electron';
import { ChildProcess } from 'child_process';
import { SessionResponse } from './modules/footsites/interface';

export interface TaskData {
	id: string;
	module: Module;
	input: string;
	running?: boolean;

	/**
	 * DO NOT TOUCH!
	 */
	retryDelay?: number;
}

export interface Module {
	name: string;
	value: string;
	bytecodeString?: string;
}

export interface ClusterProcess {
	process: ChildProcess;
	tasks: Array<TaskData>;
}

export interface ClusterMessage {
	message: string;
	data: string;
}

export interface RequestOptions {
	url: string;
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';

	headers?: Record<string, string | string[]>;
	body?: Buffer | Object;

	proxy?: string;
	timeout?: number;
	followRedirects?: boolean;
	simpleStatus?: boolean;

	/**
	 * The client creates and respects the
	 * cookie jar when initialized!
	 *
	 * Do not set these properties manually
	 * unless you know what you're doing!
	 */
	session?: Session;
}

export interface ResponseOptions {
	readonly url?: string /** Final URL of the request. */;
	readonly statusCode?: number;

	readonly body?: Buffer;
	readonly headers?: Record<string, string | string[]>;

	readonly error?: string;
}

/**
 * Internal interfaces.
 */

export interface FootsitesInternal {
	readonly host: URL;
	readonly hostPlain: string;

	gateway: 'api' | 'apigate';
	platform: 'desktop' | 'iOS';
	
	session: SessionResponse;

	productWebKey: string;
}