import Client from '../client';
import { TaskData } from '../interface';
import utils from '../utils';

export default class Task {
	taskData!: TaskData;
	functionFlow!: Array<Function>;
	requestClient!: Client;
	constructor(taskData: TaskData) {
		this.taskData = taskData;

		this.taskData.retryDelay = 3000;
	}

	async handleError(_: any): Promise<any> {
		global.gc?.();

		return {} as any;
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
		for (var func of this.functionFlow) {
			/** Internal loop for errors! */
			whileRunning:
			while (this.taskData.running) {
				try {
					func = await this[func.name]();
					if (func) {
						continue whileRunning;
					} else break;
				} catch (error) {
					const errorFunc: any = await this.handleError(error);
					await utils.sleep(this.taskData.retryDelay ?? 3000); 
					if (errorFunc) {
						func = errorFunc;
						continue whileRunning;
					}
				}
			}
		}
	}
}
