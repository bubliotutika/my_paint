/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/class/gui.js":
/*!**************************!*\
  !*** ./src/class/gui.js ***!
  \**************************/
/*! exports provided: Gui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gui\", function() { return Gui; });\nclass Gui {\n    \n    constructor() {\n        this.gui = document.getElementById('gui');\n        this.btnBoxContainer = document.getElementById('btn-box-container');\n        this.colorBox = document.getElementById('color-box');\n        this.sizeBox = document.getElementById('size-box');\n        this.saveBox = document.getElementById('save-box');\n        this.btnName = ['pencil', 'eraser', 'line', 'rectangle', 'circle'];\n        this.btnIcon = ['<i class=\"fas fa-pencil-alt\" title=\"pencil\"></i>', \n            '<i class=\"fas fa-eraser\" title=\"eraser\"></i>',\n            '<i class=\"fas fa-grip-lines\" title=\"line\"></i>', \n            '<i class=\"far fa-square\" title=\"rectangle\"></i>',\n            '<i class=\"far fa-circle\" title=\"circle\"></i>'];\n    }\n\n    generateGuiBtn() {\n        for (let i = 0; i < this.btnName.length; ++i) {\n            this.btnBoxContainer.insertAdjacentHTML(\n                'beforeend', \n                `<button class=\"gui-btn\" id=\"gui-btn-${this.btnName[i]}\" \n                    title=\"${this.btnName[i]}\">\n                        ${this.btnIcon[i]}\n                </button>`);\n        }\n        this.btnBoxContainer.insertAdjacentHTML('beforeend', `<p>Fill: <input type=\"checkbox\" id=\"fill-box\"></p>`);\n    }\n\n    generateGuiSizeBar() {\n        this.sizeBox.innerHTML = `\n            <h3>Size</h3>\n            <input type=\"number\" id=\"line-width\" value=\"5\">\n        `;\n    }\n\n    generateGuiColor() {\n        this.colorBox.innerHTML = `\n            <h3>Color</h3>\n            <button class=\"gui-btn\" id=\"color-btn\"> <i class=\"fas fa-palette\"></i></button>\n            <input type=\"color\" id=\"color-picker\">\n        `;\n    }\n\n    generateGuiSave() {\n        this.saveBox.innerHTML = `\n            <h3>Export / Import</h3>\n            <div>\n                <a class=\"gui-btn\" id=\"export-btn\"><i class=\"fas fa-download\"></i></a>\n                <button class=\"gui-btn\" id=\"import-btn\"><i class=\"fas fa-upload\"></i></button>\n            </div>\n            <input type=\"file\" id=\"import-field\" accept=\".jpg,.jpeg,.png\">\n        `;\n    }\n\n    init() {\n        this.generateGuiBtn();\n        this.generateGuiSizeBar();\n        this.generateGuiColor();\n        this.generateGuiSave();\n    }\n}\n\n//# sourceURL=webpack:///./src/class/gui.js?");

/***/ }),

/***/ "./src/class/paint.js":
/*!****************************!*\
  !*** ./src/class/paint.js ***!
  \****************************/
/*! exports provided: MyPaint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyPaint\", function() { return MyPaint; });\n/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui */ \"./src/class/gui.js\");\n/* harmony import */ var _workspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workspace */ \"./src/class/workspace.js\");\n\n\n\nclass MyPaint {\n    constructor(element) {\n        this.renderElt = element;\n        this.color = '#000000';\n        this.lineWidth = 5;\n        this.fill = false;\n    }\n\n    createBoard() {\n        this.renderElt.innerHTML = `\n            <div id=\"gui\">\n                <div id=\"btn-box\">\n                    <h3>Menu</h3>\n                    <p id=\"current-action\"></p>\n                    <div id=\"btn-box-container\"></div>\n                </div>\n                <div id=\"size-box\"></div>\n                <div id=\"color-box\"></div>\n                <div id=\"save-box\"></div>\n            </div>\n            <div id=\"workspace\"></div>\n            `;\n        this.workspace = new _workspace__WEBPACK_IMPORTED_MODULE_1__[\"Workspace\"]();\n        this.gui = new _gui__WEBPACK_IMPORTED_MODULE_0__[\"Gui\"]();\n    }\n\n    pencil() {\n        this.ctx.lineJoin = \"round\";\n        this.ctx.lineCap = \"round\";\n        this.ctx.moveTo(this.oldPosX, this.oldPosY);\n        this.ctx.lineTo(this.posX, this.posY);\n        this.ctx.stroke();\n    }\n\n    eraser() {\n        this.ctx.lineJoin = \"round\";\n        this.ctx.lineCap = \"round\";\n        this.ctx.moveTo(this.oldPosX, this.oldPosY);\n        this.ctx.lineTo(this.posX, this.posY);\n        this.ctx.stroke();\n    }\n\n    rectangle() {\n        if (this.fill)\n            this.ctx.fillRect(this.oldPosX, this.oldPosY, (this.posX - this.oldPosX), (this.posY - this.oldPosY));\n        else\n            this.ctx.strokeRect(this.oldPosX, this.oldPosY, (this.posX - this.oldPosX), (this.posY - this.oldPosY));\n    }\n\n    circle() {\n        const rx = Math.pow(this.posX - this.oldPosX, 2);\n        const ry = Math.pow(this.posY - this.oldPosY, 2);\n        this.ctx.arc(this.oldPosX, this.oldPosY, Math.sqrt(rx + ry) , 0, 360);\n        if (this.fill)\n            this.ctx.fill();\n        else\n            this.ctx.stroke();\n    }\n\n    line() {\n        this.ctx.moveTo(this.oldPosX, this.oldPosY);\n        this.ctx.lineTo(this.posX, this.posY);\n        this.ctx.stroke();\n    }\n\n    init() {\n        this.createBoard();\n        this.gui.init();\n        this.workspace.init();\n    };\n\n    action(params) {\n        this.ctx = params.ctx;\n        this.posX = params.posX;\n        this.posY = params.posY;\n        this.oldPosX = params.oldPosX;\n        this.oldPosY = params.oldPosY;\n        this.ctx.beginPath();\n        \n        this.ctx.lineWidth = this.lineWidth;\n        this.ctx.strokeStyle = this.color;\n        this.ctx.fillStyle = this.color;\n\n        if (params.action === \"eraser\")\n            this.ctx.globalCompositeOperation = \"destination-out\";\n        else\n            this.ctx.globalCompositeOperation = \"source-over\";\n\n        this[params.action]();\n    }\n\n    setLineWidth(value) {\n        this.lineWidth = value;\n    }\n\n    setColor(value) {\n        this.color = value;\n    }\n\n    setFill(value) {\n        this.fill = value;\n    }\n}\n\n//# sourceURL=webpack:///./src/class/paint.js?");

/***/ }),

/***/ "./src/class/workspace.js":
/*!********************************!*\
  !*** ./src/class/workspace.js ***!
  \********************************/
/*! exports provided: Workspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Workspace\", function() { return Workspace; });\nclass Workspace {\n    constructor()\n    {\n        this.workspace = document.getElementById('workspace');\n    }\n\n    createWorkspace()\n    {\n        this.workspace.innerHTML = `<canvas id=\"workspace-board\"></canvas>`;\n    }\n\n    init()\n    {\n        this.createWorkspace();\n    }\n}\n\n//# sourceURL=webpack:///./src/class/workspace.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_paint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/paint */ \"./src/class/paint.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const myPaint = new _class_paint__WEBPACK_IMPORTED_MODULE_0__[\"MyPaint\"](document.getElementById('app'));\n    myPaint.init();\n\n    const workspaceBoard = document.getElementById('workspace-board');\n    let workspaceBoardRect = workspaceBoard.getBoundingClientRect();\n    let exportBtn = document.getElementById('export-btn');\n    let posY = 0, posX = 0, oldPosY = 0, oldPosX = 0, action = null;\n    const ctx = workspaceBoard.getContext('2d');\n    ctx.canvas.height = workspaceBoardRect.height;\n    ctx.canvas.width = workspaceBoardRect.width;\n\n    function emitImg(src) {\n        roomSocket.emit('update workspace', { roomId ,src });\n    }\n\n    roomSocket.on('update workspace', function(src) {\n        importImg(src);\n    });\n\n    function mouseDown(e) {\n        e = e || window.event;\n        posX = Math.floor(e.clientX - workspaceBoardRect.x);\n        posY = Math.floor(e.clientY - workspaceBoardRect.y);\n        document.onmouseup = mouseUp;\n        document.onmousemove = updateMouseCoord;\n    };\n\n    function mouseUp(e) {\n        document.onmouseup = null;\n        document.onmousemove = null;\n        if (action === \"rectangle\" || action === \"circle\" || action === \"line\") {\n            callAction(e);\n            exportImg();\n            emitImg(exportBtn.href);\n        }\n    };\n\n    function updateMouseCoord(e) {\n        e = e || window.event;\n        workspaceBoardRect = workspaceBoard.getBoundingClientRect();\n        hitbox(e);\n        if (action === \"pencil\" || action === \"eraser\") {\n            callAction(e);\n            exportImg();\n            emitImg(exportBtn.href);\n        }\n    };\n\n    function callAction(e) {\n        oldPosX = posX;\n        oldPosY = posY;\n        posX = Math.floor(e.clientX - workspaceBoardRect.x);\n        posY = Math.floor(e.clientY - workspaceBoardRect.y);\n        myPaint.action({ action, ctx, posX, posY, oldPosX, oldPosY });\n    }\n\n    function hitbox(e) {\n        if (posY < 0)\n            posY = 0;\n        if (posY > Math.floor(workspaceBoardRect.height))\n            posY = Math.floor((workspaceBoardRect.height));\n        if (posX < 0)\n            posX = 0;\n        if (posX > Math.floor(workspaceBoardRect.width))\n            posX = Math.floor(workspaceBoardRect.width);\n    };\n\n    function exportImg() {\n        exportBtn.setAttribute('download', 'MyCanvas.png');\n        exportBtn.setAttribute('href', workspaceBoard.toDataURL(\"image/png\"));\n    }\n\n    function importImg(src) {\n        const img = new Image();\n        img.src = src;\n        img.onload = function() {\n            ctx.drawImage(img, 0, 0);\n        };\n    }\n\n    const btn = document.getElementsByTagName('button');\n    for (let i = 0; i < btn.length; ++i) {\n        if (btn[i].title){\n            btn[i].addEventListener('click', function() {\n                action = this.title;\n                document.getElementById('current-action').innerText = `Current tool: ${action}`\n            });\n        }\n    };\n\n    document.getElementById('line-width').addEventListener('change', function() {\n        myPaint.setLineWidth(this.value);\n    });\n\n    document.getElementById('color-btn').addEventListener('click', function() {\n        document.getElementById('color-picker').click();\n    });\n\n    document.getElementById('color-picker').addEventListener('change', function() {\n        document.getElementById('color-btn').style.borderColor = this.value;\n        document.getElementById('color-btn').style.color = this.value;\n        myPaint.setColor(this.value);\n    });\n\n    document.getElementById('fill-box').addEventListener('change', function() {\n        myPaint.setFill(this.checked);\n    });\n\n    document.getElementById('import-btn').addEventListener('click', function() {\n        document.getElementById('import-field').click();\n    });\n\n    document.getElementById('import-field').addEventListener('change', function () {\n        importImg(window.URL.createObjectURL(this.files[0]));\n    });\n\n    window.onresize = function() {\n        workspaceBoardRect = workspaceBoard.getBoundingClientRect();\n        ctx.canvas.height = workspaceBoardRect.height;\n        ctx.canvas.width = workspaceBoardRect.width;\n        importImg(exportBtn.href);\n    };\n\n    workspaceBoard.onmousedown = mouseDown;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });