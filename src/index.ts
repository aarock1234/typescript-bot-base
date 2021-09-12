import { app } from 'electron';

import startEngine, { Engine } from './engine/engine';

async function startBot() {
	const mainEngine: Engine = startEngine();

	await mainEngine.authenticateUser();
	mainEngine.getModules();
}

app.whenReady().then(() => startBot());
