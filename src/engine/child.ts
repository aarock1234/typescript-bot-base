import bytenode from 'bytenode';
import ModuleWrapper from 'module';
import path from 'path';

import { Module, ClusterMessage, TaskData } from '../interface/interface';

import Task from '../modules/task';

class Process {
	taskList: { [id: string]: Task } = {};
	moduleConstructors: Object = {};
	constructor() {
		this.initHandlers();
	}

	initHandlers() {
		process.on('message', (ClusterMessage) => {
			const ClusterMessageParsed: ClusterMessage = JSON.parse(ClusterMessage);

			switch (ClusterMessageParsed.message) {
				case 'addModule': {
					const moduleData: Module = JSON.parse(ClusterMessageParsed.data);

					if (
						!Object.prototype.hasOwnProperty.call(
							this.moduleConstructors,
							moduleData.value
						)
					) {
						this.moduleConstructors[moduleData.value] = undefined;
						this.initializeModule(moduleData);
					}

					break;
				}
				case 'createTask': {
					const taskData: TaskData = JSON.parse(ClusterMessageParsed.data);
					this.createTask(taskData);
					break;
				}
				case 'startTask': {
					const taskID: string = ClusterMessageParsed.data;
					this.startTask(taskID);
					break;
				}
				case 'stopTask': {
					const taskID: string = ClusterMessageParsed.data;
					this.stopTask(taskID);
					break;
				}
				default:
					break;
			}
		});

		console.log(`Engine child process '${process.pid}' started successfully!`);
	}

	initializeModule(moduleData: Module) {
		const bytecodeBuffer: Buffer = Buffer.from(moduleData.bytecodeString ?? '', 'base64');

		const vmScript = bytenode.runBytecode(bytecodeBuffer);
		let moduleExports = {
			default: undefined,
		};

		const customRequire = (modulePath: string) => {
			if (modulePath.match(/\.|\/|\\/g)) {
				modulePath = path.join(__dirname, '../modules/', moduleData.value, modulePath);
			}

			return require(modulePath);
		};

		vmScript.apply(moduleExports, [
			moduleExports,
			customRequire,
			ModuleWrapper,
			__filename,
			__dirname,
			process,
			global,
		]);

		this.moduleConstructors[moduleData.value] = moduleExports.default;

		console.log(this.moduleConstructors);
		this.createTask({
			id: moduleData.value,
			running: false,
			module: moduleData,
			internal: {
				a: 'b',
			},
		});

		this.startTask(moduleData.value);
	}

	createTask(taskData: TaskData) {
		const moduleClass = this.moduleConstructors[taskData.module.value];

		this.taskList[taskData.id] = new moduleClass(taskData);
	}

	startTask(taskID: string) {
		this.taskList[taskID].Start();
	}

	stopTask(taskID: string) {
		const runningTask: Task = this.taskList[taskID];

		if (runningTask) {
			runningTask.Stop();

			delete this.taskList[taskID];
		}

		if (global.gc) {
			global.gc();
		}
	}

	selectModule(module: Module) {
		switch (module.value) {
		}
	}
}

new Process();
