import { RequestOptions, TaskData } from '../../interface/interface';
import Task from '../task';

export default class Footsites extends Task {
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
	}

	async getQueue() {
		console.log('Getting Queue');
		
		const requestOptions: RequestOptions = {
			url: 'https://ja3er.com/json',
			method: 'GET',
			headers: {
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
				'Accept-Language': 'en-US,en;q=0.9',
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'Sec-Fetch-Dest': 'document',
				'Sec-Fetch-Mode': 'navigate',
				'Sec-Fetch-Site': 'none',
				'Sec-Fetch-User': '?1',
				'Upgrade-Insecure-Requests': '1',
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
			},
		};

		const ja3Request = this.requestClient.newRequest(requestOptions);
		const ja3Response = await ja3Request.doRequest();

		console.log(ja3Response.getBodyJson());
	}

	async getProduct() {
		console.log('Getting Product');
	}

	async getSession() {
		console.log('Getting Session');
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
