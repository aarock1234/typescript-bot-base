import { FootsitesInternal, RequestOptions, ResponseOptions, TaskData } from '../../interface';
import Task from '../task';
import utils from '../../utils';
import { Response } from '../../client';

export default class Footsites extends Task {
	internal!: FootsitesInternal;
	constructor(taskData: TaskData) {
		super(taskData);

		this.functionFlow = [
			this.getQueue,
			this.getProduct,
			this.getSession,
			this.addToCart,
			this.addBilling,
			this.submitOrder,
		];

		/**
		 * Footsites specific actions.
		 */

		var hostUrl: URL;
		switch (this.taskData.module.name /** Name, value is footsites. */) {
			case 'Footlocker US':
				hostUrl = new URL('https://www.footlocker.com')
				break;
			case 'ChampsSports':
				hostUrl = new URL('https://www.champssports.com')
				break;
			case 'Eastbay':
				hostUrl = new URL('https://www.eastbay.com')
				break;
			case 'Footaction':
				hostUrl = new URL('https://www.footaction.com')
				break;
			default:
				hostUrl = new URL('https://www.footlocker.com')
				break;
		}

		this.internal = {
			host: hostUrl,
			hostPlain: hostUrl.toString().slice(0, -1),
			gateway: 'apigate',
		} as FootsitesInternal;
	}

	async handleError(response: Response): Promise<any> {
		super.handleError(null);

		const statusCode: number = response.responseOptions.statusCode ?? -1;
		console.log(statusCode)

		switch (statusCode) {
			case 429:
				
				break;
			case 403:
				
				break;
		
			default:
				break;
		}
	}

	async getQueue() {
		console.log('Getting Queue');
	}

	async getProduct() {
		console.log('Getting Product');
	}

	async getSession() {
		console.log('Getting Session');

		let requestUrl: string = `${this.internal.hostPlain}/${this.internal.gateway}/v5/session`;

		const requestOptions: RequestOptions = {
			url: requestUrl,
			method: 'GET',
			simpleStatus: true,
			headers: {
				...utils.defaultHeaders,
				Accept: 'application/json',
			},
		};

		const sessionRequest = this.requestClient.newRequest(requestOptions);
		const sessionResponse = await sessionRequest.doRequest();

		this.internal.session = sessionResponse.getBodyJson() ?? {};

		console.log(this.internal.session);

		return this.getQueue
	}

	async addToCart() {
		console.log('Adding to Cart');
	}

	async addBilling() {
		console.log('Adding Billing');
	}

	async submitOrder() {
		console.log('Submitting Order');
	}
}
