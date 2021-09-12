import { TaskData } from '../../interface/interface';
import Task from '../task';

export default class YeezySupply extends Task {
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
		console.log('Getting Queue 1');
	}

	async getProduct() {
		console.log('Getting Product 1');
	}

	async getSession() {
		console.log('Getting Session 1');
	}

	async addToCart() {
		console.log('Adding to Cart 1');
	}

	async addBilling() {
		console.log('Adding Billing 1');
	}

	async submitOrder() {
		console.log('Submitting Order 1');
	}
}
