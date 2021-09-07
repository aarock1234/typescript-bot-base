import childProcess from 'child_process';
import path from 'path';
import os from 'os';

import Client, { Request, Response } from '../client/client';
import { ClusterProcess, Module, ClusterMessage, RequestOptions } from '../interface/interface';

const API_URL: string = 'http://localhost:5252';

export class Engine {
	engineClient!: Client;
	moduleList: Array<Module> = [];
	clusterArray: Array<ClusterProcess> = [];
	cpuCount: number = 1 || os.cpus().length;
	constructor() {
		this.engineClient = new Client();

		this.startCluster();
	}

	async authenticateUser() {
		try {
			const requestOptions: RequestOptions = {
				url: `${API_URL}/api/authenticate`,
				method: 'POST',
				headers: {
					accept: '*/*',
					'content-type': 'application/json',
				},
				body: {
					email: 'example@example.com',
					password: 'p455w0rd',
				},
			};

			const authRequest: Request = this.engineClient.newRequest(requestOptions);

			const authResponse: Response = await authRequest.doRequest();

			console.log(authResponse.getBodyString());
		} catch (error) {
			console.log(error);
		}
	}

	async startCluster() {
		console.log(`Starting ${this.cpuCount} child clusters.`);

		for (let i = 0; i < this.cpuCount; i++) {
			const engineProcess = childProcess.spawn(
				process.execPath,
				[path.join(__dirname, 'child.js')],
				{
					stdio: [0, 1, 2, 'ipc'],
				}
			);

			this.clusterArray.push({
				process: engineProcess,
				tasks: [],
			});
		}
	}

	async sendModules() {
		for (let i = 0; i < this.clusterArray.length; i++) {
			const clusterProcess = this.clusterArray[i].process;

			for (let j = 0; j < this.moduleList.length; j++) {
				const module = this.moduleList[j];

				const clusterMessage: ClusterMessage = {
					message: 'addModule',
					data: JSON.stringify(module),
				};

				clusterProcess.send(JSON.stringify(clusterMessage));
			}
		}
	}

	async getModule(module: Module): Promise<string> {
		console.log(`Getting ${module.value} module.`);

		const requestOptions: RequestOptions = {
			url: `${API_URL}/api/modules/${module.value}`,
			method: 'GET',
			headers: {
				accept: '*/*',
			},
		};

		const moduleRequest: Request = this.engineClient.newRequest(requestOptions);

		const moduleResponse: Response = await moduleRequest.doRequest();
		const moduleBytecode: string = moduleResponse.getBodyString();

		return moduleBytecode;
	}

	async getModules() {
		console.log('Getting modules.');

		const requestOptions: RequestOptions = {
			url: `${API_URL}/api/modules`,
			method: 'GET',
			headers: {
				accept: '*/*',
			},
		};

		const modulesRequest: Request = this.engineClient.newRequest(requestOptions);

		const modulesResponse: Response = await modulesRequest.doRequest();
		this.moduleList = modulesResponse.getBodyJson();

		for (let i = 0; i < this.moduleList.length; i++) {
			this.moduleList[i].bytecodeString = await this.getModule(this.moduleList[i]);
		}

		return this.sendModules();
	}
}

export default function startEngine(): Engine {
	return new Engine();
}
