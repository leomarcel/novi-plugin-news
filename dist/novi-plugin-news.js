module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _SettingsItem = __webpack_require__(1);

	var _SettingsItem2 = _interopRequireDefault(_SettingsItem);

	var _Settings = __webpack_require__(36);

	var _Settings2 = _interopRequireDefault(_Settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = novi.react.React;

	var Language = novi.language;
	var Plugin = {
	    name: "novi-plugin-news",
	    title: "News Carousel Plugin",
	    description: "Novi Plugin for display News",
	    version: "1.0.2",
	    dependencies: {
	        novi: "0.9.0"
	    },
	    defaults: {
	        querySelector: '.owl-carousel',
	        childQuerySelector: '.owl-carousel .owl-item > *'
	    },
	    ui: {
	        editor: [_SettingsItem2.default],
	        settings: React.createElement(_Settings2.default, null)
	    },
	    onLanguageChange: onLanguageChange
	};
	function onLanguageChange(plugin) {
	    var messages = Language.getDataByKey("novi-plugin-news");
	    plugin.ui.editor[1].title = messages.editor.settings.title;
	    plugin.ui.editor[1].tooltip = messages.editor.settings.tooltip;
	    plugin.ui.editor[1].header[1] = React.createElement(
	        "span",
	        null,
	        messages.editor.settings.header
	    );

	    plugin.ui.editor[2].title = messages.editor.addSlide.title;
	    plugin.ui.editor[2].tooltip = messages.editor.addSlide.tooltip;

	    plugin.ui.editor[3].title = messages.editor.removeSlide.title;
	    plugin.ui.editor[3].tooltip = messages.editor.removeSlide.tooltip;

	    return plugin;
	}
	novi.plugins.register(Plugin);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _SettingsBody = __webpack_require__(2);

	var _SettingsBody2 = _interopRequireDefault(_SettingsBody);

	var _axios = __webpack_require__(3);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = novi.react.React;
	var Icon = novi.ui.icon;
	var messages = novi.language.getDataByKey("novi-plugin-news");
	var icon = React.createElement(
	    Icon,
	    null,
	    React.createElement(
	        "svg",
	        { viewBox: "0 0 20 20", style: { height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" } },
	        React.createElement("path", { d: "M17.5,20h-16C0.7,20,0,19.3,0,18.5v-16C0,1.7,0.7,1,1.5,1h16C18.3,1,19,1.7,19,2.5v16C19,19.3,18.3,20,17.5,20z M1.5,2 C1.2,2,1,2.2,1,2.5v16C1,18.8,1.2,19,1.5,19h16c0.3,0,0.5-0.2,0.5-0.5v-16C18,2.2,17.8,2,17.5,2H1.5z" }),
	        React.createElement("path", { d: "M2.1,7.7L2.1,7.7c0.3,0,0.5-0.2,0.5-0.5V5.5l1.5,2c0.1,0.1,0.2,0.2,0.4,0.2h0c0,0,0,0,0,0c0,0,0,0,0,0h0 c0.3,0,0.5-0.2,0.5-0.5V4c0-0.3-0.2-0.5-0.5-0.5h0C4.3,3.5,4.1,3.7,4.1,4v1.7l-1.5-2C2.6,3.6,2.4,3.5,2.2,3.5h0c0,0,0,0,0,0 c0,0,0,0,0,0h0C1.9,3.5,1.7,3.7,1.7,4v3.2C1.7,7.5,1.9,7.7,2.1,7.7z" }),
	        React.createElement("path", { d: "M8.1,6.8H6.6V6.1h1.3c0.3,0,0.5-0.2,0.5-0.5v0c0-0.3-0.2-0.5-0.5-0.5H6.6V4.5h1.5c0.3,0,0.5-0.2,0.5-0.5v0 c0-0.3-0.2-0.5-0.5-0.5h-2C5.8,3.5,5.6,3.7,5.6,4v3.2c0,0.3,0.2,0.5,0.5,0.5h2.1c0.3,0,0.5-0.2,0.5-0.5C8.6,7,8.4,6.8,8.1,6.8z" }),
	        React.createElement("path", { d: "M10.3,7.7L10.3,7.7C10.4,7.7,10.4,7.7,10.3,7.7C10.4,7.7,10.4,7.7,10.3,7.7L10.3,7.7c0.3,0,0.5-0.1,0.5-0.3l0.6-1.8l0.6,1.8 c0.1,0.2,0.3,0.3,0.5,0.3h0c0,0,0,0,0,0s0,0,0,0h0c0.2,0,0.4-0.1,0.5-0.3l1.1-3.2c0.1-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.4-0.2 h-0.1c-0.2,0-0.4,0.1-0.5,0.3l-0.6,1.8L12,3.9c-0.1-0.2-0.3-0.3-0.5-0.3h-0.1c-0.2,0-0.4,0.1-0.5,0.3l-0.6,1.8L9.8,3.9 C9.7,3.7,9.5,3.5,9.3,3.5H9.3c-0.2,0-0.3,0.1-0.4,0.2C8.8,3.9,8.7,4,8.8,4.2l1.1,3.2C10,7.6,10.1,7.7,10.3,7.7z" }),
	        React.createElement("path", { d: "M15.8,7.7c1.1,0,1.6-0.6,1.6-1.3c0-1-0.8-1.2-1.3-1.4c-0.6-0.2-0.6-0.2-0.6-0.4c0-0.1,0.2-0.2,0.5-0.2 c0.2,0,0.4,0.1,0.6,0.1c0.2,0.1,0.5,0.1,0.7-0.2l0,0c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1-0.1-0.2-0.2-0.3c-0.3-0.2-0.7-0.3-1.1-0.3 c-1,0-1.5,0.6-1.5,1.2c0,0.9,0.8,1.2,1.3,1.4c0.6,0.2,0.6,0.2,0.6,0.4c0,0.2-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.7-0.3 c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.3,0.1l0,0c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0.1,0.3,0.1,0.3 C14.7,7.5,15.3,7.7,15.8,7.7z" }),
	        React.createElement("path", { d: "M7.2,9.2H2.6c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,9.6,7.8,9.2,7.2,9.2z" }),
	        React.createElement("path", { d: "M7.2,12.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,12.7,7.8,12.3,7.2,12.3z" }),
	        React.createElement("path", { d: "M7.2,15.5H2.6c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,15.9,7.8,15.5,7.2,15.5z" }),
	        React.createElement("path", { d: "M16.8,9H9.6C9.3,9,9.1,9.3,9.1,9.6v7.4c0,0.3,0.2,0.5,0.5,0.5h7.2c0.3,0,0.5-0.2,0.5-0.5V9.6C17.4,9.3,17.1,9,16.8,9z" })
	    )
	);

	var SettingsItem = {
	    trigger: icon,
	    tooltip: messages.editor.settings.tooltip,
	    title: messages.editor.settings.title,
	    header: [icon, React.createElement(
	        "span",
	        null,
	        messages.editor.settings.header
	    )],
	    body: [React.createElement(_SettingsBody2.default, null)],
	    closeIcon: "submit",
	    onSubmit: onSubmitAction,
	    width: 350,
	    height: 170,
	    submitOnBlur: false
	};

	exports.default = SettingsItem;


	function onSubmitAction(headerStates, bodyStates) {
	    // background-video-with-carousel
	    // carousel-fullwidth
	    // carousel-simple
	    // carousel-with-pagination
	    // post-carousel-variant-1
	    // post-carousel-variant-3
	    // post-carousel-variant-4
	    // post-carousel-variant-2
	    // post-carousel-variant-5
	    // post-carousel-variant-6
	    // services-variant-4

	    var state = bodyStates[0];

	    var values = {
	        items: state.items,
	        selectLayout: state.selectLayout,
	        selectMenu: state.selectMenu
	    };

	    var settingsReq = new FormData();
	    var menus = [];
	    for (var i = 0; i < values.selectMenu.length; i++) {
	        menus.push(values.selectMenu[i].value);
	    }
	    settingsReq.append('menus', menus);
	    settingsReq.append('layout', values.selectLayout);
	    settingsReq.append('nbr', values.items);

	    _axios2.default.post("/l/builder/app/php/get-posts-by-menus", settingsReq).then(function (res) {
	        console.log(res.data);

	        var parser = new DOMParser();
	        var doc = parser.parseFromString(res.data, 'text/html');

	        for (var _i = 0; _i < doc.body.querySelectorAll("img").length; _i++) {
	            if (doc.body.querySelectorAll("img")[_i].getAttribute("src").length <= 0) doc.body.querySelectorAll("img")[_i].setAttribute("src", "https://t4.ftcdn.net/jpg/01/67/74/79/360_F_167747932_NE1da5cf9FM30QExtlFjbmk9ypItoJl2.jpg");
	        }
	        var content = doc.body;
	        // let origin = content.cloneNode(true);
	        // content = content.innerHTML; 
	        console.log(content);
	        console.log("state.element");
	        console.log(state.element);
	        console.log(novi.element);
	        // state.element.innerHTML = ";c"
	        // novi.element.setAttribute(state.element, "template", ":c")

	        // let staticSlide = novi.element.getStaticReference(childElement);
	        // let newStaticSlide = staticSlide.cloneNode(true);
	        // let staticSlideParent = novi.element.getStaticReference(element);
	        // novi.element.appendStatic(newStaticSlide, staticSlideParent);
	        // console.log("staticreference")
	        // console.log(novi.element.getStaticReference(state.element))

	        // novi.element.appendStatic(content.querySelector("section"), state.element.parentElement.parentElement.parentElement.parentElement.parentElement); //new slide, slideparent
	        // novi.element.removeStatic(state.element.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll("section")[0]);


	        // console.log(state.element.owl)
	        // state.element.owl[0].outerHTML = ":c";
	        // state.element.owl.trigger('refresh.owl.carousel');
	        // state.element.owl[0].trigger('refresh.owl.carousel');

	        // novi.element.setAttribute(state.element, "template", "test")
	        // novi.element.duplicate(state.element.querySelector("article"))


	        // console.log(state.element.parentElement)
	        // console.log(content.querySelector(".owl-carousel"))

	        //
	        novi.element.appendStatic(content.querySelector(".owl-carousel"), state.element.parentElement); //new slide, slideparent
	        novi.element.removeStatic(state.element.parentElement.querySelectorAll("img")[0]);
	        // novi.element.insertStaticBefore(test.body, novi.element.getStaticReference(state.element.parentElement))
	        // state.element.querySelector(".owl-carousel").innerHTML = content;
	        // novi.element.duplicate(content)


	        // novi.element.remove(state.element.parentElement)


	        // console.log(content.querySelector(".owl-carousel"))

	        // console.log(state.element)
	        // console.log("appendStatic")


	        // console.log("ok")

	        // novi.page.forceUpdate();
	        // console.log(state.element.querySelector("section"))
	        // state.element.parentElement.parentElement.parentElement.innerHTML = content;
	        // if (state.element.querySelector("section")) state.element.innerHTML = content;
	        // else if (state.element.parentElement.querySelector("section")) state.element.parentElement.innerHTML = content;
	        // else if (state.element.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.innerHTML = content;
	        // else if (state.element.parentElement.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.parentElement.innerHTML = content;
	        // else if (state.element.parentElement.parentElement.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.parentElement.parentElement.innerHTML = content;
	        // if (state.element.parentElement.has)
	        // novi.page.forceUpdate();
	    });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _axios = __webpack_require__(3);

	var _axios2 = _interopRequireDefault(_axios);

	var _multiselectReactDropdown = __webpack_require__(31);

	var _multiselectReactDropdown2 = _interopRequireDefault(_multiselectReactDropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = novi.react.React;
	var Component = novi.react.Component;
	var InputNumber = novi.ui.inputNumber;
	var Editor = novi.editor;
	var Language = novi.language;

	var Body = function (_Component) {
	    _inherits(Body, _Component);

	    function Body(props) {
	        _classCallCheck(this, Body);

	        var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

	        var items = _this.getItems(props.element).length;
	        var selectLayout = props.element.getAttribute("template");

	        var menus = [];
	        var selectMenu = null;
	        Editor.setBodyHeight(210);

	        _this.state = {
	            items: items,
	            menus: menus,
	            selectMenu: selectMenu,
	            selectLayout: selectLayout,
	            initValue: {
	                items: items
	            },
	            element: props.element,
	            childElement: props.childElement
	        };

	        _this._handleNumberItemChange = _this._handleNumberItemChange.bind(_this);
	        _this.onRemove = _this.onRemove.bind(_this);
	        _this.onSelect = _this.onSelect.bind(_this);

	        _this.messages = Language.getDataByKey("novi-plugin-news");

	        _this.style = '\n        .owl-wrap{\n            padding: 0 12px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            height: 100%;\n            color: #6E778A;\n        }\n        .owl-switcher{\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 16px;\n            -webkit-transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);\n            transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);\n            opacity: 1;\n            visibility: visible;\n        }\n        .owl-switcher.disabled{\n            opacity: 0;\n            visibility: hidden;\n            height: 0;\n            margin-top: 0;\n        }\n      \n        .owl-switcher .novi-input{\n            width: 55px;\n        }  \n        .owl-wrap .Select-menu-outer, .owl-wrap .Select-menu{\n            max-height: 8selectLayout5px;\n        }\n        .owl-group{\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        }\n        .blockSelect{\n            display: block;\n        }\n        .selectTemplate{\n            width: 100%;\n        }\n        .btnSelectTemplate {\n            font-weight: 400;\n            transition: 0.33s all ease-in;\n            border: 3px;\n            letter-spacing: 0;\n            white-space: normal;\n            max-width: 100%;\n            background-color: #6E778A;\n            color: white;\n            display: inline-block;\n            border-radius: 3px;\n            padding-left: 3px;\n            padding-right: 3px;\n            font-size: 11px;\n            line-height: 24px;\n            position: relative;\n            cursor: pointer;\n        }\n        .hr_settings {\n            border: 1px solid #6E778A;\n            width: 100%;\n            margin-top: 20px;\n        }\n        .title_carousel {\n            margin: 0px;\n            color: white;\n            font-weight: 700;\n            margin-bottom: 10px;\n        }\n        .multiple_selected {\n            width: 100%;\n            color: white;\n            background-color: #282F3D;\n            border: none;\n            overflow: hidden;\n        }\n        ';
	        return _this;
	    }

	    _createClass(Body, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            _axios2.default.get('/l/builder/app/php/get-posts-menus').then(function (res) {
	                var menus = res.data;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = Object.entries(menus)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var _step$value = _slicedToArray(_step.value, 2),
	                            key = _step$value[0],
	                            value = _step$value[1];

	                        var tempdata = { label: value, value: key };
	                        var menutemp = _this2.state.menus;
	                        menutemp.push(tempdata);
	                        _this2.setState({ menus: menutemp });
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'owl-wrap' },
	                React.createElement(
	                    'style',
	                    null,
	                    this.style
	                ),
	                React.createElement(
	                    'p',
	                    { className: 'novi-label title_carousel', style: { "margin": 0 } },
	                    this.messages.editor.settings.title
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'owl-switcher blockSelect' },
	                    React.createElement(
	                        'p',
	                        { className: 'novi-label', style: { "margin": 0 } },
	                        this.messages.editor.settings.body.titleMenu
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'owl-switcher' },
	                        React.createElement(_multiselectReactDropdown2.default, {
	                            options: this.state.menus,
	                            selectedValues: this.state.selectMenu,
	                            onSelect: this.onSelect,
	                            onRemove: this.onRemove,
	                            displayValue: 'label'
	                        })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'owl-switcher blockSelect' },
	                    React.createElement(
	                        'p',
	                        { className: 'novi-label', style: { "marginTop": "0" } },
	                        this.messages.editor.settings.body.visibleItems
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'owl-switcher' },
	                        React.createElement(InputNumber, { min: 1, max: 50, value: this.state.items, onChange: this._handleNumberItemChange })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(selectedList, selectedItem) {
	            this.setState({ selectMenu: selectedList });
	        }
	    }, {
	        key: 'onRemove',
	        value: function onRemove(selectedList, removedItem) {
	            this.setState({ selectMenu: selectedList });
	        }
	    }, {
	        key: '_handleNumberItemChange',
	        value: function _handleNumberItemChange(value) {
	            this.setState({
	                items: value
	            });
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems(element) {
	            return [novi.element.getAttribute(element, 'data-items') || null, novi.element.getAttribute(element, 'data-xs-items') || null, novi.element.getAttribute(element, 'data-sm-items') || null, novi.element.getAttribute(element, 'data-md-items') || null, novi.element.getAttribute(element, 'data-lg-items') || null, novi.element.getAttribute(element, 'data-xl-items') || null];
	        }
	    }]);

	    return Body;
	}(Component);

	exports.default = Body;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);
	var bind = __webpack_require__(6);
	var Axios = __webpack_require__(7);
	var mergeConfig = __webpack_require__(26);
	var defaults = __webpack_require__(13);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(27);
	axios.CancelToken = __webpack_require__(28);
	axios.isCancel = __webpack_require__(12);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(29);

	// Expose isAxiosError
	axios.isAxiosError = __webpack_require__(30);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(6);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {Object} val The value to test
	 * @return {boolean} True if value is a plain Object, otherwise false
	 */
	function isPlainObject(val) {
	  if (toString.call(val) !== '[object Object]') {
	    return false;
	  }

	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 * @return {string} content value without BOM
	 */
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);
	var buildURL = __webpack_require__(8);
	var InterceptorManager = __webpack_require__(9);
	var dispatchRequest = __webpack_require__(10);
	var mergeConfig = __webpack_require__(26);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }

	  config = mergeConfig(this.defaults, config);

	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }

	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);
	var transformData = __webpack_require__(11);
	var isCancel = __webpack_require__(12);
	var defaults = __webpack_require__(13);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(5);
	var normalizeHeaderName = __webpack_require__(15);

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(16);
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(16);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,
	  maxBodyLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);
	var settle = __webpack_require__(17);
	var cookies = __webpack_require__(20);
	var buildURL = __webpack_require__(8);
	var buildFullPath = __webpack_require__(21);
	var parseHeaders = __webpack_require__(24);
	var isURLSameOrigin = __webpack_require__(25);
	var createError = __webpack_require__(18);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(createError('Request aborted', config, 'ECONNABORTED', request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (!requestData) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(18);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(19);

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }

	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;

	  error.toJSON = function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }

	          if (secure === true) {
	            cookie.push('secure');
	          }

	          document.cookie = cookie.join('; ');
	        },

	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },

	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isAbsoluteURL = __webpack_require__(22);
	var combineURLs = __webpack_require__(23);

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	module.exports = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;

	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;

	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }

	        urlParsingNode.setAttribute('href', href);

	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }

	      originURL = resolveURL(window.location.href);

	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	module.exports = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};

	  var valueFromConfig2Keys = ['url', 'method', 'data'];
	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
	  var defaultToConfig2Keys = [
	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
	    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
	    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
	  ];
	  var directMergeKeys = ['validateStatus'];

	  function getMergedValue(target, source) {
	    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
	      return utils.merge(target, source);
	    } else if (utils.isPlainObject(source)) {
	      return utils.merge({}, source);
	    } else if (utils.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }

	  function mergeDeepProperties(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  }

	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    }
	  });

	  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });

	  utils.forEach(directMergeKeys, function merge(prop) {
	    if (prop in config2) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });

	  var axiosKeys = valueFromConfig2Keys
	    .concat(mergeDeepPropertiesKeys)
	    .concat(defaultToConfig2Keys)
	    .concat(directMergeKeys);

	  var otherKeys = Object
	    .keys(config1)
	    .concat(Object.keys(config2))
	    .filter(function filterAxiosKeys(key) {
	      return axiosKeys.indexOf(key) === -1;
	    });

	  utils.forEach(otherKeys, mergeDeepProperties);

	  return config;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(27);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	module.exports = function isAxiosError(payload) {
	  return (typeof payload === 'object') && (payload.isAxiosError === true);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict'

	if (true) {
	  module.exports = __webpack_require__(32)
	} else {
	  module.exports = require('./multiselect-react-dropdown.cjs.development.js')
	}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=(e=__webpack_require__(33))&&"object"==typeof e&&"default"in e?e.default:e;function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e,t){void 0===t&&(t={});var i=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}('*,:after,:before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{pointer-events:none;opacity:.5}.searchWrapper{border:1px solid #ccc;border-radius:4px;padding:5px;min-height:22px;position:relative}.multiSelectContainer input{border:none;margin-top:3px;background:transparent}.multiSelectContainer input:focus{outline:none}.chip{padding:4px 10px;background:#0096fb;margin-right:5px;margin-bottom:5px;border-radius:11px;display:inline-flex;align-items:center;font-size:13px;line-height:19px;color:#fff}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{height:13px;width:13px;float:right;margin-left:5px;cursor:pointer}.optionListContainer{position:absolute;width:100%;background:#fff;border-radius:4px;margin-top:1px;z-index:2}.multiSelectContainer ul{display:block;padding:0;margin:0;border:1px solid #ccc;border-radius:4px;max-height:250px;overflow-y:auto}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{pointer-events:none;opacity:.5}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{padding:10px;display:block}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;pointer-events:none;padding:5px 15px}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:14px}.icon_down_dir:before{content:"\\e803"}.custom-close{display:flex}');var o={circle:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",circle2:"data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",close:"data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",cancel:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E"},l=function(e){function l(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=!(r=i(l).call(this,e))||"object"!=typeof r&&"function"!=typeof r?s(this):r).state={inputValue:"",options:e.options,filteredOptions:e.options,unfilteredOptions:e.options,selectedValues:Object.assign([],e.selectedValues),preSelectedValues:Object.assign([],e.selectedValues),toggleOptionsList:!1,highlightOption:e.avoidHighlightFirstOption?-1:0,showCheckbox:e.showCheckbox,keepSearchTerm:e.keepSearchTerm,groupedObject:[],closeIconType:o[e.closeIcon]||o.circle},n.optionTimeout=null,n.searchWrapper=t.createRef(),n.searchBox=t.createRef(),n.onChange=n.onChange.bind(s(n)),n.onFocus=n.onFocus.bind(s(n)),n.onBlur=n.onBlur.bind(s(n)),n.renderMultiselectContainer=n.renderMultiselectContainer.bind(s(n)),n.renderSelectedList=n.renderSelectedList.bind(s(n)),n.onRemoveSelectedItem=n.onRemoveSelectedItem.bind(s(n)),n.toggelOptionList=n.toggelOptionList.bind(s(n)),n.onArrowKeyNavigation=n.onArrowKeyNavigation.bind(s(n)),n.onSelectItem=n.onSelectItem.bind(s(n)),n.filterOptionsByInput=n.filterOptionsByInput.bind(s(n)),n.removeSelectedValuesFromOptions=n.removeSelectedValuesFromOptions.bind(s(n)),n.isSelectedValue=n.isSelectedValue.bind(s(n)),n.fadeOutSelection=n.fadeOutSelection.bind(s(n)),n.isDisablePreSelectedValues=n.isDisablePreSelectedValues.bind(s(n)),n.renderGroupByOptions=n.renderGroupByOptions.bind(s(n)),n.renderNormalOption=n.renderNormalOption.bind(s(n)),n.listenerCallback=n.listenerCallback.bind(s(n)),n.resetSelectedValues=n.resetSelectedValues.bind(s(n)),n.getSelectedItems=n.getSelectedItems.bind(s(n)),n.getSelectedItemsCount=n.getSelectedItemsCount.bind(s(n)),n.hideOnClickOutside=n.hideOnClickOutside.bind(s(n)),n.isVisible=n.isVisible.bind(s(n)),n}var r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(l,t.Component),(r=[{key:"initialSetValue",value:function(){var e=this.props,t=e.showCheckbox,i=e.groupBy,n=this.state.options;t||e.singleSelect||this.removeSelectedValuesFromOptions(!1),i&&t&&this.groupByOptions(n)}},{key:"resetSelectedValues",value:function(){var e=this,t=this.state.unfilteredOptions;return new Promise((function(i){e.setState({selectedValues:[],preSelectedValues:[],options:t,filteredOptions:t},(function(){i(),e.initialSetValue()}))}))}},{key:"getSelectedItems",value:function(){return this.state.selectedValues}},{key:"getSelectedItemsCount",value:function(){return this.state.selectedValues.length}},{key:"componentDidMount",value:function(){this.initialSetValue(),this.searchWrapper.current.addEventListener("click",this.listenerCallback)}},{key:"componentDidUpdate",value:function(e){var t=this.props,i=t.options,n=t.selectedValues,s=e.selectedValues;JSON.stringify(e.options)!==JSON.stringify(i)&&this.setState({options:i,filteredOptions:i,unfilteredOptions:i},this.initialSetValue),JSON.stringify(s)!==JSON.stringify(n)&&this.setState({selectedValues:Object.assign([],n),preSelectedValues:Object.assign([],n)},this.initialSetValue)}},{key:"listenerCallback",value:function(){this.searchBox.current.focus()}},{key:"componentWillUnmount",value:function(){this.optionTimeout&&clearTimeout(this.optionTimeout),this.searchWrapper.current.removeEventListener("click",this.listenerCallback)}},{key:"removeSelectedValuesFromOptions",value:function(e){var t=this.props,i=t.isObject,n=t.displayValue,s=t.groupBy,o=this.state,l=o.selectedValues,r=void 0===l?[]:l,a=o.unfilteredOptions;if(!e&&s&&this.groupByOptions(o.options),r.length||e){if(i){var c=a.filter((function(e){return-1===r.findIndex((function(t){return t[n]===e[n]}))}));return s&&this.groupByOptions(c),void this.setState({options:c,filteredOptions:c},this.filterOptionsByInput)}var u=a.filter((function(e){return-1===r.indexOf(e)}));this.setState({options:u,filteredOptions:u},this.filterOptionsByInput)}}},{key:"groupByOptions",value:function(e){var t=this.props.groupBy,i=e.reduce((function(e,i){var n=i[t]||"Others";return e[n]=e[n]||[],e[n].push(i),e}),Object.create({}));this.setState({groupedObject:i})}},{key:"onChange",value:function(e){var t=this.props.onSearch;this.setState({inputValue:e.target.value},this.filterOptionsByInput),t&&t(e.target.value)}},{key:"filterOptionsByInput",value:function(){var e,t=this,i=this.state,n=i.inputValue,s=this.props,o=s.displayValue;e=i.filteredOptions.filter(s.isObject?function(e){return t.matchValues(e[o],n)}:function(e){return t.matchValues(e,n)}),this.groupByOptions(e),this.setState({options:e})}},{key:"matchValues",value:function(e,t){return this.props.caseSensitiveSearch?e.indexOf(t)>-1:e.toLowerCase?e.toLowerCase().indexOf(t.toLowerCase())>-1:e.toString().indexOf(t)>-1}},{key:"onArrowKeyNavigation",value:function(e){var t=this.state,i=t.options,n=t.highlightOption,s=t.toggleOptionsList,o=t.selectedValues;if(8!==e.keyCode||t.inputValue||this.props.disablePreSelectedValues||!o.length||this.onRemoveSelectedItem(o.length-1),i.length)if(38===e.keyCode)this.setState(n>0?function(e){return{highlightOption:e.highlightOption-1}}:{highlightOption:i.length-1});else if(40===e.keyCode)this.setState(n<i.length-1?function(e){return{highlightOption:e.highlightOption+1}}:{highlightOption:0});else if("Enter"===e.key&&i.length&&s){if(-1===n)return;this.onSelectItem(i[n])}}},{key:"onRemoveSelectedItem",value:function(e){var t,i=this,n=this.state.selectedValues,s=this.props,o=s.onRemove,l=s.showCheckbox,r=s.displayValue;t=s.isObject?n.findIndex((function(t){return t[r]===e[r]})):n.indexOf(e),n.splice(t,1),o(n,e),this.setState({selectedValues:n},(function(){l||i.removeSelectedValuesFromOptions(!0)})),this.props.closeOnSelect||this.searchBox.current.focus()}},{key:"onSelectItem",value:function(e){var t=this,i=this.state.selectedValues,n=this.props,s=n.selectionLimit,o=n.onSelect,l=n.singleSelect,r=n.showCheckbox;if(this.state.keepSearchTerm||this.setState({inputValue:""}),l)return this.onSingleSelect(e),void o([e],e);this.isSelectedValue(e)?this.onRemoveSelectedItem(e):s!=i.length&&(i.push(e),o(i,e),this.setState({selectedValues:i},(function(){r?t.filterOptionsByInput():t.removeSelectedValuesFromOptions(!0)})),this.props.closeOnSelect||this.searchBox.current.focus())}},{key:"onSingleSelect",value:function(e){this.setState({selectedValues:[e],toggleOptionsList:!1})}},{key:"isSelectedValue",value:function(e){var t=this.props,i=t.displayValue,n=this.state.selectedValues;return t.isObject?n.filter((function(t){return t[i]===e[i]})).length>0:n.filter((function(t){return t===e})).length>0}},{key:"renderOptionList",value:function(){var e=this.props,i=e.groupBy,n=e.style,s=e.emptyRecordMsg,o=e.loadingMessage,l=void 0===o?"loading...":o,r=this.state.options;return e.loading?t.createElement("ul",{className:"optionContainer",style:n.optionContainer},"string"==typeof l&&t.createElement("span",{style:n.loadingMessage,className:"notFound"},l),"string"!=typeof l&&l):t.createElement("ul",{className:"optionContainer",style:n.optionContainer},0===r.length&&t.createElement("span",{style:n.notFound,className:"notFound"},s),i?this.renderGroupByOptions():this.renderNormalOption())}},{key:"renderGroupByOptions",value:function(){var e=this,i=this.props,n=i.isObject,s=void 0!==n&&n,o=i.displayValue,l=i.showCheckbox,r=i.style,a=i.singleSelect,c=this.state.groupedObject;return Object.keys(c).map((function(i){return t.createElement(t.Fragment,{key:i},t.createElement("li",{className:"groupHeading",style:r.groupHeading},i),c[i].map((function(i,n){return t.createElement("li",{key:"option".concat(n),style:r.option,className:"\n               groupChildEle ".concat(e.fadeOutSelection(i)&&"disableSelection","\n                ").concat(e.isDisablePreSelectedValues(i)&&"disableSelection"," option\n              "),onClick:function(){return e.onSelectItem(i)}},l&&!a&&t.createElement("input",{type:"checkbox",className:"checkbox",readOnly:!0,checked:e.isSelectedValue(i)}),s?i[o]:(i||"").toString())})))}))}},{key:"renderNormalOption",value:function(){var e=this,i=this.props,n=i.isObject,s=void 0!==n&&n,o=i.displayValue,l=i.showCheckbox,r=i.style,a=i.singleSelect,c=this.state.highlightOption;return this.state.options.map((function(i,n){return t.createElement("li",{key:"option".concat(n),style:r.option,className:"\n              ".concat(c===n?"highlightOption highlight":""," \n              ").concat(e.fadeOutSelection(i)&&"disableSelection"," \n              ").concat(e.isDisablePreSelectedValues(i)&&"disableSelection"," option\n            "),onClick:function(){return e.onSelectItem(i)}},l&&!a&&t.createElement("input",{type:"checkbox",readOnly:!0,className:"checkbox",checked:e.isSelectedValue(i)}),s?i[o]:(i||"").toString())}))}},{key:"renderSelectedList",value:function(){var e=this,i=this.props,n=i.isObject,s=void 0!==n&&n,o=i.displayValue,l=i.style,r=i.singleSelect,a=i.customCloseIcon,c=this.state,u=c.closeIconType;return c.selectedValues.map((function(i,n){return t.createElement("span",{className:"chip  ".concat(r&&"singleChip"," ").concat(e.isDisablePreSelectedValues(i)&&"disableSelection"),key:n,style:l.chips},s?i[o]:(i||"").toString(),!e.isDisablePreSelectedValues(i)&&(a?t.createElement("i",{className:"custom-close",onClick:function(){return e.onRemoveSelectedItem(i)}},a):t.createElement("img",{className:"icon_cancel closeIcon",src:u,onClick:function(){return e.onRemoveSelectedItem(i)}})))}))}},{key:"isDisablePreSelectedValues",value:function(e){var t=this.props,i=t.displayValue,n=this.state.preSelectedValues;return!(!t.disablePreSelectedValues||!n.length)&&(t.isObject?n.filter((function(t){return t[i]===e[i]})).length>0:n.filter((function(t){return t===e})).length>0)}},{key:"fadeOutSelection",value:function(e){var t=this.props,i=t.selectionLimit;if(!t.singleSelect){var n=this.state.selectedValues;return-1!=i&&i==n.length&&(i==n.length?!t.showCheckbox||!this.isSelectedValue(e):void 0)}}},{key:"toggelOptionList",value:function(){this.setState({toggleOptionsList:!this.state.toggleOptionsList,highlightOption:this.props.avoidHighlightFirstOption?-1:0})}},{key:"onFocus",value:function(){this.state.toggleOptionsList?clearTimeout(this.optionTimeout):this.toggelOptionList()}},{key:"onBlur",value:function(){this.optionTimeout=setTimeout(this.toggelOptionList,250)}},{key:"isVisible",value:function(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}},{key:"hideOnClickOutside",value:function(){var e=this,t=document.getElementsByClassName("multiselect-container")[0];document.addEventListener("click",(function(i){t&&!t.contains(i.target)&&e.isVisible(t)&&e.toggelOptionList()}))}},{key:"renderMultiselectContainer",value:function(){var e=this.state,i=e.inputValue,n=e.toggleOptionsList,s=e.selectedValues,o=this.props,l=o.placeholder,r=o.style,a=o.singleSelect,c=o.id,u=o.hidePlaceholder,p=o.disable,d=o.showArrow;return t.createElement("div",{className:"multiselect-container multiSelectContainer ".concat(p?"disable_ms":""),id:c||"multiselectContainerReact",style:r.multiselectContainer},t.createElement("div",{className:"search-wrapper searchWrapper ".concat(a?"singleSelect":""),ref:this.searchWrapper,style:r.searchBox,onClick:a?this.toggelOptionList:function(){}},this.renderSelectedList(),t.createElement("input",{type:"text",ref:this.searchBox,className:"searchBox",id:"".concat(c||"search","_input"),onChange:this.onChange,value:i,onFocus:this.onFocus,onBlur:this.onBlur,placeholder:a&&s.length||u&&s.length?"":l,onKeyDown:this.onArrowKeyNavigation,style:r.inputField,autoComplete:"off",disabled:a||p}),(a||d)&&t.createElement("img",{src:"data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",className:"icon_cancel icon_down_dir"})),t.createElement("div",{className:"optionListContainer ".concat(n?"displayBlock":"displayNone")},this.renderOptionList()))}},{key:"render",value:function(){return this.renderMultiselectContainer()}}])&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,r),l}();l.defaultProps={options:[],disablePreSelectedValues:!1,selectedValues:[],isObject:!0,displayValue:"model",showCheckbox:!1,selectionLimit:-1,placeholder:"Select",groupBy:"",style:{},emptyRecordMsg:"No Options Available",onSelect:function(){},onRemove:function(){},closeIcon:"circle2",singleSelect:!1,caseSensitiveSearch:!1,id:"",closeOnSelect:!0,avoidHighlightFirstOption:!1,hidePlaceholder:!1,showArrow:!1,keepSearchTerm:!1,customCloseIcon:""},exports.Multiselect=l,exports.default=l;
	//# sourceMappingURL=multiselect-react-dropdown.cjs.production.min.js.map


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(34);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';var l=__webpack_require__(35),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
	if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
	function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
	function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
	function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
	function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
	0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
	function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
	exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
	exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
	key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
	exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
	exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = novi.react.React;
	var Component = novi.react.Component;
	var Input = novi.ui.input;
	var Button = novi.ui.button;
	var Language = novi.language;

	var Settings = function (_Component) {
	    _inherits(Settings, _Component);

	    function Settings(props) {
	        _classCallCheck(this, Settings);

	        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

	        _this.state = {
	            settings: {
	                querySelector: props.settings.querySelector
	            }
	        };
	        _this.saveSettings = _this.saveSettings.bind(_this);
	        _this.onChange = _this.onChange.bind(_this);
	        _this.messages = Language.getDataByKey("novi-plugin-news");
	        return _this;
	    }

	    _createClass(Settings, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(props) {
	            this.setState({
	                settings: {
	                    querySelector: props.settings.querySelector
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "span",
	                    { style: { letterSpacing: "0,0462em" } },
	                    "News Plugin"
	                ),
	                React.createElement(
	                    "div",
	                    { style: { fontSize: 13, color: "#6E778A", marginTop: 21 } },
	                    this.messages.settings.inputPlaceholder
	                ),
	                React.createElement(Input, { style: { marginTop: 10, width: 340 }, value: this.state.settings.querySelector, onChange: this.onChange }),
	                React.createElement(
	                    "div",
	                    { style: { marginTop: 30 } },
	                    React.createElement(Button, { type: "primary", messages: { textContent: this.messages.settings.submitButton }, onClick: this.saveSettings })
	                )
	            );
	        }
	    }, {
	        key: "onChange",
	        value: function onChange(e) {
	            var value = e.target.value;
	            this.setState({
	                settings: {
	                    querySelector: value
	                }
	            });
	        }
	    }, {
	        key: "saveSettings",
	        value: function saveSettings() {
	            novi.plugins.settings.update("novi-plugin-news", this.state.settings);
	        }
	    }]);

	    return Settings;
	}(Component);

	exports.default = Settings;

/***/ })
/******/ ]);