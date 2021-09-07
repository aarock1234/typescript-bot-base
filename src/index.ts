import { app } from 'electron';

import startEngine, { Engine } from './backend/engine';

async function startBot() {
	const mainEngine: Engine = startEngine();

	await mainEngine.authenticateUser();
	mainEngine.getModules();
}

app.whenReady().then(() => startBot());
