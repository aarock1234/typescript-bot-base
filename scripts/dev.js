const express = require('express');
const bytenode = require('bytenode');
const fs = require('fs');
const path = require('path');
const Module = require('module');
const Enpaki = require('enpaki');

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
	/*
	{
		name: 'YeezySupply',
		value: 'yeezysupply',
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
	},*/
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

async function packModule(moduleFolder) {
	const moduleEntry = path.join(__dirname, '../dist/modules/', moduleFolder, `/${moduleFolder}.js`);

	console.log(moduleEntry);

	const moduleBytecode = await new Promise((resolve) => {
		let enpakiOut = [];
		let enpakiBuffer = undefined;

		/** First JS file!  */
		const enpakiStream = new Enpaki(moduleEntry);

		enpakiStream.on('data', (enpakiChunk) => {
			enpakiOut.push(enpakiChunk);
		})

		enpakiStream.on('end', async () => {
			enpakiBuffer = Buffer.concat(enpakiOut);

			const enpakiCode = Module.wrap(enpakiBuffer.toString()).replace('(function (exports,', '(function (exports, _enpakiModules,').replace('var _enpakiModules = {};', '');

			const enpakiBytecode = await bytenode.compileElectronCode(enpakiCode);

			resolve(enpakiBytecode.toString('base64'));
		})
	})

	bytecodeStorage[moduleFolder] = moduleBytecode;
}

async function readModules() {
	fs.readdirSync(path.join(__dirname, '../dist/modules'), {
		withFileTypes: true,
	}).filter((moduleFolder) => moduleFolder.isDirectory())
	  .forEach(async (moduleFolder) => packModule(moduleFolder.name))
}

readModules();
createBytecodeServer();
