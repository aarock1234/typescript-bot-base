/** start of bundle */
;(function () {
var path = require('path');

var _enpakiModules = {};
var _enpakiCache = {};

var BUNDLE_ROOT = '/';

/** module: /footsites.js */
_enpakiModules['/footsites.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../task"));
const utils_1 = __importDefault(require("../../utils"));
class Footsites extends task_1.default {
    constructor(taskData) {
        super(taskData);
        this.functionFlow = [
            this.getQueue,
            this.getProduct,
            this.getSession,
            this.addToCart,
            this.addBilling,
            this.submitOrder,
        ];
        /**
         * Footsites specific actions.
         */
        var hostUrl;
        switch (this.taskData.module.name /** Name, value is footsites. */) {
            case 'Footlocker US':
                hostUrl = new URL('www.footlocker.com');
                break;
            case 'ChampsSports':
                hostUrl = new URL('www.champssports.com');
                break;
            case 'Eastbay':
                hostUrl = new URL('www.eastbay.com');
                break;
            case 'Footaction':
                hostUrl = new URL('www.footaction.com');
                break;
            default:
                hostUrl = new URL('www.footlocker.com');
                break;
        }
        this.internal = {
            host: hostUrl,
            gateway: 'apigate',
        };
    }
    getQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Queue');
            const requestOptions = {
                url: ``,
                method: 'GET',
                headers: Object.assign({}, utils_1.default.defaultHeaders),
            };
            const ja3Request = this.requestClient.newRequest(requestOptions);
            const ja3Response = yield ja3Request.doRequest();
            console.log(ja3Response.getBodyJson());
        });
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Product');
        });
    }
    getSession() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Session');
        });
    }
    addToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Adding to Cart');
        });
    }
    addBilling() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Adding Billing');
        });
    }
    submitOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Submitting Order');
        });
    }
}
exports.default = Footsites;

return module.exports;
}; /** end module: /footsites.js */

/** module: /../yeezysupply/yeezysupply.js */
_enpakiModules['/../yeezysupply/yeezysupply.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../task"));
class YeezySupply extends task_1.default {
    constructor(taskData) {
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
    getQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Queue 1');
        });
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Product 1');
        });
    }
    getSession() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Getting Session 1');
        });
    }
    addToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Adding to Cart 1');
        });
    }
    addBilling() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Adding Billing 1');
        });
    }
    submitOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Submitting Order 1');
        });
    }
}
exports.default = YeezySupply;

return module.exports;
}; /** end module: /../yeezysupply/yeezysupply.js */

/** module: /../task.js */
_enpakiModules['/../task.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
class Task {
    constructor(taskData) {
        this.taskData = taskData;
    }
    Start() {
        this.taskData.running = true;
        this.requestClient = new client_1.default();
        this.executeFlow();
    }
    Stop() {
        this.taskData.running = false;
    }
    executeFlow() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const func of this.functionFlow) {
                if (this.taskData.running)
                    yield this[func.name]();
                else
                    return;
            }
        });
    }
}
exports.default = Task;

return module.exports;
}; /** end module: /../task.js */

/** module: /../../utils.js */
_enpakiModules['/../../utils.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';
const defaultHeaders = {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': userAgent
};
exports.default = { defaultHeaders, userAgent };

return module.exports;
}; /** end module: /../../utils.js */

/** module: /../../client.js */
_enpakiModules['/../../client.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Response = void 0;
const electron_1 = require("electron");
const uuid_1 = require("uuid");
class Response {
    constructor(responseOptions) {
        this.responseOptions = responseOptions;
    }
    wasSuccessful() {
        return this.getError() == '';
    }
    getError() {
        var _a;
        return (_a = this.responseOptions.error) !== null && _a !== void 0 ? _a : '';
    }
    getBody() {
        var _a;
        return (_a = this.responseOptions.body) !== null && _a !== void 0 ? _a : Buffer.from('');
    }
    getBodyString(encoding) {
        var _a, _b;
        return (_b = (_a = this.responseOptions.body) === null || _a === void 0 ? void 0 : _a.toString(encoding !== null && encoding !== void 0 ? encoding : 'ascii')) !== null && _b !== void 0 ? _b : '';
    }
    getBodyJson() {
        var _a;
        try {
            return JSON.parse((_a = this.getBodyString()) !== null && _a !== void 0 ? _a : '{}');
        }
        catch (_) {
            return {};
        }
    }
    getStatusCode() {
        var _a;
        return (_a = this.responseOptions.statusCode) !== null && _a !== void 0 ? _a : -1;
    }
}
exports.Response = Response;
class Request {
    constructor(requestOptions) {
        var _a;
        this.requestOptions = requestOptions;
        if (Buffer.isBuffer(this.requestOptions.body)) {
            this.requestBody = this.requestOptions.body;
        }
        else if (!this.isEmptyObject((_a = this.requestOptions.body) !== null && _a !== void 0 ? _a : {})) {
            this.requestBody = Buffer.from(JSON.stringify(this.requestOptions.body));
        }
    }
    isEmptyObject(obj) {
        return !Object.keys(obj).length;
    }
    setBody(bodyJson) {
        const jsonString = JSON.stringify(bodyJson);
        this.requestBody = Buffer.from(jsonString);
    }
    setBodyBuffer(bodyBuffer) {
        this.requestBody = bodyBuffer;
    }
    doRequest() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            const proxySplit = ((_a = this.requestOptions.proxy) !== null && _a !== void 0 ? _a : '').split(':');
            if ((proxySplit !== null && proxySplit !== void 0 ? proxySplit : []).length > 1) {
                const currentProxy = yield ((_b = this.requestOptions.session) === null || _b === void 0 ? void 0 : _b.resolveProxy(''));
                if (currentProxy != `PROXY ${proxySplit[0]}:${proxySplit[1]}`) {
                    yield ((_c = this.requestOptions.session) === null || _c === void 0 ? void 0 : _c.setProxy({
                        mode: 'direct' /** Makes Charles not work, etc. */,
                        proxyRules: `${proxySplit[0]}:${proxySplit[1]}`,
                    }));
                }
                this.request.on('login', (_, callback) => {
                    proxySplit.length > 3 ? callback(proxySplit[2], proxySplit[3]) : callback();
                });
            }
            else {
                yield ((_d = this.requestOptions.session) === null || _d === void 0 ? void 0 : _d.setProxy({
                    mode: 'direct' /** Makes Charles not work, etc. */,
                    proxyRules: '',
                }));
            }
            const parsedURL = new URL(this.requestOptions.url);
            let formattedOptions = {
                url: parsedURL.toString(),
                method: this.requestOptions.method,
                session: this.requestOptions.session,
                protocol: parsedURL.protocol,
                redirect: this.requestOptions.followRedirects ? 'manual' : 'error',
            };
            const requestTimeout = setTimeout(() => {
                var _a;
                (_a = this.request) === null || _a === void 0 ? void 0 : _a.abort();
                reject(new Response({
                    url: formattedOptions.url,
                    error: 'timeout',
                }));
            }, (_e = this.requestOptions.timeout) !== null && _e !== void 0 ? _e : 30000);
            this.request = electron_1.net.request(formattedOptions);
            Object.keys((_f = this.requestOptions.headers) !== null && _f !== void 0 ? _f : {}).map((key) => {
                var _a, _b;
                this.request.setHeader(key, (_b = (_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b[key]);
            });
            if (((_g = this.requestBody) === null || _g === void 0 ? void 0 : _g.length) > 0) {
                this.request.write(this.requestBody);
            }
            this.request.on('error', (requestError) => {
                clearTimeout(requestTimeout);
                switch (requestError.message) {
                    case 'net::ERR_TUNNEL_CONNECTION_FAILED':
                        reject(new Response({
                            url: formattedOptions.url,
                            error: 'tunnel',
                        }));
                    case 'ERR_NO_SUPPORTED_PROXIES':
                        reject(new Response({
                            url: formattedOptions.url,
                            error: 'proxy',
                        }));
                    default:
                        reject(new Response({
                            url: formattedOptions.url,
                            error: 'generic',
                        }));
                }
            });
            this.request.on('redirect', (_, __, redirectUrl) => {
                if (this.requestOptions.followRedirects) {
                    formattedOptions.url = redirectUrl;
                    this.request.followRedirect();
                }
            });
            this.request.on('response', (requestResponse) => {
                clearTimeout(requestTimeout);
                let bodyBuffer = Buffer.from('');
                requestResponse.on('data', (chunk) => {
                    bodyBuffer = Buffer.concat([bodyBuffer, chunk]);
                });
                requestResponse.on('end', () => {
                    resolve(new Response({
                        url: formattedOptions.url,
                        statusCode: requestResponse.statusCode,
                        body: bodyBuffer,
                        headers: requestResponse.headers,
                    }));
                });
            });
            this.request.end();
        }));
    }
}
exports.Request = Request;
class Client {
    constructor() {
        this.session = electron_1.session.fromPartition((0, uuid_1.v4)());
    }
    urlOrigin(url) {
        return new URL(url).origin;
    }
    newRequest(requestOptions) {
        requestOptions.session = this.session;
        return new Request(requestOptions);
    }
    setCookie(cookie) {
        this.session.cookies.set(cookie);
    }
    removeCookie(url, name) {
        this.session.cookies.remove(url, name);
    }
    getCookies(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.cookies.get(filter !== null && filter !== void 0 ? filter : {});
        });
    }
}
exports.default = Client;

return module.exports;
}; /** end module: /../../client.js */

/** module: /../../../node_modules/electron/index.js */
_enpakiModules['/../../../node_modules/electron/index.js'] = function (exports, require, module, __filename, __dirname) {
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'path.txt');

function getElectronPath () {
  let executablePath;
  if (fs.existsSync(pathFile)) {
    executablePath = fs.readFileSync(pathFile, 'utf-8');
  }
  if (process.env.ELECTRON_OVERRIDE_DIST_PATH) {
    return path.join(process.env.ELECTRON_OVERRIDE_DIST_PATH, executablePath || 'electron');
  }
  if (executablePath) {
    return path.join(__dirname, 'dist', executablePath);
  } else {
    throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
  }
}

module.exports = getElectronPath();

return module.exports;
}; /** end module: /../../../node_modules/electron/index.js */

/** module: /../../../node_modules/electron/package.json */
_enpakiModules['/../../../node_modules/electron/package.json'] = function (exports, require, module, __filename, __dirname) {
module.exports = {
  "_from": "electron@^14.0.0",
  "_id": "electron@14.0.1",
  "_inBundle": false,
  "_integrity": "sha512-1XILvfE5mQEBz5L/QeNfcwC3PxAIjwMyA3GR8Naw5C0IKAnHl3lAdjczbtGX8nqbcEpOAVo+4TMSpcPD3zxe8Q==",
  "_location": "/electron",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "electron@^14.0.0",
    "name": "electron",
    "escapedName": "electron",
    "rawSpec": "^14.0.0",
    "saveSpec": null,
    "fetchSpec": "^14.0.0"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/electron/-/electron-14.0.1.tgz",
  "_shasum": "967da47895a77a9af8a7938e9266cd4a75ab24c4",
  "_spec": "electron@^14.0.0",
  "_where": "/Users/abdel/coding/typescript-bot-base",
  "author": {
    "name": "Electron Community"
  },
  "bin": {
    "electron": "cli.js"
  },
  "bugs": {
    "url": "https://github.com/electron/electron/issues"
  },
  "bundleDependencies": false,
  "dependencies": {
    "@electron/get": "^1.0.1",
    "@types/node": "^14.6.2",
    "extract-zip": "^1.0.3"
  },
  "deprecated": false,
  "description": "Build cross platform desktop apps with JavaScript, HTML, and CSS",
  "engines": {
    "node": ">= 8.6"
  },
  "homepage": "https://github.com/electron/electron#readme",
  "keywords": [
    "electron"
  ],
  "license": "MIT",
  "main": "index.js",
  "name": "electron",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/electron/electron.git"
  },
  "scripts": {
    "postinstall": "node install.js"
  },
  "types": "electron.d.ts",
  "version": "14.0.1"
}
;
return module.exports;
}; /** end module: /../../../node_modules/electron/package.json */

/** module: /../../../node_modules/uuid/dist/index.js */
_enpakiModules['/../../../node_modules/uuid/dist/index.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});

var _v = _interopRequireDefault(require("./v1.js"));

var _v2 = _interopRequireDefault(require("./v3.js"));

var _v3 = _interopRequireDefault(require("./v4.js"));

var _v4 = _interopRequireDefault(require("./v5.js"));

var _nil = _interopRequireDefault(require("./nil.js"));

var _version = _interopRequireDefault(require("./version.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/index.js */

/** module: /../../../node_modules/uuid/package.json */
_enpakiModules['/../../../node_modules/uuid/package.json'] = function (exports, require, module, __filename, __dirname) {
module.exports = {
  "_from": "uuid@^8.3.2",
  "_id": "uuid@8.3.2",
  "_inBundle": false,
  "_integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
  "_location": "/uuid",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "uuid@^8.3.2",
    "name": "uuid",
    "escapedName": "uuid",
    "rawSpec": "^8.3.2",
    "saveSpec": null,
    "fetchSpec": "^8.3.2"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
  "_shasum": "80d5b5ced271bb9af6c445f21a1a04c606cefbe2",
  "_spec": "uuid@^8.3.2",
  "_where": "/Users/abdel/coding/typescript-bot-base",
  "bin": {
    "uuid": "dist/bin/uuid"
  },
  "browser": {
    "./dist/md5.js": "./dist/md5-browser.js",
    "./dist/rng.js": "./dist/rng-browser.js",
    "./dist/sha1.js": "./dist/sha1-browser.js",
    "./dist/esm-node/index.js": "./dist/esm-browser/index.js"
  },
  "bugs": {
    "url": "https://github.com/uuidjs/uuid/issues"
  },
  "bundleDependencies": false,
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "deprecated": false,
  "description": "RFC4122 (v1, v4, and v5) UUIDs",
  "devDependencies": {
    "@babel/cli": "7.11.6",
    "@babel/core": "7.11.6",
    "@babel/preset-env": "7.11.5",
    "@commitlint/cli": "11.0.0",
    "@commitlint/config-conventional": "11.0.0",
    "@rollup/plugin-node-resolve": "9.0.0",
    "babel-eslint": "10.1.0",
    "bundlewatch": "0.3.1",
    "eslint": "7.10.0",
    "eslint-config-prettier": "6.12.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-prettier": "3.1.4",
    "eslint-plugin-promise": "4.2.1",
    "eslint-plugin-standard": "4.0.1",
    "husky": "4.3.0",
    "jest": "25.5.4",
    "lint-staged": "10.4.0",
    "npm-run-all": "4.1.5",
    "optional-dev-dependency": "2.0.1",
    "prettier": "2.1.2",
    "random-seed": "0.3.0",
    "rollup": "2.28.2",
    "rollup-plugin-terser": "7.0.2",
    "runmd": "1.3.2",
    "standard-version": "9.0.0"
  },
  "exports": {
    ".": {
      "node": {
        "module": "./dist/esm-node/index.js",
        "require": "./dist/index.js",
        "import": "./wrapper.mjs"
      },
      "default": "./dist/esm-browser/index.js"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "LICENSE.md",
    "README.md",
    "dist",
    "wrapper.mjs"
  ],
  "homepage": "https://github.com/uuidjs/uuid#readme",
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "keywords": [
    "uuid",
    "guid",
    "rfc4122"
  ],
  "license": "MIT",
  "lint-staged": {
    "*.{js,jsx,json,md}": [
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix"
    ]
  },
  "main": "./dist/index.js",
  "module": "./dist/esm-node/index.js",
  "name": "uuid",
  "optionalDevDependencies": {
    "@wdio/browserstack-service": "6.4.0",
    "@wdio/cli": "6.4.0",
    "@wdio/jasmine-framework": "6.4.0",
    "@wdio/local-runner": "6.4.0",
    "@wdio/spec-reporter": "6.4.0",
    "@wdio/static-server-service": "6.4.0",
    "@wdio/sync": "6.4.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uuidjs/uuid.git"
  },
  "scripts": {
    "build": "./scripts/build.sh",
    "bundlewatch": "npm run pretest:browser && bundlewatch --config bundlewatch.config.json",
    "docs": "( node --version | grep -q 'v12' ) && ( npm run build && runmd --output=README.md README_js.md )",
    "docs:diff": "npm run docs && git diff --quiet README.md",
    "eslint:check": "eslint src/ test/ examples/ *.js",
    "eslint:fix": "eslint --fix src/ test/ examples/ *.js",
    "examples:browser:rollup:build": "cd examples/browser-rollup && npm install && npm run build",
    "examples:browser:webpack:build": "cd examples/browser-webpack && npm install && npm run build",
    "examples:node:commonjs:test": "cd examples/node-commonjs && npm install && npm test",
    "examples:node:esmodules:test": "cd examples/node-esmodules && npm install && npm test",
    "lint": "npm run eslint:check && npm run prettier:check",
    "md": "runmd --watch --output=README.md README_js.md",
    "prepack": "npm run build",
    "pretest": "[ -n $CI ] || npm run build",
    "pretest:benchmark": "npm run build",
    "pretest:browser": "optional-dev-dependency && npm run build && npm-run-all --parallel examples:browser:**",
    "pretest:node": "npm run build",
    "prettier:check": "prettier --ignore-path .prettierignore --check '**/*.{js,jsx,json,md}'",
    "prettier:fix": "prettier --ignore-path .prettierignore --write '**/*.{js,jsx,json,md}'",
    "release": "standard-version --no-verify",
    "test": "BABEL_ENV=commonjs node --throw-deprecation node_modules/.bin/jest test/unit/",
    "test:benchmark": "cd examples/benchmark && npm install && npm test",
    "test:browser": "wdio run ./wdio.conf.js",
    "test:node": "npm-run-all --parallel examples:node:**",
    "test:pack": "./scripts/testpack.sh"
  },
  "sideEffects": false,
  "standard-version": {
    "scripts": {
      "postchangelog": "prettier --write CHANGELOG.md"
    }
  },
  "version": "8.3.2"
}
;
return module.exports;
}; /** end module: /../../../node_modules/uuid/package.json */

/** module: /../../../node_modules/uuid/dist/v1.js */
_enpakiModules['/../../../node_modules/uuid/dist/v1.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/v1.js */

/** module: /../../../node_modules/uuid/dist/v3.js */
_enpakiModules['/../../../node_modules/uuid/dist/v3.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _md = _interopRequireDefault(require("./md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/v3.js */

/** module: /../../../node_modules/uuid/dist/v4.js */
_enpakiModules['/../../../node_modules/uuid/dist/v4.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/v4.js */

/** module: /../../../node_modules/uuid/dist/v5.js */
_enpakiModules['/../../../node_modules/uuid/dist/v5.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _sha = _interopRequireDefault(require("./sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/v5.js */

/** module: /../../../node_modules/uuid/dist/nil.js */
_enpakiModules['/../../../node_modules/uuid/dist/nil.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/nil.js */

/** module: /../../../node_modules/uuid/dist/version.js */
_enpakiModules['/../../../node_modules/uuid/dist/version.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/version.js */

/** module: /../../../node_modules/uuid/dist/validate.js */
_enpakiModules['/../../../node_modules/uuid/dist/validate.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(require("./regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/validate.js */

/** module: /../../../node_modules/uuid/dist/stringify.js */
_enpakiModules['/../../../node_modules/uuid/dist/stringify.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/stringify.js */

/** module: /../../../node_modules/uuid/dist/parse.js */
_enpakiModules['/../../../node_modules/uuid/dist/parse.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/parse.js */

/** module: /../../../node_modules/uuid/dist/rng.js */
_enpakiModules['/../../../node_modules/uuid/dist/rng.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/rng.js */

/** module: /../../../node_modules/uuid/package.json */
_enpakiModules['/../../../node_modules/uuid/package.json'] = function (exports, require, module, __filename, __dirname) {
module.exports = {
  "_from": "uuid@^8.3.2",
  "_id": "uuid@8.3.2",
  "_inBundle": false,
  "_integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
  "_location": "/uuid",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "uuid@^8.3.2",
    "name": "uuid",
    "escapedName": "uuid",
    "rawSpec": "^8.3.2",
    "saveSpec": null,
    "fetchSpec": "^8.3.2"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
  "_shasum": "80d5b5ced271bb9af6c445f21a1a04c606cefbe2",
  "_spec": "uuid@^8.3.2",
  "_where": "/Users/abdel/coding/typescript-bot-base",
  "bin": {
    "uuid": "dist/bin/uuid"
  },
  "browser": {
    "./dist/md5.js": "./dist/md5-browser.js",
    "./dist/rng.js": "./dist/rng-browser.js",
    "./dist/sha1.js": "./dist/sha1-browser.js",
    "./dist/esm-node/index.js": "./dist/esm-browser/index.js"
  },
  "bugs": {
    "url": "https://github.com/uuidjs/uuid/issues"
  },
  "bundleDependencies": false,
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "deprecated": false,
  "description": "RFC4122 (v1, v4, and v5) UUIDs",
  "devDependencies": {
    "@babel/cli": "7.11.6",
    "@babel/core": "7.11.6",
    "@babel/preset-env": "7.11.5",
    "@commitlint/cli": "11.0.0",
    "@commitlint/config-conventional": "11.0.0",
    "@rollup/plugin-node-resolve": "9.0.0",
    "babel-eslint": "10.1.0",
    "bundlewatch": "0.3.1",
    "eslint": "7.10.0",
    "eslint-config-prettier": "6.12.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-prettier": "3.1.4",
    "eslint-plugin-promise": "4.2.1",
    "eslint-plugin-standard": "4.0.1",
    "husky": "4.3.0",
    "jest": "25.5.4",
    "lint-staged": "10.4.0",
    "npm-run-all": "4.1.5",
    "optional-dev-dependency": "2.0.1",
    "prettier": "2.1.2",
    "random-seed": "0.3.0",
    "rollup": "2.28.2",
    "rollup-plugin-terser": "7.0.2",
    "runmd": "1.3.2",
    "standard-version": "9.0.0"
  },
  "exports": {
    ".": {
      "node": {
        "module": "./dist/esm-node/index.js",
        "require": "./dist/index.js",
        "import": "./wrapper.mjs"
      },
      "default": "./dist/esm-browser/index.js"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "LICENSE.md",
    "README.md",
    "dist",
    "wrapper.mjs"
  ],
  "homepage": "https://github.com/uuidjs/uuid#readme",
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "keywords": [
    "uuid",
    "guid",
    "rfc4122"
  ],
  "license": "MIT",
  "lint-staged": {
    "*.{js,jsx,json,md}": [
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix"
    ]
  },
  "main": "./dist/index.js",
  "module": "./dist/esm-node/index.js",
  "name": "uuid",
  "optionalDevDependencies": {
    "@wdio/browserstack-service": "6.4.0",
    "@wdio/cli": "6.4.0",
    "@wdio/jasmine-framework": "6.4.0",
    "@wdio/local-runner": "6.4.0",
    "@wdio/spec-reporter": "6.4.0",
    "@wdio/static-server-service": "6.4.0",
    "@wdio/sync": "6.4.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uuidjs/uuid.git"
  },
  "scripts": {
    "build": "./scripts/build.sh",
    "bundlewatch": "npm run pretest:browser && bundlewatch --config bundlewatch.config.json",
    "docs": "( node --version | grep -q 'v12' ) && ( npm run build && runmd --output=README.md README_js.md )",
    "docs:diff": "npm run docs && git diff --quiet README.md",
    "eslint:check": "eslint src/ test/ examples/ *.js",
    "eslint:fix": "eslint --fix src/ test/ examples/ *.js",
    "examples:browser:rollup:build": "cd examples/browser-rollup && npm install && npm run build",
    "examples:browser:webpack:build": "cd examples/browser-webpack && npm install && npm run build",
    "examples:node:commonjs:test": "cd examples/node-commonjs && npm install && npm test",
    "examples:node:esmodules:test": "cd examples/node-esmodules && npm install && npm test",
    "lint": "npm run eslint:check && npm run prettier:check",
    "md": "runmd --watch --output=README.md README_js.md",
    "prepack": "npm run build",
    "pretest": "[ -n $CI ] || npm run build",
    "pretest:benchmark": "npm run build",
    "pretest:browser": "optional-dev-dependency && npm run build && npm-run-all --parallel examples:browser:**",
    "pretest:node": "npm run build",
    "prettier:check": "prettier --ignore-path .prettierignore --check '**/*.{js,jsx,json,md}'",
    "prettier:fix": "prettier --ignore-path .prettierignore --write '**/*.{js,jsx,json,md}'",
    "release": "standard-version --no-verify",
    "test": "BABEL_ENV=commonjs node --throw-deprecation node_modules/.bin/jest test/unit/",
    "test:benchmark": "cd examples/benchmark && npm install && npm test",
    "test:browser": "wdio run ./wdio.conf.js",
    "test:node": "npm-run-all --parallel examples:node:**",
    "test:pack": "./scripts/testpack.sh"
  },
  "sideEffects": false,
  "standard-version": {
    "scripts": {
      "postchangelog": "prettier --write CHANGELOG.md"
    }
  },
  "version": "8.3.2"
}
;
return module.exports;
}; /** end module: /../../../node_modules/uuid/package.json */

/** module: /../../../node_modules/uuid/dist/v35.js */
_enpakiModules['/../../../node_modules/uuid/dist/v35.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/v35.js */

/** module: /../../../node_modules/uuid/dist/md5.js */
_enpakiModules['/../../../node_modules/uuid/dist/md5.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/md5.js */

/** module: /../../../node_modules/uuid/dist/sha1.js */
_enpakiModules['/../../../node_modules/uuid/dist/sha1.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/sha1.js */

/** module: /../../../node_modules/uuid/dist/regex.js */
_enpakiModules['/../../../node_modules/uuid/dist/regex.js'] = function (exports, require, module, __filename, __dirname) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
return module.exports;
}; /** end module: /../../../node_modules/uuid/dist/regex.js */


function isFile(filename) {
  return !!_enpakiModules[filename];
}

function locate(modulePath, directory = process.cwd()) {

  if (isCore(modulePath)) {
    return modulePath;
  }

  directory = path.resolve(directory);

  var candidateList = candidateFiles(path.join(directory, modulePath));

  if (!['.', path.sep].includes(modulePath[0])) {
    candidateList = candidateList.concat(makeFlat(nodeModulesFolders(modulePath, directory).map(candidateFiles)));
  }

  for (var filename of candidateList) {
    if (isFile(filename)) {
      return filename;
    }
  }

  throw new Error(`Cannot find module '${modulePath}' from '${directory}'`);
}

function isCore(modulePath) {
  try {
    return require.resolve(modulePath).indexOf(path.sep) === -1;
  } catch (error) {
    return false;
  }
}

function nodeModulesFolders(moduleName, directory) {

  if (['.', path.sep].includes(moduleName[0])) {
    throw new Error('module name must NOT start with "." nor "/"');
  }
  if (!path.isAbsolute(directory)) {
    throw new Error('directory must be absolute');
  }

  var list = [];

  while (directory !== BUNDLE_ROOT) {
    list.push(path.join(directory, 'node_modules', moduleName));
    directory = path.dirname(directory);
  }

  list.push(path.join(`${BUNDLE_ROOT}node_modules`, moduleName));

  return list;
}

function candidateFiles(modulePath) {

  if (!path.isAbsolute(modulePath)) {
    throw new Error('module path must be absolute');
  }

  var extensions = Object.keys(require.extensions)
    .filter(ext => ext !== '.node');

  var asFileList = ['']
    .concat(extensions)
    .map(ext => path.join(modulePath + ext));

    var pkgMain = [];
    var pkgFile = path.join(modulePath, 'package.json');
  
    if (isFile(pkgFile)) {
      try {
        var pkg = __require(BUNDLE_ROOT, pkgFile);
        if (pkg.main) {
          pkgMain = extensions.map(ext => path.join(modulePath, pkg.main + ext));
          pkgMain.push(path.join(modulePath, pkg.main));
        }
      } catch (error) { }
    }

  var asFolderList = extensions.map(ext => path.join(modulePath, 'index' + ext));

  return asFileList.concat(pkgMain).concat(asFolderList);
}

function makeFlat(arraysList) {
  return arraysList.reduce((a, b) => a.concat(b), []);
}

function __require(moduleParent, moduleName) {

  if (isCore(moduleName)) {
    return require(moduleName);
  }

  var basedir = path.dirname(moduleParent);

  if (moduleName.endsWith('package.json')) {
    moduleName = path.join(basedir, moduleName);
  } else {
    try {
      moduleName = locate(moduleName, basedir);
    } catch (error) { }
  }

  if (_enpakiModules[moduleName] && _enpakiModules[moduleName].call) {
    if (!_enpakiCache[moduleName]) {
      _enpakiCache[moduleName] = {
        exports: {},
        loaded: false
      };
      if (moduleName === '/footsites.js' && typeof require === 'function') {
        require.main = _enpakiCache['/footsites.js'];
      } else {
        _enpakiCache[moduleName].parent = _enpakiCache[moduleParent];
      }
      _enpakiModules[moduleName].call(this, _enpakiCache[moduleName].exports, __require.bind(__require, moduleName), _enpakiCache[moduleName], _fix_filename(moduleName), _fix_dirname(moduleName));
      _enpakiCache[moduleName].loaded = true;
    }
    return _enpakiCache[moduleName].exports;
  } else {
    return require(moduleName);
  }
}

function _fix_filename(filename) {
  return path.resolve(__dirname, filename.slice(1));
}

function _fix_dirname(dirname) {
  return path.resolve(__dirname, dirname.slice(1), '/../');
}

if (typeof module === 'object') {
  module.exports = __require(BUNDLE_ROOT, '/footsites.js');
} else {
  return __require(BUNDLE_ROOT, '/footsites.js');
}
}());
/** end of bundle */
