import { TaskData } from '../../interface/interface';
import Task from '../task';

export default class Snipes extends Task {
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
