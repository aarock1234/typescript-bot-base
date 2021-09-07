import { TaskData } from '../interface/interface';

export default class Task {
	internal!: Object;
	taskData!: TaskData;
	functionFlow!: Array<Function>;
	constructor(taskData: TaskData) {
		this.taskData = taskData;
	}

	Start() {
		this.executeFlow(this.functionFlow);
	}

	Stop() {
		this.taskData.running = false;
	}

	async executeFlow(functionFlow: Array<Function>) {
		for await (const func of functionFlow) {
			if (this.taskData.running) await func();
			else return;
		}
	}
}
