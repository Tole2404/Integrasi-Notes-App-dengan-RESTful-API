/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/archive-note.png */ \"./src/img/archive-note.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/recovery-note.png */ \"./src/img/recovery-note.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons-delete.png */ \"./src/img/icons-delete.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-font: \"Montserrat\", sans-serif;\n  --secondary-font: \"Lora\", sans-serif;\n  --dancing-font: \"Dancing Script\", cursive;\n  --bg-primary: #d49d1c;\n  --bg-second: #e6953e;\n  --white-color: #fff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: var(--primary-font);\n  font-size: 18px;\n}\n\nh2 {\n  font-family: var(--secondary-font);\n}\n\n.text-center {\n  text-align: center;\n  padding: 10px;\n}\n\n.filter-notes {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n#filterNotes {\n  color: #211951;\n  width: 500px;\n  padding: 15px 30px;\n  font-size: 1.2rem;\n  margin-top: 20px;\n  background-color: white;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 0px;\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\n  display: block;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n#filterNotes:hover,\n#filterNotes:focus-visible {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\nlabel {\n  display: block;\n}\n\nsection > .title-section {\n  margin-block-end: 2rem;\n\n  font-size: 1.2em;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--bg-primary);\n  border-radius: 0 0 100px;\n  height: 520px;\n}\n\n.wrapper .container {\n  width: 1024px;\n  height: 490px;\n  border-radius: 8px;\n  background: #fff;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  border-radius: 16px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group label {\n  margin-bottom: 4px;\n  font-size: 20px;\n  color: #000;\n}\n\ninput[type=\"text\"],\ntextarea {\n  font-family: var(--primary-font);\n  background: var(--bg-second);\n  border: none;\n  border-radius: 8px;\n  padding: 16px;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  font-size: 24px;\n}\n\n.btn-submit {\n  width: fit-content;\n  font-family: var(--primary-font);\n  border-radius: 15px;\n  padding: 12px 24px;\n  background: var(--bg-primary);\n  border: none;\n  color: var(--white-color);\n  font-size: 24px;\n  margin-top: auto;\n  cursor: pointer;\n}\n\n.btn-submit:hover {\n  background-color: var(--white-color);\n  color: var(--bg-primary);\n}\n\ninput[type=\"text\"],\ntextarea,\n.btn-submit:focus {\n  outline: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.form-title {\n  margin: auto 0;\n}\n\nmain {\n  min-height: 100vh;\n}\n\n.listnote {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 3fr));\n  gap: 20px;\n  padding: 20px;\n  transition: transform 0.3s ease;\n}\n.card {\n  background-image: radial-gradient(circle, #d49d1c, #f8e71c);\n  padding: 20px;\n}\n\n.card:hover,\n.card:focus-visible {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.card h2 {\n  margin-bottom: 10px;\n}\n\n.card p {\n  margin-bottom: 10px;\n}\n\n.title-note h2,\n.body-note p {\n  word-wrap: break-word;\n  margin-bottom: 200px;\n}\n.title-note {\n  padding: 300px;\n}\n.body-note {\n  padding: 20px;\n}\n\n.loading-spinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  z-index: 9999;\n}\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #cf9421;\n  animation: spin 3s linear infinite;\n}\n\n.action > .button-archived {\n  width: 40px;\n  height: 40px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: contain;\n  margin-left: auto;\n  cursor: pointer;\n  border: none;\n}\n\n.action > .button-recovery-note {\n  width: 40px;\n  height: 40px;\n\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: contain;\n  margin-left: auto;\n  cursor: pointer;\n  border: none;\n}\n\n.action > .button-delete {\n  width: 40px;\n  height: 40px;\n\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: contain;\n  margin-left: auto;\n  cursor: pointer;\n  border: none;\n}\n\n@keyframes spin {\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  main {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n  .wrapper {\n    margin: 0;\n  }\n\n  .wrapper .container {\n    width: 100%;\n  }\n\n  .list-item {\n    width: 90%;\n  }\n\n  .wrapper {\n    border-radius: none;\n    height: 490px;\n  }\n  .wrapper .container {\n    border-radius: 10px 10px 0 0;\n  }\n}\n\n@media screen and (max-width: 821px) {\n  .search-form .form-group {\n    width: 500px;\n  }\n  .wrapper {\n    border-radius: none;\n    height: 490px;\n  }\n  .wrapper .container {\n    border-radius: 10px 10px 0 0;\n  }\n}\n\n@media screen and (max-width: 621px) {\n  .search-form .form-group {\n    width: 250px;\n  }\n  #filterNotes {\n    width: 250px;\n  }\n  .search-form .form-group label {\n    font-size: 1.2rem;\n    padding: 30px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notes-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notes-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://notes-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notes-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notes-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notes-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _script_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/components/component.js */ \"./src/script/components/component.js\");\n/* harmony import */ var _script_view_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/view/main.js */ \"./src/script/view/main.js\");\n\n\n\n\n\n(0,_script_view_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://notes-app/./src/index.js?");

/***/ }),

/***/ "./src/script/components/bar.js":
/*!**************************************!*\
  !*** ./src/script/components/bar.js ***!
  \**************************************/
/***/ (() => {

eval("class Bar extends HTMLElement {\n  _shadowRoot = null;\n  _style = null;\n\n  constructor() {\n    super();\n\n    this._shadowRoot = this.attachShadow({ mode: \"open\" });\n    this._style = document.createElement(\"style\");\n  }\n\n  _updateStyle() {\n    this._style.textContent = `\n        .header-bar{\n            background-color: var(--bg-primary);\n            padding: 10px;\n            text-align: center;\n            color: var(--white-color);\n            font-family: var(--dancing-font);\n            font-size: 20px;\n        }\n      \n        `;\n  }\n\n  _emptyContent() {\n    this._shadowRoot.innerHTML = \"\";\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    this._emptyContent();\n    this._updateStyle();\n\n    this._shadowRoot.appendChild(this._style);\n    this._shadowRoot.innerHTML += `      \n          <div class=\"header-bar\">\n            <h1 class=\"title-bar\">Notes App</h1>\n          </div>\n        `;\n  }\n}\n\ncustomElements.define(\"bar-custom\", Bar);\n\n\n//# sourceURL=webpack://notes-app/./src/script/components/bar.js?");

/***/ }),

/***/ "./src/script/components/component.js":
/*!********************************************!*\
  !*** ./src/script/components/component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.js */ \"./src/script/components/bar.js\");\n/* harmony import */ var _bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/script/components/footer.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _input_note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-note.js */ \"./src/script/components/input-note.js\");\n/* harmony import */ var _input_note_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_note_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://notes-app/./src/script/components/component.js?");

/***/ }),

/***/ "./src/script/components/footer.js":
/*!*****************************************!*\
  !*** ./src/script/components/footer.js ***!
  \*****************************************/
/***/ (() => {

eval("class Footer extends HTMLElement {\n  _shadowRoot = null;\n  _style = null;\n\n  constructor() {\n    super();\n\n    this._shadowRoot = this.attachShadow({ mode: \"open\" });\n    this._style = document.createElement(\"style\");\n  }\n\n  _updateStyle() {\n    this._style.textContent = `\n            .footer-custom {\n                background-color: var(--bg-primary);\n                padding: 10px;\n                text-align: center;\n                color: var(--white-color);\n            }\n        \n          `;\n  }\n\n  _emptyContent() {\n    this._shadowRoot.innerHTML = \"\";\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    this._emptyContent();\n    this._updateStyle();\n\n    this._shadowRoot.appendChild(this._style);\n    this._shadowRoot.innerHTML += `      \n            <div class=\"footer-custom\">\n                <p>Tunggul Bayu Kusuma | Notes App ${new Date().getFullYear()}.</p>\n            </div>\n          `;\n  }\n}\n\ncustomElements.define(\"footer-custom\", Footer);\n\n\n//# sourceURL=webpack://notes-app/./src/script/components/footer.js?");

/***/ }),

/***/ "./src/script/components/input-note.js":
/*!*********************************************!*\
  !*** ./src/script/components/input-note.js ***!
  \*********************************************/
/***/ (() => {

eval("class inputNote extends HTMLElement {\n  _shadowRoot = null;\n  _style = null;\n\n  constructor() {\n    super();\n\n    this._shadowRoot = this.attachShadow({ mode: \"open\" });\n    this._style = document.createElement(\"style\");\n\n    this.customValidationTitleHandler =\n      this.customValidationTitleHandler.bind(this);\n    this.customValidationBodyHandler =\n      this.customValidationBodyHandler.bind(this);\n  }\n\n  _updateStyle() {\n    this._style.textContent = `\n    .wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--bg-primary);\n        border-radius: 0 0 100px;\n        height: 450px;\n      }\n      \n      .wrapper .container {\n        width: 1024px;\n        height: 460px;\n        border-radius: 8px;\n        background: #fff;\n      }\n      \n      .form {\n        display: flex;\n        padding: 16px;\n        flex-direction: column;\n        height: 300px;\n        border-radius: 16px;\n      }\n      \n      .form-group {\n        display: flex;\n        flex-direction: column;\n      }\n      \n      .form-group label {\n        margin-bottom: 4px;\n        font-size: 20px;\n        color: #000;\n      }\n      \n      input[type=\"text\"],\n      textarea {\n        font-family: Raleway, sans-serif;\n        background: var(--bg-second);\n        border: none;\n        border-radius: 8px;\n        padding: 16px;\n        box-sizing: border-box;\n        margin-bottom: 8px;\n        font-size: 24px;\n      }\n      \n      .btn-submit {\n        width: fit-content;\n        font-family: Raleway, sans-serif;\n        border-radius: 15px;\n        padding: 12px 24px;\n        background: var(--bg-primary);\n        border: none;\n        color: var(--white-color);\n        font-size: 24px;\n        margin-top: auto;\n        cursor: pointer;\n      }\n\n      .btn-submit:hover {\n        background-color: var(--white-color);\n        color: var(--bg-primary);\n      }\n      \n      input[type=\"text\"],\n      textarea,\n      .btn-submit:focus {\n        outline: none;\n      }\n      \n      .text-center {\n        text-align: center;\n      }\n      \n      .form-title {\n        margin: auto 0;\n      }\n      \n      .search-form .form-group label {\n        font-size: 30px;\n        padding: 30px;\n      }\n  \n        `;\n  }\n\n  _emptyContent() {\n    this._shadowRoot.innerHTML = \"\";\n  }\n\n  connectedCallback() {\n    this.render();\n    this.setupEventListeners();\n  }\n\n  render() {\n    this._emptyContent();\n    this._updateStyle();\n\n    this._shadowRoot.appendChild(this._style);\n    this._shadowRoot.innerHTML += `\n        <form class=\"form\" action=\"#\" id=\"addNotes\">\n        <h2 class=\"container-header text-center\">Tambahkan Catatan</h2>\n        <div class=\"form-group form-title\">\n          <label for=\"title\">Judul:</label>\n          <input type=\"text\" id=\"title\" name=\"title\" required />\n          <p id=\"titleValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\n        </div>\n        <div class=\"form-group form-title\">\n          <label for=\"body\">Isi Catatan:</label>\n          <textarea id=\"body\" name=\"body\" rows=\"4\" cols=\"50\" spellcheck=\"false\" required></textarea>\n          <p id=\"bodyValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\n        </div>\n        <div class=\"form-group\">\n        <button type=\"submit\" name=\"Submit\" class=\"btn-submit\">SUBMIT</button>\n        </div>\n        </form>\n        `;\n\n    this._shadowRoot\n      .querySelector(\"#addNotes\")\n      .addEventListener(\"submit\", this.onSubmit.bind(this));\n  }\n\n  onSubmit(event) {\n    event.preventDefault();\n    const title = this._shadowRoot.querySelector(\"#title\").value;\n    const body = this._shadowRoot.querySelector(\"#body\").value;\n\n    const addNoteEvent = new CustomEvent(\"addNote\", {\n      detail: { title, body },\n      bubbles: true,\n      composed: true,\n    });\n    this.dispatchEvent(addNoteEvent);\n\n    this._shadowRoot.querySelector(\"#title\").value = \"\";\n    this._shadowRoot.querySelector(\"#body\").value = \"\";\n  }\n\n  setupEventListeners() {\n    const titleInput = this._shadowRoot.querySelector(\"#title\");\n    const bodyInput = this._shadowRoot.querySelector(\"#body\");\n\n    titleInput.addEventListener(\"input\", this.customValidationTitleHandler);\n    bodyInput.addEventListener(\"input\", this.customValidationBodyHandler);\n  }\n\n  customValidationTitleHandler(event) {\n    const titleInput = event.target;\n    const titleValidationMessage =\n      this._shadowRoot.querySelector(\"#titleValidation\");\n\n    if (!titleInput.value.trim()) {\n      titleValidationMessage.innerText = \"Title is required.\";\n    } else {\n      titleValidationMessage.innerText = \"\";\n    }\n  }\n\n  customValidationBodyHandler(event) {\n    const bodyInput = event.target;\n    const bodyValidationMessage =\n      this._shadowRoot.querySelector(\"#bodyValidation\");\n\n    if (!bodyInput.value.trim()) {\n      bodyValidationMessage.innerText = \"Body is required.\";\n    } else {\n      bodyValidationMessage.innerText = \"\";\n    }\n  }\n}\n\ncustomElements.define(\"input-note\", inputNote);\n\n\n//# sourceURL=webpack://notes-app/./src/script/components/input-note.js?");

/***/ }),

/***/ "./src/script/view/main.js":
/*!*********************************!*\
  !*** ./src/script/view/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main() {\n  const BASE_URL = \"https://notes-api.dicoding.dev/v2\";\n\n  const renderAllNotes = (notes) => {\n    const noteListElement = document.querySelector(\"#noteItem\");\n    noteListElement.innerHTML = \"\";\n\n    notes.forEach((note) => {\n      const noteItem = document.createElement(\"div\");\n      noteItem.classList.add(\"card\");\n\n      const titleNoteDiv = document.createElement(\"div\");\n      titleNoteDiv.classList.add(\"title-note\");\n\n      const noteTitle = document.createElement(\"h2\");\n      noteTitle.classList.add(\"note-title\");\n      noteTitle.innerText = note.title;\n\n      titleNoteDiv.appendChild(noteTitle);\n\n      const bodyNoteDiv = document.createElement(\"div\");\n      bodyNoteDiv.classList.add(\"body-note\");\n\n      const noteBody = document.createElement(\"p\");\n      noteBody.innerText = note.body;\n\n      bodyNoteDiv.appendChild(noteBody);\n\n      const buttonArchived = document.createElement(\"button\");\n      buttonArchived.setAttribute(\"type\", \"button\");\n\n      const buttonTrash = document.createElement(\"button\");\n      buttonTrash.classList.add(\"button-delete\");\n      buttonTrash.setAttribute(\"type\", \"button\");\n      buttonTrash.addEventListener(\"click\", function () {\n        const confirmation = confirm(\"Apakah Kamu ingin menghapusnya?\");\n        if (confirmation) {\n          removeNote(note.id);\n        }\n      });\n\n      if (note.archived) {\n        buttonArchived.classList.add(\"button-recovery-note\");\n        buttonArchived.addEventListener(\"click\", function () {\n          unArchiveNote(note.id);\n        });\n      } else {\n        buttonArchived.classList.add(\"button-archived\");\n        buttonArchived.addEventListener(\"click\", function () {\n          archiveNote(note.id);\n        });\n      }\n\n      const buttonContainer = document.createElement(\"div\");\n      buttonContainer.classList.add(\"action\");\n      buttonContainer.append(buttonArchived, buttonTrash);\n\n      noteItem.append(noteTitle, noteBody, buttonContainer);\n      noteListElement.appendChild(noteItem);\n    });\n  };\n\n  const addNote = async (note) => {\n    try {\n      showLoadingSpinner();\n      const options = {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(note),\n      };\n      const response = await fetch(`${BASE_URL}/notes`, options);\n      const responseJson = await response.json();\n      showResponseMessage(responseJson.message);\n      getUnArchived();\n    } catch (error) {\n      showResponseMessage(error);\n    } finally {\n      hideLoadingSpinner();\n    }\n  };\n\n  const getUnArchived = async () => {\n    try {\n      showLoadingSpinner();\n      const response = await fetch(`${BASE_URL}/notes`);\n      const responseJson = await response.json();\n\n      if (responseJson.data.length > 0) {\n        renderAllNotes(responseJson.data);\n      } else {\n        showResponseMessage(\"Note Empty\");\n        renderAllNotes(responseJson.data);\n      }\n    } catch (error) {\n      showResponseMessage(error);\n    } finally {\n      hideLoadingSpinner();\n    }\n  };\n\n  const getArchived = async () => {\n    try {\n      showLoadingSpinner();\n      const response = await fetch(`${BASE_URL}/notes/archived`);\n      const responseJson = await response.json();\n\n      if (responseJson.data.length > 0) {\n        renderAllNotes(responseJson.data);\n      } else {\n        showResponseMessage(\"Note Empty\");\n        renderAllNotes(responseJson.data);\n      }\n    } catch (error) {\n      showResponseMessage(error);\n    } finally {\n      hideLoadingSpinner();\n    }\n  };\n\n  const removeNote = (noteId) => {\n    showLoadingSpinner();\n    fetch(`${BASE_URL}/notes/${noteId}`, {\n      method: \"DELETE\",\n    })\n      .then((response) => {\n        return response.json();\n      })\n      .then((responseJson) => {\n        showResponseMessage(responseJson.message);\n        if (filterNotes.selectedIndex == 0) {\n          getUnArchived();\n        } else {\n          getArchived();\n        }\n      })\n      .catch((error) => {\n        showResponseMessage(error);\n      })\n      .finally(() => {\n        hideLoadingSpinner();\n      });\n  };\n\n  const archiveNote = async (id) => {\n    try {\n      const options = {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n      };\n      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, options);\n      const responseJson = await response.json();\n      showResponseMessage(responseJson.message);\n      getUnArchived();\n    } catch (error) {\n      showResponseMessage(error);\n    }\n  };\n\n  const unArchiveNote = async (id) => {\n    try {\n      const options = {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n      };\n      const response = await fetch(\n        `${BASE_URL}/notes/${id}/unarchive`,\n        options,\n      );\n      const responseJson = await response.json();\n      showResponseMessage(responseJson.message);\n      getArchived();\n    } catch (error) {\n      showResponseMessage(error);\n    }\n  };\n\n  const showResponseMessage = (message = \"Check your internet connection\") => {\n    alert(message);\n  };\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    getUnArchived();\n    filterNotes.selectedIndex = 0;\n  });\n\n  document.addEventListener(\"addNote\", function (event) {\n    const { title, body } = event.detail;\n\n    const newNote = {\n      title: title,\n      body: body,\n    };\n\n    addNote(newNote);\n    filterNotes.selectedIndex = 0;\n  });\n\n  const showLoadingSpinner = () => {\n    document.getElementById(\"loadingSpinner\").style.display = \"block\";\n  };\n\n  const hideLoadingSpinner = () => {\n    document.getElementById(\"loadingSpinner\").style.display = \"none\";\n  };\n\n  const filterNotes = document.getElementById(\"filterNotes\");\n\n  filterNotes.addEventListener(\"change\", function () {\n    if (filterNotes.selectedIndex == 0) {\n      getUnArchived();\n    } else {\n      getArchived();\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://notes-app/./src/script/view/main.js?");

/***/ }),

/***/ "./src/img/archive-note.png":
/*!**********************************!*\
  !*** ./src/img/archive-note.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"24b3bd52d871f43cbf54.png\";\n\n//# sourceURL=webpack://notes-app/./src/img/archive-note.png?");

/***/ }),

/***/ "./src/img/icons-delete.png":
/*!**********************************!*\
  !*** ./src/img/icons-delete.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"52ffc10d42365cd3f42a.png\";\n\n//# sourceURL=webpack://notes-app/./src/img/icons-delete.png?");

/***/ }),

/***/ "./src/img/recovery-note.png":
/*!***********************************!*\
  !*** ./src/img/recovery-note.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e5c4fc3488e72fd3c53c.png\";\n\n//# sourceURL=webpack://notes-app/./src/img/recovery-note.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;