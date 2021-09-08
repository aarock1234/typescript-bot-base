import Client from '../client/client';
import { TaskData } from '../interface/interface';

export default class Task {
	internal!: Object;
	taskData!: TaskData;
	functionFlow!: Array<Function>;
	requestClient!: Client;
	constructor(taskData: TaskData) {
		this.taskData = taskData;

		for (const key in this.taskData.internal) {
			this[key] = this.taskData.internal[key];
		}
	}

	Start() {
		this.taskData.running = true;

		this.requestClient = new Client();

		this.executeFlow();
	}

	Stop() {
		this.taskData.running = false;
	}

	async executeFlow() {
		for (const func of this.functionFlow) {
			if (this.taskData.running) await this[func.name]();
			else return;
		}
	}
}
