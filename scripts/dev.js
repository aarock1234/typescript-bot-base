const express = require('express');
const bytenode = require('bytenode');
const fs = require('fs');
const path = require('path');
const Module = require('module');

require('console-stamp')('HH:MM:ss.l');

const PORT = 5252;

const DEVELOPER_USER = {
	discord: {
		id: '835335296799080499',
		name: 'Rock',
		delimeter: '5555',
	},
};

const MODULES = [
	{
		name: 'Footlocker US',
		value: 'footsites',
	},
	{
		name: 'ChampsSports',
		value: 'footsites',
	},
	{
		name: 'Eastbay',
		value: 'footsites',
	},
	{
		name: 'Footaction',
		value: 'footsites',
	},
	{
		name: 'Snipes',
		value: 'snipes',
	},
];

var bytecodeStorage = {};

function createBytecodeServer() {
	const app = express();

	app.post('/api/authenticate', (req, res) => {
		console.log('Authenticated in dev mode.');
		console.log(req.body);

		res.json(DEVELOPER_USER);
	});

	app.get('/api/modules', (_, res) => {
		console.log('Modules requested in dev mode.');

		res.json(MODULES);
	});

	app.get('/api/modules/:module', (req, res) => {
		console.log(`Module '${req.params['module']}' requested in dev mode.`);

		res.send(bytecodeStorage[req.params['module']]);
	});

	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}.`);
	});
}

async function packModule(moduleName) {
	console.log(`Generating bytecode for '${moduleName}' module.`);

	const moduleSourceBuffer = fs.readFileSync(
		path.join(__dirname, '../dist/modules/', moduleName, `/${moduleName}.js`)
	);
	const moduleSource = moduleSourceBuffer.toString();

	const moduleBytecode = await bytenode.compileElectronCode(Module.wrap(moduleSource));

	return moduleBytecode.toString('base64');
}

function readModules() {
	fs.readdirSync(path.join(__dirname, '../dist/modules'), {
		withFileTypes: true,
	})
		.filter((moduleFolder) => moduleFolder.isDirectory())
		.forEach(async (moduleFolder) => {
			const moduleBytecode = await packModule(moduleFolder.name);

			bytecodeStorage[moduleFolder.name] = moduleBytecode;
		});
}

readModules();
createBytecodeServer();
