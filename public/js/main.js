/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const wrapper = document.querySelector(\".sofa_wrapper\")\r\n\r\nasync function getList() {\r\n    let list = `/public/list.json`\r\n    const res = await fetch(list)\r\n    const data = await res.json()\r\n    return data\r\n}\r\n\r\nasync function render_cards() {\r\n    let list = await getList()\r\n    for(let i = 0; i<list.length; i++) {\r\n        wrapper.innerHTML += `<div><div></div><h3>${list[i].type} ${list[i].name}</h3><p>${list[i].price}</p><button>Купить</button></div>`\r\n    }\r\n    wrapper.childNodes.forEach(el => el.classList.add('sofa_card'))\r\n    wrapper.childNodes.forEach((el, index) => {\r\n        let img = el.childNodes[0]\r\n        let h3 = el.childNodes[1]\r\n        let p = el.childNodes[2]\r\n        let btn = el.childNodes[3]\r\n        img.style.background = `center/contain no-repeat url(${list[index].picture})`\r\n        img.classList.add('sofa_card_img')\r\n        h3.classList.add('sofa_card_title')\r\n        p.classList.add('sofa_card_subtitle')\r\n        btn.classList.add('sofa_card_btn')\r\n    })\r\n}\r\n\r\nrender_cards()\n\n//# sourceURL=webpack://diplom_page/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;