/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MyComponent = function () {
	    function MyComponent() {
	        _classCallCheck(this, MyComponent);
	
	        alert("esto es una prueba jonathan otra de saludo");
	    }
	
	    _createClass(MyComponent, [{
	        key: "sayMyName",
	        value: function sayMyName() {
	            console.log("My name is");
	        }
	    }]);
	
	    return MyComponent;
	}();
	MyComponent = __decorate([core_1.Component({
	    selector: 'my-app',
	    template: '<div>Esto es un template  <button (click)="sayMyName()">say me name</button></div>'
	}), __metadata('design:paramtypes', [])], MyComponent);
	exports.MyComponent = MyComponent;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.2.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(4)) :
	    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Subject', 'rxjs/Observable'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.core = global.ng.core || {}),global.Rx,global.Rx));
	}(this, function (exports,rxjs_Subject,rxjs_Observable) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    function scheduleMicroTask(fn) {
	        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    function getTypeNameForDebugging(type) {
	        return type['name'] || typeof type;
	    }
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token == null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
	    }
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function print(obj) {
	        console.log(obj);
	    }
	    function warn(obj) {
	        console.warn(obj);
	    }
	    var _symbolIterator = null;
	    function getSymbolIterator() {
	        if (!_symbolIterator) {
	            if (globalScope.Symbol && Symbol.iterator) {
	                _symbolIterator = Symbol.iterator;
	            }
	            else {
	                // es6-shim specific logic
	                var keys = Object.getOwnPropertyNames(Map.prototype);
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (key !== 'entries' && key !== 'size' &&
	                        Map.prototype[key] === Map.prototype['entries']) {
	                        _symbolIterator = key;
	                    }
	                }
	            }
	        }
	        return _symbolIterator;
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    var _nextClassId = 0;
	    var Reflect = global$1.Reflect;
	    function extractAnnotation(annotation) {
	        if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
	            // it is a decorator, extract annotation
	            annotation = annotation.annotation;
	        }
	        return annotation;
	    }
	    function applyParams(fnOrArray, key) {
	        if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
	            fnOrArray === Number || fnOrArray === Array) {
	            throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
	        }
	        if (typeof fnOrArray === 'function') {
	            return fnOrArray;
	        }
	        if (Array.isArray(fnOrArray)) {
	            var annotations = fnOrArray;
	            var annoLength = annotations.length - 1;
	            var fn = fnOrArray[annoLength];
	            if (typeof fn !== 'function') {
	                throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
	            }
	            if (annoLength != fn.length) {
	                throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
	            }
	            var paramsAnnotations = [];
	            for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	                var paramAnnotations = [];
	                paramsAnnotations.push(paramAnnotations);
	                var annotation = annotations[i];
	                if (Array.isArray(annotation)) {
	                    for (var j = 0; j < annotation.length; j++) {
	                        paramAnnotations.push(extractAnnotation(annotation[j]));
	                    }
	                }
	                else if (typeof annotation === 'function') {
	                    paramAnnotations.push(extractAnnotation(annotation));
	                }
	                else {
	                    paramAnnotations.push(annotation);
	                }
	            }
	            Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	            return fn;
	        }
	        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
	    }
	    /**
	     * Provides a way for expressing ES6 classes with parameter annotations in ES5.
	     *
	     * ## Basic Example
	     *
	     * ```
	     * var Greeter = ng.Class({
	     *   constructor: function(name) {
	     *     this.name = name;
	     *   },
	     *
	     *   greet: function() {
	     *     alert('Hello ' + this.name + '!');
	     *   }
	     * });
	     * ```
	     *
	     * is equivalent to ES6:
	     *
	     * ```
	     * class Greeter {
	     *   constructor(name) {
	     *     this.name = name;
	     *   }
	     *
	     *   greet() {
	     *     alert('Hello ' + this.name + '!');
	     *   }
	     * }
	     * ```
	     *
	     * or equivalent to ES5:
	     *
	     * ```
	     * var Greeter = function (name) {
	     *   this.name = name;
	     * }
	     *
	     * Greeter.prototype.greet = function () {
	     *   alert('Hello ' + this.name + '!');
	     * }
	     * ```
	     *
	     * ### Example with parameter annotations
	     *
	     * ```
	     * var MyService = ng.Class({
	     *   constructor: [String, [new Optional(), Service], function(name, myService) {
	     *     ...
	     *   }]
	     * });
	     * ```
	     *
	     * is equivalent to ES6:
	     *
	     * ```
	     * class MyService {
	     *   constructor(name: string, @Optional() myService: Service) {
	     *     ...
	     *   }
	     * }
	     * ```
	     *
	     * ### Example with inheritance
	     *
	     * ```
	     * var Shape = ng.Class({
	     *   constructor: (color) {
	     *     this.color = color;
	     *   }
	     * });
	     *
	     * var Square = ng.Class({
	     *   extends: Shape,
	     *   constructor: function(color, size) {
	     *     Shape.call(this, color);
	     *     this.size = size;
	     *   }
	     * });
	     * ```
	     * @stable
	     */
	    function Class(clsDef) {
	        var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	        var proto = constructor.prototype;
	        if (clsDef.hasOwnProperty('extends')) {
	            if (typeof clsDef.extends === 'function') {
	                constructor.prototype = proto =
	                    Object.create(clsDef.extends.prototype);
	            }
	            else {
	                throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
	            }
	        }
	        for (var key in clsDef) {
	            if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
	                proto[key] = applyParams(clsDef[key], key);
	            }
	        }
	        if (this && this.annotations instanceof Array) {
	            Reflect.defineMetadata('annotations', this.annotations, constructor);
	        }
	        var constructorName = constructor['name'];
	        if (!constructorName || constructorName === 'constructor') {
	            constructor['overriddenName'] = "class" + _nextClassId++;
	        }
	        return constructor;
	    }
	    function makeDecorator(name, props, parentClass, chainFn) {
	        if (chainFn === void 0) { chainFn = null; }
	        var metaCtor = makeMetadataCtor([props]);
	        function DecoratorFactory(objOrType) {
	            if (!(Reflect && Reflect.getMetadata)) {
	                throw 'reflect-metadata shim is required when using class decorators';
	            }
	            if (this instanceof DecoratorFactory) {
	                metaCtor.call(this, objOrType);
	                return this;
	            }
	            var annotationInstance = new DecoratorFactory(objOrType);
	            var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
	            chainAnnotation.push(annotationInstance);
	            var TypeDecorator = function TypeDecorator(cls) {
	                var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
	                annotations.push(annotationInstance);
	                Reflect.defineMetadata('annotations', annotations, cls);
	                return cls;
	            };
	            TypeDecorator.annotations = chainAnnotation;
	            TypeDecorator.Class = Class;
	            if (chainFn)
	                chainFn(TypeDecorator);
	            return TypeDecorator;
	        }
	        if (parentClass) {
	            DecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        DecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        DecoratorFactory.annotationCls = DecoratorFactory;
	        return DecoratorFactory;
	    }
	    function makeMetadataCtor(props) {
	        return function ctor() {
	            var _this = this;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            props.forEach(function (prop, i) {
	                var argVal = args[i];
	                if (Array.isArray(prop)) {
	                    // plain parameter
	                    _this[prop[0]] = argVal === undefined ? prop[1] : argVal;
	                }
	                else {
	                    for (var propName in prop) {
	                        _this[propName] =
	                            argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
	                    }
	                }
	            });
	        };
	    }
	    function makeParamDecorator(name, props, parentClass) {
	        var metaCtor = makeMetadataCtor(props);
	        function ParamDecoratorFactory() {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (this instanceof ParamDecoratorFactory) {
	                metaCtor.apply(this, args);
	                return this;
	            }
	            var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	            function ParamDecorator(cls, unusedKey, index) {
	                var parameters = Reflect.getMetadata('parameters', cls) || [];
	                // there might be gaps if some in between parameters do not have annotations.
	                // we pad with nulls.
	                while (parameters.length <= index) {
	                    parameters.push(null);
	                }
	                parameters[index] = parameters[index] || [];
	                parameters[index].push(annotationInstance);
	                Reflect.defineMetadata('parameters', parameters, cls);
	                return cls;
	            }
	            var _a;
	        }
	        if (parentClass) {
	            ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        ParamDecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
	        return ParamDecoratorFactory;
	    }
	    function makePropDecorator(name, props, parentClass) {
	        var metaCtor = makeMetadataCtor(props);
	        function PropDecoratorFactory() {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (this instanceof PropDecoratorFactory) {
	                metaCtor.apply(this, args);
	                return this;
	            }
	            var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
	            return function PropDecorator(target, name) {
	                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
	                meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
	                meta[name].unshift(decoratorInstance);
	                Reflect.defineMetadata('propMetadata', meta, target.constructor);
	            };
	            var _a;
	        }
	        if (parentClass) {
	            PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        PropDecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        PropDecoratorFactory.annotationCls = PropDecoratorFactory;
	        return PropDecoratorFactory;
	    }
	
	    /**
	     * Inject decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Inject = makeParamDecorator('Inject', [['token', undefined]]);
	    /**
	     * Optional decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Optional = makeParamDecorator('Optional', []);
	    /**
	     * Injectable decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Injectable = makeParamDecorator('Injectable', []);
	    /**
	     * Self decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Self = makeParamDecorator('Self', []);
	    /**
	     * SkipSelf decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var SkipSelf = makeParamDecorator('SkipSelf', []);
	    /**
	     * Host decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Host = makeParamDecorator('Host', []);
	
	    /**
	     * Creates a token that can be used in a DI Provider.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
	     *
	     * ```typescript
	     * var t = new OpaqueToken("value");
	     *
	     * var injector = Injector.resolveAndCreate([
	     *   {provide: t, useValue: "bindingValue"}
	     * ]);
	     *
	     * expect(injector.get(t)).toEqual("bindingValue");
	     * ```
	     *
	     * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
	     * caused by multiple providers using the same string as two different tokens.
	     *
	     * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
	     * error messages.
	     * @stable
	     */
	    // so that metadata is gathered for this class
	    var OpaqueToken = (function () {
	        function OpaqueToken(_desc) {
	            this._desc = _desc;
	        }
	        OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	        OpaqueToken.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        OpaqueToken.ctorParameters = [
	            null,
	        ];
	        return OpaqueToken;
	    }());
	
	    /**
	     * This token can be used to create a virtual provider that will populate the
	     * `entryComponents` fields of components and ng modules based on its `useValue`.
	     * All components that are referenced in the `useValue` value (either directly
	     * or in a nested array or map) will be added to the `entryComponents` property.
	     *
	     * ### Example
	     * The following example shows how the router can populate the `entryComponents`
	     * field of an NgModule based on the router configuration which refers
	     * to components.
	     *
	     * ```typescript
	     * // helper function inside the router
	     * function provideRoutes(routes) {
	     *   return [
	     *     {provide: ROUTES, useValue: routes},
	     *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
	     *   ];
	     * }
	     *
	     * // user code
	     * let routes = [
	     *   {path: '/root', component: RootComp},
	     *   {path: '/teams', component: TeamsComp}
	     * ];
	     *
	     * @NgModule({
	     *   providers: [provideRoutes(routes)]
	     * })
	     * class ModuleWithRoutes {}
	     * ```
	     *
	     * @experimental
	     */
	    var ANALYZE_FOR_ENTRY_COMPONENTS = new OpaqueToken('AnalyzeForEntryComponents');
	    /**
	     * Attribute decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Attribute = makeParamDecorator('Attribute', [['attributeName', undefined]]);
	    /**
	     * Base class for query metadata.
	     *
	     * See {@link ContentChildren}, {@link ContentChild}, {@link ViewChildren}, {@link ViewChild} for
	     * more information.
	     *
	     * @stable
	     */
	    var Query = (function () {
	        function Query() {
	        }
	        return Query;
	    }());
	    /**
	     * ContentChildren decorator and metadata.
	     *
	     *  @stable
	     *  @Annotation
	     */
	    var ContentChildren = makePropDecorator('ContentChildren', [
	        ['selector', undefined], {
	            first: false,
	            isViewQuery: false,
	            descendants: false,
	            read: undefined,
	        }
	    ], Query);
	    /**
	     * @whatItDoes Configures a content query.
	     *
	     * @howToUse
	     *
	     * {@example core/di/ts/contentChild/content_child_howto.ts region='HowTo'}
	     *
	     * @description
	     *
	     * You can use ContentChild to get the first element or the directive matching the selector from the
	     * content DOM. If the content DOM changes, and a new child matches the selector,
	     * the property will be updated.
	     *
	     * Content queries are set before the `ngAfterContentInit` callback is called.
	     *
	     * **Metadata Properties**:
	     *
	     * * **selector** - the directive type or the name used for querying.
	     * * **read** - read a different token from the queried element.
	     *
	     * Let's look at an example:
	     *
	     * {@example core/di/ts/contentChild/content_child_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/core`
	     *
	     * @stable
	     * @Annotation
	     */
	    var ContentChild = makePropDecorator('ContentChild', [
	        ['selector', undefined], {
	            first: true,
	            isViewQuery: false,
	            descendants: true,
	            read: undefined,
	        }
	    ], Query);
	    /**
	     * @whatItDoes Configures a view query.
	     *
	     * @howToUse
	     *
	     * {@example core/di/ts/viewChildren/view_children_howto.ts region='HowTo'}
	     *
	     * @description
	     *
	     * You can use ViewChildren to get the {@link QueryList} of elements or directives from the
	     * view DOM. Any time a child element is added, removed, or moved, the query list will be updated,
	     * and the changes observable of the query list will emit a new value.
	     *
	     * View queries are set before the `ngAfterViewInit` callback is called.
	     *
	     * **Metadata Properties**:
	     *
	     * * **selector** - the directive type or the name used for querying.
	     * * **read** - read a different token from the queried elements.
	     *
	     * Let's look at an example:
	     *
	     * {@example core/di/ts/viewChildren/view_children_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/core`
	     *
	     * @stable
	     * @Annotation
	     */
	    var ViewChildren = makePropDecorator('ViewChildren', [
	        ['selector', undefined], {
	            first: false,
	            isViewQuery: true,
	            descendants: true,
	            read: undefined,
	        }
	    ], Query);
	    /**
	     * ViewChild decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var ViewChild = makePropDecorator('ViewChild', [
	        ['selector', undefined], {
	            first: true,
	            isViewQuery: true,
	            descendants: true,
	            read: undefined,
	        }
	    ], Query);
	
	    /**
	     * Describes within the change detector which strategy will be used the next time change
	     * detection is triggered.
	     * @stable
	     */
	    exports.ChangeDetectionStrategy;
	    (function (ChangeDetectionStrategy) {
	        /**
	         * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	         */
	        ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
	        /**
	         * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	         */
	        ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
	    })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	    /**
	     * Describes the status of the detector.
	     */
	    var ChangeDetectorStatus;
	    (function (ChangeDetectorStatus) {
	        /**
	         * `CheckOnce` means that after calling detectChanges the mode of the change detector
	         * will become `Checked`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["CheckOnce"] = 0] = "CheckOnce";
	        /**
	         * `Checked` means that the change detector should be skipped until its mode changes to
	         * `CheckOnce`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Checked"] = 1] = "Checked";
	        /**
	         * `CheckAlways` means that after calling detectChanges the mode of the change detector
	         * will remain `CheckAlways`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["CheckAlways"] = 2] = "CheckAlways";
	        /**
	         * `Detached` means that the change detector sub tree is not a part of the main tree and
	         * should be skipped.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Detached"] = 3] = "Detached";
	        /**
	         * `Errored` means that the change detector encountered an error checking a binding
	         * or calling a directive lifecycle method and is now in an inconsistent state. Change
	         * detectors in this state will no longer detect changes.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Errored"] = 4] = "Errored";
	        /**
	         * `Destroyed` means that the change detector is destroyed.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Destroyed"] = 5] = "Destroyed";
	    })(ChangeDetectorStatus || (ChangeDetectorStatus = {}));
	    function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
	        return isBlank(changeDetectionStrategy) ||
	            changeDetectionStrategy === exports.ChangeDetectionStrategy.Default;
	    }
	
	    /**
	     * Directive decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Directive = makeDecorator('Directive', {
	        selector: undefined,
	        inputs: undefined,
	        outputs: undefined,
	        host: undefined,
	        providers: undefined,
	        exportAs: undefined,
	        queries: undefined
	    });
	    /**
	     * Component decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Component = makeDecorator('Component', {
	        selector: undefined,
	        inputs: undefined,
	        outputs: undefined,
	        host: undefined,
	        exportAs: undefined,
	        moduleId: undefined,
	        providers: undefined,
	        viewProviders: undefined,
	        changeDetection: exports.ChangeDetectionStrategy.Default,
	        queries: undefined,
	        templateUrl: undefined,
	        template: undefined,
	        styleUrls: undefined,
	        styles: undefined,
	        animations: undefined,
	        encapsulation: undefined,
	        interpolation: undefined,
	        entryComponents: undefined
	    }, Directive);
	    /**
	     * Pipe decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Pipe = makeDecorator('Pipe', {
	        name: undefined,
	        pure: true,
	    });
	    /**
	     * Input decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Input = makePropDecorator('Input', [['bindingPropertyName', undefined]]);
	    /**
	     * Output decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Output = makePropDecorator('Output', [['bindingPropertyName', undefined]]);
	    /**
	     * HostBinding decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var HostBinding = makePropDecorator('HostBinding', [['hostPropertyName', undefined]]);
	    /**
	     * HostBinding decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var HostListener = makePropDecorator('HostListener', [['eventName', undefined], ['args', []]]);
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @stable
	     */
	    var LifecycleHooks;
	    (function (LifecycleHooks) {
	        LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	        LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	        LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	        LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	        LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	        LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	        LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	        LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	    })(LifecycleHooks || (LifecycleHooks = {}));
	    var LIFECYCLE_HOOKS_VALUES = [
	        LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges,
	        LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit,
	        LifecycleHooks.AfterViewChecked
	    ];
	    /**
	     * @whatItDoes Lifecycle hook that is called when any data-bound property of a directive changes.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}
	     *
	     * @description
	     * `ngOnChanges` is called right after the data-bound properties have been checked and before view
	     * and content children are checked if at least one of them has changed.
	     * The `changes` parameter contains the changed properties.
	     *
	     * See {@linkDocs guide/lifecycle-hooks#onchanges "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnChanges = (function () {
	        function OnChanges() {
	        }
	        return OnChanges;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after data-bound properties of a directive are
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}
	     *
	     * @description
	     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
	     * first time, and before any of its children have been checked. It is invoked only once when the
	     * directive is instantiated.
	     *
	     * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnInit = (function () {
	        function OnInit() {
	        }
	        return OnInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called when Angular dirty checks a directive.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}
	     *
	     * @description
	     * `ngDoCheck` gets called to check the changes in the directives in addition to the default
	     * algorithm. The default change detection algorithm looks for differences by comparing
	     * bound-property values by reference across change detection runs.
	     *
	     * Note that a directive typically should not use both `DoCheck` and {@link OnChanges} to respond to
	     * changes on the same input, as `ngOnChanges` will continue to be called when the default change
	     * detector detects changes.
	     *
	     * See {@link KeyValueDiffers} and {@link IterableDiffers} for implementing custom dirty checking
	     * for collections.
	     *
	     * See {@linkDocs guide/lifecycle-hooks#docheck "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var DoCheck = (function () {
	        function DoCheck() {
	        }
	        return DoCheck;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called when a directive or pipe is destroyed.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}
	     *
	     * @description
	     * `ngOnDestroy` callback is typically used for any custom cleanup that needs to occur when the
	     * instance is destroyed.
	     *
	     * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnDestroy = (function () {
	        function OnDestroy() {
	        }
	        return OnDestroy;
	    }());
	    /**
	     *
	     * @whatItDoes Lifecycle hook that is called after a directive's content has been fully
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterContentInit = (function () {
	        function AfterContentInit() {
	        }
	        return AfterContentInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after every check of a directive's content.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterContentChecked = (function () {
	        function AfterContentChecked() {
	        }
	        return AfterContentChecked;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after a component's view has been fully
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterViewInit = (function () {
	        function AfterViewInit() {
	        }
	        return AfterViewInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after every check of a component's view.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterViewChecked = (function () {
	        function AfterViewChecked() {
	        }
	        return AfterViewChecked;
	    }());
	
	    /**
	     * Defines a schema that will allow:
	     * - any non-Angular elements with a `-` in their name,
	     * - any properties on elements with a `-` in their name which is the common rule for custom
	     * elements.
	     *
	     * @stable
	     */
	    var CUSTOM_ELEMENTS_SCHEMA = {
	        name: 'custom-elements'
	    };
	    /**
	     * Defines a schema that will allow any property on any element.
	     *
	     * @experimental
	     */
	    var NO_ERRORS_SCHEMA = {
	        name: 'no-errors-schema'
	    };
	    /**
	     * NgModule decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var NgModule = makeDecorator('NgModule', {
	        providers: undefined,
	        declarations: undefined,
	        imports: undefined,
	        exports: undefined,
	        entryComponents: undefined,
	        bootstrap: undefined,
	        schemas: undefined,
	        id: undefined,
	    });
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Defines template and style encapsulation options available for Component's {@link Component}.
	     *
	     * See {@link ViewMetadata#encapsulation}.
	     * @stable
	     */
	    exports.ViewEncapsulation;
	    (function (ViewEncapsulation) {
	        /**
	         * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	         * Element and pre-processing the style rules provided via
	         * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	         * attribute to all selectors.
	         *
	         * This is the default option.
	         */
	        ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	        /**
	         * Use the native encapsulation mechanism of the renderer.
	         *
	         * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	         * creating a ShadowRoot for Component's Host Element.
	         */
	        ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	        /**
	         * Don't provide any template or style encapsulation.
	         */
	        ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	    })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	    /**
	     * Metadata properties available for configuring Views.
	     *
	     * For details on the `@Component` annotation, see {@link Component}.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   selector: 'greet',
	     *   template: 'Hello {{name}}!',
	     * })
	     * class Greet {
	     *   name: string;
	     *
	     *   constructor() {
	     *     this.name = 'World';
	     *   }
	     * }
	     * ```
	     *
	     * @deprecated Use Component instead.
	     *
	     * {@link Component}
	     */
	    var ViewMetadata = (function () {
	        function ViewMetadata(_a) {
	            var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls, animations = _b.animations, interpolation = _b.interpolation;
	            this.templateUrl = templateUrl;
	            this.template = template;
	            this.styleUrls = styleUrls;
	            this.styles = styles;
	            this.encapsulation = encapsulation;
	            this.animations = animations;
	            this.interpolation = interpolation;
	        }
	        return ViewMetadata;
	    }());
	
	    /**
	     * Allows to refer to references which are not yet defined.
	     *
	     * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
	     * DI is declared,
	     * but not yet defined. It is also used when the `token` which we use when creating a query is not
	     * yet defined.
	     *
	     * ### Example
	     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
	     * @experimental
	     */
	    function forwardRef(forwardRefFn) {
	        forwardRefFn.__forward_ref__ = forwardRef;
	        forwardRefFn.toString = function () { return stringify(this()); };
	        return forwardRefFn;
	    }
	    /**
	     * Lazily retrieves the reference value from a forwardRef.
	     *
	     * Acts as the identity function when given a non-forward-ref value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
	     *
	     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
	     *
	     * See: {@link forwardRef}
	     * @experimental
	     */
	    function resolveForwardRef(type) {
	        if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') &&
	            type.__forward_ref__ === forwardRef) {
	            return type();
	        }
	        else {
	            return type;
	        }
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * @stable
	     */
	    var BaseError = (function (_super) {
	        __extends(BaseError, _super);
	        function BaseError(message) {
	            // Errors don't use current this, instead they create a new instance.
	            // We have to do forward all of our api to the nativeInstance.
	            var nativeError = _super.call(this, message);
	            this._nativeError = nativeError;
	        }
	        Object.defineProperty(BaseError.prototype, "message", {
	            get: function () { return this._nativeError.message; },
	            set: function (message) { this._nativeError.message = message; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "name", {
	            get: function () { return this._nativeError.name; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "stack", {
	            get: function () { return this._nativeError.stack; },
	            set: function (value) { this._nativeError.stack = value; },
	            enumerable: true,
	            configurable: true
	        });
	        BaseError.prototype.toString = function () { return this._nativeError.toString(); };
	        return BaseError;
	    }(Error));
	    /**
	     * @stable
	     */
	    var WrappedError = (function (_super) {
	        __extends(WrappedError, _super);
	        function WrappedError(message, error) {
	            _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
	            this.originalError = error;
	        }
	        Object.defineProperty(WrappedError.prototype, "stack", {
	            get: function () {
	                return (this.originalError instanceof Error ? this.originalError : this._nativeError)
	                    .stack;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return WrappedError;
	    }(BaseError));
	
	    var _THROW_IF_NOT_FOUND = new Object();
	    var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	    var _NullInjector = (function () {
	        function _NullInjector() {
	        }
	        _NullInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = _THROW_IF_NOT_FOUND; }
	            if (notFoundValue === _THROW_IF_NOT_FOUND) {
	                throw new Error("No provider for " + stringify(token) + "!");
	            }
	            return notFoundValue;
	        };
	        return _NullInjector;
	    }());
	    /**
	     * @whatItDoes Injector interface
	     * @howToUse
	     * ```
	     * const injector: Injector = ...;
	     * injector.get(...);
	     * ```
	     *
	     * @description
	     * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
	     *
	     * ### Example
	     *
	     * {@example core/di/ts/injector_spec.ts region='Injector'}
	     *
	     * `Injector` returns itself when given `Injector` as a token:
	     * {@example core/di/ts/injector_spec.ts region='injectInjector'}
	     *
	     * @stable
	     */
	    var Injector = (function () {
	        function Injector() {
	        }
	        /**
	         * Retrieves an instance from the injector based on the provided token.
	         * If not found:
	         * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
	         * Injector.THROW_IF_NOT_FOUND is given
	         * - Returns the `notFoundValue` otherwise
	         */
	        Injector.prototype.get = function (token, notFoundValue) { return unimplemented(); };
	        Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	        Injector.NULL = new _NullInjector();
	        return Injector;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function findFirstClosedCycle(keys) {
	        var res = [];
	        for (var i = 0; i < keys.length; ++i) {
	            if (res.indexOf(keys[i]) > -1) {
	                res.push(keys[i]);
	                return res;
	            }
	            res.push(keys[i]);
	        }
	        return res;
	    }
	    function constructResolvingPath(keys) {
	        if (keys.length > 1) {
	            var reversed = findFirstClosedCycle(keys.slice().reverse());
	            var tokenStrs = reversed.map(function (k) { return stringify(k.token); });
	            return ' (' + tokenStrs.join(' -> ') + ')';
	        }
	        return '';
	    }
	    /**
	     * Base class for all errors arising from misconfigured providers.
	     * @stable
	     */
	    var AbstractProviderError = (function (_super) {
	        __extends$1(AbstractProviderError, _super);
	        function AbstractProviderError(injector, key, constructResolvingMessage) {
	            _super.call(this, 'DI Error');
	            this.keys = [key];
	            this.injectors = [injector];
	            this.constructResolvingMessage = constructResolvingMessage;
	            this.message = this.constructResolvingMessage(this.keys);
	        }
	        AbstractProviderError.prototype.addKey = function (injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	            this.message = this.constructResolvingMessage(this.keys);
	        };
	        return AbstractProviderError;
	    }(BaseError));
	    /**
	     * Thrown when trying to retrieve a dependency by key from {@link Injector}, but the
	     * {@link Injector} does not have a {@link Provider} for the given key.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor(b:B) {}
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	     * ```
	     * @stable
	     */
	    var NoProviderError = (function (_super) {
	        __extends$1(NoProviderError, _super);
	        function NoProviderError(injector, key) {
	            _super.call(this, injector, key, function (keys) {
	                var first = stringify(keys[0].token);
	                return "No provider for " + first + "!" + constructResolvingPath(keys);
	            });
	        }
	        return NoProviderError;
	    }(AbstractProviderError));
	    /**
	     * Thrown when dependencies form a cycle.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
	     *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
	     * ]);
	     *
	     * expect(() => injector.get("one")).toThrowError();
	     * ```
	     *
	     * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
	     * @stable
	     */
	    var CyclicDependencyError = (function (_super) {
	        __extends$1(CyclicDependencyError, _super);
	        function CyclicDependencyError(injector, key) {
	            _super.call(this, injector, key, function (keys) {
	                return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
	            });
	        }
	        return CyclicDependencyError;
	    }(AbstractProviderError));
	    /**
	     * Thrown when a constructing type returns with an Error.
	     *
	     * The `InstantiationError` class contains the original error plus the dependency graph which caused
	     * this object to be instantiated.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor() {
	     *     throw new Error('message');
	     *   }
	     * }
	     *
	     * var injector = Injector.resolveAndCreate([A]);
	
	     * try {
	     *   injector.get(A);
	     * } catch (e) {
	     *   expect(e instanceof InstantiationError).toBe(true);
	     *   expect(e.originalException.message).toEqual("message");
	     *   expect(e.originalStack).toBeDefined();
	     * }
	     * ```
	     * @stable
	     */
	    var InstantiationError = (function (_super) {
	        __extends$1(InstantiationError, _super);
	        function InstantiationError(injector, originalException, originalStack, key) {
	            _super.call(this, 'DI Error', originalException);
	            this.keys = [key];
	            this.injectors = [injector];
	        }
	        InstantiationError.prototype.addKey = function (injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	        };
	        Object.defineProperty(InstantiationError.prototype, "message", {
	            get: function () {
	                var first = stringify(this.keys[0].token);
	                return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(InstantiationError.prototype, "causeKey", {
	            get: function () { return this.keys[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        return InstantiationError;
	    }(WrappedError));
	    /**
	     * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
	     * creation.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
	     *
	     * ```typescript
	     * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
	     * ```
	     * @stable
	     */
	    var InvalidProviderError = (function (_super) {
	        __extends$1(InvalidProviderError, _super);
	        function InvalidProviderError(provider) {
	            _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
	        }
	        return InvalidProviderError;
	    }(BaseError));
	    /**
	     * Thrown when the class has no annotation information.
	     *
	     * Lack of annotation information prevents the {@link Injector} from determining which dependencies
	     * need to be injected into the constructor.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor(b) {}
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	     * ```
	     *
	     * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
	     *
	     * ```typescript
	     * class B {}
	     *
	     * class A {
	     *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
	     * ```
	     * @stable
	     */
	    var NoAnnotationError = (function (_super) {
	        __extends$1(NoAnnotationError, _super);
	        function NoAnnotationError(typeOrFunc, params) {
	            _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
	        }
	        NoAnnotationError._genMessage = function (typeOrFunc, params) {
	            var signature = [];
	            for (var i = 0, ii = params.length; i < ii; i++) {
	                var parameter = params[i];
	                if (!parameter || parameter.length == 0) {
	                    signature.push('?');
	                }
	                else {
	                    signature.push(parameter.map(stringify).join(' '));
	                }
	            }
	            return 'Cannot resolve all parameters for \'' + stringify(typeOrFunc) + '\'(' +
	                signature.join(', ') + '). ' +
	                'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' +
	                stringify(typeOrFunc) + '\' is decorated with Injectable.';
	        };
	        return NoAnnotationError;
	    }(BaseError));
	    /**
	     * Thrown when getting an object by index.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
	     *
	     * ```typescript
	     * class A {}
	     *
	     * var injector = Injector.resolveAndCreate([A]);
	     *
	     * expect(() => injector.getAt(100)).toThrowError();
	     * ```
	     * @stable
	     */
	    var OutOfBoundsError = (function (_super) {
	        __extends$1(OutOfBoundsError, _super);
	        function OutOfBoundsError(index) {
	            _super.call(this, "Index " + index + " is out-of-bounds.");
	        }
	        return OutOfBoundsError;
	    }(BaseError));
	    // TODO: add a working example after alpha38 is released
	    /**
	     * Thrown when a multi provider and a regular provider are bound to the same token.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * expect(() => Injector.resolveAndCreate([
	     *   { provide: "Strings", useValue: "string1", multi: true},
	     *   { provide: "Strings", useValue: "string2", multi: false}
	     * ])).toThrowError();
	     * ```
	     */
	    var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
	        __extends$1(MixingMultiProvidersWithRegularProvidersError, _super);
	        function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	            _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' +
	                provider2.toString());
	        }
	        return MixingMultiProvidersWithRegularProvidersError;
	    }(BaseError));
	
	    /**
	     * A unique object used for retrieving items from the {@link ReflectiveInjector}.
	     *
	     * Keys have:
	     * - a system-wide unique `id`.
	     * - a `token`.
	     *
	     * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
	     * the
	     * injector to store created objects in a more efficient way.
	     *
	     * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
	     * resolving
	     * providers.
	     * @experimental
	     */
	    var ReflectiveKey = (function () {
	        /**
	         * Private
	         */
	        function ReflectiveKey(token, id) {
	            this.token = token;
	            this.id = id;
	            if (!token) {
	                throw new Error('Token must be defined!');
	            }
	        }
	        Object.defineProperty(ReflectiveKey.prototype, "displayName", {
	            /**
	             * Returns a stringified token.
	             */
	            get: function () { return stringify(this.token); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Retrieves a `Key` for a token.
	         */
	        ReflectiveKey.get = function (token) {
	            return _globalKeyRegistry.get(resolveForwardRef(token));
	        };
	        Object.defineProperty(ReflectiveKey, "numberOfKeys", {
	            /**
	             * @returns the number of keys registered in the system.
	             */
	            get: function () { return _globalKeyRegistry.numberOfKeys; },
	            enumerable: true,
	            configurable: true
	        });
	        return ReflectiveKey;
	    }());
	    /**
	     * @internal
	     */
	    var KeyRegistry = (function () {
	        function KeyRegistry() {
	            this._allKeys = new Map();
	        }
	        KeyRegistry.prototype.get = function (token) {
	            if (token instanceof ReflectiveKey)
	                return token;
	            if (this._allKeys.has(token)) {
	                return this._allKeys.get(token);
	            }
	            var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
	            this._allKeys.set(token, newKey);
	            return newKey;
	        };
	        Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
	            get: function () { return this._allKeys.size; },
	            enumerable: true,
	            configurable: true
	        });
	        return KeyRegistry;
	    }());
	    var _globalKeyRegistry = new KeyRegistry();
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Represents a type that a Component or other object is instances of.
	     *
	     * @description
	     *
	     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	     * the `MyCustomComponent` constructor function.
	     *
	     * @stable
	     */
	    var Type = Function;
	
	    var ReflectionCapabilities = (function () {
	        function ReflectionCapabilities(reflect) {
	            this._reflect = reflect || global$1.Reflect;
	        }
	        ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	        ReflectionCapabilities.prototype.factory = function (t) { return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new (t.bind.apply(t, [void 0].concat(args)))();
	        }; };
	        /** @internal */
	        ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
	            var result;
	            if (typeof paramTypes === 'undefined') {
	                result = new Array(paramAnnotations.length);
	            }
	            else {
	                result = new Array(paramTypes.length);
	            }
	            for (var i = 0; i < result.length; i++) {
	                // TS outputs Object for parameters without types, while Traceur omits
	                // the annotations. For now we preserve the Traceur behavior to aid
	                // migration, but this can be revisited.
	                if (typeof paramTypes === 'undefined') {
	                    result[i] = [];
	                }
	                else if (paramTypes[i] != Object) {
	                    result[i] = [paramTypes[i]];
	                }
	                else {
	                    result[i] = [];
	                }
	                if (paramAnnotations && isPresent(paramAnnotations[i])) {
	                    result[i] = result[i].concat(paramAnnotations[i]);
	                }
	            }
	            return result;
	        };
	        ReflectionCapabilities.prototype.parameters = function (type) {
	            // Prefer the direct API.
	            if (type.parameters) {
	                return type.parameters;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (type.ctorParameters) {
	                var ctorParameters = type.ctorParameters;
	                var paramTypes = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
	                var paramAnnotations = ctorParameters.map(function (ctorParam) {
	                    return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
	                });
	                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	            }
	            // API for metadata created by invoking the decorators.
	            if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
	                var paramAnnotations = this._reflect.getMetadata('parameters', type);
	                var paramTypes = this._reflect.getMetadata('design:paramtypes', type);
	                if (paramTypes || paramAnnotations) {
	                    return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	                }
	            }
	            // The array has to be filled with `undefined` because holes would be skipped by `some`
	            return new Array(type.length).fill(undefined);
	        };
	        ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	            // Prefer the direct API.
	            if (typeOrFunc.annotations) {
	                var annotations = typeOrFunc.annotations;
	                if (typeof annotations === 'function' && annotations.annotations) {
	                    annotations = annotations.annotations;
	                }
	                return annotations;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (typeOrFunc.decorators) {
	                return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
	            }
	            // API for metadata created by invoking the decorators.
	            if (this._reflect && this._reflect.getMetadata) {
	                var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	                if (annotations)
	                    return annotations;
	            }
	            return [];
	        };
	        ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	            // Prefer the direct API.
	            if (typeOrFunc.propMetadata) {
	                var propMetadata = typeOrFunc.propMetadata;
	                if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
	                    propMetadata = propMetadata.propMetadata;
	                }
	                return propMetadata;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (typeOrFunc.propDecorators) {
	                var propDecorators_1 = typeOrFunc.propDecorators;
	                var propMetadata_1 = {};
	                Object.keys(propDecorators_1).forEach(function (prop) {
	                    propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
	                });
	                return propMetadata_1;
	            }
	            // API for metadata created by invoking the decorators.
	            if (this._reflect && this._reflect.getMetadata) {
	                var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	                if (propMetadata)
	                    return propMetadata;
	            }
	            return {};
	        };
	        ReflectionCapabilities.prototype.hasLifecycleHook = function (type, lcProperty) {
	            return type instanceof Type && lcProperty in type.prototype;
	        };
	        ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	        ReflectionCapabilities.prototype.setter = function (name) {
	            return new Function('o', 'v', 'return o.' + name + ' = v;');
	        };
	        ReflectionCapabilities.prototype.method = function (name) {
	            var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	            return new Function('o', 'args', functionBody);
	        };
	        // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	        ReflectionCapabilities.prototype.importUri = function (type) {
	            // StaticSymbol
	            if (typeof type === 'object' && type['filePath']) {
	                return type['filePath'];
	            }
	            // Runtime type
	            return "./" + stringify(type);
	        };
	        ReflectionCapabilities.prototype.resolveIdentifier = function (name, moduleUrl, runtime) { return runtime; };
	        ReflectionCapabilities.prototype.resolveEnum = function (enumIdentifier, name) { return enumIdentifier[name]; };
	        return ReflectionCapabilities;
	    }());
	    function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
	        if (!decoratorInvocations) {
	            return [];
	        }
	        return decoratorInvocations.map(function (decoratorInvocation) {
	            var decoratorType = decoratorInvocation.type;
	            var annotationCls = decoratorType.annotationCls;
	            var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
	            return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
	        });
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Provides read-only access to reflection data about symbols. Used internally by Angular
	     * to power dependency injection and compilation.
	     */
	    var ReflectorReader = (function () {
	        function ReflectorReader() {
	        }
	        return ReflectorReader;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Provides access to reflection data about symbols. Used internally by Angular
	     * to power dependency injection and compilation.
	     */
	    var Reflector = (function (_super) {
	        __extends$2(Reflector, _super);
	        function Reflector(reflectionCapabilities) {
	            _super.call(this);
	            this.reflectionCapabilities = reflectionCapabilities;
	        }
	        Reflector.prototype.updateCapabilities = function (caps) { this.reflectionCapabilities = caps; };
	        Reflector.prototype.factory = function (type) { return this.reflectionCapabilities.factory(type); };
	        Reflector.prototype.parameters = function (typeOrFunc) {
	            return this.reflectionCapabilities.parameters(typeOrFunc);
	        };
	        Reflector.prototype.annotations = function (typeOrFunc) {
	            return this.reflectionCapabilities.annotations(typeOrFunc);
	        };
	        Reflector.prototype.propMetadata = function (typeOrFunc) {
	            return this.reflectionCapabilities.propMetadata(typeOrFunc);
	        };
	        Reflector.prototype.hasLifecycleHook = function (type, lcProperty) {
	            return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
	        };
	        Reflector.prototype.getter = function (name) { return this.reflectionCapabilities.getter(name); };
	        Reflector.prototype.setter = function (name) { return this.reflectionCapabilities.setter(name); };
	        Reflector.prototype.method = function (name) { return this.reflectionCapabilities.method(name); };
	        Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	        Reflector.prototype.resolveIdentifier = function (name, moduleUrl, runtime) {
	            return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
	        };
	        Reflector.prototype.resolveEnum = function (identifier, name) {
	            return this.reflectionCapabilities.resolveEnum(identifier, name);
	        };
	        return Reflector;
	    }(ReflectorReader));
	
	    /**
	     * The {@link Reflector} used internally in Angular to access metadata
	     * about symbols.
	     */
	    var reflector = new Reflector(new ReflectionCapabilities());
	
	    /**
	     * `Dependency` is used by the framework to extend DI.
	     * This is internal to Angular and should not be used directly.
	     */
	    var ReflectiveDependency = (function () {
	        function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	            this.key = key;
	            this.optional = optional;
	            this.lowerBoundVisibility = lowerBoundVisibility;
	            this.upperBoundVisibility = upperBoundVisibility;
	            this.properties = properties;
	        }
	        ReflectiveDependency.fromKey = function (key) {
	            return new ReflectiveDependency(key, false, null, null, []);
	        };
	        return ReflectiveDependency;
	    }());
	    var _EMPTY_LIST = [];
	    var ResolvedReflectiveProvider_ = (function () {
	        function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
	            this.key = key;
	            this.resolvedFactories = resolvedFactories;
	            this.multiProvider = multiProvider;
	        }
	        Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
	            get: function () { return this.resolvedFactories[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        return ResolvedReflectiveProvider_;
	    }());
	    /**
	     * An internal resolved representation of a factory function created by resolving {@link
	     * Provider}.
	     * @experimental
	     */
	    var ResolvedReflectiveFactory = (function () {
	        function ResolvedReflectiveFactory(
	            /**
	             * Factory function which can return an instance of an object represented by a key.
	             */
	            factory,
	            /**
	             * Arguments (dependencies) to the `factory` function.
	             */
	            dependencies) {
	            this.factory = factory;
	            this.dependencies = dependencies;
	        }
	        return ResolvedReflectiveFactory;
	    }());
	    /**
	     * Resolve a single provider.
	     */
	    function resolveReflectiveFactory(provider) {
	        var factoryFn;
	        var resolvedDeps;
	        if (provider.useClass) {
	            var useClass = resolveForwardRef(provider.useClass);
	            factoryFn = reflector.factory(useClass);
	            resolvedDeps = _dependenciesFor(useClass);
	        }
	        else if (provider.useExisting) {
	            factoryFn = function (aliasInstance) { return aliasInstance; };
	            resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
	        }
	        else if (provider.useFactory) {
	            factoryFn = provider.useFactory;
	            resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
	        }
	        else {
	            factoryFn = function () { return provider.useValue; };
	            resolvedDeps = _EMPTY_LIST;
	        }
	        return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
	    }
	    /**
	     * Converts the {@link Provider} into {@link ResolvedProvider}.
	     *
	     * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
	     * convenience provider syntax.
	     */
	    function resolveReflectiveProvider(provider) {
	        return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
	    }
	    /**
	     * Resolve a list of Providers.
	     */
	    function resolveReflectiveProviders(providers) {
	        var normalized = _normalizeProviders(providers, []);
	        var resolved = normalized.map(resolveReflectiveProvider);
	        var resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
	        return Array.from(resolvedProviderMap.values());
	    }
	    /**
	     * Merges a list of ResolvedProviders into a list where
	     * each key is contained exactly once and multi providers
	     * have been merged.
	     */
	    function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
	        for (var i = 0; i < providers.length; i++) {
	            var provider = providers[i];
	            var existing = normalizedProvidersMap.get(provider.key.id);
	            if (existing) {
	                if (provider.multiProvider !== existing.multiProvider) {
	                    throw new MixingMultiProvidersWithRegularProvidersError(existing, provider);
	                }
	                if (provider.multiProvider) {
	                    for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                        existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                    }
	                }
	                else {
	                    normalizedProvidersMap.set(provider.key.id, provider);
	                }
	            }
	            else {
	                var resolvedProvider = void 0;
	                if (provider.multiProvider) {
	                    resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
	                }
	                else {
	                    resolvedProvider = provider;
	                }
	                normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	            }
	        }
	        return normalizedProvidersMap;
	    }
	    function _normalizeProviders(providers, res) {
	        providers.forEach(function (b) {
	            if (b instanceof Type) {
	                res.push({ provide: b, useClass: b });
	            }
	            else if (b && typeof b == 'object' && b.provide !== undefined) {
	                res.push(b);
	            }
	            else if (b instanceof Array) {
	                _normalizeProviders(b, res);
	            }
	            else {
	                throw new InvalidProviderError(b);
	            }
	        });
	        return res;
	    }
	    function constructDependencies(typeOrFunc, dependencies) {
	        if (!dependencies) {
	            return _dependenciesFor(typeOrFunc);
	        }
	        else {
	            var params_1 = dependencies.map(function (t) { return [t]; });
	            return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params_1); });
	        }
	    }
	    function _dependenciesFor(typeOrFunc) {
	        var params = reflector.parameters(typeOrFunc);
	        if (!params)
	            return [];
	        if (params.some(function (p) { return p == null; })) {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	        return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	    }
	    function _extractToken(typeOrFunc, metadata, params) {
	        var depProps = [];
	        var token = null;
	        var optional = false;
	        if (!Array.isArray(metadata)) {
	            if (metadata instanceof Inject) {
	                return _createDependency(metadata.token, optional, null, null, depProps);
	            }
	            else {
	                return _createDependency(metadata, optional, null, null, depProps);
	            }
	        }
	        var lowerBoundVisibility = null;
	        var upperBoundVisibility = null;
	        for (var i = 0; i < metadata.length; ++i) {
	            var paramMetadata = metadata[i];
	            if (paramMetadata instanceof Type) {
	                token = paramMetadata;
	            }
	            else if (paramMetadata instanceof Inject) {
	                token = paramMetadata.token;
	            }
	            else if (paramMetadata instanceof Optional) {
	                optional = true;
	            }
	            else if (paramMetadata instanceof Self) {
	                upperBoundVisibility = paramMetadata;
	            }
	            else if (paramMetadata instanceof Host) {
	                upperBoundVisibility = paramMetadata;
	            }
	            else if (paramMetadata instanceof SkipSelf) {
	                lowerBoundVisibility = paramMetadata;
	            }
	        }
	        token = resolveForwardRef(token);
	        if (token != null) {
	            return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	        }
	        else {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	    }
	    function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
	        return new ReflectiveDependency(ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    }
	
	    // Threshold for the dynamic version
	    var _MAX_CONSTRUCTION_COUNTER = 10;
	    var UNDEFINED = new Object();
	    var ReflectiveProtoInjectorInlineStrategy = (function () {
	        function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
	            this.provider0 = null;
	            this.provider1 = null;
	            this.provider2 = null;
	            this.provider3 = null;
	            this.provider4 = null;
	            this.provider5 = null;
	            this.provider6 = null;
	            this.provider7 = null;
	            this.provider8 = null;
	            this.provider9 = null;
	            this.keyId0 = null;
	            this.keyId1 = null;
	            this.keyId2 = null;
	            this.keyId3 = null;
	            this.keyId4 = null;
	            this.keyId5 = null;
	            this.keyId6 = null;
	            this.keyId7 = null;
	            this.keyId8 = null;
	            this.keyId9 = null;
	            var length = providers.length;
	            if (length > 0) {
	                this.provider0 = providers[0];
	                this.keyId0 = providers[0].key.id;
	            }
	            if (length > 1) {
	                this.provider1 = providers[1];
	                this.keyId1 = providers[1].key.id;
	            }
	            if (length > 2) {
	                this.provider2 = providers[2];
	                this.keyId2 = providers[2].key.id;
	            }
	            if (length > 3) {
	                this.provider3 = providers[3];
	                this.keyId3 = providers[3].key.id;
	            }
	            if (length > 4) {
	                this.provider4 = providers[4];
	                this.keyId4 = providers[4].key.id;
	            }
	            if (length > 5) {
	                this.provider5 = providers[5];
	                this.keyId5 = providers[5].key.id;
	            }
	            if (length > 6) {
	                this.provider6 = providers[6];
	                this.keyId6 = providers[6].key.id;
	            }
	            if (length > 7) {
	                this.provider7 = providers[7];
	                this.keyId7 = providers[7].key.id;
	            }
	            if (length > 8) {
	                this.provider8 = providers[8];
	                this.keyId8 = providers[8].key.id;
	            }
	            if (length > 9) {
	                this.provider9 = providers[9];
	                this.keyId9 = providers[9].key.id;
	            }
	        }
	        ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
	            if (index == 0)
	                return this.provider0;
	            if (index == 1)
	                return this.provider1;
	            if (index == 2)
	                return this.provider2;
	            if (index == 3)
	                return this.provider3;
	            if (index == 4)
	                return this.provider4;
	            if (index == 5)
	                return this.provider5;
	            if (index == 6)
	                return this.provider6;
	            if (index == 7)
	                return this.provider7;
	            if (index == 8)
	                return this.provider8;
	            if (index == 9)
	                return this.provider9;
	            throw new OutOfBoundsError(index);
	        };
	        ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
	            return new ReflectiveInjectorInlineStrategy(injector, this);
	        };
	        return ReflectiveProtoInjectorInlineStrategy;
	    }());
	    var ReflectiveProtoInjectorDynamicStrategy = (function () {
	        function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
	            this.providers = providers;
	            var len = providers.length;
	            this.keyIds = new Array(len);
	            for (var i = 0; i < len; i++) {
	                this.keyIds[i] = providers[i].key.id;
	            }
	        }
	        ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
	            if (index < 0 || index >= this.providers.length) {
	                throw new OutOfBoundsError(index);
	            }
	            return this.providers[index];
	        };
	        ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
	            return new ReflectiveInjectorDynamicStrategy(this, ei);
	        };
	        return ReflectiveProtoInjectorDynamicStrategy;
	    }());
	    var ReflectiveProtoInjector = (function () {
	        function ReflectiveProtoInjector(providers) {
	            this.numberOfProviders = providers.length;
	            this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
	                new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
	                new ReflectiveProtoInjectorInlineStrategy(this, providers);
	        }
	        ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
	            return new ReflectiveProtoInjector(providers);
	        };
	        ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
	            return this._strategy.getProviderAtIndex(index);
	        };
	        return ReflectiveProtoInjector;
	    }());
	    var ReflectiveInjectorInlineStrategy = (function () {
	        function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
	            this.injector = injector;
	            this.protoStrategy = protoStrategy;
	            this.obj0 = UNDEFINED;
	            this.obj1 = UNDEFINED;
	            this.obj2 = UNDEFINED;
	            this.obj3 = UNDEFINED;
	            this.obj4 = UNDEFINED;
	            this.obj5 = UNDEFINED;
	            this.obj6 = UNDEFINED;
	            this.obj7 = UNDEFINED;
	            this.obj8 = UNDEFINED;
	            this.obj9 = UNDEFINED;
	        }
	        ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	        ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
	            return this.injector._new(provider);
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
	            var p = this.protoStrategy;
	            var inj = this.injector;
	            if (p.keyId0 === keyId) {
	                if (this.obj0 === UNDEFINED) {
	                    this.obj0 = inj._new(p.provider0);
	                }
	                return this.obj0;
	            }
	            if (p.keyId1 === keyId) {
	                if (this.obj1 === UNDEFINED) {
	                    this.obj1 = inj._new(p.provider1);
	                }
	                return this.obj1;
	            }
	            if (p.keyId2 === keyId) {
	                if (this.obj2 === UNDEFINED) {
	                    this.obj2 = inj._new(p.provider2);
	                }
	                return this.obj2;
	            }
	            if (p.keyId3 === keyId) {
	                if (this.obj3 === UNDEFINED) {
	                    this.obj3 = inj._new(p.provider3);
	                }
	                return this.obj3;
	            }
	            if (p.keyId4 === keyId) {
	                if (this.obj4 === UNDEFINED) {
	                    this.obj4 = inj._new(p.provider4);
	                }
	                return this.obj4;
	            }
	            if (p.keyId5 === keyId) {
	                if (this.obj5 === UNDEFINED) {
	                    this.obj5 = inj._new(p.provider5);
	                }
	                return this.obj5;
	            }
	            if (p.keyId6 === keyId) {
	                if (this.obj6 === UNDEFINED) {
	                    this.obj6 = inj._new(p.provider6);
	                }
	                return this.obj6;
	            }
	            if (p.keyId7 === keyId) {
	                if (this.obj7 === UNDEFINED) {
	                    this.obj7 = inj._new(p.provider7);
	                }
	                return this.obj7;
	            }
	            if (p.keyId8 === keyId) {
	                if (this.obj8 === UNDEFINED) {
	                    this.obj8 = inj._new(p.provider8);
	                }
	                return this.obj8;
	            }
	            if (p.keyId9 === keyId) {
	                if (this.obj9 === UNDEFINED) {
	                    this.obj9 = inj._new(p.provider9);
	                }
	                return this.obj9;
	            }
	            return UNDEFINED;
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
	            if (index == 0)
	                return this.obj0;
	            if (index == 1)
	                return this.obj1;
	            if (index == 2)
	                return this.obj2;
	            if (index == 3)
	                return this.obj3;
	            if (index == 4)
	                return this.obj4;
	            if (index == 5)
	                return this.obj5;
	            if (index == 6)
	                return this.obj6;
	            if (index == 7)
	                return this.obj7;
	            if (index == 8)
	                return this.obj8;
	            if (index == 9)
	                return this.obj9;
	            throw new OutOfBoundsError(index);
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
	        return ReflectiveInjectorInlineStrategy;
	    }());
	    var ReflectiveInjectorDynamicStrategy = (function () {
	        function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
	            this.protoStrategy = protoStrategy;
	            this.injector = injector;
	            this.objs = new Array(protoStrategy.providers.length).fill(UNDEFINED);
	        }
	        ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	        ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
	            return this.injector._new(provider);
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
	            var p = this.protoStrategy;
	            for (var i = 0; i < p.keyIds.length; i++) {
	                if (p.keyIds[i] === keyId) {
	                    if (this.objs[i] === UNDEFINED) {
	                        this.objs[i] = this.injector._new(p.providers[i]);
	                    }
	                    return this.objs[i];
	                }
	            }
	            return UNDEFINED;
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
	            if (index < 0 || index >= this.objs.length) {
	                throw new OutOfBoundsError(index);
	            }
	            return this.objs[index];
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
	        return ReflectiveInjectorDynamicStrategy;
	    }());
	    /**
	     * A ReflectiveDependency injection container used for instantiating objects and resolving
	     * dependencies.
	     *
	     * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
	     * constructor dependencies.
	     *
	     * In typical use, application code asks for the dependencies in the constructor and they are
	     * resolved by the `Injector`.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
	     *
	     * The following example creates an `Injector` configured to create `Engine` and `Car`.
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	     * var car = injector.get(Car);
	     * expect(car instanceof Car).toBe(true);
	     * expect(car.engine instanceof Engine).toBe(true);
	     * ```
	     *
	     * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
	     * resolve all of the object's dependencies automatically.
	     *
	     * @stable
	     */
	    var ReflectiveInjector = (function () {
	        function ReflectiveInjector() {
	        }
	        /**
	         * Turns an array of provider definitions into an array of resolved providers.
	         *
	         * A resolution is a process of flattening multiple nested arrays and converting individual
	         * providers into an array of {@link ResolvedReflectiveProvider}s.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	         *
	         * expect(providers.length).toEqual(2);
	         *
	         * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	         * expect(providers[0].key.displayName).toBe("Car");
	         * expect(providers[0].dependencies.length).toEqual(1);
	         * expect(providers[0].factory).toBeDefined();
	         *
	         * expect(providers[1].key.displayName).toBe("Engine");
	         * });
	         * ```
	         *
	         * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
	         */
	        ReflectiveInjector.resolve = function (providers) {
	            return resolveReflectiveProviders(providers);
	        };
	        /**
	         * Resolves an array of providers and creates an injector from those providers.
	         *
	         * The passed-in providers can be an array of `Type`, {@link Provider},
	         * or a recursive array of more providers.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	         * expect(injector.get(Car) instanceof Car).toBe(true);
	         * ```
	         *
	         * This function is slower than the corresponding `fromResolvedProviders`
	         * because it needs to resolve the passed-in providers first.
	         * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
	         */
	        ReflectiveInjector.resolveAndCreate = function (providers, parent) {
	            if (parent === void 0) { parent = null; }
	            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	            return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
	        };
	        /**
	         * Creates an injector from previously resolved providers.
	         *
	         * This API is the recommended way to construct injectors in performance-sensitive parts.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var providers = ReflectiveInjector.resolve([Car, Engine]);
	         * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	         * expect(injector.get(Car) instanceof Car).toBe(true);
	         * ```
	         * @experimental
	         */
	        ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
	            if (parent === void 0) { parent = null; }
	            return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
	        };
	        Object.defineProperty(ReflectiveInjector.prototype, "parent", {
	            /**
	             * Parent of this injector.
	             *
	             * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	             * -->
	             *
	             * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
	             *
	             * ```typescript
	             * var parent = ReflectiveInjector.resolveAndCreate([]);
	             * var child = parent.resolveAndCreateChild([]);
	             * expect(child.parent).toBe(parent);
	             * ```
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Resolves an array of providers and creates a child injector from those providers.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * The passed-in providers can be an array of `Type`, {@link Provider},
	         * or a recursive array of more providers.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
	         *
	         * ```typescript
	         * class ParentProvider {}
	         * class ChildProvider {}
	         *
	         * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	         * var child = parent.resolveAndCreateChild([ChildProvider]);
	         *
	         * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	         * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	         * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	         * ```
	         *
	         * This function is slower than the corresponding `createChildFromResolved`
	         * because it needs to resolve the passed-in providers first.
	         * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
	         */
	        ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) { return unimplemented(); };
	        /**
	         * Creates a child injector from previously resolved providers.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * This API is the recommended way to construct injectors in performance-sensitive parts.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
	         *
	         * ```typescript
	         * class ParentProvider {}
	         * class ChildProvider {}
	         *
	         * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	         * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	         *
	         * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	         * var child = parent.createChildFromResolved(childProviders);
	         *
	         * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	         * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	         * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	         * ```
	         */
	        ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
	            return unimplemented();
	        };
	        /**
	         * Resolves a provider and instantiates an object in the context of the injector.
	         *
	         * The created object does not get cached by the injector.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	         *
	         * var car = injector.resolveAndInstantiate(Car);
	         * expect(car.engine).toBe(injector.get(Engine));
	         * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	         * ```
	         */
	        ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return unimplemented(); };
	        /**
	         * Instantiates an object using a resolved provider in the context of the injector.
	         *
	         * The created object does not get cached by the injector.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	         * var carProvider = ReflectiveInjector.resolve([Car])[0];
	         * var car = injector.instantiateResolved(carProvider);
	         * expect(car.engine).toBe(injector.get(Engine));
	         * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	         * ```
	         */
	        ReflectiveInjector.prototype.instantiateResolved = function (provider) { return unimplemented(); };
	        return ReflectiveInjector;
	    }());
	    var ReflectiveInjector_ = (function () {
	        /**
	         * Private
	         */
	        function ReflectiveInjector_(_proto /* ProtoInjector */, _parent) {
	            if (_parent === void 0) { _parent = null; }
	            /** @internal */
	            this._constructionCounter = 0;
	            this._proto = _proto;
	            this._parent = _parent;
	            this._strategy = _proto._strategy.createInjectorStrategy(this);
	        }
	        ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            return this._getByKey(ReflectiveKey.get(token), null, null, notFoundValue);
	        };
	        ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
	        Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
	            /**
	             * @internal
	             * Internal. Do not use.
	             * We return `any` not to export the InjectorStrategy type.
	             */
	            get: function () { return this._strategy; },
	            enumerable: true,
	            configurable: true
	        });
	        ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
	            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	            return this.createChildFromResolved(ResolvedReflectiveProviders);
	        };
	        ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
	            var proto = new ReflectiveProtoInjector(providers);
	            var inj = new ReflectiveInjector_(proto);
	            inj._parent = this;
	            return inj;
	        };
	        ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
	            return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
	        };
	        ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
	            return this._instantiateProvider(provider);
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._new = function (provider) {
	            if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	                throw new CyclicDependencyError(this, provider.key);
	            }
	            return this._instantiateProvider(provider);
	        };
	        ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
	            if (provider.multiProvider) {
	                var res = new Array(provider.resolvedFactories.length);
	                for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                    res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
	                }
	                return res;
	            }
	            else {
	                return this._instantiate(provider, provider.resolvedFactories[0]);
	            }
	        };
	        ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
	            var factory = ResolvedReflectiveFactory.factory;
	            var deps = ResolvedReflectiveFactory.dependencies;
	            var length = deps.length;
	            var d0;
	            var d1;
	            var d2;
	            var d3;
	            var d4;
	            var d5;
	            var d6;
	            var d7;
	            var d8;
	            var d9;
	            var d10;
	            var d11;
	            var d12;
	            var d13;
	            var d14;
	            var d15;
	            var d16;
	            var d17;
	            var d18;
	            var d19;
	            try {
	                d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
	                d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
	                d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
	                d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
	                d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
	                d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
	                d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
	                d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
	                d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
	                d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
	                d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
	                d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
	                d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
	                d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
	                d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
	                d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
	                d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
	                d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
	                d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
	                d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
	            }
	            catch (e) {
	                if (e instanceof AbstractProviderError || e instanceof InstantiationError) {
	                    e.addKey(this, provider.key);
	                }
	                throw e;
	            }
	            var obj;
	            try {
	                switch (length) {
	                    case 0:
	                        obj = factory();
	                        break;
	                    case 1:
	                        obj = factory(d0);
	                        break;
	                    case 2:
	                        obj = factory(d0, d1);
	                        break;
	                    case 3:
	                        obj = factory(d0, d1, d2);
	                        break;
	                    case 4:
	                        obj = factory(d0, d1, d2, d3);
	                        break;
	                    case 5:
	                        obj = factory(d0, d1, d2, d3, d4);
	                        break;
	                    case 6:
	                        obj = factory(d0, d1, d2, d3, d4, d5);
	                        break;
	                    case 7:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                        break;
	                    case 8:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                        break;
	                    case 9:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                        break;
	                    case 10:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                        break;
	                    case 11:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                        break;
	                    case 12:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                        break;
	                    case 13:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                        break;
	                    case 14:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                        break;
	                    case 15:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                        break;
	                    case 16:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                        break;
	                    case 17:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                        break;
	                    case 18:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                        break;
	                    case 19:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                        break;
	                    case 20:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                        break;
	                    default:
	                        throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
	                }
	            }
	            catch (e) {
	                throw new InstantiationError(this, e, e.stack, provider.key);
	            }
	            return obj;
	        };
	        ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
	            return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : THROW_IF_NOT_FOUND);
	        };
	        ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
	            if (key === INJECTOR_KEY) {
	                return this;
	            }
	            if (upperBoundVisibility instanceof Self) {
	                return this._getByKeySelf(key, notFoundValue);
	            }
	            else {
	                return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
	            }
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
	            if (notFoundValue !== THROW_IF_NOT_FOUND) {
	                return notFoundValue;
	            }
	            else {
	                throw new NoProviderError(this, key);
	            }
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
	            var obj = this._strategy.getObjByKeyId(key.id);
	            return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
	            var inj;
	            if (lowerBoundVisibility instanceof SkipSelf) {
	                inj = this._parent;
	            }
	            else {
	                inj = this;
	            }
	            while (inj instanceof ReflectiveInjector_) {
	                var inj_ = inj;
	                var obj = inj_._strategy.getObjByKeyId(key.id);
	                if (obj !== UNDEFINED)
	                    return obj;
	                inj = inj_._parent;
	            }
	            if (inj !== null) {
	                return inj.get(key.token, notFoundValue);
	            }
	            else {
	                return this._throwOrNull(key, notFoundValue);
	            }
	        };
	        Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
	            get: function () {
	                var providers = _mapProviders(this, function (b) { return ' "' + b.key.displayName + '" '; })
	                    .join(', ');
	                return "ReflectiveInjector(providers: [" + providers + "])";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
	        return ReflectiveInjector_;
	    }());
	    var INJECTOR_KEY = ReflectiveKey.get(Injector);
	    function _mapProviders(injector, fn) {
	        var res = new Array(injector._proto.numberOfProviders);
	        for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	            res[i] = fn(injector._proto.getProviderAtIndex(i));
	        }
	        return res;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Provides a hook for centralized exception handling.
	     *
	     * @description
	     *
	     * The default implementation of `ErrorHandler` prints error messages to the `console`. To
	     * intercept error handling, write a custom exception handler that replaces this default as
	     * appropriate for your app.
	     *
	     * ### Example
	     *
	     * ```
	     * class MyErrorHandler implements ErrorHandler {
	     *   handleError(error) {
	     *     // do something with the exception
	     *   }
	     * }
	     *
	     * @NgModule({
	     *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
	     * })
	     * class MyModule {}
	     * ```
	     *
	     * @stable
	     */
	    var ErrorHandler = (function () {
	        function ErrorHandler(rethrowError) {
	            if (rethrowError === void 0) { rethrowError = true; }
	            /**
	             * @internal
	             */
	            this._console = console;
	            this.rethrowError = rethrowError;
	        }
	        ErrorHandler.prototype.handleError = function (error) {
	            var originalError = this._findOriginalError(error);
	            var originalStack = this._findOriginalStack(error);
	            var context = this._findContext(error);
	            this._console.error("EXCEPTION: " + this._extractMessage(error));
	            if (originalError) {
	                this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
	            }
	            if (originalStack) {
	                this._console.error('ORIGINAL STACKTRACE:');
	                this._console.error(originalStack);
	            }
	            if (context) {
	                this._console.error('ERROR CONTEXT:');
	                this._console.error(context);
	            }
	            // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	            // when an error happens. If we do not rethrow, bootstrap will always succeed.
	            if (this.rethrowError)
	                throw error;
	        };
	        /** @internal */
	        ErrorHandler.prototype._extractMessage = function (error) {
	            return error instanceof Error ? error.message : error.toString();
	        };
	        /** @internal */
	        ErrorHandler.prototype._findContext = function (error) {
	            if (error) {
	                return error.context ? error.context :
	                    this._findContext(error.originalError);
	            }
	            return null;
	        };
	        /** @internal */
	        ErrorHandler.prototype._findOriginalError = function (error) {
	            var e = error.originalError;
	            while (e && e.originalError) {
	                e = e.originalError;
	            }
	            return e;
	        };
	        /** @internal */
	        ErrorHandler.prototype._findOriginalStack = function (error) {
	            if (!(error instanceof Error))
	                return null;
	            var e = error;
	            var stack = e.stack;
	            while (e instanceof Error && e.originalError) {
	                e = e.originalError;
	                if (e instanceof Error && e.stack) {
	                    stack = e.stack;
	                }
	            }
	            return stack;
	        };
	        return ErrorHandler;
	    }());
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return flat.concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	    function isListLikeIterable(obj) {
	        if (!isJsObject(obj))
	            return false;
	        return Array.isArray(obj) ||
	            (!(obj instanceof Map) &&
	                getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	    }
	    function areIterablesEqual(a, b, comparator) {
	        var iterator1 = a[getSymbolIterator()]();
	        var iterator2 = b[getSymbolIterator()]();
	        while (true) {
	            var item1 = iterator1.next();
	            var item2 = iterator2.next();
	            if (item1.done && item2.done)
	                return true;
	            if (item1.done || item2.done)
	                return false;
	            if (!comparator(item1.value, item2.value))
	                return false;
	        }
	    }
	    function iterateListLike(obj, fn) {
	        if (Array.isArray(obj)) {
	            for (var i = 0; i < obj.length; i++) {
	                fn(obj[i]);
	            }
	        }
	        else {
	            var iterator = obj[getSymbolIterator()]();
	            var item = void 0;
	            while (!((item = iterator.next()).done)) {
	                fn(item.value);
	            }
	        }
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return !!obj && typeof obj.then === 'function';
	    }
	
	    /**
	     * A function that will be executed when an application is initialized.
	     * @experimental
	     */
	    var APP_INITIALIZER = new OpaqueToken('Application Initializer');
	    /**
	     * A class that reflects the state of running {@link APP_INITIALIZER}s.
	     *
	     * @experimental
	     */
	    var ApplicationInitStatus = (function () {
	        function ApplicationInitStatus(appInits) {
	            var _this = this;
	            this._done = false;
	            var asyncInitPromises = [];
	            if (appInits) {
	                for (var i = 0; i < appInits.length; i++) {
	                    var initResult = appInits[i]();
	                    if (isPromise(initResult)) {
	                        asyncInitPromises.push(initResult);
	                    }
	                }
	            }
	            this._donePromise = Promise.all(asyncInitPromises).then(function () { _this._done = true; });
	            if (asyncInitPromises.length === 0) {
	                this._done = true;
	            }
	        }
	        Object.defineProperty(ApplicationInitStatus.prototype, "done", {
	            get: function () { return this._done; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
	            get: function () { return this._donePromise; },
	            enumerable: true,
	            configurable: true
	        });
	        ApplicationInitStatus.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ApplicationInitStatus.ctorParameters = [
	            { type: Array, decorators: [{ type: Inject, args: [APP_INITIALIZER,] }, { type: Optional },] },
	        ];
	        return ApplicationInitStatus;
	    }());
	
	    /**
	     * A DI Token representing a unique string id assigned to the application by Angular and used
	     * primarily for prefixing application attributes and CSS styles when
	     * {@link ViewEncapsulation#Emulated} is being used.
	     *
	     * If you need to avoid randomly generated value to be used as an application id, you can provide
	     * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
	     * using this token.
	     * @experimental
	     */
	    var APP_ID = new OpaqueToken('AppId');
	    function _appIdRandomProviderFactory() {
	        return "" + _randomChar() + _randomChar() + _randomChar();
	    }
	    /**
	     * Providers that will generate a random APP_ID_TOKEN.
	     * @experimental
	     */
	    var APP_ID_RANDOM_PROVIDER = {
	        provide: APP_ID,
	        useFactory: _appIdRandomProviderFactory,
	        deps: [],
	    };
	    function _randomChar() {
	        return String.fromCharCode(97 + Math.floor(Math.random() * 25));
	    }
	    /**
	     * A function that will be executed when a platform is initialized.
	     * @experimental
	     */
	    var PLATFORM_INITIALIZER = new OpaqueToken('Platform Initializer');
	    /**
	     * All callbacks provided via this token will be called for every component that is bootstrapped.
	     * Signature of the callback:
	     *
	     * `(componentRef: ComponentRef) => void`.
	     *
	     * @experimental
	     */
	    var APP_BOOTSTRAP_LISTENER = new OpaqueToken('appBootstrapListener');
	    /**
	     * A token which indicates the root directory of the application
	     * @experimental
	     */
	    var PACKAGE_ROOT_URL = new OpaqueToken('Application Packages Root URL');
	
	    var Console = (function () {
	        function Console() {
	        }
	        Console.prototype.log = function (message) { print(message); };
	        // Note: for reporting errors use `DOM.logError()` as it is platform specific
	        Console.prototype.warn = function (message) { warn(message); };
	        Console.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        Console.ctorParameters = [];
	        return Console;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a component is still being loaded in a synchronous compile.
	     *
	     * @stable
	     */
	    var ComponentStillLoadingError = (function (_super) {
	        __extends$4(ComponentStillLoadingError, _super);
	        function ComponentStillLoadingError(compType) {
	            _super.call(this, "Can't compile synchronously as " + stringify(compType) + " is still being loaded!");
	            this.compType = compType;
	        }
	        return ComponentStillLoadingError;
	    }(BaseError));
	    /**
	     * Combination of NgModuleFactory and ComponentFactorys.
	     *
	     * @experimental
	     */
	    var ModuleWithComponentFactories = (function () {
	        function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
	            this.ngModuleFactory = ngModuleFactory;
	            this.componentFactories = componentFactories;
	        }
	        return ModuleWithComponentFactories;
	    }());
	    function _throwError() {
	        throw new Error("Runtime compiler is not loaded");
	    }
	    /**
	     * Low-level service for running the angular compiler during runtime
	     * to create {@link ComponentFactory}s, which
	     * can later be used to create and render a Component instance.
	     *
	     * Each `@NgModule` provides an own `Compiler` to its injector,
	     * that will use the directives/pipes of the ng module for compilation
	     * of components.
	     * @stable
	     */
	    var Compiler = (function () {
	        function Compiler() {
	        }
	        /**
	         * Compiles the given NgModule and all of its components. All templates of the components listed
	         * in `entryComponents`
	         * have to be inlined. Otherwise throws a {@link ComponentStillLoadingError}.
	         */
	        Compiler.prototype.compileModuleSync = function (moduleType) { throw _throwError(); };
	        /**
	         * Compiles the given NgModule and all of its components
	         */
	        Compiler.prototype.compileModuleAsync = function (moduleType) { throw _throwError(); };
	        /**
	         * Same as {@link compileModuleSync} but also creates ComponentFactories for all components.
	         */
	        Compiler.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
	            throw _throwError();
	        };
	        /**
	         * Same as {@link compileModuleAsync} but also creates ComponentFactories for all components.
	         */
	        Compiler.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
	            throw _throwError();
	        };
	        /**
	         * Clears all caches.
	         */
	        Compiler.prototype.clearCache = function () { };
	        /**
	         * Clears the cache for the given component/ngModule.
	         */
	        Compiler.prototype.clearCacheFor = function (type) { };
	        return Compiler;
	    }());
	    /**
	     * Token to provide CompilerOptions in the platform injector.
	     *
	     * @experimental
	     */
	    var COMPILER_OPTIONS = new OpaqueToken('compilerOptions');
	    /**
	     * A factory for creating a Compiler
	     *
	     * @experimental
	     */
	    var CompilerFactory = (function () {
	        function CompilerFactory() {
	        }
	        return CompilerFactory;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * A wrapper around a native element inside of a View.
	     *
	     * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
	     * element.
	     *
	     * @security Permitting direct access to the DOM can make your application more vulnerable to
	     * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
	     * [Security Guide](http://g.co/ng/security).
	     *
	     * @stable
	     */
	    // Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
	    // i.e. users have to ask for what they need. With that, we can build better analysis tools
	    // and could do better codegen in the future.
	    var ElementRef = (function () {
	        function ElementRef(nativeElement) {
	            this.nativeElement = nativeElement;
	        }
	        return ElementRef;
	    }());
	
	    var DefaultIterableDifferFactory = (function () {
	        function DefaultIterableDifferFactory() {
	        }
	        DefaultIterableDifferFactory.prototype.supports = function (obj) { return isListLikeIterable(obj); };
	        DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
	            return new DefaultIterableDiffer(trackByFn);
	        };
	        return DefaultIterableDifferFactory;
	    }());
	    var trackByIdentity = function (index, item) { return item; };
	    /**
	     * @stable
	     */
	    var DefaultIterableDiffer = (function () {
	        function DefaultIterableDiffer(_trackByFn) {
	            this._trackByFn = _trackByFn;
	            this._length = null;
	            this._collection = null;
	            // Keeps track of the used records at any point in time (during & across `_check()` calls)
	            this._linkedRecords = null;
	            // Keeps track of the removed records at any point in time during `_check()` calls.
	            this._unlinkedRecords = null;
	            this._previousItHead = null;
	            this._itHead = null;
	            this._itTail = null;
	            this._additionsHead = null;
	            this._additionsTail = null;
	            this._movesHead = null;
	            this._movesTail = null;
	            this._removalsHead = null;
	            this._removalsTail = null;
	            // Keeps track of records where custom track by is the same, but item identity has changed
	            this._identityChangesHead = null;
	            this._identityChangesTail = null;
	            this._trackByFn = this._trackByFn || trackByIdentity;
	        }
	        Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
	            get: function () { return this._collection; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
	            get: function () { return this._length; },
	            enumerable: true,
	            configurable: true
	        });
	        DefaultIterableDiffer.prototype.forEachItem = function (fn) {
	            var record;
	            for (record = this._itHead; record !== null; record = record._next) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachOperation = function (fn) {
	            var nextIt = this._itHead;
	            var nextRemove = this._removalsHead;
	            var addRemoveOffset = 0;
	            var moveOffsets = null;
	            while (nextIt || nextRemove) {
	                // Figure out which is the next record to process
	                // Order: remove, add, move
	                var record = !nextRemove ||
	                    nextIt &&
	                        nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ?
	                    nextIt :
	                    nextRemove;
	                var adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
	                var currentIndex = record.currentIndex;
	                // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
	                if (record === nextRemove) {
	                    addRemoveOffset--;
	                    nextRemove = nextRemove._nextRemoved;
	                }
	                else {
	                    nextIt = nextIt._next;
	                    if (record.previousIndex == null) {
	                        addRemoveOffset++;
	                    }
	                    else {
	                        // INVARIANT:  currentIndex < previousIndex
	                        if (!moveOffsets)
	                            moveOffsets = [];
	                        var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
	                        var localCurrentIndex = currentIndex - addRemoveOffset;
	                        if (localMovePreviousIndex != localCurrentIndex) {
	                            for (var i = 0; i < localMovePreviousIndex; i++) {
	                                var offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
	                                var index = offset + i;
	                                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
	                                    moveOffsets[i] = offset + 1;
	                                }
	                            }
	                            var previousIndex = record.previousIndex;
	                            moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
	                        }
	                    }
	                }
	                if (adjPreviousIndex !== currentIndex) {
	                    fn(record, adjPreviousIndex, currentIndex);
	                }
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
	            var record;
	            for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
	            var record;
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
	            var record;
	            for (record = this._movesHead; record !== null; record = record._nextMoved) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
	            var record;
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
	            var record;
	            for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.diff = function (collection) {
	            if (isBlank(collection))
	                collection = [];
	            if (!isListLikeIterable(collection)) {
	                throw new Error("Error trying to diff '" + collection + "'");
	            }
	            if (this.check(collection)) {
	                return this;
	            }
	            else {
	                return null;
	            }
	        };
	        DefaultIterableDiffer.prototype.onDestroy = function () { };
	        // todo(vicb): optim for UnmodifiableListView (frozen arrays)
	        DefaultIterableDiffer.prototype.check = function (collection) {
	            var _this = this;
	            this._reset();
	            var record = this._itHead;
	            var mayBeDirty = false;
	            var index;
	            var item;
	            var itemTrackBy;
	            if (Array.isArray(collection)) {
	                var list = collection;
	                this._length = collection.length;
	                for (var index_1 = 0; index_1 < this._length; index_1++) {
	                    item = list[index_1];
	                    itemTrackBy = this._trackByFn(index_1, item);
	                    if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
	                        record = this._mismatch(record, item, itemTrackBy, index_1);
	                        mayBeDirty = true;
	                    }
	                    else {
	                        if (mayBeDirty) {
	                            // TODO(misko): can we limit this to duplicates only?
	                            record = this._verifyReinsertion(record, item, itemTrackBy, index_1);
	                        }
	                        if (!looseIdentical(record.item, item))
	                            this._addIdentityChange(record, item);
	                    }
	                    record = record._next;
	                }
	            }
	            else {
	                index = 0;
	                iterateListLike(collection, function (item /** TODO #9100 */) {
	                    itemTrackBy = _this._trackByFn(index, item);
	                    if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
	                        record = _this._mismatch(record, item, itemTrackBy, index);
	                        mayBeDirty = true;
	                    }
	                    else {
	                        if (mayBeDirty) {
	                            // TODO(misko): can we limit this to duplicates only?
	                            record = _this._verifyReinsertion(record, item, itemTrackBy, index);
	                        }
	                        if (!looseIdentical(record.item, item))
	                            _this._addIdentityChange(record, item);
	                    }
	                    record = record._next;
	                    index++;
	                });
	                this._length = index;
	            }
	            this._truncate(record);
	            this._collection = collection;
	            return this.isDirty;
	        };
	        Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
	            /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
	             * changes.
	             */
	            get: function () {
	                return this._additionsHead !== null || this._movesHead !== null ||
	                    this._removalsHead !== null || this._identityChangesHead !== null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Reset the state of the change objects to show no changes. This means set previousKey to
	         * currentKey, and clear all of the queues (additions, moves, removals).
	         * Set the previousIndexes of moved and added items to their currentIndexes
	         * Reset the list of additions, moves and removals
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._reset = function () {
	            if (this.isDirty) {
	                var record = void 0;
	                var nextRecord = void 0;
	                for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	                    record._nextPrevious = record._next;
	                }
	                for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                    record.previousIndex = record.currentIndex;
	                }
	                this._additionsHead = this._additionsTail = null;
	                for (record = this._movesHead; record !== null; record = nextRecord) {
	                    record.previousIndex = record.currentIndex;
	                    nextRecord = record._nextMoved;
	                }
	                this._movesHead = this._movesTail = null;
	                this._removalsHead = this._removalsTail = null;
	                this._identityChangesHead = this._identityChangesTail = null;
	            }
	        };
	        /**
	         * This is the core function which handles differences between collections.
	         *
	         * - `record` is the record which we saw at this position last time. If null then it is a new
	         *   item.
	         * - `item` is the current item in the collection
	         * - `index` is the position of the item in the collection
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
	            // The previous record after which we will append the current one.
	            var previousRecord;
	            if (record === null) {
	                previousRecord = this._itTail;
	            }
	            else {
	                previousRecord = record._prev;
	                // Remove the record from the collection since we know it does not match the item.
	                this._remove(record);
	            }
	            // Attempt to see if we have seen the item before.
	            record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
	            if (record !== null) {
	                // We have seen this before, we need to move it forward in the collection.
	                // But first we need to check if identity changed, so we can update in view if necessary
	                if (!looseIdentical(record.item, item))
	                    this._addIdentityChange(record, item);
	                this._moveAfter(record, previousRecord, index);
	            }
	            else {
	                // Never seen it, check evicted list.
	                record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	                if (record !== null) {
	                    // It is an item which we have evicted earlier: reinsert it back into the list.
	                    // But first we need to check if identity changed, so we can update in view if necessary
	                    if (!looseIdentical(record.item, item))
	                        this._addIdentityChange(record, item);
	                    this._reinsertAfter(record, previousRecord, index);
	                }
	                else {
	                    // It is a new item: add it.
	                    record =
	                        this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
	                }
	            }
	            return record;
	        };
	        /**
	         * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
	         *
	         * Use case: `[a, a]` => `[b, a, a]`
	         *
	         * If we did not have this check then the insertion of `b` would:
	         *   1) evict first `a`
	         *   2) insert `b` at `0` index.
	         *   3) leave `a` at index `1` as is. <-- this is wrong!
	         *   3) reinsert `a` at index 2. <-- this is wrong!
	         *
	         * The correct behavior is:
	         *   1) evict first `a`
	         *   2) insert `b` at `0` index.
	         *   3) reinsert `a` at index 1.
	         *   3) move `a` at from `1` to `2`.
	         *
	         *
	         * Double check that we have not evicted a duplicate item. We need to check if the item type may
	         * have already been removed:
	         * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
	         * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
	         * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
	         * at the end.
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
	            var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	            if (reinsertRecord !== null) {
	                record = this._reinsertAfter(reinsertRecord, record._prev, index);
	            }
	            else if (record.currentIndex != index) {
	                record.currentIndex = index;
	                this._addToMoves(record, index);
	            }
	            return record;
	        };
	        /**
	         * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
	         *
	         * - `record` The first excess {@link CollectionChangeRecord}.
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._truncate = function (record) {
	            // Anything after that needs to be removed;
	            while (record !== null) {
	                var nextRecord = record._next;
	                this._addToRemovals(this._unlink(record));
	                record = nextRecord;
	            }
	            if (this._unlinkedRecords !== null) {
	                this._unlinkedRecords.clear();
	            }
	            if (this._additionsTail !== null) {
	                this._additionsTail._nextAdded = null;
	            }
	            if (this._movesTail !== null) {
	                this._movesTail._nextMoved = null;
	            }
	            if (this._itTail !== null) {
	                this._itTail._next = null;
	            }
	            if (this._removalsTail !== null) {
	                this._removalsTail._nextRemoved = null;
	            }
	            if (this._identityChangesTail !== null) {
	                this._identityChangesTail._nextIdentityChange = null;
	            }
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
	            if (this._unlinkedRecords !== null) {
	                this._unlinkedRecords.remove(record);
	            }
	            var prev = record._prevRemoved;
	            var next = record._nextRemoved;
	            if (prev === null) {
	                this._removalsHead = next;
	            }
	            else {
	                prev._nextRemoved = next;
	            }
	            if (next === null) {
	                this._removalsTail = prev;
	            }
	            else {
	                next._prevRemoved = prev;
	            }
	            this._insertAfter(record, prevRecord, index);
	            this._addToMoves(record, index);
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
	            this._unlink(record);
	            this._insertAfter(record, prevRecord, index);
	            this._addToMoves(record, index);
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
	            this._insertAfter(record, prevRecord, index);
	            if (this._additionsTail === null) {
	                // todo(vicb)
	                // assert(this._additionsHead === null);
	                this._additionsTail = this._additionsHead = record;
	            }
	            else {
	                // todo(vicb)
	                // assert(_additionsTail._nextAdded === null);
	                // assert(record._nextAdded === null);
	                this._additionsTail = this._additionsTail._nextAdded = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
	            // todo(vicb)
	            // assert(record != prevRecord);
	            // assert(record._next === null);
	            // assert(record._prev === null);
	            var next = prevRecord === null ? this._itHead : prevRecord._next;
	            // todo(vicb)
	            // assert(next != record);
	            // assert(prevRecord != record);
	            record._next = next;
	            record._prev = prevRecord;
	            if (next === null) {
	                this._itTail = record;
	            }
	            else {
	                next._prev = record;
	            }
	            if (prevRecord === null) {
	                this._itHead = record;
	            }
	            else {
	                prevRecord._next = record;
	            }
	            if (this._linkedRecords === null) {
	                this._linkedRecords = new _DuplicateMap();
	            }
	            this._linkedRecords.put(record);
	            record.currentIndex = index;
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._remove = function (record) {
	            return this._addToRemovals(this._unlink(record));
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._unlink = function (record) {
	            if (this._linkedRecords !== null) {
	                this._linkedRecords.remove(record);
	            }
	            var prev = record._prev;
	            var next = record._next;
	            // todo(vicb)
	            // assert((record._prev = null) === null);
	            // assert((record._next = null) === null);
	            if (prev === null) {
	                this._itHead = next;
	            }
	            else {
	                prev._next = next;
	            }
	            if (next === null) {
	                this._itTail = prev;
	            }
	            else {
	                next._prev = prev;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
	            // todo(vicb)
	            // assert(record._nextMoved === null);
	            if (record.previousIndex === toIndex) {
	                return record;
	            }
	            if (this._movesTail === null) {
	                // todo(vicb)
	                // assert(_movesHead === null);
	                this._movesTail = this._movesHead = record;
	            }
	            else {
	                // todo(vicb)
	                // assert(_movesTail._nextMoved === null);
	                this._movesTail = this._movesTail._nextMoved = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addToRemovals = function (record) {
	            if (this._unlinkedRecords === null) {
	                this._unlinkedRecords = new _DuplicateMap();
	            }
	            this._unlinkedRecords.put(record);
	            record.currentIndex = null;
	            record._nextRemoved = null;
	            if (this._removalsTail === null) {
	                // todo(vicb)
	                // assert(_removalsHead === null);
	                this._removalsTail = this._removalsHead = record;
	                record._prevRemoved = null;
	            }
	            else {
	                // todo(vicb)
	                // assert(_removalsTail._nextRemoved === null);
	                // assert(record._nextRemoved === null);
	                record._prevRemoved = this._removalsTail;
	                this._removalsTail = this._removalsTail._nextRemoved = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
	            record.item = item;
	            if (this._identityChangesTail === null) {
	                this._identityChangesTail = this._identityChangesHead = record;
	            }
	            else {
	                this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
	            }
	            return record;
	        };
	        DefaultIterableDiffer.prototype.toString = function () {
	            var list = [];
	            this.forEachItem(function (record /** TODO #9100 */) { return list.push(record); });
	            var previous = [];
	            this.forEachPreviousItem(function (record /** TODO #9100 */) { return previous.push(record); });
	            var additions = [];
	            this.forEachAddedItem(function (record /** TODO #9100 */) { return additions.push(record); });
	            var moves = [];
	            this.forEachMovedItem(function (record /** TODO #9100 */) { return moves.push(record); });
	            var removals = [];
	            this.forEachRemovedItem(function (record /** TODO #9100 */) { return removals.push(record); });
	            var identityChanges = [];
	            this.forEachIdentityChange(function (record /** TODO #9100 */) { return identityChanges.push(record); });
	            return 'collection: ' + list.join(', ') + '\n' +
	                'previous: ' + previous.join(', ') + '\n' +
	                'additions: ' + additions.join(', ') + '\n' +
	                'moves: ' + moves.join(', ') + '\n' +
	                'removals: ' + removals.join(', ') + '\n' +
	                'identityChanges: ' + identityChanges.join(', ') + '\n';
	        };
	        return DefaultIterableDiffer;
	    }());
	    /**
	     * @stable
	     */
	    var CollectionChangeRecord = (function () {
	        function CollectionChangeRecord(item, trackById) {
	            this.item = item;
	            this.trackById = trackById;
	            this.currentIndex = null;
	            this.previousIndex = null;
	            /** @internal */
	            this._nextPrevious = null;
	            /** @internal */
	            this._prev = null;
	            /** @internal */
	            this._next = null;
	            /** @internal */
	            this._prevDup = null;
	            /** @internal */
	            this._nextDup = null;
	            /** @internal */
	            this._prevRemoved = null;
	            /** @internal */
	            this._nextRemoved = null;
	            /** @internal */
	            this._nextAdded = null;
	            /** @internal */
	            this._nextMoved = null;
	            /** @internal */
	            this._nextIdentityChange = null;
	        }
	        CollectionChangeRecord.prototype.toString = function () {
	            return this.previousIndex === this.currentIndex ? stringify(this.item) :
	                stringify(this.item) + '[' +
	                    stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']';
	        };
	        return CollectionChangeRecord;
	    }());
	    // A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
	    var _DuplicateItemRecordList = (function () {
	        function _DuplicateItemRecordList() {
	            /** @internal */
	            this._head = null;
	            /** @internal */
	            this._tail = null;
	        }
	        /**
	         * Append the record to the list of duplicates.
	         *
	         * Note: by design all records in the list of duplicates hold the same value in record.item.
	         */
	        _DuplicateItemRecordList.prototype.add = function (record) {
	            if (this._head === null) {
	                this._head = this._tail = record;
	                record._nextDup = null;
	                record._prevDup = null;
	            }
	            else {
	                // todo(vicb)
	                // assert(record.item ==  _head.item ||
	                //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
	                this._tail._nextDup = record;
	                record._prevDup = this._tail;
	                record._nextDup = null;
	                this._tail = record;
	            }
	        };
	        // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
	        // CollectionChangeRecord.currentIndex >= afterIndex
	        _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
	            var record;
	            for (record = this._head; record !== null; record = record._nextDup) {
	                if ((afterIndex === null || afterIndex < record.currentIndex) &&
	                    looseIdentical(record.trackById, trackById)) {
	                    return record;
	                }
	            }
	            return null;
	        };
	        /**
	         * Remove one {@link CollectionChangeRecord} from the list of duplicates.
	         *
	         * Returns whether the list of duplicates is empty.
	         */
	        _DuplicateItemRecordList.prototype.remove = function (record) {
	            // todo(vicb)
	            // assert(() {
	            //  // verify that the record being removed is in the list.
	            //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
	            //    if (identical(cursor, record)) return true;
	            //  }
	            //  return false;
	            //});
	            var prev = record._prevDup;
	            var next = record._nextDup;
	            if (prev === null) {
	                this._head = next;
	            }
	            else {
	                prev._nextDup = next;
	            }
	            if (next === null) {
	                this._tail = prev;
	            }
	            else {
	                next._prevDup = prev;
	            }
	            return this._head === null;
	        };
	        return _DuplicateItemRecordList;
	    }());
	    var _DuplicateMap = (function () {
	        function _DuplicateMap() {
	            this.map = new Map();
	        }
	        _DuplicateMap.prototype.put = function (record) {
	            var key = record.trackById;
	            var duplicates = this.map.get(key);
	            if (!duplicates) {
	                duplicates = new _DuplicateItemRecordList();
	                this.map.set(key, duplicates);
	            }
	            duplicates.add(record);
	        };
	        /**
	         * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
	         * have already iterated over, we use the afterIndex to pretend it is not there.
	         *
	         * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
	         * have any more `a`s needs to return the last `a` not the first or second.
	         */
	        _DuplicateMap.prototype.get = function (trackById, afterIndex) {
	            if (afterIndex === void 0) { afterIndex = null; }
	            var key = trackById;
	            var recordList = this.map.get(key);
	            return recordList ? recordList.get(trackById, afterIndex) : null;
	        };
	        /**
	         * Removes a {@link CollectionChangeRecord} from the list of duplicates.
	         *
	         * The list of duplicates also is removed from the map if it gets empty.
	         */
	        _DuplicateMap.prototype.remove = function (record) {
	            var key = record.trackById;
	            var recordList = this.map.get(key);
	            // Remove the list of duplicates when it gets empty
	            if (recordList.remove(record)) {
	                this.map.delete(key);
	            }
	            return record;
	        };
	        Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
	            get: function () { return this.map.size === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        _DuplicateMap.prototype.clear = function () { this.map.clear(); };
	        _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + stringify(this.map) + ')'; };
	        return _DuplicateMap;
	    }());
	    function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
	        var previousIndex = item.previousIndex;
	        if (previousIndex === null)
	            return previousIndex;
	        var moveOffset = 0;
	        if (moveOffsets && previousIndex < moveOffsets.length) {
	            moveOffset = moveOffsets[previousIndex];
	        }
	        return previousIndex + addRemoveOffset + moveOffset;
	    }
	
	    var DefaultKeyValueDifferFactory = (function () {
	        function DefaultKeyValueDifferFactory() {
	        }
	        DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || isJsObject(obj); };
	        DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
	        return DefaultKeyValueDifferFactory;
	    }());
	    var DefaultKeyValueDiffer = (function () {
	        function DefaultKeyValueDiffer() {
	            this._records = new Map();
	            this._mapHead = null;
	            this._previousMapHead = null;
	            this._changesHead = null;
	            this._changesTail = null;
	            this._additionsHead = null;
	            this._additionsTail = null;
	            this._removalsHead = null;
	            this._removalsTail = null;
	        }
	        Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
	            get: function () {
	                return this._additionsHead !== null || this._changesHead !== null ||
	                    this._removalsHead !== null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
	            var record;
	            for (record = this._mapHead; record !== null; record = record._next) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
	            var record;
	            for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
	            var record;
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
	            var record;
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
	            var record;
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.diff = function (map) {
	            if (!map) {
	                map = new Map();
	            }
	            else if (!(map instanceof Map || isJsObject(map))) {
	                throw new Error("Error trying to diff '" + map + "'");
	            }
	            return this.check(map) ? this : null;
	        };
	        DefaultKeyValueDiffer.prototype.onDestroy = function () { };
	        DefaultKeyValueDiffer.prototype.check = function (map) {
	            var _this = this;
	            this._reset();
	            var records = this._records;
	            var oldSeqRecord = this._mapHead;
	            var lastOldSeqRecord = null;
	            var lastNewSeqRecord = null;
	            var seqChanged = false;
	            this._forEach(map, function (value, key) {
	                var newSeqRecord;
	                if (oldSeqRecord && key === oldSeqRecord.key) {
	                    newSeqRecord = oldSeqRecord;
	                    _this._maybeAddToChanges(newSeqRecord, value);
	                }
	                else {
	                    seqChanged = true;
	                    if (oldSeqRecord !== null) {
	                        _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	                        _this._addToRemovals(oldSeqRecord);
	                    }
	                    if (records.has(key)) {
	                        newSeqRecord = records.get(key);
	                        _this._maybeAddToChanges(newSeqRecord, value);
	                    }
	                    else {
	                        newSeqRecord = new KeyValueChangeRecord(key);
	                        records.set(key, newSeqRecord);
	                        newSeqRecord.currentValue = value;
	                        _this._addToAdditions(newSeqRecord);
	                    }
	                }
	                if (seqChanged) {
	                    if (_this._isInRemovals(newSeqRecord)) {
	                        _this._removeFromRemovals(newSeqRecord);
	                    }
	                    if (lastNewSeqRecord == null) {
	                        _this._mapHead = newSeqRecord;
	                    }
	                    else {
	                        lastNewSeqRecord._next = newSeqRecord;
	                    }
	                }
	                lastOldSeqRecord = oldSeqRecord;
	                lastNewSeqRecord = newSeqRecord;
	                oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
	            });
	            this._truncate(lastOldSeqRecord, oldSeqRecord);
	            return this.isDirty;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._reset = function () {
	            if (this.isDirty) {
	                var record = void 0;
	                // Record the state of the mapping
	                for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	                    record._nextPrevious = record._next;
	                }
	                for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                    record.previousValue = record.currentValue;
	                }
	                for (record = this._additionsHead; record != null; record = record._nextAdded) {
	                    record.previousValue = record.currentValue;
	                }
	                this._changesHead = this._changesTail = null;
	                this._additionsHead = this._additionsTail = null;
	                this._removalsHead = this._removalsTail = null;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
	            while (record !== null) {
	                if (lastRecord === null) {
	                    this._mapHead = null;
	                }
	                else {
	                    lastRecord._next = null;
	                }
	                var nextRecord = record._next;
	                this._addToRemovals(record);
	                lastRecord = record;
	                record = nextRecord;
	            }
	            for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
	                rec.previousValue = rec.currentValue;
	                rec.currentValue = null;
	                this._records.delete(rec.key);
	            }
	        };
	        DefaultKeyValueDiffer.prototype._maybeAddToChanges = function (record, newValue) {
	            if (!looseIdentical(newValue, record.currentValue)) {
	                record.previousValue = record.currentValue;
	                record.currentValue = newValue;
	                this._addToChanges(record);
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
	            return record === this._removalsHead || record._nextRemoved !== null ||
	                record._prevRemoved !== null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
	            if (this._removalsHead === null) {
	                this._removalsHead = this._removalsTail = record;
	            }
	            else {
	                this._removalsTail._nextRemoved = record;
	                record._prevRemoved = this._removalsTail;
	                this._removalsTail = record;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
	            var next = record._next;
	            if (prev === null) {
	                this._mapHead = next;
	            }
	            else {
	                prev._next = next;
	            }
	            record._next = null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
	            var prev = record._prevRemoved;
	            var next = record._nextRemoved;
	            if (prev === null) {
	                this._removalsHead = next;
	            }
	            else {
	                prev._nextRemoved = next;
	            }
	            if (next === null) {
	                this._removalsTail = prev;
	            }
	            else {
	                next._prevRemoved = prev;
	            }
	            record._prevRemoved = record._nextRemoved = null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
	            if (this._additionsHead === null) {
	                this._additionsHead = this._additionsTail = record;
	            }
	            else {
	                this._additionsTail._nextAdded = record;
	                this._additionsTail = record;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
	            if (this._changesHead === null) {
	                this._changesHead = this._changesTail = record;
	            }
	            else {
	                this._changesTail._nextChanged = record;
	                this._changesTail = record;
	            }
	        };
	        DefaultKeyValueDiffer.prototype.toString = function () {
	            var items = [];
	            var previous = [];
	            var changes = [];
	            var additions = [];
	            var removals = [];
	            var record;
	            for (record = this._mapHead; record !== null; record = record._next) {
	                items.push(stringify(record));
	            }
	            for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	                previous.push(stringify(record));
	            }
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                changes.push(stringify(record));
	            }
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                additions.push(stringify(record));
	            }
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                removals.push(stringify(record));
	            }
	            return 'map: ' + items.join(', ') + '\n' +
	                'previous: ' + previous.join(', ') + '\n' +
	                'additions: ' + additions.join(', ') + '\n' +
	                'changes: ' + changes.join(', ') + '\n' +
	                'removals: ' + removals.join(', ') + '\n';
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
	            if (obj instanceof Map) {
	                obj.forEach(fn);
	            }
	            else {
	                Object.keys(obj).forEach(function (k) { return fn(obj[k], k); });
	            }
	        };
	        return DefaultKeyValueDiffer;
	    }());
	    /**
	     * @stable
	     */
	    var KeyValueChangeRecord = (function () {
	        function KeyValueChangeRecord(key) {
	            this.key = key;
	            this.previousValue = null;
	            this.currentValue = null;
	            /** @internal */
	            this._nextPrevious = null;
	            /** @internal */
	            this._next = null;
	            /** @internal */
	            this._nextAdded = null;
	            /** @internal */
	            this._nextRemoved = null;
	            /** @internal */
	            this._prevRemoved = null;
	            /** @internal */
	            this._nextChanged = null;
	        }
	        KeyValueChangeRecord.prototype.toString = function () {
	            return looseIdentical(this.previousValue, this.currentValue) ?
	                stringify(this.key) :
	                (stringify(this.key) + '[' + stringify(this.previousValue) + '->' +
	                    stringify(this.currentValue) + ']');
	        };
	        return KeyValueChangeRecord;
	    }());
	
	    /**
	     * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
	     * @stable
	     */
	    var IterableDiffers = (function () {
	        function IterableDiffers(factories) {
	            this.factories = factories;
	        }
	        IterableDiffers.create = function (factories, parent) {
	            if (isPresent(parent)) {
	                var copied = parent.factories.slice();
	                factories = factories.concat(copied);
	                return new IterableDiffers(factories);
	            }
	            else {
	                return new IterableDiffers(factories);
	            }
	        };
	        /**
	         * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	         * inherited {@link IterableDiffers} instance with the provided factories and return a new
	         * {@link IterableDiffers} instance.
	         *
	         * The following example shows how to extend an existing list of factories,
	               * which will only be applied to the injector for this component and its children.
	               * This step is all that's required to make a new {@link IterableDiffer} available.
	         *
	         * ### Example
	         *
	         * ```
	         * @Component({
	         *   viewProviders: [
	         *     IterableDiffers.extend([new ImmutableListDiffer()])
	         *   ]
	         * })
	         * ```
	         */
	        IterableDiffers.extend = function (factories) {
	            return {
	                provide: IterableDiffers,
	                useFactory: function (parent) {
	                    if (!parent) {
	                        // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
	                        // to
	                        // bootstrap(), which would override default pipes instead of extending them.
	                        throw new Error('Cannot extend IterableDiffers without a parent injector');
	                    }
	                    return IterableDiffers.create(factories, parent);
	                },
	                // Dependency technically isn't optional, but we can provide a better error message this way.
	                deps: [[IterableDiffers, new SkipSelf(), new Optional()]]
	            };
	        };
	        IterableDiffers.prototype.find = function (iterable) {
	            var factory = this.factories.find(function (f) { return f.supports(iterable); });
	            if (isPresent(factory)) {
	                return factory;
	            }
	            else {
	                throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + getTypeNameForDebugging(iterable) + "'");
	            }
	        };
	        return IterableDiffers;
	    }());
	
	    /**
	     * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
	     * @stable
	     */
	    var KeyValueDiffers = (function () {
	        function KeyValueDiffers(factories) {
	            this.factories = factories;
	        }
	        KeyValueDiffers.create = function (factories, parent) {
	            if (isPresent(parent)) {
	                var copied = parent.factories.slice();
	                factories = factories.concat(copied);
	                return new KeyValueDiffers(factories);
	            }
	            else {
	                return new KeyValueDiffers(factories);
	            }
	        };
	        /**
	         * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	         * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	         * {@link KeyValueDiffers} instance.
	         *
	         * The following example shows how to extend an existing list of factories,
	               * which will only be applied to the injector for this component and its children.
	               * This step is all that's required to make a new {@link KeyValueDiffer} available.
	         *
	         * ### Example
	         *
	         * ```
	         * @Component({
	         *   viewProviders: [
	         *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	         *   ]
	         * })
	         * ```
	         */
	        KeyValueDiffers.extend = function (factories) {
	            return {
	                provide: KeyValueDiffers,
	                useFactory: function (parent) {
	                    if (!parent) {
	                        // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
	                        // to
	                        // bootstrap(), which would override default pipes instead of extending them.
	                        throw new Error('Cannot extend KeyValueDiffers without a parent injector');
	                    }
	                    return KeyValueDiffers.create(factories, parent);
	                },
	                // Dependency technically isn't optional, but we can provide a better error message this way.
	                deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
	            };
	        };
	        KeyValueDiffers.prototype.find = function (kv) {
	            var factory = this.factories.find(function (f) { return f.supports(kv); });
	            if (isPresent(factory)) {
	                return factory;
	            }
	            else {
	                throw new Error("Cannot find a differ supporting object '" + kv + "'");
	            }
	        };
	        return KeyValueDiffers;
	    }());
	
	    var UNINITIALIZED = {
	        toString: function () { return 'CD_INIT_VALUE'; }
	    };
	    function devModeEqual(a, b) {
	        if (isListLikeIterable(a) && isListLikeIterable(b)) {
	            return areIterablesEqual(a, b, devModeEqual);
	        }
	        else if (!isListLikeIterable(a) && !isPrimitive(a) && !isListLikeIterable(b) && !isPrimitive(b)) {
	            return true;
	        }
	        else {
	            return looseIdentical(a, b);
	        }
	    }
	    /**
	     * Indicates that the result of a {@link Pipe} transformation has changed even though the
	     * reference
	     * has not changed.
	     *
	     * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
	     *
	     * Example:
	     *
	     * ```
	     * if (this._latestValue === this._latestReturnedValue) {
	     *    return this._latestReturnedValue;
	     *  } else {
	     *    this._latestReturnedValue = this._latestValue;
	     *    return WrappedValue.wrap(this._latestValue); // this will force update
	     *  }
	     * ```
	     * @stable
	     */
	    var WrappedValue = (function () {
	        function WrappedValue(wrapped) {
	            this.wrapped = wrapped;
	        }
	        WrappedValue.wrap = function (value) { return new WrappedValue(value); };
	        return WrappedValue;
	    }());
	    /**
	     * Helper class for unwrapping WrappedValue s
	     */
	    var ValueUnwrapper = (function () {
	        function ValueUnwrapper() {
	            this.hasWrappedValue = false;
	        }
	        ValueUnwrapper.prototype.unwrap = function (value) {
	            if (value instanceof WrappedValue) {
	                this.hasWrappedValue = true;
	                return value.wrapped;
	            }
	            return value;
	        };
	        ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
	        return ValueUnwrapper;
	    }());
	    /**
	     * Represents a basic change from a previous to a new value.
	     * @stable
	     */
	    var SimpleChange = (function () {
	        function SimpleChange(previousValue, currentValue) {
	            this.previousValue = previousValue;
	            this.currentValue = currentValue;
	        }
	        /**
	         * Check whether the new value is the first value assigned.
	         */
	        SimpleChange.prototype.isFirstChange = function () { return this.previousValue === UNINITIALIZED; };
	        return SimpleChange;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @stable
	     */
	    var ChangeDetectorRef = (function () {
	        function ChangeDetectorRef() {
	        }
	        return ChangeDetectorRef;
	    }());
	
	    /**
	     * Structural diffing for `Object`s and `Map`s.
	     */
	    var keyValDiff = [new DefaultKeyValueDifferFactory()];
	    /**
	     * Structural diffing for `Iterable` types such as `Array`s.
	     */
	    var iterableDiff = [new DefaultIterableDifferFactory()];
	    var defaultIterableDiffers = new IterableDiffers(iterableDiff);
	    var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);
	
	    /**
	     * @experimental
	     */
	    // TODO (matsko): add typing for the animation function
	    var RenderComponentType = (function () {
	        function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
	            this.id = id;
	            this.templateUrl = templateUrl;
	            this.slotCount = slotCount;
	            this.encapsulation = encapsulation;
	            this.styles = styles;
	            this.animations = animations;
	        }
	        return RenderComponentType;
	    }());
	    var RenderDebugInfo = (function () {
	        function RenderDebugInfo() {
	        }
	        Object.defineProperty(RenderDebugInfo.prototype, "injector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "component", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "references", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "context", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "source", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return RenderDebugInfo;
	    }());
	    /**
	     * @experimental
	     */
	    var Renderer = (function () {
	        function Renderer() {
	        }
	        return Renderer;
	    }());
	    /**
	     * Injectable service that provides a low-level interface for modifying the UI.
	     *
	     * Use this service to bypass Angular's templating and make custom UI changes that can't be
	     * expressed declaratively. For example if you need to set a property or an attribute whose name is
	     * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
	     * respectively.
	     *
	     * If you are implementing a custom renderer, you must implement this interface.
	     *
	     * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
	     * @experimental
	     */
	    var RootRenderer = (function () {
	        function RootRenderer() {
	        }
	        return RootRenderer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
	     * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
	     * handled.
	     *
	     * See DomSanitizer for more details on security in Angular applications.
	     *
	     * @stable
	     */
	    exports.SecurityContext;
	    (function (SecurityContext) {
	        SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
	        SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
	        SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
	        SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
	        SecurityContext[SecurityContext["URL"] = 4] = "URL";
	        SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
	    })(exports.SecurityContext || (exports.SecurityContext = {}));
	    /**
	     * Sanitizer is used by the views to sanitize potentially dangerous values.
	     *
	     * @stable
	     */
	    var Sanitizer = (function () {
	        function Sanitizer() {
	        }
	        return Sanitizer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * An error thrown if application changes model breaking the top-down data flow.
	     *
	     * This exception is only thrown in dev mode.
	     *
	     * <!-- TODO: Add a link once the dev mode option is configurable -->
	     *
	     * ### Example
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'parent',
	     *   template: '<child [prop]="parentProp"></child>',
	     * })
	     * class Parent {
	     *   parentProp = 'init';
	     * }
	     *
	     * @Directive({selector: 'child', inputs: ['prop']})
	     * class Child {
	     *   constructor(public parent: Parent) {}
	     *
	     *   set prop(v) {
	     *     // this updates the parent property, which is disallowed during change detection
	     *     // this will result in ExpressionChangedAfterItHasBeenCheckedError
	     *     this.parent.parentProp = 'updated';
	     *   }
	     * }
	     * ```
	     * @stable
	     */
	    var ExpressionChangedAfterItHasBeenCheckedError = (function (_super) {
	        __extends$6(ExpressionChangedAfterItHasBeenCheckedError, _super);
	        function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
	            var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
	            if (oldValue === UNINITIALIZED) {
	                msg +=
	                    " It seems like the view has been created after its parent and its children have been dirty checked." +
	                        " Has it been created in a change detection hook ?";
	            }
	            _super.call(this, msg);
	        }
	        return ExpressionChangedAfterItHasBeenCheckedError;
	    }(BaseError));
	    /**
	     * Thrown when an exception was raised during view creation, change detection or destruction.
	     *
	     * This error wraps the original exception to attach additional contextual information that can
	     * be useful for debugging.
	     * @stable
	     */
	    var ViewWrappedError = (function (_super) {
	        __extends$6(ViewWrappedError, _super);
	        function ViewWrappedError(originalError, context) {
	            _super.call(this, "Error in " + context.source, originalError);
	            this.context = context;
	        }
	        return ViewWrappedError;
	    }(WrappedError));
	    /**
	     * Thrown when a destroyed view is used.
	     *
	     * This error indicates a bug in the framework.
	     *
	     * This is an internal Angular error.
	     * @stable
	     */
	    var ViewDestroyedError = (function (_super) {
	        __extends$6(ViewDestroyedError, _super);
	        function ViewDestroyedError(details) {
	            _super.call(this, "Attempt to use a destroyed view: " + details);
	        }
	        return ViewDestroyedError;
	    }(BaseError));
	
	    var ViewUtils = (function () {
	        function ViewUtils(_renderer, sanitizer) {
	            this._renderer = _renderer;
	            this._nextCompTypeId = 0;
	            this.sanitizer = sanitizer;
	        }
	        /** @internal */
	        ViewUtils.prototype.renderComponent = function (renderComponentType) {
	            return this._renderer.renderComponent(renderComponentType);
	        };
	        ViewUtils.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ViewUtils.ctorParameters = [
	            { type: RootRenderer, },
	            { type: Sanitizer, },
	        ];
	        return ViewUtils;
	    }());
	    var nextRenderComponentTypeId = 0;
	    function createRenderComponentType(templateUrl, slotCount, encapsulation, styles, animations) {
	        return new RenderComponentType("" + nextRenderComponentTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
	    }
	    function addToArray(e, array) {
	        array.push(e);
	    }
	    function interpolate(valueCount, constAndInterp) {
	        var result = '';
	        for (var i = 0; i < valueCount * 2; i = i + 2) {
	            result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
	        }
	        return result + constAndInterp[valueCount * 2];
	    }
	    function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
	        switch (valueCount) {
	            case 1:
	                return c0 + _toStringWithNull(a1) + c1;
	            case 2:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
	            case 3:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3;
	            case 4:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4;
	            case 5:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
	            case 6:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
	            case 7:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7;
	            case 8:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
	            case 9:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
	            default:
	                throw new Error("Does not support more than 9 expressions");
	        }
	    }
	    function _toStringWithNull(v) {
	        return v != null ? v.toString() : '';
	    }
	    function checkBinding(throwOnChange, oldValue, newValue) {
	        if (throwOnChange) {
	            if (!devModeEqual(oldValue, newValue)) {
	                throw new ExpressionChangedAfterItHasBeenCheckedError(oldValue, newValue);
	            }
	            return false;
	        }
	        else {
	            return !looseIdentical(oldValue, newValue);
	        }
	    }
	    function castByValue(input, value) {
	        return input;
	    }
	    var EMPTY_ARRAY = [];
	    var EMPTY_MAP = {};
	    function pureProxy1(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        return function (p0) {
	            if (!looseIdentical(v0, p0)) {
	                v0 = p0;
	                result = fn(p0);
	            }
	            return result;
	        };
	    }
	    function pureProxy2(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        var v1 = UNINITIALIZED;
	        return function (p0, p1) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1)) {
	                v0 = p0;
	                v1 = p1;
	                result = fn(p0, p1);
	            }
	            return result;
	        };
	    }
	    function pureProxy3(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        var v1 = UNINITIALIZED;
	        var v2 = UNINITIALIZED;
	        return function (p0, p1, p2) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                result = fn(p0, p1, p2);
	            }
	            return result;
	        };
	    }
	    function pureProxy4(fn) {
	        var result;
	        var v0, v1, v2, v3;
	        v0 = v1 = v2 = v3 = UNINITIALIZED;
	        return function (p0, p1, p2, p3) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                result = fn(p0, p1, p2, p3);
	            }
	            return result;
	        };
	    }
	    function pureProxy5(fn) {
	        var result;
	        var v0, v1, v2, v3, v4;
	        v0 = v1 = v2 = v3 = v4 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                result = fn(p0, p1, p2, p3, p4);
	            }
	            return result;
	        };
	    }
	    function pureProxy6(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5;
	        v0 = v1 = v2 = v3 = v4 = v5 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                result = fn(p0, p1, p2, p3, p4, p5);
	            }
	            return result;
	        };
	    }
	    function pureProxy7(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                result = fn(p0, p1, p2, p3, p4, p5, p6);
	            }
	            return result;
	        };
	    }
	    function pureProxy8(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
	            }
	            return result;
	        };
	    }
	    function pureProxy9(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7, v8;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                v8 = p8;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
	            }
	            return result;
	        };
	    }
	    function pureProxy10(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8) ||
	                !looseIdentical(v9, p9)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                v8 = p8;
	                v9 = p9;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
	            }
	            return result;
	        };
	    }
	    function setBindingDebugInfoForChanges(renderer, el, changes) {
	        Object.keys(changes).forEach(function (propName) {
	            setBindingDebugInfo(renderer, el, propName, changes[propName].currentValue);
	        });
	    }
	    function setBindingDebugInfo(renderer, el, propName, value) {
	        try {
	            renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), value ? value.toString() : null);
	        }
	        catch (e) {
	            renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), '[ERROR] Exception while trying to serialize the value');
	        }
	    }
	    var CAMEL_CASE_REGEXP = /([A-Z])/g;
	    function camelCaseToDashCase(input) {
	        return input.replace(CAMEL_CASE_REGEXP, function () {
	            var m = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                m[_i - 0] = arguments[_i];
	            }
	            return '-' + m[1].toLowerCase();
	        });
	    }
	    function createRenderElement(renderer, parentElement, name, attrs, debugInfo) {
	        var el = renderer.createElement(parentElement, name, debugInfo);
	        for (var i = 0; i < attrs.length; i += 2) {
	            renderer.setElementAttribute(el, attrs.get(i), attrs.get(i + 1));
	        }
	        return el;
	    }
	    function selectOrCreateRenderHostElement(renderer, elementName, attrs, rootSelectorOrNode, debugInfo) {
	        var hostElement;
	        if (isPresent(rootSelectorOrNode)) {
	            hostElement = renderer.selectRootElement(rootSelectorOrNode, debugInfo);
	            for (var i = 0; i < attrs.length; i += 2) {
	                renderer.setElementAttribute(hostElement, attrs.get(i), attrs.get(i + 1));
	            }
	        }
	        else {
	            hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
	        }
	        return hostElement;
	    }
	    function subscribeToRenderElement(view, element, eventNamesAndTargets, listener) {
	        var disposables = createEmptyInlineArray(eventNamesAndTargets.length / 2);
	        for (var i = 0; i < eventNamesAndTargets.length; i += 2) {
	            var eventName = eventNamesAndTargets.get(i);
	            var eventTarget = eventNamesAndTargets.get(i + 1);
	            var disposable = void 0;
	            if (eventTarget) {
	                disposable = view.renderer.listenGlobal(eventTarget, eventName, listener.bind(view, eventTarget + ":" + eventName));
	            }
	            else {
	                disposable = view.renderer.listen(element, eventName, listener.bind(view, eventName));
	            }
	            disposables.set(i / 2, disposable);
	        }
	        return disposeInlineArray.bind(null, disposables);
	    }
	    function disposeInlineArray(disposables) {
	        for (var i = 0; i < disposables.length; i++) {
	            disposables.get(i)();
	        }
	    }
	    function noop() { }
	    function createEmptyInlineArray(length) {
	        var ctor;
	        if (length <= 2) {
	            ctor = InlineArray2;
	        }
	        else if (length <= 4) {
	            ctor = InlineArray4;
	        }
	        else if (length <= 8) {
	            ctor = InlineArray8;
	        }
	        else if (length <= 16) {
	            ctor = InlineArray16;
	        }
	        else {
	            ctor = InlineArrayDynamic;
	        }
	        return new ctor(length);
	    }
	    var InlineArray0 = (function () {
	        function InlineArray0() {
	            this.length = 0;
	        }
	        InlineArray0.prototype.get = function (index) { return undefined; };
	        InlineArray0.prototype.set = function (index, value) { };
	        return InlineArray0;
	    }());
	    var InlineArray2 = (function () {
	        function InlineArray2(length, _v0, _v1) {
	            this.length = length;
	            this._v0 = _v0;
	            this._v1 = _v1;
	        }
	        InlineArray2.prototype.get = function (index) {
	            switch (index) {
	                case 0:
	                    return this._v0;
	                case 1:
	                    return this._v1;
	                default:
	                    return undefined;
	            }
	        };
	        InlineArray2.prototype.set = function (index, value) {
	            switch (index) {
	                case 0:
	                    this._v0 = value;
	                    break;
	                case 1:
	                    this._v1 = value;
	                    break;
	            }
	        };
	        return InlineArray2;
	    }());
	    var InlineArray4 = (function () {
	        function InlineArray4(length, _v0, _v1, _v2, _v3) {
	            this.length = length;
	            this._v0 = _v0;
	            this._v1 = _v1;
	            this._v2 = _v2;
	            this._v3 = _v3;
	        }
	        InlineArray4.prototype.get = function (index) {
	            switch (index) {
	                case 0:
	                    return this._v0;
	                case 1:
	                    return this._v1;
	                case 2:
	                    return this._v2;
	                case 3:
	                    return this._v3;
	                default:
	                    return undefined;
	            }
	        };
	        InlineArray4.prototype.set = function (index, value) {
	            switch (index) {
	                case 0:
	                    this._v0 = value;
	                    break;
	                case 1:
	                    this._v1 = value;
	                    break;
	                case 2:
	                    this._v2 = value;
	                    break;
	                case 3:
	                    this._v3 = value;
	                    break;
	            }
	        };
	        return InlineArray4;
	    }());
	    var InlineArray8 = (function () {
	        function InlineArray8(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
	            this.length = length;
	            this._v0 = _v0;
	            this._v1 = _v1;
	            this._v2 = _v2;
	            this._v3 = _v3;
	            this._v4 = _v4;
	            this._v5 = _v5;
	            this._v6 = _v6;
	            this._v7 = _v7;
	        }
	        InlineArray8.prototype.get = function (index) {
	            switch (index) {
	                case 0:
	                    return this._v0;
	                case 1:
	                    return this._v1;
	                case 2:
	                    return this._v2;
	                case 3:
	                    return this._v3;
	                case 4:
	                    return this._v4;
	                case 5:
	                    return this._v5;
	                case 6:
	                    return this._v6;
	                case 7:
	                    return this._v7;
	                default:
	                    return undefined;
	            }
	        };
	        InlineArray8.prototype.set = function (index, value) {
	            switch (index) {
	                case 0:
	                    this._v0 = value;
	                    break;
	                case 1:
	                    this._v1 = value;
	                    break;
	                case 2:
	                    this._v2 = value;
	                    break;
	                case 3:
	                    this._v3 = value;
	                    break;
	                case 4:
	                    this._v4 = value;
	                    break;
	                case 5:
	                    this._v5 = value;
	                    break;
	                case 6:
	                    this._v6 = value;
	                    break;
	                case 7:
	                    this._v7 = value;
	                    break;
	            }
	        };
	        return InlineArray8;
	    }());
	    var InlineArray16 = (function () {
	        function InlineArray16(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
	            this.length = length;
	            this._v0 = _v0;
	            this._v1 = _v1;
	            this._v2 = _v2;
	            this._v3 = _v3;
	            this._v4 = _v4;
	            this._v5 = _v5;
	            this._v6 = _v6;
	            this._v7 = _v7;
	            this._v8 = _v8;
	            this._v9 = _v9;
	            this._v10 = _v10;
	            this._v11 = _v11;
	            this._v12 = _v12;
	            this._v13 = _v13;
	            this._v14 = _v14;
	            this._v15 = _v15;
	        }
	        InlineArray16.prototype.get = function (index) {
	            switch (index) {
	                case 0:
	                    return this._v0;
	                case 1:
	                    return this._v1;
	                case 2:
	                    return this._v2;
	                case 3:
	                    return this._v3;
	                case 4:
	                    return this._v4;
	                case 5:
	                    return this._v5;
	                case 6:
	                    return this._v6;
	                case 7:
	                    return this._v7;
	                case 8:
	                    return this._v8;
	                case 9:
	                    return this._v9;
	                case 10:
	                    return this._v10;
	                case 11:
	                    return this._v11;
	                case 12:
	                    return this._v12;
	                case 13:
	                    return this._v13;
	                case 14:
	                    return this._v14;
	                case 15:
	                    return this._v15;
	                default:
	                    return undefined;
	            }
	        };
	        InlineArray16.prototype.set = function (index, value) {
	            switch (index) {
	                case 0:
	                    this._v0 = value;
	                    break;
	                case 1:
	                    this._v1 = value;
	                    break;
	                case 2:
	                    this._v2 = value;
	                    break;
	                case 3:
	                    this._v3 = value;
	                    break;
	                case 4:
	                    this._v4 = value;
	                    break;
	                case 5:
	                    this._v5 = value;
	                    break;
	                case 6:
	                    this._v6 = value;
	                    break;
	                case 7:
	                    this._v7 = value;
	                    break;
	                case 8:
	                    this._v8 = value;
	                    break;
	                case 9:
	                    this._v9 = value;
	                    break;
	                case 10:
	                    this._v10 = value;
	                    break;
	                case 11:
	                    this._v11 = value;
	                    break;
	                case 12:
	                    this._v12 = value;
	                    break;
	                case 13:
	                    this._v13 = value;
	                    break;
	                case 14:
	                    this._v14 = value;
	                    break;
	                case 15:
	                    this._v15 = value;
	                    break;
	            }
	        };
	        return InlineArray16;
	    }());
	    var InlineArrayDynamic = (function () {
	        // Note: We still take the length argument so this class can be created
	        // in the same ways as the other classes!
	        function InlineArrayDynamic(length) {
	            var values = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                values[_i - 1] = arguments[_i];
	            }
	            this.length = length;
	            this._values = values;
	        }
	        InlineArrayDynamic.prototype.get = function (index) { return this._values[index]; };
	        InlineArrayDynamic.prototype.set = function (index, value) { this._values[index] = value; };
	        return InlineArrayDynamic;
	    }());
	    var EMPTY_INLINE_ARRAY = new InlineArray0();
	
	
	    var view_utils = Object.freeze({
	        ViewUtils: ViewUtils,
	        createRenderComponentType: createRenderComponentType,
	        addToArray: addToArray,
	        interpolate: interpolate,
	        inlineInterpolate: inlineInterpolate,
	        checkBinding: checkBinding,
	        castByValue: castByValue,
	        EMPTY_ARRAY: EMPTY_ARRAY,
	        EMPTY_MAP: EMPTY_MAP,
	        pureProxy1: pureProxy1,
	        pureProxy2: pureProxy2,
	        pureProxy3: pureProxy3,
	        pureProxy4: pureProxy4,
	        pureProxy5: pureProxy5,
	        pureProxy6: pureProxy6,
	        pureProxy7: pureProxy7,
	        pureProxy8: pureProxy8,
	        pureProxy9: pureProxy9,
	        pureProxy10: pureProxy10,
	        setBindingDebugInfoForChanges: setBindingDebugInfoForChanges,
	        setBindingDebugInfo: setBindingDebugInfo,
	        createRenderElement: createRenderElement,
	        selectOrCreateRenderHostElement: selectOrCreateRenderHostElement,
	        subscribeToRenderElement: subscribeToRenderElement,
	        noop: noop,
	        InlineArray2: InlineArray2,
	        InlineArray4: InlineArray4,
	        InlineArray8: InlineArray8,
	        InlineArray16: InlineArray16,
	        InlineArrayDynamic: InlineArrayDynamic,
	        EMPTY_INLINE_ARRAY: EMPTY_INLINE_ARRAY
	    });
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an instance of a Component created via a {@link ComponentFactory}.
	     *
	     * `ComponentRef` provides access to the Component Instance as well other objects related to this
	     * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
	     * method.
	     * @stable
	     */
	    var ComponentRef = (function () {
	        function ComponentRef() {
	        }
	        Object.defineProperty(ComponentRef.prototype, "location", {
	            /**
	             * Location of the Host Element of this Component Instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "injector", {
	            /**
	             * The injector on which the component instance exists.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "instance", {
	            /**
	             * The instance of the Component.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef.prototype, "hostView", {
	            /**
	             * The {@link ViewRef} of the Host View of this Component instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
	            /**
	             * The {@link ChangeDetectorRef} of the Component instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "componentType", {
	            /**
	             * The component type.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return ComponentRef;
	    }());
	    var ComponentRef_ = (function (_super) {
	        __extends$5(ComponentRef_, _super);
	        function ComponentRef_(_index, _parentView, _nativeElement, _component) {
	            _super.call(this);
	            this._index = _index;
	            this._parentView = _parentView;
	            this._nativeElement = _nativeElement;
	            this._component = _component;
	        }
	        Object.defineProperty(ComponentRef_.prototype, "location", {
	            get: function () { return new ElementRef(this._nativeElement); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "injector", {
	            get: function () { return this._parentView.injector(this._index); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "instance", {
	            get: function () { return this._component; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "hostView", {
	            get: function () { return this._parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	            get: function () { return this._parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "componentType", {
	            get: function () { return this._component.constructor; },
	            enumerable: true,
	            configurable: true
	        });
	        ComponentRef_.prototype.destroy = function () { this._parentView.detachAndDestroy(); };
	        ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	        return ComponentRef_;
	    }(ComponentRef));
	    /**
	     * @stable
	     */
	    var ComponentFactory = (function () {
	        function ComponentFactory(selector, _viewClass, _componentType) {
	            this.selector = selector;
	            this._viewClass = _viewClass;
	            this._componentType = _componentType;
	        }
	        Object.defineProperty(ComponentFactory.prototype, "componentType", {
	            get: function () { return this._componentType; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Creates a new component.
	         */
	        ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
	            if (projectableNodes === void 0) { projectableNodes = null; }
	            if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
	            var vu = injector.get(ViewUtils);
	            if (!projectableNodes) {
	                projectableNodes = [];
	            }
	            var hostView = new this._viewClass(vu, null, null, null);
	            return hostView.createHostView(rootSelectorOrNode, injector, projectableNodes);
	        };
	        return ComponentFactory;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var NoComponentFactoryError = (function (_super) {
	        __extends$7(NoComponentFactoryError, _super);
	        function NoComponentFactoryError(component) {
	            _super.call(this, "No component factory found for " + stringify(component));
	            this.component = component;
	        }
	        return NoComponentFactoryError;
	    }(BaseError));
	    var _NullComponentFactoryResolver = (function () {
	        function _NullComponentFactoryResolver() {
	        }
	        _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
	            throw new NoComponentFactoryError(component);
	        };
	        return _NullComponentFactoryResolver;
	    }());
	    /**
	     * @stable
	     */
	    var ComponentFactoryResolver = (function () {
	        function ComponentFactoryResolver() {
	        }
	        ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
	        return ComponentFactoryResolver;
	    }());
	    var CodegenComponentFactoryResolver = (function () {
	        function CodegenComponentFactoryResolver(factories, _parent) {
	            this._parent = _parent;
	            this._factories = new Map();
	            for (var i = 0; i < factories.length; i++) {
	                var factory = factories[i];
	                this._factories.set(factory.componentType, factory);
	            }
	        }
	        CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
	            var result = this._factories.get(component);
	            if (!result) {
	                result = this._parent.resolveComponentFactory(component);
	            }
	            return result;
	        };
	        return CodegenComponentFactoryResolver;
	    }());
	
	    var trace;
	    var events;
	    function detectWTF() {
	        var wtf = global$1['wtf'];
	        if (wtf) {
	            trace = wtf['trace'];
	            if (trace) {
	                events = trace['events'];
	                return true;
	            }
	        }
	        return false;
	    }
	    function createScope(signature, flags) {
	        if (flags === void 0) { flags = null; }
	        return events.createScope(signature, flags);
	    }
	    function leave(scope, returnValue) {
	        trace.leaveScope(scope, returnValue);
	        return returnValue;
	    }
	    function startTimeRange(rangeType, action) {
	        return trace.beginTimeRange(rangeType, action);
	    }
	    function endTimeRange(range) {
	        trace.endTimeRange(range);
	    }
	
	    /**
	     * True if WTF is enabled.
	     */
	    var wtfEnabled = detectWTF();
	    function noopScope(arg0, arg1) {
	        return null;
	    }
	    /**
	     * Create trace scope.
	     *
	     * Scopes must be strictly nested and are analogous to stack frames, but
	     * do not have to follow the stack frames. Instead it is recommended that they follow logical
	     * nesting. You may want to use
	     * [Event
	     * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
	     * as they are defined in WTF.
	     *
	     * Used to mark scope entry. The return value is used to leave the scope.
	     *
	     *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
	     *
	     *     someMethod() {
	     *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
	     *        // DO SOME WORK HERE
	     *        return wtfLeave(s, 123); // Return value 123
	     *     }
	     *
	     * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
	     * negatively impact the performance of your application. For this reason we recommend that
	     * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
	     * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
	     * exception, will produce incorrect trace, but presence of exception signifies logic error which
	     * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
	     * an exception is expected during normal execution while profiling.
	     *
	     * @experimental
	     */
	    var wtfCreateScope = wtfEnabled ? createScope : function (signature, flags) { return noopScope; };
	    /**
	     * Used to mark end of Scope.
	     *
	     * - `scope` to end.
	     * - `returnValue` (optional) to be passed to the WTF.
	     *
	     * Returns the `returnValue for easy chaining.
	     * @experimental
	     */
	    var wtfLeave = wtfEnabled ? leave : function (s, r) { return r; };
	    /**
	     * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
	     * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
	     * enabled.
	     *
	     *     someMethod() {
	     *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
	     *        var future = new Future.delay(5).then((_) {
	     *          wtfEndTimeRange(s);
	     *        });
	     *     }
	     * @experimental
	     */
	    var wtfStartTimeRange = wtfEnabled ? startTimeRange : function (rangeType, action) { return null; };
	    /**
	     * Ends a async time range operation.
	     * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
	     * enabled.
	     * @experimental
	     */
	    var wtfEndTimeRange = wtfEnabled ? endTimeRange : function (r) { return null; };
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$8(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * An injectable service for executing work inside or outside of the Angular zone.
	     *
	     * The most common use of this service is to optimize performance when starting a work consisting of
	     * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
	     * Angular. Such tasks can be kicked off via {@link runOutsideAngular} and if needed, these tasks
	     * can reenter the Angular zone via {@link run}.
	     *
	     * <!-- TODO: add/fix links to:
	     *   - docs explaining zones and the use of zones in Angular and change-detection
	     *   - link to runOutsideAngular/run (throughout this file!)
	     *   -->
	     *
	     * ### Example
	     * ```
	     * import {Component, NgZone} from '@angular/core';
	     * import {NgIf} from '@angular/common';
	     *
	     * @Component({
	     *   selector: 'ng-zone-demo'.
	     *   template: `
	     *     <h2>Demo: NgZone</h2>
	     *
	     *     <p>Progress: {{progress}}%</p>
	     *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
	     *
	     *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
	     *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
	     *   `,
	     * })
	     * export class NgZoneDemo {
	     *   progress: number = 0;
	     *   label: string;
	     *
	     *   constructor(private _ngZone: NgZone) {}
	     *
	     *   // Loop inside the Angular zone
	     *   // so the UI DOES refresh after each setTimeout cycle
	     *   processWithinAngularZone() {
	     *     this.label = 'inside';
	     *     this.progress = 0;
	     *     this._increaseProgress(() => console.log('Inside Done!'));
	     *   }
	     *
	     *   // Loop outside of the Angular zone
	     *   // so the UI DOES NOT refresh after each setTimeout cycle
	     *   processOutsideOfAngularZone() {
	     *     this.label = 'outside';
	     *     this.progress = 0;
	     *     this._ngZone.runOutsideAngular(() => {
	     *       this._increaseProgress(() => {
	     *       // reenter the Angular zone and display done
	     *       this._ngZone.run(() => {console.log('Outside Done!') });
	     *     }}));
	     *   }
	     *
	     *   _increaseProgress(doneCallback: () => void) {
	     *     this.progress += 1;
	     *     console.log(`Current progress: ${this.progress}%`);
	     *
	     *     if (this.progress < 100) {
	     *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
	     *     } else {
	     *       doneCallback();
	     *     }
	     *   }
	     * }
	     * ```
	     * @experimental
	     */
	    var NgZone = (function () {
	        function NgZone(_a) {
	            var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
	            this._hasPendingMicrotasks = false;
	            this._hasPendingMacrotasks = false;
	            this._isStable = true;
	            this._nesting = 0;
	            this._onUnstable = new EventEmitter(false);
	            this._onMicrotaskEmpty = new EventEmitter(false);
	            this._onStable = new EventEmitter(false);
	            this._onErrorEvents = new EventEmitter(false);
	            if (typeof Zone == 'undefined') {
	                throw new Error('Angular requires Zone.js prolyfill.');
	            }
	            Zone.assertZonePatched();
	            this.outer = this.inner = Zone.current;
	            if (Zone['wtfZoneSpec']) {
	                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
	            }
	            if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
	                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
	            }
	            this.forkInnerZoneWithAngularBehavior();
	        }
	        NgZone.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
	        NgZone.assertInAngularZone = function () {
	            if (!NgZone.isInAngularZone()) {
	                throw new Error('Expected to be in Angular Zone, but it is not!');
	            }
	        };
	        NgZone.assertNotInAngularZone = function () {
	            if (NgZone.isInAngularZone()) {
	                throw new Error('Expected to not be in Angular Zone, but it is!');
	            }
	        };
	        /**
	         * Executes the `fn` function synchronously within the Angular zone and returns value returned by
	         * the function.
	         *
	         * Running functions via `run` allows you to reenter Angular zone from a task that was executed
	         * outside of the Angular zone (typically started via {@link runOutsideAngular}).
	         *
	         * Any future tasks or microtasks scheduled from within this function will continue executing from
	         * within the Angular zone.
	         *
	         * If a synchronous error happens it will be rethrown and not reported via `onError`.
	         */
	        NgZone.prototype.run = function (fn) { return this.inner.run(fn); };
	        /**
	         * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
	         * rethrown.
	         */
	        NgZone.prototype.runGuarded = function (fn) { return this.inner.runGuarded(fn); };
	        /**
	         * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
	         * the function.
	         *
	         * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
	         * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	         *
	         * Any future tasks or microtasks scheduled from within this function will continue executing from
	         * outside of the Angular zone.
	         *
	         * Use {@link run} to reenter the Angular zone and do work that updates the application model.
	         */
	        NgZone.prototype.runOutsideAngular = function (fn) { return this.outer.run(fn); };
	        Object.defineProperty(NgZone.prototype, "onUnstable", {
	            /**
	             * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	             */
	            get: function () { return this._onUnstable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
	            /**
	             * Notifies when there is no more microtasks enqueue in the current VM Turn.
	             * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	             * For this reason this event can fire multiple times per VM Turn.
	             */
	            get: function () { return this._onMicrotaskEmpty; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onStable", {
	            /**
	             * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
	             * implies we are about to relinquish VM turn.
	             * This event gets called just once.
	             */
	            get: function () { return this._onStable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onError", {
	            /**
	             * Notify that an error has been delivered.
	             */
	            get: function () { return this._onErrorEvents; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "isStable", {
	            /**
	             * Whether there are no outstanding microtasks or macrotasks.
	             */
	            get: function () { return this._isStable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
	            get: function () { return this._hasPendingMicrotasks; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
	            get: function () { return this._hasPendingMacrotasks; },
	            enumerable: true,
	            configurable: true
	        });
	        NgZone.prototype.checkStable = function () {
	            var _this = this;
	            if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
	                try {
	                    this._nesting++;
	                    this._onMicrotaskEmpty.emit(null);
	                }
	                finally {
	                    this._nesting--;
	                    if (!this._hasPendingMicrotasks) {
	                        try {
	                            this.runOutsideAngular(function () { return _this._onStable.emit(null); });
	                        }
	                        finally {
	                            this._isStable = true;
	                        }
	                    }
	                }
	            }
	        };
	        NgZone.prototype.forkInnerZoneWithAngularBehavior = function () {
	            var _this = this;
	            this.inner = this.inner.fork({
	                name: 'angular',
	                properties: { 'isAngularZone': true },
	                onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invokeTask(target, task, applyThis, applyArgs);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invoke(target, callback, applyThis, applyArgs, source);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onHasTask: function (delegate, current, target, hasTaskState) {
	                    delegate.hasTask(target, hasTaskState);
	                    if (current === target) {
	                        // We are only interested in hasTask events which originate from our zone
	                        // (A child hasTask event is not interesting to us)
	                        if (hasTaskState.change == 'microTask') {
	                            _this.setHasMicrotask(hasTaskState.microTask);
	                        }
	                        else if (hasTaskState.change == 'macroTask') {
	                            _this.setHasMacrotask(hasTaskState.macroTask);
	                        }
	                    }
	                },
	                onHandleError: function (delegate, current, target, error) {
	                    delegate.handleError(target, error);
	                    _this.triggerError(error);
	                    return false;
	                }
	            });
	        };
	        NgZone.prototype.onEnter = function () {
	            this._nesting++;
	            if (this._isStable) {
	                this._isStable = false;
	                this._onUnstable.emit(null);
	            }
	        };
	        NgZone.prototype.onLeave = function () {
	            this._nesting--;
	            this.checkStable();
	        };
	        NgZone.prototype.setHasMicrotask = function (hasMicrotasks) {
	            this._hasPendingMicrotasks = hasMicrotasks;
	            this.checkStable();
	        };
	        NgZone.prototype.setHasMacrotask = function (hasMacrotasks) { this._hasPendingMacrotasks = hasMacrotasks; };
	        NgZone.prototype.triggerError = function (error) { this._onErrorEvents.emit(error); };
	        return NgZone;
	    }());
	
	    /**
	     * The Testability service provides testing hooks that can be accessed from
	     * the browser and by services such as Protractor. Each bootstrapped Angular
	     * application on the page will have an instance of Testability.
	     * @experimental
	     */
	    var Testability = (function () {
	        function Testability(_ngZone) {
	            this._ngZone = _ngZone;
	            /** @internal */
	            this._pendingCount = 0;
	            /** @internal */
	            this._isZoneStable = true;
	            /**
	             * Whether any work was done since the last 'whenStable' callback. This is
	             * useful to detect if this could have potentially destabilized another
	             * component while it is stabilizing.
	             * @internal
	             */
	            this._didWork = false;
	            /** @internal */
	            this._callbacks = [];
	            this._watchAngularEvents();
	        }
	        /** @internal */
	        Testability.prototype._watchAngularEvents = function () {
	            var _this = this;
	            this._ngZone.onUnstable.subscribe({
	                next: function () {
	                    _this._didWork = true;
	                    _this._isZoneStable = false;
	                }
	            });
	            this._ngZone.runOutsideAngular(function () {
	                _this._ngZone.onStable.subscribe({
	                    next: function () {
	                        NgZone.assertNotInAngularZone();
	                        scheduleMicroTask(function () {
	                            _this._isZoneStable = true;
	                            _this._runCallbacksIfReady();
	                        });
	                    }
	                });
	            });
	        };
	        Testability.prototype.increasePendingRequestCount = function () {
	            this._pendingCount += 1;
	            this._didWork = true;
	            return this._pendingCount;
	        };
	        Testability.prototype.decreasePendingRequestCount = function () {
	            this._pendingCount -= 1;
	            if (this._pendingCount < 0) {
	                throw new Error('pending async requests below zero');
	            }
	            this._runCallbacksIfReady();
	            return this._pendingCount;
	        };
	        Testability.prototype.isStable = function () {
	            return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
	        };
	        /** @internal */
	        Testability.prototype._runCallbacksIfReady = function () {
	            var _this = this;
	            if (this.isStable()) {
	                // Schedules the call backs in a new frame so that it is always async.
	                scheduleMicroTask(function () {
	                    while (_this._callbacks.length !== 0) {
	                        (_this._callbacks.pop())(_this._didWork);
	                    }
	                    _this._didWork = false;
	                });
	            }
	            else {
	                // Not Ready
	                this._didWork = true;
	            }
	        };
	        Testability.prototype.whenStable = function (callback) {
	            this._callbacks.push(callback);
	            this._runCallbacksIfReady();
	        };
	        Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
	        /** @deprecated use findProviders */
	        Testability.prototype.findBindings = function (using, provider, exactMatch) {
	            // TODO(juliemr): implement.
	            return [];
	        };
	        Testability.prototype.findProviders = function (using, provider, exactMatch) {
	            // TODO(juliemr): implement.
	            return [];
	        };
	        Testability.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        Testability.ctorParameters = [
	            { type: NgZone, },
	        ];
	        return Testability;
	    }());
	    /**
	     * A global registry of {@link Testability} instances for specific elements.
	     * @experimental
	     */
	    var TestabilityRegistry = (function () {
	        function TestabilityRegistry() {
	            /** @internal */
	            this._applications = new Map();
	            _testabilityGetter.addToWindow(this);
	        }
	        TestabilityRegistry.prototype.registerApplication = function (token, testability) {
	            this._applications.set(token, testability);
	        };
	        TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
	        TestabilityRegistry.prototype.getAllTestabilities = function () { return Array.from(this._applications.values()); };
	        TestabilityRegistry.prototype.getAllRootElements = function () { return Array.from(this._applications.keys()); };
	        TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
	            if (findInAncestors === void 0) { findInAncestors = true; }
	            return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
	        };
	        TestabilityRegistry.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        TestabilityRegistry.ctorParameters = [];
	        return TestabilityRegistry;
	    }());
	    var _NoopGetTestability = (function () {
	        function _NoopGetTestability() {
	        }
	        _NoopGetTestability.prototype.addToWindow = function (registry) { };
	        _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	            return null;
	        };
	        return _NoopGetTestability;
	    }());
	    /**
	     * Set the {@link GetTestability} implementation used by the Angular testing framework.
	     * @experimental
	     */
	    function setTestabilityGetter(getter) {
	        _testabilityGetter = getter;
	    }
	    var _testabilityGetter = new _NoopGetTestability();
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _devMode = true;
	    var _runModeLocked = false;
	    var _platform;
	    /**
	     * Disable Angular's development mode, which turns off assertions and other
	     * checks within the framework.
	     *
	     * One important assertion this disables verifies that a change detection pass
	     * does not result in additional changes to any bindings (also known as
	     * unidirectional data flow).
	     *
	     * @stable
	     */
	    function enableProdMode() {
	        if (_runModeLocked) {
	            throw new Error('Cannot enable prod mode after platform setup.');
	        }
	        _devMode = false;
	    }
	    /**
	     * Returns whether Angular is in development mode. After called once,
	     * the value is locked and won't change any more.
	     *
	     * By default, this is true, unless a user calls `enableProdMode` before calling this.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function isDevMode() {
	        _runModeLocked = true;
	        return _devMode;
	    }
	    /**
	     * Creates a platform.
	     * Platforms have to be eagerly created via this function.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function createPlatform(injector) {
	        if (_platform && !_platform.destroyed) {
	            throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
	        }
	        _platform = injector.get(PlatformRef);
	        var inits = injector.get(PLATFORM_INITIALIZER, null);
	        if (inits)
	            inits.forEach(function (init) { return init(); });
	        return _platform;
	    }
	    /**
	     * Creates a factory for a platform
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function createPlatformFactory(parentPlaformFactory, name, providers) {
	        if (providers === void 0) { providers = []; }
	        var marker = new OpaqueToken("Platform: " + name);
	        return function (extraProviders) {
	            if (extraProviders === void 0) { extraProviders = []; }
	            if (!getPlatform()) {
	                if (parentPlaformFactory) {
	                    parentPlaformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
	                }
	                else {
	                    createPlatform(ReflectiveInjector.resolveAndCreate(providers.concat(extraProviders).concat({ provide: marker, useValue: true })));
	                }
	            }
	            return assertPlatform(marker);
	        };
	    }
	    /**
	     * Checks that there currently is a platform
	     * which contains the given token as a provider.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function assertPlatform(requiredToken) {
	        var platform = getPlatform();
	        if (!platform) {
	            throw new Error('No platform exists!');
	        }
	        if (!platform.injector.get(requiredToken, null)) {
	            throw new Error('A platform with a different configuration has been created. Please destroy it first.');
	        }
	        return platform;
	    }
	    /**
	     * Destroy the existing platform.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function destroyPlatform() {
	        if (_platform && !_platform.destroyed) {
	            _platform.destroy();
	        }
	    }
	    /**
	     * Returns the current platform.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function getPlatform() {
	        return _platform && !_platform.destroyed ? _platform : null;
	    }
	    /**
	     * The Angular platform is the entry point for Angular on a web page. Each page
	     * has exactly one platform, and services (such as reflection) which are common
	     * to every Angular application running on the page are bound in its scope.
	     *
	     * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
	     * explicitly by calling {@link createPlatform}().
	     *
	     * @stable
	     */
	    var PlatformRef = (function () {
	        function PlatformRef() {
	        }
	        /**
	         * Creates an instance of an `@NgModule` for the given platform
	         * for offline compilation.
	         *
	         * ## Simple Example
	         *
	         * ```typescript
	         * my_module.ts:
	         *
	         * @NgModule({
	         *   imports: [BrowserModule]
	         * })
	         * class MyModule {}
	         *
	         * main.ts:
	         * import {MyModuleNgFactory} from './my_module.ngfactory';
	         * import {platformBrowser} from '@angular/platform-browser';
	         *
	         * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
	         * ```
	         *
	         * @experimental APIs related to application bootstrap are currently under review.
	         */
	        PlatformRef.prototype.bootstrapModuleFactory = function (moduleFactory) {
	            throw unimplemented();
	        };
	        /**
	         * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
	         *
	         * ## Simple Example
	         *
	         * ```typescript
	         * @NgModule({
	         *   imports: [BrowserModule]
	         * })
	         * class MyModule {}
	         *
	         * let moduleRef = platformBrowser().bootstrapModule(MyModule);
	         * ```
	         * @stable
	         */
	        PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            throw unimplemented();
	        };
	        Object.defineProperty(PlatformRef.prototype, "injector", {
	            /**
	             * Retrieve the platform {@link Injector}, which is the parent injector for
	             * every Angular application on the page and provides singleton providers.
	             */
	            get: function () { throw unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(PlatformRef.prototype, "destroyed", {
	            get: function () { throw unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return PlatformRef;
	    }());
	    function _callAndReportToErrorHandler(errorHandler, callback) {
	        try {
	            var result = callback();
	            if (isPromise(result)) {
	                return result.catch(function (e) {
	                    errorHandler.handleError(e);
	                    // rethrow as the exception handler might not do it
	                    throw e;
	                });
	            }
	            return result;
	        }
	        catch (e) {
	            errorHandler.handleError(e);
	            // rethrow as the exception handler might not do it
	            throw e;
	        }
	    }
	    var PlatformRef_ = (function (_super) {
	        __extends$3(PlatformRef_, _super);
	        function PlatformRef_(_injector) {
	            _super.call(this);
	            this._injector = _injector;
	            this._modules = [];
	            this._destroyListeners = [];
	            this._destroyed = false;
	        }
	        PlatformRef_.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
	        Object.defineProperty(PlatformRef_.prototype, "injector", {
	            get: function () { return this._injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformRef_.prototype, "destroyed", {
	            get: function () { return this._destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        PlatformRef_.prototype.destroy = function () {
	            if (this._destroyed) {
	                throw new Error('The platform has already been destroyed!');
	            }
	            this._modules.slice().forEach(function (module) { return module.destroy(); });
	            this._destroyListeners.forEach(function (listener) { return listener(); });
	            this._destroyed = true;
	        };
	        PlatformRef_.prototype.bootstrapModuleFactory = function (moduleFactory) {
	            return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
	        };
	        PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function (moduleFactory, ngZone) {
	            var _this = this;
	            // Note: We need to create the NgZone _before_ we instantiate the module,
	            // as instantiating the module creates some providers eagerly.
	            // So we create a mini parent injector that just contains the new NgZone and
	            // pass that as parent to the NgModuleFactory.
	            if (!ngZone)
	                ngZone = new NgZone({ enableLongStackTrace: isDevMode() });
	            // Attention: Don't use ApplicationRef.run here,
	            // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
	            return ngZone.run(function () {
	                var ngZoneInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgZone, useValue: ngZone }], _this.injector);
	                var moduleRef = moduleFactory.create(ngZoneInjector);
	                var exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
	                if (!exceptionHandler) {
	                    throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
	                }
	                moduleRef.onDestroy(function () { return ListWrapper.remove(_this._modules, moduleRef); });
	                ngZone.onError.subscribe({ next: function (error) { exceptionHandler.handleError(error); } });
	                return _callAndReportToErrorHandler(exceptionHandler, function () {
	                    var initStatus = moduleRef.injector.get(ApplicationInitStatus);
	                    return initStatus.donePromise.then(function () {
	                        _this._moduleDoBootstrap(moduleRef);
	                        return moduleRef;
	                    });
	                });
	            });
	        };
	        PlatformRef_.prototype.bootstrapModule = function (moduleType, compilerOptions) {
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
	        };
	        PlatformRef_.prototype._bootstrapModuleWithZone = function (moduleType, compilerOptions, ngZone, componentFactoryCallback) {
	            var _this = this;
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            var compilerFactory = this.injector.get(CompilerFactory);
	            var compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
	            // ugly internal api hack: generate host component factories for all declared components and
	            // pass the factories into the callback - this is used by UpdateAdapter to get hold of all
	            // factories.
	            if (componentFactoryCallback) {
	                return compiler.compileModuleAndAllComponentsAsync(moduleType)
	                    .then(function (_a) {
	                    var ngModuleFactory = _a.ngModuleFactory, componentFactories = _a.componentFactories;
	                    componentFactoryCallback(componentFactories);
	                    return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
	                });
	            }
	            return compiler.compileModuleAsync(moduleType)
	                .then(function (moduleFactory) { return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone); });
	        };
	        PlatformRef_.prototype._moduleDoBootstrap = function (moduleRef) {
	            var appRef = moduleRef.injector.get(ApplicationRef);
	            if (moduleRef.bootstrapFactories.length > 0) {
	                moduleRef.bootstrapFactories.forEach(function (compFactory) { return appRef.bootstrap(compFactory); });
	            }
	            else if (moduleRef.instance.ngDoBootstrap) {
	                moduleRef.instance.ngDoBootstrap(appRef);
	            }
	            else {
	                throw new Error(("The module " + stringify(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") +
	                    "Please define one of these.");
	            }
	        };
	        PlatformRef_.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        PlatformRef_.ctorParameters = [
	            { type: Injector, },
	        ];
	        return PlatformRef_;
	    }(PlatformRef));
	    /**
	     * A reference to an Angular application running on a page.
	     *
	     * For more about Angular applications, see the documentation for {@link bootstrap}.
	     *
	     * @stable
	     */
	    var ApplicationRef = (function () {
	        function ApplicationRef() {
	        }
	        Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
	            /**
	             * Get a list of component types registered to this application.
	             * This list is populated even before the component is created.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ApplicationRef.prototype, "components", {
	            /**
	             * Get a list of components registered to this application.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return ApplicationRef;
	    }());
	    var ApplicationRef_ = (function (_super) {
	        __extends$3(ApplicationRef_, _super);
	        function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
	            var _this = this;
	            _super.call(this);
	            this._zone = _zone;
	            this._console = _console;
	            this._injector = _injector;
	            this._exceptionHandler = _exceptionHandler;
	            this._componentFactoryResolver = _componentFactoryResolver;
	            this._initStatus = _initStatus;
	            this._testabilityRegistry = _testabilityRegistry;
	            this._testability = _testability;
	            this._bootstrapListeners = [];
	            this._rootComponents = [];
	            this._rootComponentTypes = [];
	            this._changeDetectorRefs = [];
	            this._runningTick = false;
	            this._enforceNoNewChanges = false;
	            this._enforceNoNewChanges = isDevMode();
	            this._zone.onMicrotaskEmpty.subscribe({ next: function () { _this._zone.run(function () { _this.tick(); }); } });
	        }
	        ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
	            this._changeDetectorRefs.push(changeDetector);
	        };
	        ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
	            ListWrapper.remove(this._changeDetectorRefs, changeDetector);
	        };
	        ApplicationRef_.prototype.bootstrap = function (componentOrFactory) {
	            var _this = this;
	            if (!this._initStatus.done) {
	                throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
	            }
	            var componentFactory;
	            if (componentOrFactory instanceof ComponentFactory) {
	                componentFactory = componentOrFactory;
	            }
	            else {
	                componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
	            }
	            this._rootComponentTypes.push(componentFactory.componentType);
	            var compRef = componentFactory.create(this._injector, [], componentFactory.selector);
	            compRef.onDestroy(function () { _this._unloadComponent(compRef); });
	            var testability = compRef.injector.get(Testability, null);
	            if (testability) {
	                compRef.injector.get(TestabilityRegistry)
	                    .registerApplication(compRef.location.nativeElement, testability);
	            }
	            this._loadComponent(compRef);
	            if (isDevMode()) {
	                this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
	            }
	            return compRef;
	        };
	        /** @internal */
	        ApplicationRef_.prototype._loadComponent = function (componentRef) {
	            this._changeDetectorRefs.push(componentRef.changeDetectorRef);
	            this.tick();
	            this._rootComponents.push(componentRef);
	            // Get the listeners lazily to prevent DI cycles.
	            var listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, [])
	                .concat(this._bootstrapListeners);
	            listeners.forEach(function (listener) { return listener(componentRef); });
	        };
	        /** @internal */
	        ApplicationRef_.prototype._unloadComponent = function (componentRef) {
	            if (this._rootComponents.indexOf(componentRef) == -1) {
	                return;
	            }
	            this.unregisterChangeDetector(componentRef.changeDetectorRef);
	            ListWrapper.remove(this._rootComponents, componentRef);
	        };
	        ApplicationRef_.prototype.tick = function () {
	            if (this._runningTick) {
	                throw new Error('ApplicationRef.tick is called recursively');
	            }
	            var scope = ApplicationRef_._tickScope();
	            try {
	                this._runningTick = true;
	                this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
	                if (this._enforceNoNewChanges) {
	                    this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
	                }
	            }
	            finally {
	                this._runningTick = false;
	                wtfLeave(scope);
	            }
	        };
	        ApplicationRef_.prototype.ngOnDestroy = function () {
	            // TODO(alxhub): Dispose of the NgZone.
	            this._rootComponents.slice().forEach(function (component) { return component.destroy(); });
	        };
	        Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
	            get: function () { return this._rootComponentTypes; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ApplicationRef_.prototype, "components", {
	            get: function () { return this._rootComponents; },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        ApplicationRef_._tickScope = wtfCreateScope('ApplicationRef#tick()');
	        ApplicationRef_.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ApplicationRef_.ctorParameters = [
	            { type: NgZone, },
	            { type: Console, },
	            { type: Injector, },
	            { type: ErrorHandler, },
	            { type: ComponentFactoryResolver, },
	            { type: ApplicationInitStatus, },
	            { type: TestabilityRegistry, decorators: [{ type: Optional },] },
	            { type: Testability, decorators: [{ type: Optional },] },
	        ];
	        return ApplicationRef_;
	    }(ApplicationRef));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an instance of an NgModule created via a {@link NgModuleFactory}.
	     *
	     * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
	     * NgModule Instance.
	     *
	     * @stable
	     */
	    var NgModuleRef = (function () {
	        function NgModuleRef() {
	        }
	        Object.defineProperty(NgModuleRef.prototype, "injector", {
	            /**
	             * The injector that contains all of the providers of the NgModule.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
	            /**
	             * The ComponentFactoryResolver to get hold of the ComponentFactories
	             * declared in the `entryComponents` property of the module.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleRef.prototype, "instance", {
	            /**
	             * The NgModule instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgModuleRef;
	    }());
	    /**
	     * @experimental
	     */
	    var NgModuleFactory = (function () {
	        function NgModuleFactory(_injectorClass, _moduleType) {
	            this._injectorClass = _injectorClass;
	            this._moduleType = _moduleType;
	        }
	        Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
	            get: function () { return this._moduleType; },
	            enumerable: true,
	            configurable: true
	        });
	        NgModuleFactory.prototype.create = function (parentInjector) {
	            if (!parentInjector) {
	                parentInjector = Injector.NULL;
	            }
	            var instance = new this._injectorClass(parentInjector);
	            instance.create();
	            return instance;
	        };
	        return NgModuleFactory;
	    }());
	    var _UNDEFINED = new Object();
	    var NgModuleInjector = (function (_super) {
	        __extends$9(NgModuleInjector, _super);
	        function NgModuleInjector(parent, factories, bootstrapFactories) {
	            _super.call(this, factories, parent.get(ComponentFactoryResolver, ComponentFactoryResolver.NULL));
	            this.parent = parent;
	            this.bootstrapFactories = bootstrapFactories;
	            this._destroyListeners = [];
	            this._destroyed = false;
	        }
	        NgModuleInjector.prototype.create = function () { this.instance = this.createInternal(); };
	        NgModuleInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            if (token === Injector || token === ComponentFactoryResolver) {
	                return this;
	            }
	            var result = this.getInternal(token, _UNDEFINED);
	            return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
	        };
	        Object.defineProperty(NgModuleInjector.prototype, "injector", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        NgModuleInjector.prototype.destroy = function () {
	            if (this._destroyed) {
	                throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
	            }
	            this._destroyed = true;
	            this.destroyInternal();
	            this._destroyListeners.forEach(function (listener) { return listener(); });
	        };
	        NgModuleInjector.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
	        return NgModuleInjector;
	    }(CodegenComponentFactoryResolver));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Used to load ng module factories.
	     * @stable
	     */
	    var NgModuleFactoryLoader = (function () {
	        function NgModuleFactoryLoader() {
	        }
	        return NgModuleFactoryLoader;
	    }());
	    var moduleFactories = new Map();
	    /**
	     * Registers a loaded module. Should only be called from generated NgModuleFactory code.
	     * @experimental
	     */
	    function registerModuleFactory(id, factory) {
	        var existing = moduleFactories.get(id);
	        if (existing) {
	            throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
	        }
	        moduleFactories.set(id, factory);
	    }
	    /**
	     * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
	     * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
	     * cannot be found.
	     * @experimental
	     */
	    function getModuleFactory(id) {
	        var factory = moduleFactories.get(id);
	        if (!factory)
	            throw new Error("No module with ID " + id + " loaded");
	        return factory;
	    }
	
	    /**
	     * An unmodifiable list of items that Angular keeps up to date when the state
	     * of the application changes.
	     *
	     * The type of object that {@link Query} and {@link ViewQueryMetadata} provide.
	     *
	     * Implements an iterable interface, therefore it can be used in both ES6
	     * javascript `for (var i of items)` loops as well as in Angular templates with
	     * `*ngFor="let i of myList"`.
	     *
	     * Changes can be observed by subscribing to the changes `Observable`.
	     *
	     * NOTE: In the future this class will implement an `Observable` interface.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
	     * ```typescript
	     * @Component({...})
	     * class Container {
	     *   @ViewChildren(Item) items:QueryList<Item>;
	     * }
	     * ```
	     * @stable
	     */
	    var QueryList = (function () {
	        function QueryList() {
	            this._dirty = true;
	            this._results = [];
	            this._emitter = new EventEmitter();
	        }
	        Object.defineProperty(QueryList.prototype, "changes", {
	            get: function () { return this._emitter; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "length", {
	            get: function () { return this._results.length; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "first", {
	            get: function () { return this._results[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "last", {
	            get: function () { return this._results[this.length - 1]; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * See
	         * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
	         */
	        QueryList.prototype.map = function (fn) { return this._results.map(fn); };
	        /**
	         * See
	         * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	         */
	        QueryList.prototype.filter = function (fn) {
	            return this._results.filter(fn);
	        };
	        /**
	         * See
	         * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
	         */
	        QueryList.prototype.find = function (fn) { return this._results.find(fn); };
	        /**
	         * See
	         * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	         */
	        QueryList.prototype.reduce = function (fn, init) {
	            return this._results.reduce(fn, init);
	        };
	        /**
	         * See
	         * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	         */
	        QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
	        /**
	         * See
	         * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
	         */
	        QueryList.prototype.some = function (fn) {
	            return this._results.some(fn);
	        };
	        QueryList.prototype.toArray = function () { return this._results.slice(); };
	        QueryList.prototype[getSymbolIterator()] = function () { return this._results[getSymbolIterator()](); };
	        QueryList.prototype.toString = function () { return this._results.toString(); };
	        QueryList.prototype.reset = function (res) {
	            this._results = ListWrapper.flatten(res);
	            this._dirty = false;
	        };
	        QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
	        /** internal */
	        QueryList.prototype.setDirty = function () { this._dirty = true; };
	        Object.defineProperty(QueryList.prototype, "dirty", {
	            /** internal */
	            get: function () { return this._dirty; },
	            enumerable: true,
	            configurable: true
	        });
	        return QueryList;
	    }());
	
	    var _SEPARATOR = '#';
	    var FACTORY_CLASS_SUFFIX = 'NgFactory';
	    /**
	     * Configuration for SystemJsNgModuleLoader.
	     * token.
	     *
	     * @experimental
	     */
	    var SystemJsNgModuleLoaderConfig = (function () {
	        function SystemJsNgModuleLoaderConfig() {
	        }
	        return SystemJsNgModuleLoaderConfig;
	    }());
	    var DEFAULT_CONFIG = {
	        factoryPathPrefix: '',
	        factoryPathSuffix: '.ngfactory',
	    };
	    /**
	     * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
	     * @experimental
	     */
	    var SystemJsNgModuleLoader = (function () {
	        function SystemJsNgModuleLoader(_compiler, config) {
	            this._compiler = _compiler;
	            this._config = config || DEFAULT_CONFIG;
	        }
	        SystemJsNgModuleLoader.prototype.load = function (path) {
	            var offlineMode = this._compiler instanceof Compiler;
	            return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
	        };
	        SystemJsNgModuleLoader.prototype.loadAndCompile = function (path) {
	            var _this = this;
	            var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
	            if (exportName === undefined) {
	                exportName = 'default';
	            }
	            return System.import(module)
	                .then(function (module) { return module[exportName]; })
	                .then(function (type) { return checkNotEmpty(type, module, exportName); })
	                .then(function (type) { return _this._compiler.compileModuleAsync(type); });
	        };
	        SystemJsNgModuleLoader.prototype.loadFactory = function (path) {
	            var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
	            var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
	            if (exportName === undefined) {
	                exportName = 'default';
	                factoryClassSuffix = '';
	            }
	            return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
	                .then(function (module) { return module[exportName + factoryClassSuffix]; })
	                .then(function (factory) { return checkNotEmpty(factory, module, exportName); });
	        };
	        SystemJsNgModuleLoader.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        SystemJsNgModuleLoader.ctorParameters = [
	            { type: Compiler, },
	            { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: Optional },] },
	        ];
	        return SystemJsNgModuleLoader;
	    }());
	    function checkNotEmpty(value, modulePath, exportName) {
	        if (!value) {
	            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
	        }
	        return value;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an Embedded Template that can be used to instantiate Embedded Views.
	     *
	     * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
	     * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
	     * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
	     * `TemplateRef` from a Component or a Directive via {@link Query}.
	     *
	     * To instantiate Embedded Views based on a Template, use
	     * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
	     * View Container.
	     * @stable
	     */
	    var TemplateRef = (function () {
	        function TemplateRef() {
	        }
	        Object.defineProperty(TemplateRef.prototype, "elementRef", {
	            /**
	             * The location in the View where the Embedded View logically belongs to.
	             *
	             * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
	             * inherit from the contexts of this location.
	             *
	             * Typically new Embedded Views are attached to the View Container of this location, but in
	             * advanced use-cases, the View can be attached to a different container while keeping the
	             * data-binding and injection context from the original location.
	             *
	             */
	            // TODO(i): rename to anchor or location
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return TemplateRef;
	    }());
	    var TemplateRef_ = (function (_super) {
	        __extends$10(TemplateRef_, _super);
	        function TemplateRef_(_parentView, _nodeIndex, _nativeElement) {
	            _super.call(this);
	            this._parentView = _parentView;
	            this._nodeIndex = _nodeIndex;
	            this._nativeElement = _nativeElement;
	        }
	        TemplateRef_.prototype.createEmbeddedView = function (context) {
	            var view = this._parentView.createEmbeddedViewInternal(this._nodeIndex);
	            view.create(context || {});
	            return view.ref;
	        };
	        Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	            get: function () { return new ElementRef(this._nativeElement); },
	            enumerable: true,
	            configurable: true
	        });
	        return TemplateRef_;
	    }(TemplateRef));
	
	    /**
	     * Represents a container where one or more Views can be attached.
	     *
	     * The container can contain two kinds of Views. Host Views, created by instantiating a
	     * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
	     * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
	     *
	     * The location of the View Container within the containing View is specified by the Anchor
	     * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
	     * have a single View Container.
	     *
	     * Root elements of Views attached to this container become siblings of the Anchor Element in
	     * the Rendered View.
	     *
	     * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
	     * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
	     * @stable
	     */
	    var ViewContainerRef = (function () {
	        function ViewContainerRef() {
	        }
	        Object.defineProperty(ViewContainerRef.prototype, "element", {
	            /**
	             * Anchor element that specifies the location of this container in the containing View.
	             * <!-- TODO: rename to anchorElement -->
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "injector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "length", {
	            /**
	             * Returns the number of Views currently attached to this container.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return ViewContainerRef;
	    }());
	    var ViewContainerRef_ = (function () {
	        function ViewContainerRef_(_element) {
	            this._element = _element;
	            /** @internal */
	            this._createComponentInContainerScope = wtfCreateScope('ViewContainerRef#createComponent()');
	            /** @internal */
	            this._insertScope = wtfCreateScope('ViewContainerRef#insert()');
	            /** @internal */
	            this._removeScope = wtfCreateScope('ViewContainerRef#remove()');
	            /** @internal */
	            this._detachScope = wtfCreateScope('ViewContainerRef#detach()');
	        }
	        ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
	        Object.defineProperty(ViewContainerRef_.prototype, "length", {
	            get: function () {
	                var views = this._element.nestedViews;
	                return isPresent(views) ? views.length : 0;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "element", {
	            get: function () { return this._element.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "injector", {
	            get: function () { return this._element.injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
	            get: function () { return this._element.parentInjector; },
	            enumerable: true,
	            configurable: true
	        });
	        // TODO(rado): profile and decide whether bounds checks should be added
	        // to the methods below.
	        ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
	            if (context === void 0) { context = null; }
	            if (index === void 0) { index = -1; }
	            var viewRef = templateRef.createEmbeddedView(context);
	            this.insert(viewRef, index);
	            return viewRef;
	        };
	        ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
	            if (index === void 0) { index = -1; }
	            if (injector === void 0) { injector = null; }
	            if (projectableNodes === void 0) { projectableNodes = null; }
	            var s = this._createComponentInContainerScope();
	            var contextInjector = injector || this._element.parentInjector;
	            var componentRef = componentFactory.create(contextInjector, projectableNodes);
	            this.insert(componentRef.hostView, index);
	            return wtfLeave(s, componentRef);
	        };
	        // TODO(i): refactor insert+remove into move
	        ViewContainerRef_.prototype.insert = function (viewRef, index) {
	            if (index === void 0) { index = -1; }
	            var s = this._insertScope();
	            if (index == -1)
	                index = this.length;
	            var viewRef_ = viewRef;
	            this._element.attachView(viewRef_.internalView, index);
	            return wtfLeave(s, viewRef_);
	        };
	        ViewContainerRef_.prototype.move = function (viewRef, currentIndex) {
	            var s = this._insertScope();
	            if (currentIndex == -1)
	                return;
	            var viewRef_ = viewRef;
	            this._element.moveView(viewRef_.internalView, currentIndex);
	            return wtfLeave(s, viewRef_);
	        };
	        ViewContainerRef_.prototype.indexOf = function (viewRef) {
	            return this._element.nestedViews.indexOf(viewRef.internalView);
	        };
	        // TODO(i): rename to destroy
	        ViewContainerRef_.prototype.remove = function (index) {
	            if (index === void 0) { index = -1; }
	            var s = this._removeScope();
	            if (index == -1)
	                index = this.length - 1;
	            var view = this._element.detachView(index);
	            view.destroy();
	            // view is intentionally not returned to the client.
	            wtfLeave(s);
	        };
	        // TODO(i): refactor insert+remove into move
	        ViewContainerRef_.prototype.detach = function (index) {
	            if (index === void 0) { index = -1; }
	            var s = this._detachScope();
	            if (index == -1)
	                index = this.length - 1;
	            var view = this._element.detachView(index);
	            return wtfLeave(s, view.ref);
	        };
	        ViewContainerRef_.prototype.clear = function () {
	            for (var i = this.length - 1; i >= 0; i--) {
	                this.remove(i);
	            }
	        };
	        return ViewContainerRef_;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var _queuedAnimations = [];
	    /** @internal */
	    function queueAnimationGlobally(player) {
	        _queuedAnimations.push(player);
	    }
	    /** @internal */
	    function triggerQueuedAnimations() {
	        // this code is wrapped into a single promise such that the
	        // onStart and onDone player callbacks are triggered outside
	        // of the digest cycle of animations
	        if (_queuedAnimations.length) {
	            Promise.resolve(null).then(_triggerAnimations);
	        }
	    }
	    function _triggerAnimations() {
	        for (var i = 0; i < _queuedAnimations.length; i++) {
	            var player = _queuedAnimations[i];
	            player.play();
	        }
	        _queuedAnimations = [];
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var ViewRef = (function () {
	        function ViewRef() {
	        }
	        Object.defineProperty(ViewRef.prototype, "destroyed", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return ViewRef;
	    }());
	    /**
	     * Represents an Angular View.
	     *
	     * <!-- TODO: move the next two paragraphs to the dev guide -->
	     * A View is a fundamental building block of the application UI. It is the smallest grouping of
	     * Elements which are created and destroyed together.
	     *
	     * Properties of elements in a View can change, but the structure (number and order) of elements in
	     * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
	     * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
	     * <!-- /TODO -->
	     *
	     * ### Example
	     *
	     * Given this template...
	     *
	     * ```
	     * Count: {{items.length}}
	     * <ul>
	     *   <li *ngFor="let  item of items">{{item}}</li>
	     * </ul>
	     * ```
	     *
	     * We have two {@link TemplateRef}s:
	     *
	     * Outer {@link TemplateRef}:
	     * ```
	     * Count: {{items.length}}
	     * <ul>
	     *   <template ngFor let-item [ngForOf]="items"></template>
	     * </ul>
	     * ```
	     *
	     * Inner {@link TemplateRef}:
	     * ```
	     *   <li>{{item}}</li>
	     * ```
	     *
	     * Notice that the original template is broken down into two separate {@link TemplateRef}s.
	     *
	     * The outer/inner {@link TemplateRef}s are then assembled into views like so:
	     *
	     * ```
	     * <!-- ViewRef: outer-0 -->
	     * Count: 2
	     * <ul>
	     *   <template view-container-ref></template>
	     *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
	     *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
	     * </ul>
	     * <!-- /ViewRef: outer-0 -->
	     * ```
	     * @experimental
	     */
	    var EmbeddedViewRef = (function (_super) {
	        __extends$11(EmbeddedViewRef, _super);
	        function EmbeddedViewRef() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(EmbeddedViewRef.prototype, "context", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return EmbeddedViewRef;
	    }(ViewRef));
	    var ViewRef_ = (function () {
	        function ViewRef_(_view) {
	            this._view = _view;
	            this._view = _view;
	            this._originalMode = this._view.cdMode;
	        }
	        Object.defineProperty(ViewRef_.prototype, "internalView", {
	            get: function () { return this._view; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "rootNodes", {
	            get: function () { return this._view.flatRootNodes; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "context", {
	            get: function () { return this._view.context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "destroyed", {
	            get: function () { return this._view.destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
	        ViewRef_.prototype.detach = function () { this._view.cdMode = ChangeDetectorStatus.Detached; };
	        ViewRef_.prototype.detectChanges = function () {
	            this._view.detectChanges(false);
	            triggerQueuedAnimations();
	        };
	        ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
	        ViewRef_.prototype.reattach = function () {
	            this._view.cdMode = this._originalMode;
	            this.markForCheck();
	        };
	        ViewRef_.prototype.onDestroy = function (callback) {
	            if (!this._view.disposables) {
	                this._view.disposables = [];
	            }
	            this._view.disposables.push(callback);
	        };
	        ViewRef_.prototype.destroy = function () { this._view.detachAndDestroy(); };
	        return ViewRef_;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var EventListener = (function () {
	        function EventListener(name, callback) {
	            this.name = name;
	            this.callback = callback;
	        }
	        ;
	        return EventListener;
	    }());
	    /**
	     * @experimental All debugging apis are currently experimental.
	     */
	    var DebugNode = (function () {
	        function DebugNode(nativeNode, parent, _debugInfo) {
	            this._debugInfo = _debugInfo;
	            this.nativeNode = nativeNode;
	            if (parent && parent instanceof DebugElement) {
	                parent.addChild(this);
	            }
	            else {
	                this.parent = null;
	            }
	            this.listeners = [];
	        }
	        Object.defineProperty(DebugNode.prototype, "injector", {
	            get: function () { return this._debugInfo ? this._debugInfo.injector : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "componentInstance", {
	            get: function () { return this._debugInfo ? this._debugInfo.component : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "context", {
	            get: function () { return this._debugInfo ? this._debugInfo.context : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "references", {
	            get: function () {
	                return this._debugInfo ? this._debugInfo.references : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "providerTokens", {
	            get: function () { return this._debugInfo ? this._debugInfo.providerTokens : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "source", {
	            get: function () { return this._debugInfo ? this._debugInfo.source : null; },
	            enumerable: true,
	            configurable: true
	        });
	        return DebugNode;
	    }());
	    /**
	     * @experimental All debugging apis are currently experimental.
	     */
	    var DebugElement = (function (_super) {
	        __extends$12(DebugElement, _super);
	        function DebugElement(nativeNode, parent, _debugInfo) {
	            _super.call(this, nativeNode, parent, _debugInfo);
	            this.properties = {};
	            this.attributes = {};
	            this.classes = {};
	            this.styles = {};
	            this.childNodes = [];
	            this.nativeElement = nativeNode;
	        }
	        DebugElement.prototype.addChild = function (child) {
	            if (child) {
	                this.childNodes.push(child);
	                child.parent = this;
	            }
	        };
	        DebugElement.prototype.removeChild = function (child) {
	            var childIndex = this.childNodes.indexOf(child);
	            if (childIndex !== -1) {
	                child.parent = null;
	                this.childNodes.splice(childIndex, 1);
	            }
	        };
	        DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
	            var siblingIndex = this.childNodes.indexOf(child);
	            if (siblingIndex !== -1) {
	                var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
	                var nextChildren = this.childNodes.slice(siblingIndex + 1);
	                this.childNodes = previousChildren.concat(newChildren, nextChildren);
	                for (var i = 0; i < newChildren.length; ++i) {
	                    var newChild = newChildren[i];
	                    if (newChild.parent) {
	                        newChild.parent.removeChild(newChild);
	                    }
	                    newChild.parent = this;
	                }
	            }
	        };
	        DebugElement.prototype.query = function (predicate) {
	            var results = this.queryAll(predicate);
	            return results[0] || null;
	        };
	        DebugElement.prototype.queryAll = function (predicate) {
	            var matches = [];
	            _queryElementChildren(this, predicate, matches);
	            return matches;
	        };
	        DebugElement.prototype.queryAllNodes = function (predicate) {
	            var matches = [];
	            _queryNodeChildren(this, predicate, matches);
	            return matches;
	        };
	        Object.defineProperty(DebugElement.prototype, "children", {
	            get: function () {
	                return this.childNodes.filter(function (node) { return node instanceof DebugElement; });
	            },
	            enumerable: true,
	            configurable: true
	        });
	        DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
	            this.listeners.forEach(function (listener) {
	                if (listener.name == eventName) {
	                    listener.callback(eventObj);
	                }
	            });
	        };
	        return DebugElement;
	    }(DebugNode));
	    /**
	     * @experimental
	     */
	    function asNativeElements(debugEls) {
	        return debugEls.map(function (el) { return el.nativeElement; });
	    }
	    function _queryElementChildren(element, predicate, matches) {
	        element.childNodes.forEach(function (node) {
	            if (node instanceof DebugElement) {
	                if (predicate(node)) {
	                    matches.push(node);
	                }
	                _queryElementChildren(node, predicate, matches);
	            }
	        });
	    }
	    function _queryNodeChildren(parentNode, predicate, matches) {
	        if (parentNode instanceof DebugElement) {
	            parentNode.childNodes.forEach(function (node) {
	                if (predicate(node)) {
	                    matches.push(node);
	                }
	                if (node instanceof DebugElement) {
	                    _queryNodeChildren(node, predicate, matches);
	                }
	            });
	        }
	    }
	    // Need to keep the nodes in a global Map so that multiple angular apps are supported.
	    var _nativeNodeToDebugNode = new Map();
	    /**
	     * @experimental
	     */
	    function getDebugNode(nativeNode) {
	        return _nativeNodeToDebugNode.get(nativeNode);
	    }
	    function indexDebugNode(node) {
	        _nativeNodeToDebugNode.set(node.nativeNode, node);
	    }
	    function removeDebugNodeFromIndex(node) {
	        _nativeNodeToDebugNode.delete(node.nativeNode);
	    }
	
	    function _reflector() {
	        return reflector;
	    }
	    var _CORE_PLATFORM_PROVIDERS = [
	        PlatformRef_,
	        { provide: PlatformRef, useExisting: PlatformRef_ },
	        { provide: Reflector, useFactory: _reflector, deps: [] },
	        { provide: ReflectorReader, useExisting: Reflector },
	        TestabilityRegistry,
	        Console,
	    ];
	    /**
	     * This platform has to be included in any other platform
	     *
	     * @experimental
	     */
	    var platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);
	
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var LOCALE_ID = new OpaqueToken('LocaleId');
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var TRANSLATIONS = new OpaqueToken('Translations');
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var TRANSLATIONS_FORMAT = new OpaqueToken('TranslationsFormat');
	
	    function _iterableDiffersFactory() {
	        return defaultIterableDiffers;
	    }
	    function _keyValueDiffersFactory() {
	        return defaultKeyValueDiffers;
	    }
	    /**
	     * This module includes the providers of @angular/core that are needed
	     * to bootstrap components via `ApplicationRef`.
	     *
	     * @experimental
	     */
	    var ApplicationModule = (function () {
	        function ApplicationModule() {
	        }
	        ApplicationModule.decorators = [
	            { type: NgModule, args: [{
	                        providers: [
	                            ApplicationRef_,
	                            { provide: ApplicationRef, useExisting: ApplicationRef_ },
	                            ApplicationInitStatus,
	                            Compiler,
	                            APP_ID_RANDOM_PROVIDER,
	                            ViewUtils,
	                            { provide: IterableDiffers, useFactory: _iterableDiffersFactory },
	                            { provide: KeyValueDiffers, useFactory: _keyValueDiffersFactory },
	                            { provide: LOCALE_ID, useValue: 'en-US' },
	                        ]
	                    },] },
	        ];
	        /** @nocollapse */
	        ApplicationModule.ctorParameters = [];
	        return ApplicationModule;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var FILL_STYLE_FLAG = 'true'; // TODO (matsko): change to boolean
	    var ANY_STATE = '*';
	    var DEFAULT_STATE = '*';
	    var EMPTY_STATE = 'void';
	
	    var AnimationGroupPlayer = (function () {
	        function AnimationGroupPlayer(_players) {
	            var _this = this;
	            this._players = _players;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._finished = false;
	            this._started = false;
	            this._destroyed = false;
	            this.parentPlayer = null;
	            var count = 0;
	            var total = this._players.length;
	            if (total == 0) {
	                scheduleMicroTask(function () { return _this._onFinish(); });
	            }
	            else {
	                this._players.forEach(function (player) {
	                    player.parentPlayer = _this;
	                    player.onDone(function () {
	                        if (++count >= total) {
	                            _this._onFinish();
	                        }
	                    });
	                });
	            }
	        }
	        AnimationGroupPlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        AnimationGroupPlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
	        AnimationGroupPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        AnimationGroupPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        AnimationGroupPlayer.prototype.hasStarted = function () { return this._started; };
	        AnimationGroupPlayer.prototype.play = function () {
	            if (!isPresent(this.parentPlayer)) {
	                this.init();
	            }
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._players.forEach(function (player) { return player.play(); });
	        };
	        AnimationGroupPlayer.prototype.pause = function () { this._players.forEach(function (player) { return player.pause(); }); };
	        AnimationGroupPlayer.prototype.restart = function () { this._players.forEach(function (player) { return player.restart(); }); };
	        AnimationGroupPlayer.prototype.finish = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.finish(); });
	        };
	        AnimationGroupPlayer.prototype.destroy = function () {
	            if (!this._destroyed) {
	                this._onFinish();
	                this._players.forEach(function (player) { return player.destroy(); });
	                this._destroyed = true;
	            }
	        };
	        AnimationGroupPlayer.prototype.reset = function () {
	            this._players.forEach(function (player) { return player.reset(); });
	            this._destroyed = false;
	            this._finished = false;
	            this._started = false;
	        };
	        AnimationGroupPlayer.prototype.setPosition = function (p /** TODO #9100 */) {
	            this._players.forEach(function (player) { player.setPosition(p); });
	        };
	        AnimationGroupPlayer.prototype.getPosition = function () {
	            var min = 0;
	            this._players.forEach(function (player) {
	                var p = player.getPosition();
	                min = Math.min(p, min);
	            });
	            return min;
	        };
	        return AnimationGroupPlayer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var AnimationKeyframe = (function () {
	        function AnimationKeyframe(offset, styles) {
	            this.offset = offset;
	            this.styles = styles;
	        }
	        return AnimationKeyframe;
	    }());
	
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationPlayer = (function () {
	        function AnimationPlayer() {
	        }
	        Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
	            get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            set: function (player) { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationPlayer;
	    }());
	    var NoOpAnimationPlayer = (function () {
	        function NoOpAnimationPlayer() {
	            var _this = this;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._started = false;
	            this.parentPlayer = null;
	            scheduleMicroTask(function () { return _this._onFinish(); });
	        }
	        /** @internal */
	        NoOpAnimationPlayer.prototype._onFinish = function () {
	            this._onDoneFns.forEach(function (fn) { return fn(); });
	            this._onDoneFns = [];
	        };
	        NoOpAnimationPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        NoOpAnimationPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        NoOpAnimationPlayer.prototype.hasStarted = function () { return this._started; };
	        NoOpAnimationPlayer.prototype.init = function () { };
	        NoOpAnimationPlayer.prototype.play = function () {
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	            }
	            this._started = true;
	        };
	        NoOpAnimationPlayer.prototype.pause = function () { };
	        NoOpAnimationPlayer.prototype.restart = function () { };
	        NoOpAnimationPlayer.prototype.finish = function () { this._onFinish(); };
	        NoOpAnimationPlayer.prototype.destroy = function () { };
	        NoOpAnimationPlayer.prototype.reset = function () { };
	        NoOpAnimationPlayer.prototype.setPosition = function (p /** TODO #9100 */) { };
	        NoOpAnimationPlayer.prototype.getPosition = function () { return 0; };
	        return NoOpAnimationPlayer;
	    }());
	
	    var AnimationSequencePlayer = (function () {
	        function AnimationSequencePlayer(_players) {
	            var _this = this;
	            this._players = _players;
	            this._currentIndex = 0;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._finished = false;
	            this._started = false;
	            this._destroyed = false;
	            this.parentPlayer = null;
	            this._players.forEach(function (player) { player.parentPlayer = _this; });
	            this._onNext(false);
	        }
	        AnimationSequencePlayer.prototype._onNext = function (start) {
	            var _this = this;
	            if (this._finished)
	                return;
	            if (this._players.length == 0) {
	                this._activePlayer = new NoOpAnimationPlayer();
	                scheduleMicroTask(function () { return _this._onFinish(); });
	            }
	            else if (this._currentIndex >= this._players.length) {
	                this._activePlayer = new NoOpAnimationPlayer();
	                this._onFinish();
	            }
	            else {
	                var player = this._players[this._currentIndex++];
	                player.onDone(function () { return _this._onNext(true); });
	                this._activePlayer = player;
	                if (start) {
	                    player.play();
	                }
	            }
	        };
	        AnimationSequencePlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        AnimationSequencePlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
	        AnimationSequencePlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        AnimationSequencePlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        AnimationSequencePlayer.prototype.hasStarted = function () { return this._started; };
	        AnimationSequencePlayer.prototype.play = function () {
	            if (!isPresent(this.parentPlayer)) {
	                this.init();
	            }
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._activePlayer.play();
	        };
	        AnimationSequencePlayer.prototype.pause = function () { this._activePlayer.pause(); };
	        AnimationSequencePlayer.prototype.restart = function () {
	            this.reset();
	            if (this._players.length > 0) {
	                this._players[0].restart();
	            }
	        };
	        AnimationSequencePlayer.prototype.reset = function () {
	            this._players.forEach(function (player) { return player.reset(); });
	            this._destroyed = false;
	            this._finished = false;
	            this._started = false;
	        };
	        AnimationSequencePlayer.prototype.finish = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.finish(); });
	        };
	        AnimationSequencePlayer.prototype.destroy = function () {
	            if (!this._destroyed) {
	                this._onFinish();
	                this._players.forEach(function (player) { return player.destroy(); });
	                this._destroyed = true;
	                this._activePlayer = new NoOpAnimationPlayer();
	            }
	        };
	        AnimationSequencePlayer.prototype.setPosition = function (p /** TODO #9100 */) { this._players[0].setPosition(p); };
	        AnimationSequencePlayer.prototype.getPosition = function () { return this._players[0].getPosition(); };
	        return AnimationSequencePlayer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AUTO_STYLE = '*';
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link trigger trigger
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationEntryMetadata = (function () {
	        function AnimationEntryMetadata(name, definitions) {
	            this.name = name;
	            this.definitions = definitions;
	        }
	        return AnimationEntryMetadata;
	    }());
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateMetadata = (function () {
	        function AnimationStateMetadata() {
	        }
	        return AnimationStateMetadata;
	    }());
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link state state animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateDeclarationMetadata = (function (_super) {
	        __extends$13(AnimationStateDeclarationMetadata, _super);
	        function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
	            _super.call(this);
	            this.stateNameExpr = stateNameExpr;
	            this.styles = styles;
	        }
	        return AnimationStateDeclarationMetadata;
	    }(AnimationStateMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the
	     * {@link transition transition animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateTransitionMetadata = (function (_super) {
	        __extends$13(AnimationStateTransitionMetadata, _super);
	        function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
	            _super.call(this);
	            this.stateChangeExpr = stateChangeExpr;
	            this.steps = steps;
	        }
	        return AnimationStateTransitionMetadata;
	    }(AnimationStateMetadata));
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationMetadata = (function () {
	        function AnimationMetadata() {
	        }
	        return AnimationMetadata;
	    }());
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link keyframes keyframes
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationKeyframesSequenceMetadata = (function (_super) {
	        __extends$13(AnimationKeyframesSequenceMetadata, _super);
	        function AnimationKeyframesSequenceMetadata(steps) {
	            _super.call(this);
	            this.steps = steps;
	        }
	        return AnimationKeyframesSequenceMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link style style animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStyleMetadata = (function (_super) {
	        __extends$13(AnimationStyleMetadata, _super);
	        function AnimationStyleMetadata(styles, offset) {
	            if (offset === void 0) { offset = null; }
	            _super.call(this);
	            this.styles = styles;
	            this.offset = offset;
	        }
	        return AnimationStyleMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link animate animate
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationAnimateMetadata = (function (_super) {
	        __extends$13(AnimationAnimateMetadata, _super);
	        function AnimationAnimateMetadata(timings, styles) {
	            _super.call(this);
	            this.timings = timings;
	            this.styles = styles;
	        }
	        return AnimationAnimateMetadata;
	    }(AnimationMetadata));
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationWithStepsMetadata = (function (_super) {
	        __extends$13(AnimationWithStepsMetadata, _super);
	        function AnimationWithStepsMetadata() {
	            _super.call(this);
	        }
	        Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
	            get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationWithStepsMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link sequence sequence
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationSequenceMetadata = (function (_super) {
	        __extends$13(AnimationSequenceMetadata, _super);
	        function AnimationSequenceMetadata(_steps) {
	            _super.call(this);
	            this._steps = _steps;
	        }
	        Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
	            get: function () { return this._steps; },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationSequenceMetadata;
	    }(AnimationWithStepsMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link group group animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationGroupMetadata = (function (_super) {
	        __extends$13(AnimationGroupMetadata, _super);
	        function AnimationGroupMetadata(_steps) {
	            _super.call(this);
	            this._steps = _steps;
	        }
	        Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
	            get: function () { return this._steps; },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationGroupMetadata;
	    }(AnimationWithStepsMetadata));
	    /**
	     * `animate` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `animate` specifies an animation step that will apply the provided `styles` data for a given
	     * amount of
	     * time based on the provided `timing` expression value. Calls to `animate` are expected to be
	     * used within {@link sequence an animation sequence}, {@link group group}, or {@link transition
	     * transition}.
	     *
	     * ### Usage
	     *
	     * The `animate` function accepts two input parameters: `timing` and `styles`:
	     *
	     * - `timing` is a string based value that can be a combination of a duration with optional
	     * delay and easing values. The format for the expression breaks down to `duration delay easing`
	     * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
	     * delay=100, easing=ease-out`.
	     * If a numeric value is provided then that will be used as the `duration` value in millisecond
	     * form.
	     * - `styles` is the style input data which can either be a call to {@link style style} or {@link
	     * keyframes keyframes}.
	     * If left empty then the styles from the destination state will be collected and used (this is
	     * useful when
	     * describing an animation step that will complete an animation by {@link
	     * transition#the-final-animate-call animating to the final state}).
	     *
	     * ```typescript
	     * // various functions for specifying timing data
	     * animate(500, style(...))
	     * animate("1s", style(...))
	     * animate("100ms 0.5s", style(...))
	     * animate("5s ease", style(...))
	     * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
	     *
	     * // either style() of keyframes() can be used
	     * animate(500, style({ background: "red" }))
	     * animate(500, keyframes([
	     *   style({ background: "blue" })),
	     *   style({ background: "red" }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function animate(timing, styles) {
	        if (styles === void 0) { styles = null; }
	        var stylesEntry = styles;
	        if (!isPresent(stylesEntry)) {
	            var EMPTY_STYLE = {};
	            stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
	        }
	        return new AnimationAnimateMetadata(timing, stylesEntry);
	    }
	    /**
	     * `group` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `group` specifies a list of animation steps that are all run in parallel. Grouped animations
	     * are useful when a series of styles must be animated/closed off
	     * at different statrting/ending times.
	     *
	     * The `group` function can either be used within a {@link sequence sequence} or a {@link transition
	     * transition}
	     * and it will only continue to the next instruction once all of the inner animation steps
	     * have completed.
	     *
	     * ### Usage
	     *
	     * The `steps` data that is passed into the `group` animation function can either consist
	     * of {@link style style} or {@link animate animate} function calls. Each call to `style()` or
	     * `animate()`
	     * within a group will be executed instantly (use {@link keyframes keyframes} or a
	     * {@link animate#usage animate() with a delay value} to offset styles to be applied at a later
	     * time).
	     *
	     * ```typescript
	     * group([
	     *   animate("1s", { background: "black" }))
	     *   animate("2s", { color: "white" }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function group(steps) {
	        return new AnimationGroupMetadata(steps);
	    }
	    /**
	     * `sequence` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used
	     * by default when an array is passed as animation data into {@link transition transition}.)
	     *
	     * The `sequence` function can either be used within a {@link group group} or a {@link transition
	     * transition}
	     * and it will only continue to the next instruction once each of the inner animation steps
	     * have completed.
	     *
	     * To perform animation styling in parallel with other animation steps then
	     * have a look at the {@link group group} animation function.
	     *
	     * ### Usage
	     *
	     * The `steps` data that is passed into the `sequence` animation function can either consist
	     * of {@link style style} or {@link animate animate} function calls. A call to `style()` will apply
	     * the
	     * provided styling data immediately while a call to `animate()` will apply its styling
	     * data over a given time depending on its timing data.
	     *
	     * ```typescript
	     * sequence([
	     *   style({ opacity: 0 })),
	     *   animate("1s", { opacity: 1 }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function sequence(steps) {
	        return new AnimationSequenceMetadata(steps);
	    }
	    /**
	     * `style` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `style` declares a key/value object containing CSS properties/styles that can then
	     * be used for {@link state animation states}, within an {@link sequence animation sequence}, or as
	     * styling data for both {@link animate animate} and {@link keyframes keyframes}.
	     *
	     * ### Usage
	     *
	     * `style` takes in a key/value string map as data and expects one or more CSS property/value
	     * pairs to be defined.
	     *
	     * ```typescript
	     * // string values are used for css properties
	     * style({ background: "red", color: "blue" })
	     *
	     * // numerical (pixel) values are also supported
	     * style({ width: 100, height: 0 })
	     * ```
	     *
	     * #### Auto-styles (using `*`)
	     *
	     * When an asterix (`*`) character is used as a value then it will be detected from the element
	     * being animated
	     * and applied as animation data when the animation starts.
	     *
	     * This feature proves useful for a state depending on layout and/or environment factors; in such
	     * cases
	     * the styles are calculated just before the animation starts.
	     *
	     * ```typescript
	     * // the steps below will animate from 0 to the
	     * // actual height of the element
	     * style({ height: 0 }),
	     * animate("1s", style({ height: "*" }))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function style(tokens) {
	        var input;
	        var offset = null;
	        if (typeof tokens === 'string') {
	            input = [tokens];
	        }
	        else {
	            if (Array.isArray(tokens)) {
	                input = tokens;
	            }
	            else {
	                input = [tokens];
	            }
	            input.forEach(function (entry) {
	                var entryOffset = entry['offset'];
	                if (isPresent(entryOffset)) {
	                    offset = offset == null ? parseFloat(entryOffset) : offset;
	                }
	            });
	        }
	        return new AnimationStyleMetadata(input, offset);
	    }
	    /**
	     * `state` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `state` declares an animation state within the given trigger. When a state is
	     * active within a component then its associated styles will persist on
	     * the element that the trigger is attached to (even when the animation ends).
	     *
	     * To animate between states, have a look at the animation {@link transition transition}
	     * DSL function. To register states to an animation trigger please have a look
	     * at the {@link trigger trigger} function.
	     *
	     * #### The `void` state
	     *
	     * The `void` state value is a reserved word that angular uses to determine when the element is not
	     * apart
	     * of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
	     * associated element
	     * is void).
	     *
	     * #### The `*` (default) state
	     *
	     * The `*` state (when styled) is a fallback state that will be used if
	     * the state that is being animated is not declared within the trigger.
	     *
	     * ### Usage
	     *
	     * `state` will declare an animation state with its associated styles
	     * within the given trigger.
	     *
	     * - `stateNameExpr` can be one or more state names separated by commas.
	     * - `styles` refers to the {@link style styling data} that will be persisted on the element once
	     * the state
	     * has been reached.
	     *
	     * ```typescript
	     * // "void" is a reserved name for a state and is used to represent
	     * // the state in which an element is detached from from the application.
	     * state("void", style({ height: 0 }))
	     *
	     * // user-defined states
	     * state("closed", style({ height: 0 }))
	     * state("open, visible", style({ height: "*" }))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function state(stateNameExpr, styles) {
	        return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
	    }
	    /**
	     * `keyframes` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `keyframes` specifies a collection of {@link style style} entries each optionally characterized
	     * by an `offset` value.
	     *
	     * ### Usage
	     *
	     * The `keyframes` animation function is designed to be used alongside the {@link animate animate}
	     * animation function. Instead of applying animations from where they are
	     * currently to their destination, keyframes can describe how each style entry is applied
	     * and at what point within the animation arc (much like CSS Keyframe Animations do).
	     *
	     * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at
	     * what percentage of the animate time the styles will be applied.
	     *
	     * ```typescript
	     * // the provided offset values describe when each backgroundColor value is applied.
	     * animate("5s", keyframes([
	     *   style({ backgroundColor: "red", offset: 0 }),
	     *   style({ backgroundColor: "blue", offset: 0.2 }),
	     *   style({ backgroundColor: "orange", offset: 0.3 }),
	     *   style({ backgroundColor: "black", offset: 1 })
	     * ]))
	     * ```
	     *
	     * Alternatively, if there are no `offset` values used within the style entries then the offsets
	     * will
	     * be calculated automatically.
	     *
	     * ```typescript
	     * animate("5s", keyframes([
	     *   style({ backgroundColor: "red" }) // offset = 0
	     *   style({ backgroundColor: "blue" }) // offset = 0.33
	     *   style({ backgroundColor: "orange" }) // offset = 0.66
	     *   style({ backgroundColor: "black" }) // offset = 1
	     * ]))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function keyframes(steps) {
	        return new AnimationKeyframesSequenceMetadata(steps);
	    }
	    /**
	     * `transition` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `transition` declares the {@link sequence sequence of animation steps} that will be run when the
	     * provided
	     * `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 => state2`
	     * which consists
	     * of two known states (use an asterix (`*`) to refer to a dynamic starting and/or ending state).
	     *
	     * Animation transitions are placed within an {@link trigger animation trigger}. For an transition
	     * to animate to
	     * a state value and persist its styles then one or more {@link state animation states} is expected
	     * to be defined.
	     *
	     * ### Usage
	     *
	     * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
	     * what the
	     * previous state is and what the current state has become. In other words, if a transition is
	     * defined that
	     * matches the old/current state criteria then the associated animation will be triggered.
	     *
	     * ```typescript
	     * // all transition/state changes are defined within an animation trigger
	     * trigger("myAnimationTrigger", [
	     *   // if a state is defined then its styles will be persisted when the
	     *   // animation has fully completed itself
	     *   state("on", style({ background: "green" })),
	     *   state("off", style({ background: "grey" })),
	     *
	     *   // a transition animation that will be kicked off when the state value
	     *   // bound to "myAnimationTrigger" changes from "on" to "off"
	     *   transition("on => off", animate(500)),
	     *
	     *   // it is also possible to do run the same animation for both directions
	     *   transition("on <=> off", animate(500)),
	     *
	     *   // or to define multiple states pairs separated by commas
	     *   transition("on => off, off => void", animate(500)),
	     *
	     *   // this is a catch-all state change for when an element is inserted into
	     *   // the page and the destination state is unknown
	     *   transition("void => *", [
	     *     style({ opacity: 0 }),
	     *     animate(500)
	     *   ]),
	     *
	     *   // this will capture a state change between any states
	     *   transition("* => *", animate("1s 0s")),
	     * ])
	     * ```
	     *
	     * The template associated with this component will make use of the `myAnimationTrigger`
	     * animation trigger by binding to an element within its template code.
	     *
	     * ```html
	     * <!-- somewhere inside of my-component-tpl.html -->
	     * <div [@myAnimationTrigger]="myStatusExp">...</div>
	     * ```
	     *
	     * #### The final `animate` call
	     *
	     * If the final step within the transition steps is a call to `animate()` that **only**
	     * uses a timing value with **no style data** then it will be automatically used as the final
	     * animation
	     * arc for the element to animate itself to the final state. This involves an automatic mix of
	     * adding/removing CSS styles so that the element will be in the exact state it should be for the
	     * applied state to be presented correctly.
	     *
	     * ```
	     * // start off by hiding the element, but make sure that it animates properly to whatever state
	     * // is currently active for "myAnimationTrigger"
	     * transition("void => *", [
	     *   style({ opacity: 0 }),
	     *   animate(500)
	     * ])
	     * ```
	     *
	     * ### Transition Aliases (`:enter` and `:leave`)
	     *
	     * Given that enter (insertion) and leave (removal) animations are so common,
	     * the `transition` function accepts both `:enter` and `:leave` values which
	     * are aliases for the `void => *` and `* => void` state changes.
	     *
	     * ```
	     * transition(":enter", [
	     *   style({ opacity: 0 }),
	     *   animate(500, style({ opacity: 1 }))
	     * ])
	     * transition(":leave", [
	     *   animate(500, style({ opacity: 0 }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function transition(stateChangeExpr, steps) {
	        var animationData = Array.isArray(steps) ? new AnimationSequenceMetadata(steps) : steps;
	        return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
	    }
	    /**
	     * `trigger` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `trigger` Creates an animation trigger which will a list of {@link state state} and {@link
	     * transition transition}
	     * entries that will be evaluated when the expression bound to the trigger changes.
	     *
	     * Triggers are registered within the component annotation data under the
	     * {@link Component#animations-anchor animations section}. An animation trigger can
	     * be placed on an element within a template by referencing the name of the
	     * trigger followed by the expression value that the trigger is bound to
	     * (in the form of `[@triggerName]="expression"`.
	     *
	     * ### Usage
	     *
	     * `trigger` will create an animation trigger reference based on the provided `name` value.
	     * The provided `animation` value is expected to be an array consisting of {@link state state} and
	     * {@link transition transition}
	     * declarations.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-component',
	     *   templateUrl: 'my-component-tpl.html',
	     *   animations: [
	     *     trigger("myAnimationTrigger", [
	     *       state(...),
	     *       state(...),
	     *       transition(...),
	     *       transition(...)
	     *     ])
	     *   ]
	     * })
	     * class MyComponent {
	     *   myStatusExp = "something";
	     * }
	     * ```
	     *
	     * The template associated with this component will make use of the `myAnimationTrigger`
	     * animation trigger by binding to an element within its template code.
	     *
	     * ```html
	     * <!-- somewhere inside of my-component-tpl.html -->
	     * <div [@myAnimationTrigger]="myStatusExp">...</div>
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function trigger(name, animation) {
	        return new AnimationEntryMetadata(name, animation);
	    }
	
	    function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
	        if (nullValue === void 0) { nullValue = null; }
	        var finalStyles = {};
	        Object.keys(newStyles).forEach(function (prop) {
	            var value = newStyles[prop];
	            finalStyles[prop] = value == AUTO_STYLE ? nullValue : value.toString();
	        });
	        Object.keys(previousStyles).forEach(function (prop) {
	            if (!isPresent(finalStyles[prop])) {
	                finalStyles[prop] = nullValue;
	            }
	        });
	        return finalStyles;
	    }
	    function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
	        var limit = keyframes.length - 1;
	        var firstKeyframe = keyframes[0];
	        // phase 1: copy all the styles from the first keyframe into the lookup map
	        var flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
	        var extraFirstKeyframeStyles = {};
	        var hasExtraFirstStyles = false;
	        Object.keys(collectedStyles).forEach(function (prop) {
	            var value = collectedStyles[prop];
	            // if the style is already defined in the first keyframe then
	            // we do not replace it.
	            if (!flatenedFirstKeyframeStyles[prop]) {
	                flatenedFirstKeyframeStyles[prop] = value;
	                extraFirstKeyframeStyles[prop] = value;
	                hasExtraFirstStyles = true;
	            }
	        });
	        var keyframeCollectedStyles = StringMapWrapper.merge({}, flatenedFirstKeyframeStyles);
	        // phase 2: normalize the final keyframe
	        var finalKeyframe = keyframes[limit];
	        finalKeyframe.styles.styles.unshift(finalStateStyles);
	        var flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
	        var extraFinalKeyframeStyles = {};
	        var hasExtraFinalStyles = false;
	        Object.keys(keyframeCollectedStyles).forEach(function (prop) {
	            if (!isPresent(flatenedFinalKeyframeStyles[prop])) {
	                extraFinalKeyframeStyles[prop] = AUTO_STYLE;
	                hasExtraFinalStyles = true;
	            }
	        });
	        if (hasExtraFinalStyles) {
	            finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
	        }
	        Object.keys(flatenedFinalKeyframeStyles).forEach(function (prop) {
	            if (!isPresent(flatenedFirstKeyframeStyles[prop])) {
	                extraFirstKeyframeStyles[prop] = AUTO_STYLE;
	                hasExtraFirstStyles = true;
	            }
	        });
	        if (hasExtraFirstStyles) {
	            firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
	        }
	        return keyframes;
	    }
	    function clearStyles(styles) {
	        var finalStyles = {};
	        Object.keys(styles).forEach(function (key) { finalStyles[key] = null; });
	        return finalStyles;
	    }
	    function collectAndResolveStyles(collection, styles) {
	        return styles.map(function (entry) {
	            var stylesObj = {};
	            Object.keys(entry).forEach(function (prop) {
	                var value = entry[prop];
	                if (value == FILL_STYLE_FLAG) {
	                    value = collection[prop];
	                    if (!isPresent(value)) {
	                        value = AUTO_STYLE;
	                    }
	                }
	                collection[prop] = value;
	                stylesObj[prop] = value;
	            });
	            return stylesObj;
	        });
	    }
	    function renderStyles(element, renderer, styles) {
	        Object.keys(styles).forEach(function (prop) { renderer.setElementStyle(element, prop, styles[prop]); });
	    }
	    function flattenStyles(styles) {
	        var finalStyles = {};
	        styles.forEach(function (entry) {
	            Object.keys(entry).forEach(function (prop) { finalStyles[prop] = entry[prop]; });
	        });
	        return finalStyles;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var AnimationStyles = (function () {
	        function AnimationStyles(styles) {
	            this.styles = styles;
	        }
	        return AnimationStyles;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * An instance of this class is returned as an event parameter when an animation
	     * callback is captured for an animation either during the start or done phase.
	     *
	     * ```typescript
	     * @Component({
	     *   host: {
	     *     '[@myAnimationTrigger]': 'someExpression',
	     *     '(@myAnimationTrigger.start)': 'captureStartEvent($event)',
	     *     '(@myAnimationTrigger.done)': 'captureDoneEvent($event)',
	     *   },
	     *   animations: [
	     *     trigger("myAnimationTrigger", [
	     *        // ...
	     *     ])
	     *   ]
	     * })
	     * class MyComponent {
	     *   someExpression: any = false;
	     *   captureStartEvent(event: AnimationTransitionEvent) {
	     *     // the toState, fromState and totalTime data is accessible from the event variable
	     *   }
	     *
	     *   captureDoneEvent(event: AnimationTransitionEvent) {
	     *     // the toState, fromState and totalTime data is accessible from the event variable
	     *   }
	     * }
	     * ```
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationTransitionEvent = (function () {
	        function AnimationTransitionEvent(_a) {
	            var fromState = _a.fromState, toState = _a.toState, totalTime = _a.totalTime, phaseName = _a.phaseName;
	            this.fromState = fromState;
	            this.toState = toState;
	            this.totalTime = totalTime;
	            this.phaseName = phaseName;
	        }
	        return AnimationTransitionEvent;
	    }());
	
	    var AnimationTransition = (function () {
	        function AnimationTransition(_player, _fromState, _toState, _totalTime) {
	            this._player = _player;
	            this._fromState = _fromState;
	            this._toState = _toState;
	            this._totalTime = _totalTime;
	        }
	        AnimationTransition.prototype._createEvent = function (phaseName) {
	            return new AnimationTransitionEvent({
	                fromState: this._fromState,
	                toState: this._toState,
	                totalTime: this._totalTime,
	                phaseName: phaseName
	            });
	        };
	        AnimationTransition.prototype.onStart = function (callback) {
	            var event = this._createEvent('start');
	            this._player.onStart(function () { return callback(event); });
	        };
	        AnimationTransition.prototype.onDone = function (callback) {
	            var event = this._createEvent('done');
	            this._player.onDone(function () { return callback(event); });
	        };
	        return AnimationTransition;
	    }());
	
	    var DebugDomRootRenderer = (function () {
	        function DebugDomRootRenderer(_delegate) {
	            this._delegate = _delegate;
	        }
	        DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	            return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
	        };
	        return DebugDomRootRenderer;
	    }());
	    var DebugDomRenderer = (function () {
	        function DebugDomRenderer(_delegate) {
	            this._delegate = _delegate;
	        }
	        DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	            var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
	            var debugEl = new DebugElement(nativeEl, null, debugInfo);
	            indexDebugNode(debugEl);
	            return nativeEl;
	        };
	        DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
	            var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
	            var debugEl = new DebugElement(nativeEl, getDebugNode(parentElement), debugInfo);
	            debugEl.name = name;
	            indexDebugNode(debugEl);
	            return nativeEl;
	        };
	        DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	        DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	            var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
	            var debugEl = new DebugNode(comment, getDebugNode(parentElement), debugInfo);
	            indexDebugNode(debugEl);
	            return comment;
	        };
	        DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	            var text = this._delegate.createText(parentElement, value, debugInfo);
	            var debugEl = new DebugNode(text, getDebugNode(parentElement), debugInfo);
	            indexDebugNode(debugEl);
	            return text;
	        };
	        DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	            var debugParent = getDebugNode(parentElement);
	            if (isPresent(debugParent) && debugParent instanceof DebugElement) {
	                var debugElement_1 = debugParent;
	                nodes.forEach(function (node) { debugElement_1.addChild(getDebugNode(node)); });
	            }
	            this._delegate.projectNodes(parentElement, nodes);
	        };
	        DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	            var debugNode = getDebugNode(node);
	            if (isPresent(debugNode)) {
	                var debugParent = debugNode.parent;
	                if (viewRootNodes.length > 0 && isPresent(debugParent)) {
	                    var debugViewRootNodes_1 = [];
	                    viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes_1.push(getDebugNode(rootNode)); });
	                    debugParent.insertChildrenAfter(debugNode, debugViewRootNodes_1);
	                }
	            }
	            this._delegate.attachViewAfter(node, viewRootNodes);
	        };
	        DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	            viewRootNodes.forEach(function (node) {
	                var debugNode = getDebugNode(node);
	                if (isPresent(debugNode) && isPresent(debugNode.parent)) {
	                    debugNode.parent.removeChild(debugNode);
	                }
	            });
	            this._delegate.detachView(viewRootNodes);
	        };
	        DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	            viewAllNodes = viewAllNodes || [];
	            viewAllNodes.forEach(function (node) { removeDebugNodeFromIndex(getDebugNode(node)); });
	            this._delegate.destroyView(hostElement, viewAllNodes);
	        };
	        DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl)) {
	                debugEl.listeners.push(new EventListener(name, callback));
	            }
	            return this._delegate.listen(renderElement, name, callback);
	        };
	        DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	            return this._delegate.listenGlobal(target, name, callback);
	        };
	        DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.properties[propertyName] = propertyValue;
	            }
	            this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	        };
	        DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.attributes[attributeName] = attributeValue;
	            }
	            this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	        };
	        DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	            this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	        };
	        DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.classes[className] = isAdd;
	            }
	            this._delegate.setElementClass(renderElement, className, isAdd);
	        };
	        DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.styles[styleName] = styleValue;
	            }
	            this._delegate.setElementStyle(renderElement, styleName, styleValue);
	        };
	        DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	            this._delegate.invokeElementMethod(renderElement, methodName, args);
	        };
	        DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	        DebugDomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing);
	        };
	        return DebugDomRenderer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var ViewType;
	    (function (ViewType) {
	        // A view that contains the host element with bound component directive.
	        // Contains a COMPONENT view
	        ViewType[ViewType["HOST"] = 0] = "HOST";
	        // The view of the component
	        // Can contain 0 to n EMBEDDED views
	        ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
	        // A view that is embedded into another View via a <template> element
	        // inside of a COMPONENT view
	        ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
	    })(ViewType || (ViewType = {}));
	
	    var StaticNodeDebugInfo = (function () {
	        function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
	            this.providerTokens = providerTokens;
	            this.componentToken = componentToken;
	            this.refTokens = refTokens;
	        }
	        return StaticNodeDebugInfo;
	    }());
	    var DebugContext = (function () {
	        function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
	            this._view = _view;
	            this._nodeIndex = _nodeIndex;
	            this._tplRow = _tplRow;
	            this._tplCol = _tplCol;
	        }
	        Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
	            get: function () {
	                return isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "context", {
	            get: function () { return this._view.context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "component", {
	            get: function () {
	                var staticNodeInfo = this._staticNodeInfo;
	                if (isPresent(staticNodeInfo) && isPresent(staticNodeInfo.componentToken)) {
	                    return this.injector.get(staticNodeInfo.componentToken);
	                }
	                return null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
	            get: function () {
	                var componentView = this._view;
	                while (isPresent(componentView.parentView) && componentView.type !== ViewType.COMPONENT) {
	                    componentView = componentView.parentView;
	                }
	                return componentView.parentElement;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "injector", {
	            get: function () { return this._view.injector(this._nodeIndex); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "renderNode", {
	            get: function () {
	                if (isPresent(this._nodeIndex) && this._view.allNodes) {
	                    return this._view.allNodes[this._nodeIndex];
	                }
	                else {
	                    return null;
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "providerTokens", {
	            get: function () {
	                var staticNodeInfo = this._staticNodeInfo;
	                return isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "source", {
	            get: function () {
	                return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "references", {
	            get: function () {
	                var _this = this;
	                var varValues = {};
	                var staticNodeInfo = this._staticNodeInfo;
	                if (isPresent(staticNodeInfo)) {
	                    var refs_1 = staticNodeInfo.refTokens;
	                    Object.keys(refs_1).forEach(function (refName) {
	                        var refToken = refs_1[refName];
	                        var varValue;
	                        if (isBlank(refToken)) {
	                            varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
	                        }
	                        else {
	                            varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
	                        }
	                        varValues[refName] = varValue;
	                    });
	                }
	                return varValues;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return DebugContext;
	    }());
	
	    var ViewAnimationMap = (function () {
	        function ViewAnimationMap() {
	            this._map = new Map();
	            this._allPlayers = [];
	        }
	        ViewAnimationMap.prototype.find = function (element, animationName) {
	            var playersByAnimation = this._map.get(element);
	            if (isPresent(playersByAnimation)) {
	                return playersByAnimation[animationName];
	            }
	        };
	        ViewAnimationMap.prototype.findAllPlayersByElement = function (element) {
	            var el = this._map.get(element);
	            return el ? Object.keys(el).map(function (k) { return el[k]; }) : [];
	        };
	        ViewAnimationMap.prototype.set = function (element, animationName, player) {
	            var playersByAnimation = this._map.get(element);
	            if (!isPresent(playersByAnimation)) {
	                playersByAnimation = {};
	            }
	            var existingEntry = playersByAnimation[animationName];
	            if (isPresent(existingEntry)) {
	                this.remove(element, animationName);
	            }
	            playersByAnimation[animationName] = player;
	            this._allPlayers.push(player);
	            this._map.set(element, playersByAnimation);
	        };
	        ViewAnimationMap.prototype.getAllPlayers = function () { return this._allPlayers; };
	        ViewAnimationMap.prototype.remove = function (element, animationName) {
	            var playersByAnimation = this._map.get(element);
	            if (playersByAnimation) {
	                var player = playersByAnimation[animationName];
	                delete playersByAnimation[animationName];
	                var index = this._allPlayers.indexOf(player);
	                this._allPlayers.splice(index, 1);
	                if (Object.keys(playersByAnimation).length === 0) {
	                    this._map.delete(element);
	                }
	            }
	        };
	        return ViewAnimationMap;
	    }());
	
	    var AnimationViewContext = (function () {
	        function AnimationViewContext() {
	            this._players = new ViewAnimationMap();
	        }
	        AnimationViewContext.prototype.onAllActiveAnimationsDone = function (callback) {
	            var activeAnimationPlayers = this._players.getAllPlayers();
	            // we check for the length to avoid having GroupAnimationPlayer
	            // issue an unnecessary microtask when zero players are passed in
	            if (activeAnimationPlayers.length) {
	                new AnimationGroupPlayer(activeAnimationPlayers).onDone(function () { return callback(); });
	            }
	            else {
	                callback();
	            }
	        };
	        AnimationViewContext.prototype.queueAnimation = function (element, animationName, player) {
	            queueAnimationGlobally(player);
	            this._players.set(element, animationName, player);
	        };
	        AnimationViewContext.prototype.cancelActiveAnimation = function (element, animationName, removeAllAnimations) {
	            if (removeAllAnimations === void 0) { removeAllAnimations = false; }
	            if (removeAllAnimations) {
	                this._players.findAllPlayersByElement(element).forEach(function (player) { return player.destroy(); });
	            }
	            else {
	                var player = this._players.find(element, animationName);
	                if (player) {
	                    player.destroy();
	                }
	            }
	        };
	        return AnimationViewContext;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$15 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var ElementInjector = (function (_super) {
	        __extends$15(ElementInjector, _super);
	        function ElementInjector(_view, _nodeIndex) {
	            _super.call(this);
	            this._view = _view;
	            this._nodeIndex = _nodeIndex;
	        }
	        ElementInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
	        };
	        return ElementInjector;
	    }(Injector));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$14 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _scope_check = wtfCreateScope("AppView#check(ascii id)");
	    /**
	     * @experimental
	     */
	    var EMPTY_CONTEXT$1 = new Object();
	    var UNDEFINED$1 = new Object();
	    /**
	     * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	     *
	     */
	    var AppView = (function () {
	        function AppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentElement, cdMode, declaredViewContainer) {
	            if (declaredViewContainer === void 0) { declaredViewContainer = null; }
	            this.clazz = clazz;
	            this.componentType = componentType;
	            this.type = type;
	            this.viewUtils = viewUtils;
	            this.parentView = parentView;
	            this.parentIndex = parentIndex;
	            this.parentElement = parentElement;
	            this.cdMode = cdMode;
	            this.declaredViewContainer = declaredViewContainer;
	            this.viewContainer = null;
	            this.numberOfChecks = 0;
	            this.ref = new ViewRef_(this);
	            if (type === ViewType.COMPONENT || type === ViewType.HOST) {
	                this.renderer = viewUtils.renderComponent(componentType);
	            }
	            else {
	                this.renderer = parentView.renderer;
	            }
	            this._directRenderer = this.renderer.directRenderer;
	        }
	        Object.defineProperty(AppView.prototype, "animationContext", {
	            get: function () {
	                if (!this._animationContext) {
	                    this._animationContext = new AnimationViewContext();
	                }
	                return this._animationContext;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "destroyed", {
	            get: function () { return this.cdMode === ChangeDetectorStatus.Destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        AppView.prototype.create = function (context) {
	            this.context = context;
	            return this.createInternal(null);
	        };
	        AppView.prototype.createHostView = function (rootSelectorOrNode, hostInjector, projectableNodes) {
	            this.context = EMPTY_CONTEXT$1;
	            this._hasExternalHostElement = isPresent(rootSelectorOrNode);
	            this._hostInjector = hostInjector;
	            this._hostProjectableNodes = projectableNodes;
	            return this.createInternal(rootSelectorOrNode);
	        };
	        /**
	         * Overwritten by implementations.
	         * Returns the ComponentRef for the host element for ViewType.HOST.
	         */
	        AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	        /**
	         * Overwritten by implementations.
	         */
	        AppView.prototype.createEmbeddedViewInternal = function (templateNodeIndex) { return null; };
	        AppView.prototype.init = function (lastRootNode, allNodes, disposables) {
	            this.lastRootNode = lastRootNode;
	            this.allNodes = allNodes;
	            this.disposables = disposables;
	            if (this.type === ViewType.COMPONENT) {
	                this.dirtyParentQueriesInternal();
	            }
	        };
	        AppView.prototype.injectorGet = function (token, nodeIndex, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            var result = UNDEFINED$1;
	            var view = this;
	            while (result === UNDEFINED$1) {
	                if (isPresent(nodeIndex)) {
	                    result = view.injectorGetInternal(token, nodeIndex, UNDEFINED$1);
	                }
	                if (result === UNDEFINED$1 && view.type === ViewType.HOST) {
	                    result = view._hostInjector.get(token, notFoundValue);
	                }
	                nodeIndex = view.parentIndex;
	                view = view.parentView;
	            }
	            return result;
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	            return notFoundResult;
	        };
	        AppView.prototype.injector = function (nodeIndex) { return new ElementInjector(this, nodeIndex); };
	        AppView.prototype.detachAndDestroy = function () {
	            if (this._hasExternalHostElement) {
	                this.detach();
	            }
	            else if (isPresent(this.viewContainer)) {
	                this.viewContainer.detachView(this.viewContainer.nestedViews.indexOf(this));
	            }
	            this.destroy();
	        };
	        AppView.prototype.destroy = function () {
	            var _this = this;
	            if (this.cdMode === ChangeDetectorStatus.Destroyed) {
	                return;
	            }
	            var hostElement = this.type === ViewType.COMPONENT ? this.parentElement : null;
	            if (this.disposables) {
	                for (var i = 0; i < this.disposables.length; i++) {
	                    this.disposables[i]();
	                }
	            }
	            this.destroyInternal();
	            this.dirtyParentQueriesInternal();
	            if (this._animationContext) {
	                this._animationContext.onAllActiveAnimationsDone(function () { return _this.renderer.destroyView(hostElement, _this.allNodes); });
	            }
	            else {
	                this.renderer.destroyView(hostElement, this.allNodes);
	            }
	            this.cdMode = ChangeDetectorStatus.Destroyed;
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.destroyInternal = function () { };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.detachInternal = function () { };
	        AppView.prototype.detach = function () {
	            var _this = this;
	            this.detachInternal();
	            if (this._animationContext) {
	                this._animationContext.onAllActiveAnimationsDone(function () { return _this._renderDetach(); });
	            }
	            else {
	                this._renderDetach();
	            }
	            if (this.declaredViewContainer && this.declaredViewContainer !== this.viewContainer) {
	                var projectedViews = this.declaredViewContainer.projectedViews;
	                var index = projectedViews.indexOf(this);
	                // perf: pop is faster than splice!
	                if (index >= projectedViews.length - 1) {
	                    projectedViews.pop();
	                }
	                else {
	                    projectedViews.splice(index, 1);
	                }
	            }
	            this.viewContainer = null;
	            this.dirtyParentQueriesInternal();
	        };
	        AppView.prototype._renderDetach = function () {
	            if (this._directRenderer) {
	                this.visitRootNodesInternal(this._directRenderer.remove, null);
	            }
	            else {
	                this.renderer.detachView(this.flatRootNodes);
	            }
	        };
	        AppView.prototype.attachAfter = function (viewContainer, prevView) {
	            this._renderAttach(viewContainer, prevView);
	            this.viewContainer = viewContainer;
	            if (this.declaredViewContainer && this.declaredViewContainer !== viewContainer) {
	                if (!this.declaredViewContainer.projectedViews) {
	                    this.declaredViewContainer.projectedViews = [];
	                }
	                this.declaredViewContainer.projectedViews.push(this);
	            }
	            this.dirtyParentQueriesInternal();
	        };
	        AppView.prototype.moveAfter = function (viewContainer, prevView) {
	            this._renderAttach(viewContainer, prevView);
	            this.dirtyParentQueriesInternal();
	        };
	        AppView.prototype._renderAttach = function (viewContainer, prevView) {
	            var prevNode = prevView ? prevView.lastRootNode : viewContainer.nativeElement;
	            if (this._directRenderer) {
	                var nextSibling = this._directRenderer.nextSibling(prevNode);
	                if (nextSibling) {
	                    this.visitRootNodesInternal(this._directRenderer.insertBefore, nextSibling);
	                }
	                else {
	                    this.visitRootNodesInternal(this._directRenderer.appendChild, this._directRenderer.parentElement(prevNode));
	                }
	            }
	            else {
	                this.renderer.attachViewAfter(prevNode, this.flatRootNodes);
	            }
	        };
	        Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	            get: function () { return this.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "flatRootNodes", {
	            get: function () {
	                var nodes = [];
	                this.visitRootNodesInternal(addToArray, nodes);
	                return nodes;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        AppView.prototype.projectNodes = function (parentElement, ngContentIndex) {
	            if (this._directRenderer) {
	                this.visitProjectedNodes(ngContentIndex, this._directRenderer.appendChild, parentElement);
	            }
	            else {
	                var nodes = [];
	                this.visitProjectedNodes(ngContentIndex, addToArray, nodes);
	                this.renderer.projectNodes(parentElement, nodes);
	            }
	        };
	        AppView.prototype.visitProjectedNodes = function (ngContentIndex, cb, c) {
	            switch (this.type) {
	                case ViewType.EMBEDDED:
	                    this.parentView.visitProjectedNodes(ngContentIndex, cb, c);
	                    break;
	                case ViewType.COMPONENT:
	                    if (this.parentView.type === ViewType.HOST) {
	                        var nodes = this.parentView._hostProjectableNodes[ngContentIndex] || [];
	                        for (var i = 0; i < nodes.length; i++) {
	                            cb(nodes[i], c);
	                        }
	                    }
	                    else {
	                        this.parentView.visitProjectableNodesInternal(this.parentIndex, ngContentIndex, cb, c);
	                    }
	                    break;
	            }
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.visitRootNodesInternal = function (cb, c) { };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, c) { };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.dirtyParentQueriesInternal = function () { };
	        AppView.prototype.detectChanges = function (throwOnChange) {
	            var s = _scope_check(this.clazz);
	            if (this.cdMode === ChangeDetectorStatus.Checked ||
	                this.cdMode === ChangeDetectorStatus.Errored ||
	                this.cdMode === ChangeDetectorStatus.Detached)
	                return;
	            if (this.cdMode === ChangeDetectorStatus.Destroyed) {
	                this.throwDestroyedError('detectChanges');
	            }
	            this.detectChangesInternal(throwOnChange);
	            if (this.cdMode === ChangeDetectorStatus.CheckOnce)
	                this.cdMode = ChangeDetectorStatus.Checked;
	            this.numberOfChecks++;
	            wtfLeave(s);
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.detectChangesInternal = function (throwOnChange) { };
	        AppView.prototype.markAsCheckOnce = function () { this.cdMode = ChangeDetectorStatus.CheckOnce; };
	        AppView.prototype.markPathToRootAsCheckOnce = function () {
	            var c = this;
	            while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
	                if (c.cdMode === ChangeDetectorStatus.Checked) {
	                    c.cdMode = ChangeDetectorStatus.CheckOnce;
	                }
	                if (c.type === ViewType.COMPONENT) {
	                    c = c.parentView;
	                }
	                else {
	                    c = c.viewContainer ? c.viewContainer.parentView : null;
	                }
	            }
	        };
	        AppView.prototype.eventHandler = function (cb) {
	            return cb;
	        };
	        AppView.prototype.throwDestroyedError = function (details) { throw new ViewDestroyedError(details); };
	        return AppView;
	    }());
	    var DebugAppView = (function (_super) {
	        __extends$14(DebugAppView, _super);
	        function DebugAppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, staticNodeDebugInfos, declaredViewContainer) {
	            if (declaredViewContainer === void 0) { declaredViewContainer = null; }
	            _super.call(this, clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, declaredViewContainer);
	            this.staticNodeDebugInfos = staticNodeDebugInfos;
	            this._currentDebugContext = null;
	        }
	        DebugAppView.prototype.create = function (context) {
	            this._resetDebug();
	            try {
	                return _super.prototype.create.call(this, context);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.createHostView = function (rootSelectorOrNode, injector, projectableNodes) {
	            if (projectableNodes === void 0) { projectableNodes = null; }
	            this._resetDebug();
	            try {
	                return _super.prototype.createHostView.call(this, rootSelectorOrNode, injector, projectableNodes);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	            this._resetDebug();
	            try {
	                return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.detach = function () {
	            this._resetDebug();
	            try {
	                _super.prototype.detach.call(this);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.destroy = function () {
	            this._resetDebug();
	            try {
	                _super.prototype.destroy.call(this);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.detectChanges = function (throwOnChange) {
	            this._resetDebug();
	            try {
	                _super.prototype.detectChanges.call(this, throwOnChange);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
	        DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
	            return this._currentDebugContext = new DebugContext(this, nodeIndex, rowNum, colNum);
	        };
	        DebugAppView.prototype._rethrowWithContext = function (e) {
	            if (!(e instanceof ViewWrappedError)) {
	                if (!(e instanceof ExpressionChangedAfterItHasBeenCheckedError)) {
	                    this.cdMode = ChangeDetectorStatus.Errored;
	                }
	                if (isPresent(this._currentDebugContext)) {
	                    throw new ViewWrappedError(e, this._currentDebugContext);
	                }
	            }
	        };
	        DebugAppView.prototype.eventHandler = function (cb) {
	            var _this = this;
	            var superHandler = _super.prototype.eventHandler.call(this, cb);
	            return function (eventName, event) {
	                _this._resetDebug();
	                try {
	                    return superHandler.call(_this, eventName, event);
	                }
	                catch (e) {
	                    _this._rethrowWithContext(e);
	                    throw e;
	                }
	            };
	        };
	        return DebugAppView;
	    }(AppView));
	
	    /**
	     * A ViewContainer is created for elements that have a ViewContainerRef
	     * to keep track of the nested views.
	     */
	    var ViewContainer = (function () {
	        function ViewContainer(index, parentIndex, parentView, nativeElement) {
	            this.index = index;
	            this.parentIndex = parentIndex;
	            this.parentView = parentView;
	            this.nativeElement = nativeElement;
	        }
	        Object.defineProperty(ViewContainer.prototype, "elementRef", {
	            get: function () { return new ElementRef(this.nativeElement); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainer.prototype, "vcRef", {
	            get: function () { return new ViewContainerRef_(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainer.prototype, "parentInjector", {
	            get: function () { return this.parentView.injector(this.parentIndex); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainer.prototype, "injector", {
	            get: function () { return this.parentView.injector(this.index); },
	            enumerable: true,
	            configurable: true
	        });
	        ViewContainer.prototype.detectChangesInNestedViews = function (throwOnChange) {
	            if (this.nestedViews) {
	                for (var i = 0; i < this.nestedViews.length; i++) {
	                    this.nestedViews[i].detectChanges(throwOnChange);
	                }
	            }
	        };
	        ViewContainer.prototype.destroyNestedViews = function () {
	            if (this.nestedViews) {
	                for (var i = 0; i < this.nestedViews.length; i++) {
	                    this.nestedViews[i].destroy();
	                }
	            }
	        };
	        ViewContainer.prototype.visitNestedViewRootNodes = function (cb, c) {
	            if (this.nestedViews) {
	                for (var i = 0; i < this.nestedViews.length; i++) {
	                    this.nestedViews[i].visitRootNodesInternal(cb, c);
	                }
	            }
	        };
	        ViewContainer.prototype.mapNestedViews = function (nestedViewClass, callback) {
	            var result = [];
	            if (this.nestedViews) {
	                for (var i = 0; i < this.nestedViews.length; i++) {
	                    var nestedView = this.nestedViews[i];
	                    if (nestedView.clazz === nestedViewClass) {
	                        result.push(callback(nestedView));
	                    }
	                }
	            }
	            if (this.projectedViews) {
	                for (var i = 0; i < this.projectedViews.length; i++) {
	                    var projectedView = this.projectedViews[i];
	                    if (projectedView.clazz === nestedViewClass) {
	                        result.push(callback(projectedView));
	                    }
	                }
	            }
	            return result;
	        };
	        ViewContainer.prototype.moveView = function (view, currentIndex) {
	            var previousIndex = this.nestedViews.indexOf(view);
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            var nestedViews = this.nestedViews;
	            if (nestedViews == null) {
	                nestedViews = [];
	                this.nestedViews = nestedViews;
	            }
	            nestedViews.splice(previousIndex, 1);
	            nestedViews.splice(currentIndex, 0, view);
	            var prevView = currentIndex > 0 ? nestedViews[currentIndex - 1] : null;
	            view.moveAfter(this, prevView);
	        };
	        ViewContainer.prototype.attachView = function (view, viewIndex) {
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            var nestedViews = this.nestedViews;
	            if (nestedViews == null) {
	                nestedViews = [];
	                this.nestedViews = nestedViews;
	            }
	            // perf: array.push is faster than array.splice!
	            if (viewIndex >= nestedViews.length) {
	                nestedViews.push(view);
	            }
	            else {
	                nestedViews.splice(viewIndex, 0, view);
	            }
	            var prevView = viewIndex > 0 ? nestedViews[viewIndex - 1] : null;
	            view.attachAfter(this, prevView);
	        };
	        ViewContainer.prototype.detachView = function (viewIndex) {
	            var view = this.nestedViews[viewIndex];
	            // perf: array.pop is faster than array.splice!
	            if (viewIndex >= this.nestedViews.length - 1) {
	                this.nestedViews.pop();
	            }
	            else {
	                this.nestedViews.splice(viewIndex, 1);
	            }
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            view.detach();
	            return view;
	        };
	        return ViewContainer;
	    }());
	
	    var __core_private__ = {
	        isDefaultChangeDetectionStrategy: isDefaultChangeDetectionStrategy,
	        ChangeDetectorStatus: ChangeDetectorStatus,
	        constructDependencies: constructDependencies,
	        LifecycleHooks: LifecycleHooks,
	        LIFECYCLE_HOOKS_VALUES: LIFECYCLE_HOOKS_VALUES,
	        ReflectorReader: ReflectorReader,
	        CodegenComponentFactoryResolver: CodegenComponentFactoryResolver,
	        ComponentRef_: ComponentRef_,
	        ViewContainer: ViewContainer,
	        AppView: AppView,
	        DebugAppView: DebugAppView,
	        NgModuleInjector: NgModuleInjector,
	        registerModuleFactory: registerModuleFactory,
	        ViewType: ViewType,
	        view_utils: view_utils,
	        ViewMetadata: ViewMetadata,
	        DebugContext: DebugContext,
	        StaticNodeDebugInfo: StaticNodeDebugInfo,
	        devModeEqual: devModeEqual,
	        UNINITIALIZED: UNINITIALIZED,
	        ValueUnwrapper: ValueUnwrapper,
	        RenderDebugInfo: RenderDebugInfo,
	        TemplateRef_: TemplateRef_,
	        ReflectionCapabilities: ReflectionCapabilities,
	        makeDecorator: makeDecorator,
	        DebugDomRootRenderer: DebugDomRootRenderer,
	        Console: Console,
	        reflector: reflector,
	        Reflector: Reflector,
	        NoOpAnimationPlayer: NoOpAnimationPlayer,
	        AnimationPlayer: AnimationPlayer,
	        AnimationSequencePlayer: AnimationSequencePlayer,
	        AnimationGroupPlayer: AnimationGroupPlayer,
	        AnimationKeyframe: AnimationKeyframe,
	        prepareFinalAnimationStyles: prepareFinalAnimationStyles,
	        balanceAnimationKeyframes: balanceAnimationKeyframes,
	        flattenStyles: flattenStyles,
	        clearStyles: clearStyles,
	        renderStyles: renderStyles,
	        collectAndResolveStyles: collectAndResolveStyles,
	        APP_ID_RANDOM_PROVIDER: APP_ID_RANDOM_PROVIDER,
	        AnimationStyles: AnimationStyles,
	        ANY_STATE: ANY_STATE,
	        DEFAULT_STATE: DEFAULT_STATE,
	        EMPTY_STATE: EMPTY_STATE,
	        FILL_STYLE_FLAG: FILL_STYLE_FLAG,
	        ComponentStillLoadingError: ComponentStillLoadingError,
	        isPromise: isPromise,
	        AnimationTransition: AnimationTransition
	    };
	
	    exports.createPlatform = createPlatform;
	    exports.assertPlatform = assertPlatform;
	    exports.destroyPlatform = destroyPlatform;
	    exports.getPlatform = getPlatform;
	    exports.PlatformRef = PlatformRef;
	    exports.ApplicationRef = ApplicationRef;
	    exports.enableProdMode = enableProdMode;
	    exports.isDevMode = isDevMode;
	    exports.createPlatformFactory = createPlatformFactory;
	    exports.APP_ID = APP_ID;
	    exports.PACKAGE_ROOT_URL = PACKAGE_ROOT_URL;
	    exports.PLATFORM_INITIALIZER = PLATFORM_INITIALIZER;
	    exports.APP_BOOTSTRAP_LISTENER = APP_BOOTSTRAP_LISTENER;
	    exports.APP_INITIALIZER = APP_INITIALIZER;
	    exports.ApplicationInitStatus = ApplicationInitStatus;
	    exports.DebugElement = DebugElement;
	    exports.DebugNode = DebugNode;
	    exports.asNativeElements = asNativeElements;
	    exports.getDebugNode = getDebugNode;
	    exports.Testability = Testability;
	    exports.TestabilityRegistry = TestabilityRegistry;
	    exports.setTestabilityGetter = setTestabilityGetter;
	    exports.TRANSLATIONS = TRANSLATIONS;
	    exports.TRANSLATIONS_FORMAT = TRANSLATIONS_FORMAT;
	    exports.LOCALE_ID = LOCALE_ID;
	    exports.ApplicationModule = ApplicationModule;
	    exports.wtfCreateScope = wtfCreateScope;
	    exports.wtfLeave = wtfLeave;
	    exports.wtfStartTimeRange = wtfStartTimeRange;
	    exports.wtfEndTimeRange = wtfEndTimeRange;
	    exports.Type = Type;
	    exports.EventEmitter = EventEmitter;
	    exports.ErrorHandler = ErrorHandler;
	    exports.AnimationTransitionEvent = AnimationTransitionEvent;
	    exports.AnimationPlayer = AnimationPlayer;
	    exports.Sanitizer = Sanitizer;
	    exports.ANALYZE_FOR_ENTRY_COMPONENTS = ANALYZE_FOR_ENTRY_COMPONENTS;
	    exports.Attribute = Attribute;
	    exports.ContentChild = ContentChild;
	    exports.ContentChildren = ContentChildren;
	    exports.Query = Query;
	    exports.ViewChild = ViewChild;
	    exports.ViewChildren = ViewChildren;
	    exports.Component = Component;
	    exports.Directive = Directive;
	    exports.HostBinding = HostBinding;
	    exports.HostListener = HostListener;
	    exports.Input = Input;
	    exports.Output = Output;
	    exports.Pipe = Pipe;
	    exports.AfterContentChecked = AfterContentChecked;
	    exports.AfterContentInit = AfterContentInit;
	    exports.AfterViewChecked = AfterViewChecked;
	    exports.AfterViewInit = AfterViewInit;
	    exports.DoCheck = DoCheck;
	    exports.OnChanges = OnChanges;
	    exports.OnDestroy = OnDestroy;
	    exports.OnInit = OnInit;
	    exports.CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
	    exports.NO_ERRORS_SCHEMA = NO_ERRORS_SCHEMA;
	    exports.NgModule = NgModule;
	    exports.Class = Class;
	    exports.forwardRef = forwardRef;
	    exports.resolveForwardRef = resolveForwardRef;
	    exports.Injector = Injector;
	    exports.ReflectiveInjector = ReflectiveInjector;
	    exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
	    exports.ReflectiveKey = ReflectiveKey;
	    exports.OpaqueToken = OpaqueToken;
	    exports.Inject = Inject;
	    exports.Optional = Optional;
	    exports.Injectable = Injectable;
	    exports.Self = Self;
	    exports.SkipSelf = SkipSelf;
	    exports.Host = Host;
	    exports.NgZone = NgZone;
	    exports.RenderComponentType = RenderComponentType;
	    exports.Renderer = Renderer;
	    exports.RootRenderer = RootRenderer;
	    exports.COMPILER_OPTIONS = COMPILER_OPTIONS;
	    exports.Compiler = Compiler;
	    exports.CompilerFactory = CompilerFactory;
	    exports.ModuleWithComponentFactories = ModuleWithComponentFactories;
	    exports.ComponentFactory = ComponentFactory;
	    exports.ComponentRef = ComponentRef;
	    exports.ComponentFactoryResolver = ComponentFactoryResolver;
	    exports.ElementRef = ElementRef;
	    exports.NgModuleFactory = NgModuleFactory;
	    exports.NgModuleRef = NgModuleRef;
	    exports.NgModuleFactoryLoader = NgModuleFactoryLoader;
	    exports.getModuleFactory = getModuleFactory;
	    exports.QueryList = QueryList;
	    exports.SystemJsNgModuleLoader = SystemJsNgModuleLoader;
	    exports.SystemJsNgModuleLoaderConfig = SystemJsNgModuleLoaderConfig;
	    exports.TemplateRef = TemplateRef;
	    exports.ViewContainerRef = ViewContainerRef;
	    exports.EmbeddedViewRef = EmbeddedViewRef;
	    exports.ViewRef = ViewRef;
	    exports.ChangeDetectorRef = ChangeDetectorRef;
	    exports.CollectionChangeRecord = CollectionChangeRecord;
	    exports.DefaultIterableDiffer = DefaultIterableDiffer;
	    exports.IterableDiffers = IterableDiffers;
	    exports.KeyValueChangeRecord = KeyValueChangeRecord;
	    exports.KeyValueDiffers = KeyValueDiffers;
	    exports.SimpleChange = SimpleChange;
	    exports.WrappedValue = WrappedValue;
	    exports.platformCore = platformCore;
	    exports.__core_private__ = __core_private__;
	    exports.AUTO_STYLE = AUTO_STYLE;
	    exports.AnimationEntryMetadata = AnimationEntryMetadata;
	    exports.AnimationStateMetadata = AnimationStateMetadata;
	    exports.AnimationStateDeclarationMetadata = AnimationStateDeclarationMetadata;
	    exports.AnimationStateTransitionMetadata = AnimationStateTransitionMetadata;
	    exports.AnimationMetadata = AnimationMetadata;
	    exports.AnimationKeyframesSequenceMetadata = AnimationKeyframesSequenceMetadata;
	    exports.AnimationStyleMetadata = AnimationStyleMetadata;
	    exports.AnimationAnimateMetadata = AnimationAnimateMetadata;
	    exports.AnimationWithStepsMetadata = AnimationWithStepsMetadata;
	    exports.AnimationSequenceMetadata = AnimationSequenceMetadata;
	    exports.AnimationGroupMetadata = AnimationGroupMetadata;
	    exports.animate = animate;
	    exports.group = group;
	    exports.sequence = sequence;
	    exports.style = style;
	    exports.state = state;
	    exports.keyframes = keyframes;
	    exports.transition = transition;
	    exports.trigger = trigger;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(4);
	var Subscriber_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(9);
	var ObjectUnsubscribedError_1 = __webpack_require__(18);
	var SubjectSubscription_1 = __webpack_require__(19);
	var rxSubscriber_1 = __webpack_require__(16);
	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = (function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        _super.call(this, destination);
	        this.destination = destination;
	    }
	    return SubjectSubscriber;
	}(Subscriber_1.Subscriber));
	exports.SubjectSubscriber = SubjectSubscriber;
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.call(this);
	        this.observers = [];
	        this.closed = false;
	        this.isStopped = false;
	        this.hasError = false;
	        this.thrownError = null;
	    }
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.closed = true;
	        this.observers = null;
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable_1.Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * @class AnonymousSubject<T>
	 */
	var AnonymousSubject = (function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            return Subscription_1.Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject));
	exports.AnonymousSubject = AnonymousSubject;
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	var toSubscriber_1 = __webpack_require__(6);
	var observable_1 = __webpack_require__(17);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	/**
	 * window: browser in DOM main thread
	 * self: browser in WebWorker
	 * global: Node.js/other
	 */
	exports.root = (typeof window == 'object' && window.window === window && window
	    || typeof self == 'object' && self.self === self && self
	    || typeof global == 'object' && global.global === global && global);
	if (!exports.root) {
	    throw new Error('RxJS could not find any global context (window, self, global)');
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(7);
	var rxSubscriber_1 = __webpack_require__(16);
	var Observer_1 = __webpack_require__(15);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber(Observer_1.empty);
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(9);
	var Observer_1 = __webpack_require__(15);
	var rxSubscriber_1 = __webpack_require__(16);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(10);
	var isObject_1 = __webpack_require__(11);
	var isFunction_1 = __webpack_require__(8);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var UnsubscriptionError_1 = __webpack_require__(14);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.closed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(13);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.$$observable = getSymbolObservable(root_1.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        var err = _super.call(this, 'object unsubscribed');
	        this.name = err.name = 'ObjectUnsubscribedError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(9);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        _super.call(this);
	        this.subject = subject;
	        this.subscriber = subscriber;
	        this.closed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(21);
	__webpack_require__(23);
	var platform_browser_1 = __webpack_require__(24);
	var core_1 = __webpack_require__(2);
	var app_cp_1 = __webpack_require__(1);
	var AppModule = function AppModule() {
	    _classCallCheck(this, AppModule);
	};
	AppModule = __decorate([core_1.NgModule({
	    imports: [platform_browser_1.BrowserModule],
	    declarations: [app_cp_1.MyComponent],
	    bootstrap: [app_cp_1.MyComponent]
	}), __metadata('design:paramtypes', [])], AppModule);
	exports.AppModule = AppModule;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
	     true ? factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (factory());
	}(this, (function () { 'use strict';
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	
	
	var Zone$1 = (function (global) {
	    if (global.Zone) {
	        throw new Error('Zone already loaded.');
	    }
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate =
	                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Zone.assertZonePatched = function () {
	            if (global.Promise !== ZoneAwarePromise) {
	                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
	                    'has been overwritten.\n' +
	                    'Most likely cause is that a Promise polyfill has been loaded ' +
	                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
	                    'If you must load one, do so before loading zone.js.)');
	            }
	        };
	        Object.defineProperty(Zone, "current", {
	            get: function () {
	                return _currentZone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () {
	                return _currentTask;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () {
	                return this._parent;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () {
	                return this._name;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' + task.zone.name +
	                    '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS =
	                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt =
	                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt =
	                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS =
	                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt =
	                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS =
	                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt =
	                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS =
	                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt =
	                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS =
	                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt =
	                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt =
	                zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
	                new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS ?
	                this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source) :
	                callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS ?
	                this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source) :
	                callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS ?
	                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error) :
	                true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS ?
	                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs) :
	                    task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') &&
	                    !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS &&
	                this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                _numberOfNestedTaskFrames++;
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    if (_numberOfNestedTaskFrames == 1) {
	                        drainMicroTaskQueue();
	                    }
	                    _numberOfNestedTaskFrames--;
	                }
	            };
	        }
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId;
	            }
	            else {
	                return Object.prototype.toString.call(this);
	            }
	        };
	        return ZoneTask;
	    }());
	    function __symbol__(name) {
	        return '__zone_symbol__' + name;
	    }
	    
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _numberOfNestedTaskFrames = 0;
	    function scheduleQueueDrain() {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var _loop_1 = function() {
	                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () {
	                            throw uncaughtPromiseError;
	                        });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                while (_uncaughtPromiseErrors.length) {
	                    _loop_1();
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) {
	        return value;
	    }
	    function forwardRejection(rejection) {
	        return ZoneAwarePromise.reject(rejection);
	    }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error('Uncaught (in promise): ' + value +
	                            (value && value.stack ? '\n' + value.stack : ''));
	                    }
	                    catch (e) {
	                        var error_1 = e;
	                        error_1.rejection = value;
	                        error_1.promise = promise;
	                        error_1.zone = Zone.current;
	                        error_1.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error_1);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                _a = [res, rej], resolve = _a[0], reject = _a[1];
	                var _a;
	            });
	            function onResolve(value) {
	                promise && (promise = null || resolve(value));
	            }
	            function onReject(error) {
	                promise && (promise = null || reject(error));
	            }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            var count = 0;
	            var resolvedValues = [];
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (!count) {
	                        resolve(resolvedValues);
	                    }
	                }; })(count), reject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    // Protect against aggressive optimizers dropping seemingly unused properties.
	    // E.g. Closure Compiler in advanced mode.
	    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
	    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
	    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
	    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    function patchThen(NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen = NativePromiseProtototype[__symbol__('then')] =
	            NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen.call(nativePromise, resolve, reject);
	            })
	                .then(onResolve, onReject);
	        };
	    }
	    if (NativePromise) {
	        patchThen(NativePromise);
	        if (typeof global['fetch'] !== 'undefined') {
	            var fetchPromise = void 0;
	            try {
	                // In MS Edge this throws
	                fetchPromise = global['fetch']();
	            }
	            catch (e) {
	                // In Chrome this throws instead.
	                fetchPromise = global['fetch']('about:blank');
	            }
	            // ignore output to prevent error;
	            fetchPromise.then(function () { return null; }, function () { return null; });
	            if (fetchPromise.constructor != NativePromise &&
	                fetchPromise.constructor != ZoneAwarePromise) {
	                patchThen(fetchPromise.constructor);
	            }
	        }
	    }
	    // This is not part of public API, but it is usefull for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return global.Zone = Zone;
	})(typeof window === 'object' && window || typeof self === 'object' && self || global);
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var zoneSymbol = Zone['__symbol__'];
	var _global$1 = typeof window === 'object' && window || typeof self === 'object' && self || global;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	
	var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	var isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || { enumerable: true, configurable: true };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    // The getter would return undefined for unassigned properties but the default value of an
	    // unassigned property is null
	    desc.get = function () {
	        return this[_prop] || null;
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	
	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}
	
	var EVENT_TASKS = zoneSymbol('eventTasks');
	// For EventTarget
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler && data.useCapturing === capture && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    if (allowDuplicates === void 0) { allowDuplicates = false; }
	    var addFnSymbol = zoneSymbol(addFnName);
	    var removeFnSymbol = zoneSymbol(removeFnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    function scheduleEventListener(eventTask) {
	        var meta = eventTask.data;
	        attachRegisteredEvent(meta.target, eventTask);
	        return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    function cancelEventListener(eventTask) {
	        var meta = eventTask.data;
	        findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	        meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    return function zoneAwareAddListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var delegate = null;
	        if (typeof handler == 'function') {
	            delegate = handler;
	        }
	        else if (handler && handler.handleEvent) {
	            delegate = function (event) { return handler.handleEvent(event); };
	        }
	        var validZoneHandler = false;
	        try {
	            // In cross site contexts (such as WebDriver frameworks like Selenium),
	            // accessing the handler object here will cause an exception to be thrown which
	            // will fail tests prematurely.
	            validZoneHandler = handler && handler.toString() === '[object FunctionWrapper]';
	        }
	        catch (e) {
	            // Returning nothing here is fine, because objects in a cross-site context are unusable
	            return;
	        }
	        // Ignore special listeners of IE11 & Edge dev tools, see
	        // https://github.com/angular/zone.js/issues/150
	        if (!delegate || validZoneHandler) {
	            return target[addFnSymbol](eventName, handler, useCapturing);
	        }
	        if (!allowDuplicates) {
	            var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	            if (eventTask) {
	                // we already registered, so this will have noop.
	                return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
	            }
	        }
	        var zone = Zone.current;
	        var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
	        var data = {
	            target: target,
	            eventName: eventName,
	            name: eventName,
	            useCapturing: useCapturing,
	            handler: handler
	        };
	        zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	    };
	}
	function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    var symbol = zoneSymbol(fnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    return function zoneAwareRemoveListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	        if (eventTask) {
	            eventTask.zone.cancelTask(eventTask);
	        }
	        else {
	            target[symbol](eventName, handler, useCapturing);
	        }
	    };
	}
	
	var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
	var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	var originalInstanceKey = zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global$1[className];
	    if (!OriginalClass)
	        return;
	    _global$1[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default:
	                throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global$1[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global$1[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global$1[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	
	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && Object.getOwnPropertyNames(proto).indexOf(name) === -1) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    var tasksByHandleId = {};
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = function () {
	            task.invoke.apply(this, arguments);
	            delete tasksByHandleId[data.handleId];
	        };
	        data.handleId = setNative.apply(window, data.args);
	        tasksByHandleId[data.handleId] = task;
	        return task;
	    }
	    function clearTask(task) {
	        delete tasksByHandleId[task.data.handleId];
	        return clearNative(task.data.handleId);
	    }
	    setNative =
	        patchMethod(window, setName, function (delegate) { return function (self, args) {
	            if (typeof args[0] === 'function') {
	                var zone = Zone.current;
	                var options = {
	                    handleId: null,
	                    isPeriodic: nameSuffix === 'Interval',
	                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                    args: args
	                };
	                var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	                if (!task) {
	                    return task;
	                }
	                // Node.js must additionally support the ref and unref functions.
	                var handle = task.data.handleId;
	                if (handle.ref && handle.unref) {
	                    task.ref = handle.ref.bind(handle);
	                    task.unref = handle.unref.bind(handle);
	                }
	                return task;
	            }
	            else {
	                // cause an error by calling it directly.
	                return delegate.apply(window, args);
	            }
	        }; });
	    clearNative =
	        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	            var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
	            if (task && typeof task.type === 'string') {
	                if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                    // Do not cancel already canceled functions
	                    task.zone.cancelTask(task);
	                }
	            }
	            else {
	                // cause an error by calling it directly.
	                delegate.apply(window, args);
	            }
	        }; });
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
	    Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	
	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}
	
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (e) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
	            // retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            try {
	                return _defineProperty(obj, prop, desc);
	            }
	            catch (e) {
	                var descJson = null;
	                try {
	                    descJson = JSON.stringify(desc);
	                }
	                catch (e) {
	                    descJson = descJson.toString();
	                }
	                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + e);
	            }
	        }
	        else {
	            throw e;
	        }
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'
	    .split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        patchEventTargetMethods(type && type.prototype);
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'
	    .split(' ');
	function propertyDescriptorPatch(_global) {
	    if (isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (isBrowser) {
	            patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            patchOnProperties(IDBIndex.prototype, null);
	            patchOnProperties(IDBRequest.prototype, null);
	            patchOnProperties(IDBOpenDBRequest.prototype, null);
	            patchOnProperties(IDBDatabase.prototype, null);
	            patchOnProperties(IDBTransaction.prototype, null);
	            patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            apply(_global);
	        }
	    }
	}
	function canPatchViaPropertyDescriptor() {
	    if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
	        typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	
	var unboundKey = zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        self.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function registerElementPatch(_global) {
	    if (!isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        _redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
	patchTimer(_global, set, clear, 'Timeout');
	patchTimer(_global, set, clear, 'Interval');
	patchTimer(_global, set, clear, 'Immediate');
	patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
	patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	eventTargetPatch(_global);
	propertyDescriptorPatch(_global);
	patchClass('MutationObserver');
	patchClass('WebKitMutationObserver');
	patchClass('FileReader');
	propertyPatch();
	registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = zoneSymbol('xhrTask');
	var XHR_SYNC = zoneSymbol('xhrSync');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === data.target.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        sendNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() { }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return abortNative.apply(data.target, data.args);
	    }
	    var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
	        self[XHR_SYNC] = args[2] == false;
	        return openNative.apply(self, args);
	    }; });
	    var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        if (self[XHR_SYNC]) {
	            // if the XHR is sync there is no task to schedule, just execute the code.
	            return sendNative.apply(self, args);
	        }
	        else {
	            var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
	            return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	        }
	    }; });
	    var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task
	        // to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    patchPrototype(_global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
	}
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(22)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 23 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    var hasOwn = Object.prototype.hasOwnProperty;
	    // feature test for Object.create support
	    var supportsCreate = typeof Object.create === "function";
	    // feature test for __proto__ support
	    var supportsProto = (function () {
	        var sentinel = {};
	        function __() { }
	        __.prototype = sentinel;
	        var instance = new __();
	        return instance.__proto__ === sentinel;
	    })();
	    // create an object in dictionary mode (a.k.a. "slow" mode in v8)
	    var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
	        supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
	            function () { return MakeDictionary({}); };
	    var HashMap;
	    (function (HashMap) {
	        var downLevel = !supportsCreate && !supportsProto;
	        HashMap.has = downLevel
	            ? function (map, key) { return hasOwn.call(map, key); }
	            : function (map, key) { return key in map; };
	        HashMap.get = downLevel
	            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
	            : function (map, key) { return map[key]; };
	    })(HashMap || (HashMap = {}));
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var Metadata = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Example = Reflect.decorate(decoratorsArray, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(Example, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(Example.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            if (IsUndefined(targetKey))
	                throw new TypeError();
	            if (!IsObject(targetDescriptor))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsConstructor(target))
	                throw new TypeError();
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class Example {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target))
	                    throw new TypeError();
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target))
	                    throw new TypeError();
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#deletemetadata-metadatakey-p-
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return false;
	        if (!metadataMap.delete(metadataKey))
	            return false;
	        if (metadataMap.size > 0)
	            return true;
	        var targetMetadata = Metadata.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0)
	            return true;
	        Metadata.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated))
	                    throw new TypeError();
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated))
	                    throw new TypeError();
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = Metadata.get(target);
	        if (!targetMetadata) {
	            if (!create)
	                return undefined;
	            targetMetadata = new _Map();
	            Metadata.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create)
	                return undefined;
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return true;
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryHasMetadata(MetadataKey, parent, P) : false;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap !== undefined && Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        var parent = GetPrototypeOf(O);
	        return parent !== null ? OrdinaryGetMetadata(MetadataKey, parent, P) : undefined;
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null)
	            return ownKeys;
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0)
	            return ownKeys;
	        if (ownKeys.length <= 0)
	            return parentKeys;
	        var keys = new _Set();
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            keys.add(key);
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            keys.add(key);
	        }
	        return getKeys(keys);
	    }
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap)
	            forEach(metadataMap, function (_, key) { return keys.push(key); });
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray ? Array.isArray(x) : x instanceof Array || Object.prototype.toString.call(x) === "[object Array]";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        return IsSymbol(value) ? value : String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype)
	            return proto;
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass Exampleonstructor. Compatible implementations
	        // must either set __proto__ on a subclass Exampleonstructor to the superclass Exampleonstructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype)
	            return proto;
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype)
	            return proto;
	        // If the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function")
	            return proto;
	        // If we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O)
	            return proto;
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    function IteratorStep(iterator) {
	        var result = iterator.next();
	        return result.done ? undefined : result;
	    }
	    function IteratorClose(iterator) {
	        var f = iterator["return"];
	        if (f)
	            f.call(iterator);
	    }
	    function forEach(source, callback, thisArg) {
	        var entries = source.entries;
	        if (typeof entries === "function") {
	            var iterator = entries.call(source);
	            var result;
	            try {
	                while (result = IteratorStep(iterator)) {
	                    var _a = result.value, key = _a[0], value = _a[1];
	                    callback.call(thisArg, value, key, source);
	                }
	            }
	            finally {
	                if (result)
	                    IteratorClose(iterator);
	            }
	        }
	        else {
	            var forEach_1 = source.forEach;
	            if (typeof forEach_1 === "function") {
	                forEach_1.call(source, callback, thisArg);
	            }
	        }
	    }
	    function getKeys(source) {
	        var keys = [];
	        forEach(source, function (_, key) { keys.push(key); });
	        return keys;
	    }
	    // naive MapIterator shim
	    function CreateMapIterator(keys, values, kind) {
	        var index = 0;
	        return {
	            next: function () {
	                if ((keys || values) && index < (keys || values).length) {
	                    var current = index++;
	                    switch (kind) {
	                        case "key": return { value: keys[current], done: false };
	                        case "value": return { value: values[current], done: false };
	                        case "key+value": return { value: [keys[current], values[current]], done: false };
	                    }
	                }
	                keys = undefined;
	                values = undefined;
	                return { value: undefined, done: true };
	            },
	            "throw": function (error) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                throw error;
	            },
	            "return": function (value) {
	                if (keys || values) {
	                    keys = undefined;
	                    values = undefined;
	                }
	                return { value: value, done: true };
	            }
	        };
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        return (function () {
	            function Map() {
	                this._keys = [];
	                this._values = [];
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            }
	            Object.defineProperty(Map.prototype, "size", {
	                get: function () { return this._keys.length; },
	                enumerable: true,
	                configurable: true
	            });
	            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
	            Map.prototype.get = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                return index >= 0 ? this._values[index] : undefined;
	            };
	            Map.prototype.set = function (key, value) {
	                var index = this._find(key, /*insert*/ true);
	                this._values[index] = value;
	                return this;
	            };
	            Map.prototype.delete = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                if (index >= 0) {
	                    var size = this._keys.length;
	                    for (var i = index + 1; i < size; i++) {
	                        this._keys[i - 1] = this._keys[i];
	                        this._values[i - 1] = this._values[i];
	                    }
	                    this._keys.length--;
	                    this._values.length--;
	                    this._cacheKey = cacheSentinel;
	                    this._cacheIndex = -2;
	                    return true;
	                }
	                return false;
	            };
	            Map.prototype.clear = function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            };
	            Map.prototype.keys = function () { return CreateMapIterator(this._keys, /*values*/ undefined, "key"); };
	            Map.prototype.values = function () { return CreateMapIterator(/*keys*/ undefined, this._values, "value"); };
	            Map.prototype.entries = function () { return CreateMapIterator(this._keys, this._values, "key+value"); };
	            Map.prototype._find = function (key, insert) {
	                if (this._cacheKey === key)
	                    return this._cacheIndex;
	                var index = this._keys.indexOf(key);
	                if (index < 0 && insert) {
	                    index = this._keys.length;
	                    this._keys.push(key);
	                    this._values.push(undefined);
	                }
	                return this._cacheKey = key, this._cacheIndex = index;
	            };
	            return Map;
	        })();
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        return (function () {
	            function Set() {
	                this._map = new _Map();
	            }
	            Object.defineProperty(Set.prototype, "size", {
	                get: function () { return this._map.size; },
	                enumerable: true,
	                configurable: true
	            });
	            Set.prototype.has = function (value) { return this._map.has(value); };
	            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
	            Set.prototype.delete = function (value) { return this._map.delete(value); };
	            Set.prototype.clear = function () { this._map.clear(); };
	            Set.prototype.keys = function () { return this._map.keys(); };
	            Set.prototype.values = function () { return this._map.values(); };
	            Set.prototype.entries = function () { return this._map.entries(); };
	            return Set;
	        })();
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var keys = createDictionary();
	        var rootKey = CreateUniqueKey();
	        return (function () {
	            function WeakMap() {
	                this._key = CreateUniqueKey();
	            }
	            WeakMap.prototype.has = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.has(table, this._key) : false;
	            };
	            WeakMap.prototype.get = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.get(table, this._key) : undefined;
	            };
	            WeakMap.prototype.set = function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            };
	            WeakMap.prototype.delete = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? delete table[this._key] : false;
	            };
	            WeakMap.prototype.clear = function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            };
	            return WeakMap;
	        })();
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i)
	                buffer[i] = Math.random() * 0xff | 0;
	            return buffer;
	        }
	        function GenRandomBytes(size) {
	            if (typeof Uint8Array === "function") {
	                if (typeof crypto !== "undefined")
	                    return crypto.getRandomValues(new Uint8Array(size));
	                if (typeof msCrypto !== "undefined")
	                    return msCrypto.getRandomValues(new Uint8Array(size));
	                return FillRandomBytes(new Uint8Array(size), size);
	            }
	            return FillRandomBytes(new Array(size), size);
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8)
	                    result += "-";
	                if (byte < 16)
	                    result += "0";
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do
	                key = "@@WeakMap@@" + CreateUUID();
	            while (HashMap.has(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create)
	                    return undefined;
	                Object.defineProperty(target, rootKey, { value: createDictionary() });
	            }
	            return target[rootKey];
	        }
	    }
	    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
	    function MakeDictionary(obj) {
	        obj.__DICTIONARY_MODE__ = 1;
	        delete obj.____DICTIONARY_MODE__;
	        return obj;
	    }
	    // patch global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    if (hasOwn.call(Reflect, p)) {
	                        __global.Reflect[p] = Reflect[p];
	                    }
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.2.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(25), __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}),global.ng.common,global.ng.core));
	}(this, function (exports,_angular_common,_angular_core) { 'use strict';
	
	    var DebugDomRootRenderer = _angular_core.__core_private__.DebugDomRootRenderer;
	    var NoOpAnimationPlayer = _angular_core.__core_private__.NoOpAnimationPlayer;
	
	    var _NoOpAnimationDriver = (function () {
	        function _NoOpAnimationDriver() {
	        }
	        _NoOpAnimationDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return new NoOpAnimationPlayer();
	        };
	        return _NoOpAnimationDriver;
	    }());
	    /**
	     * @experimental
	     */
	    var AnimationDriver = (function () {
	        function AnimationDriver() {
	        }
	        AnimationDriver.NOOP = new _NoOpAnimationDriver();
	        return AnimationDriver;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token == null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
	    }
	    function setValueOnPath(global, path, value) {
	        var parts = path.split('.');
	        var obj = global;
	        while (parts.length > 1) {
	            var name_1 = parts.shift();
	            if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
	                obj = obj[name_1];
	            }
	            else {
	                obj = obj[name_1] = {};
	            }
	        }
	        if (obj === undefined || obj === null) {
	            obj = {};
	        }
	        obj[parts.shift()] = value;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var _DOM = null;
	    function getDOM() {
	        return _DOM;
	    }
	    function setRootDomAdapter(adapter) {
	        if (!_DOM) {
	            _DOM = adapter;
	        }
	    }
	    /* tslint:disable:requireParameterType */
	    /**
	     * Provides DOM operations in an environment-agnostic way.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    var DomAdapter = (function () {
	        function DomAdapter() {
	            this.resourceLoaderType = null;
	        }
	        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	            /**
	             * Maps attribute names to their corresponding property names for cases
	             * where attribute name doesn't match property name.
	             */
	            get: function () { return this._attrToPropMap; },
	            set: function (value) { this._attrToPropMap = value; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        ;
	        return DomAdapter;
	    }());
	
	    var WebAnimationsPlayer = (function () {
	        function WebAnimationsPlayer(element, keyframes, options) {
	            this.element = element;
	            this.keyframes = keyframes;
	            this.options = options;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._initialized = false;
	            this._finished = false;
	            this._started = false;
	            this._destroyed = false;
	            this.parentPlayer = null;
	            this._duration = options['duration'];
	        }
	        WebAnimationsPlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        WebAnimationsPlayer.prototype.init = function () {
	            var _this = this;
	            if (this._initialized)
	                return;
	            this._initialized = true;
	            var keyframes = this.keyframes.map(function (styles) {
	                var formattedKeyframe = {};
	                Object.keys(styles).forEach(function (prop) {
	                    var value = styles[prop];
	                    formattedKeyframe[prop] = value == _angular_core.AUTO_STYLE ? _computeStyle(_this.element, prop) : value;
	                });
	                return formattedKeyframe;
	            });
	            this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
	            // this is required so that the player doesn't start to animate right away
	            this._resetDomPlayerState();
	            this._player.addEventListener('finish', function () { return _this._onFinish(); });
	        };
	        /** @internal */
	        WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
	            return element.animate(keyframes, options);
	        };
	        Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
	            get: function () { return this._player; },
	            enumerable: true,
	            configurable: true
	        });
	        WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        WebAnimationsPlayer.prototype.play = function () {
	            this.init();
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._player.play();
	        };
	        WebAnimationsPlayer.prototype.pause = function () {
	            this.init();
	            this._player.pause();
	        };
	        WebAnimationsPlayer.prototype.finish = function () {
	            this.init();
	            this._onFinish();
	            this._player.finish();
	        };
	        WebAnimationsPlayer.prototype.reset = function () {
	            this._resetDomPlayerState();
	            this._destroyed = false;
	            this._finished = false;
	            this._started = false;
	        };
	        WebAnimationsPlayer.prototype._resetDomPlayerState = function () { this._player.cancel(); };
	        WebAnimationsPlayer.prototype.restart = function () {
	            this.reset();
	            this.play();
	        };
	        WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
	        WebAnimationsPlayer.prototype.destroy = function () {
	            if (!this._destroyed) {
	                this._resetDomPlayerState();
	                this._onFinish();
	                this._destroyed = true;
	            }
	        };
	        Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
	            get: function () { return this._duration; },
	            enumerable: true,
	            configurable: true
	        });
	        WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.totalTime; };
	        WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.totalTime; };
	        return WebAnimationsPlayer;
	    }());
	    function _computeStyle(element, prop) {
	        return getDOM().getComputedStyle(element)[prop];
	    }
	
	    var WebAnimationsDriver = (function () {
	        function WebAnimationsDriver() {
	        }
	        WebAnimationsDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            var formattedSteps = [];
	            var startingStyleLookup = {};
	            if (isPresent(startingStyles) && startingStyles.styles.length > 0) {
	                startingStyleLookup = _populateStyles(element, startingStyles, {});
	                startingStyleLookup['offset'] = 0;
	                formattedSteps.push(startingStyleLookup);
	            }
	            keyframes.forEach(function (keyframe) {
	                var data = _populateStyles(element, keyframe.styles, startingStyleLookup);
	                data['offset'] = keyframe.offset;
	                formattedSteps.push(data);
	            });
	            // this is a special case when only styles are applied as an
	            // animation. When this occurs we want to animate from start to
	            // end with the same values. Removing the offset and having only
	            // start/end values is suitable enough for the web-animations API
	            if (formattedSteps.length == 1) {
	                var start = formattedSteps[0];
	                start['offset'] = null;
	                formattedSteps = [start, start];
	            }
	            var playerOptions = {
	                'duration': duration,
	                'delay': delay,
	                'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
	            };
	            // we check for this to avoid having a null|undefined value be present
	            // for the easing (which results in an error for certain browsers #9752)
	            if (easing) {
	                playerOptions['easing'] = easing;
	            }
	            return new WebAnimationsPlayer(element, formattedSteps, playerOptions);
	        };
	        return WebAnimationsDriver;
	    }());
	    function _populateStyles(element, styles, defaultStyles) {
	        var data = {};
	        styles.styles.forEach(function (entry) { Object.keys(entry).forEach(function (prop) { data[prop] = entry[prop]; }); });
	        Object.keys(defaultStyles).forEach(function (prop) {
	            if (!isPresent(data[prop])) {
	                data[prop] = defaultStyles[prop];
	            }
	        });
	        return data;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Provides DOM operations in any browser environment.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    var GenericBrowserDomAdapter = (function (_super) {
	        __extends$1(GenericBrowserDomAdapter, _super);
	        function GenericBrowserDomAdapter() {
	            var _this = this;
	            _super.call(this);
	            this._animationPrefix = null;
	            this._transitionEnd = null;
	            try {
	                var element_1 = this.createElement('div', this.defaultDoc());
	                if (isPresent(this.getStyle(element_1, 'animationName'))) {
	                    this._animationPrefix = '';
	                }
	                else {
	                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	                    for (var i = 0; i < domPrefixes.length; i++) {
	                        if (isPresent(this.getStyle(element_1, domPrefixes[i] + 'AnimationName'))) {
	                            this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
	                            break;
	                        }
	                    }
	                }
	                var transEndEventNames_1 = {
	                    WebkitTransition: 'webkitTransitionEnd',
	                    MozTransition: 'transitionend',
	                    OTransition: 'oTransitionEnd otransitionend',
	                    transition: 'transitionend'
	                };
	                Object.keys(transEndEventNames_1).forEach(function (key) {
	                    if (isPresent(_this.getStyle(element_1, key))) {
	                        _this._transitionEnd = transEndEventNames_1[key];
	                    }
	                });
	            }
	            catch (e) {
	                this._animationPrefix = null;
	                this._transitionEnd = null;
	            }
	        }
	        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
	        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	        };
	        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	            return typeof this.defaultDoc().body.createShadowRoot === 'function';
	        };
	        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
	        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
	        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
	            return isPresent(this._animationPrefix) && isPresent(this._transitionEnd);
	        };
	        return GenericBrowserDomAdapter;
	    }(DomAdapter));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _attrToPropMap = {
	        'class': 'className',
	        'innerHtml': 'innerHTML',
	        'readonly': 'readOnly',
	        'tabindex': 'tabIndex',
	    };
	    var DOM_KEY_LOCATION_NUMPAD = 3;
	    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	    var _keyMap = {
	        // The following values are here for cross-browser compatibility and to match the W3C standard
	        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
	        '\b': 'Backspace',
	        '\t': 'Tab',
	        '\x7F': 'Delete',
	        '\x1B': 'Escape',
	        'Del': 'Delete',
	        'Esc': 'Escape',
	        'Left': 'ArrowLeft',
	        'Right': 'ArrowRight',
	        'Up': 'ArrowUp',
	        'Down': 'ArrowDown',
	        'Menu': 'ContextMenu',
	        'Scroll': 'ScrollLock',
	        'Win': 'OS'
	    };
	    // There is a bug in Chrome for numeric keypad keys:
	    // https://code.google.com/p/chromium/issues/detail?id=155654
	    // 1, 2, 3 ... are reported as A, B, C ...
	    var _chromeNumKeyPadMap = {
	        'A': '1',
	        'B': '2',
	        'C': '3',
	        'D': '4',
	        'E': '5',
	        'F': '6',
	        'G': '7',
	        'H': '8',
	        'I': '9',
	        'J': '*',
	        'K': '+',
	        'M': '-',
	        'N': '.',
	        'O': '/',
	        '\x60': '0',
	        '\x90': 'NumLock'
	    };
	    /**
	     * A `DomAdapter` powered by full browser DOM APIs.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    /* tslint:disable:requireParameterType */
	    var BrowserDomAdapter = (function (_super) {
	        __extends(BrowserDomAdapter, _super);
	        function BrowserDomAdapter() {
	            _super.apply(this, arguments);
	        }
	        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
	        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
	        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
	        BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
	        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) { (_a = el)[methodName].apply(_a, args); var _a; };
	        // TODO(tbosch): move this into a separate environment class once we have it
	        BrowserDomAdapter.prototype.logError = function (error) {
	            if (window.console) {
	                (window.console.error || window.console.log)(error);
	            }
	        };
	        BrowserDomAdapter.prototype.log = function (error) {
	            if (window.console) {
	                window.console.log && window.console.log(error);
	            }
	        };
	        BrowserDomAdapter.prototype.logGroup = function (error) {
	            if (window.console) {
	                window.console.group && window.console.group(error);
	                this.logError(error);
	            }
	        };
	        BrowserDomAdapter.prototype.logGroupEnd = function () {
	            if (window.console) {
	                window.console.groupEnd && window.console.groupEnd();
	            }
	        };
	        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	            get: function () { return _attrToPropMap; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	        BrowserDomAdapter.prototype.querySelector = function (el, selector) {
	            return el.querySelector(selector);
	        };
	        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	            el.addEventListener(evt, listener, false);
	            // Needed to follow Dart's subscription semantic, until fix of
	            // https://code.google.com/p/dart/issues/detail?id=17406
	            return function () { el.removeEventListener(evt, listener, false); };
	        };
	        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	            var evt = document.createEvent('MouseEvent');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        BrowserDomAdapter.prototype.createEvent = function (eventType) {
	            var evt = document.createEvent('Event');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        BrowserDomAdapter.prototype.preventDefault = function (evt) {
	            evt.preventDefault();
	            evt.returnValue = false;
	        };
	        BrowserDomAdapter.prototype.isPrevented = function (evt) {
	            return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
	        };
	        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
	            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
	        };
	        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	        BrowserDomAdapter.prototype.content = function (node) {
	            if (this.hasProperty(node, 'content')) {
	                return node.content;
	            }
	            else {
	                return node;
	            }
	        };
	        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	            var childNodes = el.childNodes;
	            var res = new Array(childNodes.length);
	            for (var i = 0; i < childNodes.length; i++) {
	                res[i] = childNodes[i];
	            }
	            return res;
	        };
	        BrowserDomAdapter.prototype.clearNodes = function (el) {
	            while (el.firstChild) {
	                el.removeChild(el.firstChild);
	            }
	        };
	        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	        BrowserDomAdapter.prototype.remove = function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	            return node;
	        };
	        BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	        BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) {
	            nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); });
	        };
	        BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	        BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	        BrowserDomAdapter.prototype.createTemplate = function (html) {
	            var t = document.createElement('template');
	            t.innerHTML = html;
	            return t;
	        };
	        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElement(tagName);
	        };
	        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElementNS(ns, tagName);
	        };
	        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createTextNode(text);
	        };
	        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	            if (doc === void 0) { doc = document; }
	            var el = doc.createElement('SCRIPT');
	            el.setAttribute(attrName, attrValue);
	            return el;
	        };
	        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	            if (doc === void 0) { doc = document; }
	            var style = doc.createElement('style');
	            this.appendChild(style, this.createTextNode(css));
	            return style;
	        };
	        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
	        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
	        BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
	        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	            return element.getElementsByClassName(name);
	        };
	        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	            return element.getElementsByTagName(name);
	        };
	        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	        BrowserDomAdapter.prototype.hasClass = function (element, className) {
	            return element.classList.contains(className);
	        };
	        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	            element.style[styleName] = styleValue;
	        };
	        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
	            // IE requires '' instead of null
	            // see https://github.com/angular/angular/issues/7916
	            element.style[stylename] = '';
	        };
	        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	            if (styleValue === void 0) { styleValue = null; }
	            var value = this.getStyle(element, styleName) || '';
	            return styleValue ? value == styleValue : value.length > 0;
	        };
	        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	        BrowserDomAdapter.prototype.attributeMap = function (element) {
	            var res = new Map();
	            var elAttrs = element.attributes;
	            for (var i = 0; i < elAttrs.length; i++) {
	                var attrib = elAttrs[i];
	                res.set(attrib.name, attrib.value);
	            }
	            return res;
	        };
	        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
	            return element.hasAttribute(attribute);
	        };
	        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	            return element.hasAttributeNS(ns, attribute);
	        };
	        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
	            return element.getAttribute(attribute);
	        };
	        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	            return element.getAttributeNS(ns, name);
	        };
	        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	            element.setAttributeNS(ns, name, value);
	        };
	        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
	            element.removeAttributeNS(ns, name);
	        };
	        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	        BrowserDomAdapter.prototype.createHtmlDocument = function () {
	            return document.implementation.createHTMLDocument('fakeTitle');
	        };
	        BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	            try {
	                return el.getBoundingClientRect();
	            }
	            catch (e) {
	                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	            }
	        };
	        BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	        BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	            if (n instanceof HTMLElement) {
	                return n.matches && n.matches(selector) ||
	                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
	                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
	            }
	            return false;
	        };
	        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
	        };
	        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
	            return isPresent(node.shadowRoot) && node instanceof HTMLElement;
	        };
	        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
	        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	        BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
	        BrowserDomAdapter.prototype.getEventKey = function (event) {
	            var key = event.key;
	            if (isBlank(key)) {
	                key = event.keyIdentifier;
	                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
	                // Safari cf
	                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
	                if (isBlank(key)) {
	                    return 'Unidentified';
	                }
	                if (key.startsWith('U+')) {
	                    key = String.fromCharCode(parseInt(key.substring(2), 16));
	                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
	                        // There is a bug in Chrome for numeric keypad keys:
	                        // https://code.google.com/p/chromium/issues/detail?id=155654
	                        // 1, 2, 3 ... are reported as A, B, C ...
	                        key = _chromeNumKeyPadMap[key];
	                    }
	                }
	            }
	            return _keyMap[key] || key;
	        };
	        BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
	            if (target === 'window') {
	                return window;
	            }
	            if (target === 'document') {
	                return document;
	            }
	            if (target === 'body') {
	                return document.body;
	            }
	        };
	        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	        BrowserDomAdapter.prototype.getBaseHref = function () {
	            var href = getBaseElementHref();
	            return isBlank(href) ? null : relativePath(href);
	        };
	        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	        BrowserDomAdapter.prototype.setData = function (element, name, value) {
	            this.setAttribute(element, 'data-' + name, value);
	        };
	        BrowserDomAdapter.prototype.getData = function (element, name) {
	            return this.getAttribute(element, 'data-' + name);
	        };
	        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	        // TODO(tbosch): move this into a separate environment class once we have it
	        BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { setValueOnPath(global$1, path, value); };
	        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
	            return typeof Element.prototype['animate'] === 'function';
	        };
	        BrowserDomAdapter.prototype.performanceNow = function () {
	            // performance.now() is not available in all browsers, see
	            // http://caniuse.com/#search=performance.now
	            return window.performance && window.performance.now ? window.performance.now() :
	                new Date().getTime();
	        };
	        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
	        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
	        BrowserDomAdapter.prototype.setCookie = function (name, value) {
	            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
	            // not clear other cookies.
	            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	        };
	        return BrowserDomAdapter;
	    }(GenericBrowserDomAdapter));
	    var baseElement = null;
	    function getBaseElementHref() {
	        if (!baseElement) {
	            baseElement = document.querySelector('base');
	            if (!baseElement) {
	                return null;
	            }
	        }
	        return baseElement.getAttribute('href');
	    }
	    // based on urlUtils.js in AngularJS 1
	    var urlParsingNode;
	    function relativePath(url) {
	        if (!urlParsingNode) {
	            urlParsingNode = document.createElement('a');
	        }
	        urlParsingNode.setAttribute('href', url);
	        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname;
	    }
	    function parseCookieValue(cookieStr, name) {
	        name = encodeURIComponent(name);
	        for (var _i = 0, _a = cookieStr.split(';'); _i < _a.length; _i++) {
	            var cookie = _a[_i];
	            var eqIndex = cookie.indexOf('=');
	            var _b = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], cookieName = _b[0], cookieValue = _b[1];
	            if (cookieName.trim() === name) {
	                return decodeURIComponent(cookieValue);
	            }
	        }
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function supportsState() {
	        return !!window.history.pushState;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
	     * This class should not be used directly by an application developer. Instead, use
	     * {@link Location}.
	     */
	    var BrowserPlatformLocation = (function (_super) {
	        __extends$2(BrowserPlatformLocation, _super);
	        function BrowserPlatformLocation() {
	            _super.call(this);
	            this._init();
	        }
	        // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	        /** @internal */
	        BrowserPlatformLocation.prototype._init = function () {
	            this._location = getDOM().getLocation();
	            this._history = getDOM().getHistory();
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	            get: function () { return this._location; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(); };
	        BrowserPlatformLocation.prototype.onPopState = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	        };
	        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	            get: function () { return this._location.pathname; },
	            set: function (newPath) { this._location.pathname = newPath; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	            get: function () { return this._location.search; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	            get: function () { return this._location.hash; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.pushState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.replaceState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	        BrowserPlatformLocation.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserPlatformLocation.ctorParameters = [];
	        return BrowserPlatformLocation;
	    }(_angular_common.PlatformLocation));
	
	    var BrowserGetTestability = (function () {
	        function BrowserGetTestability() {
	        }
	        BrowserGetTestability.init = function () { _angular_core.setTestabilityGetter(new BrowserGetTestability()); };
	        BrowserGetTestability.prototype.addToWindow = function (registry) {
	            global$1.getAngularTestability = function (elem, findInAncestors) {
	                if (findInAncestors === void 0) { findInAncestors = true; }
	                var testability = registry.findTestabilityInTree(elem, findInAncestors);
	                if (testability == null) {
	                    throw new Error('Could not find testability for element.');
	                }
	                return testability;
	            };
	            global$1.getAllAngularTestabilities = function () { return registry.getAllTestabilities(); };
	            global$1.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	            var whenAllStable = function (callback /** TODO #9100 */) {
	                var testabilities = global$1.getAllAngularTestabilities();
	                var count = testabilities.length;
	                var didWork = false;
	                var decrement = function (didWork_ /** TODO #9100 */) {
	                    didWork = didWork || didWork_;
	                    count--;
	                    if (count == 0) {
	                        callback(didWork);
	                    }
	                };
	                testabilities.forEach(function (testability /** TODO #9100 */) {
	                    testability.whenStable(decrement);
	                });
	            };
	            if (!global$1['frameworkStabilizers']) {
	                global$1['frameworkStabilizers'] = [];
	            }
	            global$1['frameworkStabilizers'].push(whenAllStable);
	        };
	        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	            if (elem == null) {
	                return null;
	            }
	            var t = registry.getTestability(elem);
	            if (isPresent(t)) {
	                return t;
	            }
	            else if (!findInAncestors) {
	                return null;
	            }
	            if (getDOM().isShadowRoot(elem)) {
	                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
	            }
	            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
	        };
	        return BrowserGetTestability;
	    }());
	
	    /**
	     * A service that can be used to get and set the title of a current HTML document.
	     *
	     * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
	     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
	     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
	     * title value.
	     *
	     * @experimental
	     */
	    var Title = (function () {
	        function Title() {
	        }
	        /**
	         * Get the title of the current HTML document.
	         * @returns {string}
	         */
	        Title.prototype.getTitle = function () { return getDOM().getTitle(); };
	        /**
	         * Set the title of the current HTML document.
	         * @param newTitle
	         */
	        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(newTitle); };
	        return Title;
	    }());
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	
	    /**
	     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	     *
	     * Note: Document might not be available in the Application Context when Application and Rendering
	     * Contexts are not the same (e.g. when running the application into a Web Worker).
	     *
	     * @stable
	     */
	    var DOCUMENT = new _angular_core.OpaqueToken('DocumentToken');
	
	    /**
	     * @stable
	     */
	    var EVENT_MANAGER_PLUGINS = new _angular_core.OpaqueToken('EventManagerPlugins');
	    /**
	     * @stable
	     */
	    var EventManager = (function () {
	        function EventManager(plugins, _zone) {
	            var _this = this;
	            this._zone = _zone;
	            this._eventNameToPlugin = new Map();
	            plugins.forEach(function (p) { return p.manager = _this; });
	            this._plugins = plugins.slice().reverse();
	        }
	        EventManager.prototype.addEventListener = function (element, eventName, handler) {
	            var plugin = this._findPluginFor(eventName);
	            return plugin.addEventListener(element, eventName, handler);
	        };
	        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	            var plugin = this._findPluginFor(eventName);
	            return plugin.addGlobalEventListener(target, eventName, handler);
	        };
	        EventManager.prototype.getZone = function () { return this._zone; };
	        /** @internal */
	        EventManager.prototype._findPluginFor = function (eventName) {
	            var plugin = this._eventNameToPlugin.get(eventName);
	            if (plugin) {
	                return plugin;
	            }
	            var plugins = this._plugins;
	            for (var i = 0; i < plugins.length; i++) {
	                var plugin_1 = plugins[i];
	                if (plugin_1.supports(eventName)) {
	                    this._eventNameToPlugin.set(eventName, plugin_1);
	                    return plugin_1;
	                }
	            }
	            throw new Error("No event manager plugin found for event " + eventName);
	        };
	        EventManager.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        EventManager.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Inject, args: [EVENT_MANAGER_PLUGINS,] },] },
	            { type: _angular_core.NgZone, },
	        ];
	        return EventManager;
	    }());
	    var EventManagerPlugin = (function () {
	        function EventManagerPlugin() {
	        }
	        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	            var target = getDOM().getGlobalEventTarget(element);
	            if (!target) {
	                throw new Error("Unsupported event target " + target + " for event " + eventName);
	            }
	            return this.addEventListener(target, eventName, handler);
	        };
	        ;
	        return EventManagerPlugin;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var SharedStylesHost = (function () {
	        function SharedStylesHost() {
	            /** @internal */
	            this._styles = [];
	            /** @internal */
	            this._stylesSet = new Set();
	        }
	        SharedStylesHost.prototype.addStyles = function (styles) {
	            var _this = this;
	            var additions = [];
	            styles.forEach(function (style) {
	                if (!_this._stylesSet.has(style)) {
	                    _this._stylesSet.add(style);
	                    _this._styles.push(style);
	                    additions.push(style);
	                }
	            });
	            this.onStylesAdded(additions);
	        };
	        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	        SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
	        SharedStylesHost.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        SharedStylesHost.ctorParameters = [];
	        return SharedStylesHost;
	    }());
	    var DomSharedStylesHost = (function (_super) {
	        __extends$4(DomSharedStylesHost, _super);
	        function DomSharedStylesHost(doc) {
	            _super.call(this);
	            this._hostNodes = new Set();
	            this._hostNodes.add(doc.head);
	        }
	        /** @internal */
	        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	            for (var i = 0; i < styles.length; i++) {
	                var styleEl = document.createElement('style');
	                styleEl.textContent = styles[i];
	                host.appendChild(styleEl);
	            }
	        };
	        DomSharedStylesHost.prototype.addHost = function (hostNode) {
	            this._addStylesToHost(this._styles, hostNode);
	            this._hostNodes.add(hostNode);
	        };
	        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
	        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	            var _this = this;
	            this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
	        };
	        DomSharedStylesHost.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSharedStylesHost.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
	        ];
	        return DomSharedStylesHost;
	    }(SharedStylesHost));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var NAMESPACE_URIS = {
	        'xlink': 'http://www.w3.org/1999/xlink',
	        'svg': 'http://www.w3.org/2000/svg',
	        'xhtml': 'http://www.w3.org/1999/xhtml'
	    };
	    var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	    var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/;
	    var DomRootRenderer = (function () {
	        function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver, appId) {
	            this.document = document;
	            this.eventManager = eventManager;
	            this.sharedStylesHost = sharedStylesHost;
	            this.animationDriver = animationDriver;
	            this.appId = appId;
	            this.registeredComponents = new Map();
	        }
	        DomRootRenderer.prototype.renderComponent = function (componentProto) {
	            var renderer = this.registeredComponents.get(componentProto.id);
	            if (!renderer) {
	                renderer = new DomRenderer(this, componentProto, this.animationDriver, this.appId + "-" + componentProto.id);
	                this.registeredComponents.set(componentProto.id, renderer);
	            }
	            return renderer;
	        };
	        return DomRootRenderer;
	    }());
	    var DomRootRenderer_ = (function (_super) {
	        __extends$3(DomRootRenderer_, _super);
	        function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver, appId) {
	            _super.call(this, _document, _eventManager, sharedStylesHost, animationDriver, appId);
	        }
	        DomRootRenderer_.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomRootRenderer_.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
	            { type: EventManager, },
	            { type: DomSharedStylesHost, },
	            { type: AnimationDriver, },
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.APP_ID,] },] },
	        ];
	        return DomRootRenderer_;
	    }(DomRootRenderer));
	    var DIRECT_DOM_RENDERER = {
	        remove: function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	        },
	        appendChild: function (node, parent) { parent.appendChild(node); },
	        insertBefore: function (node, refNode) { refNode.parentNode.insertBefore(node, refNode); },
	        nextSibling: function (node) { return node.nextSibling; },
	        parentElement: function (node) { return node.parentNode; }
	    };
	    var DomRenderer = (function () {
	        function DomRenderer(_rootRenderer, componentProto, _animationDriver, styleShimId) {
	            this._rootRenderer = _rootRenderer;
	            this.componentProto = componentProto;
	            this._animationDriver = _animationDriver;
	            this.directRenderer = DIRECT_DOM_RENDERER;
	            this._styles = flattenStyles(styleShimId, componentProto.styles, []);
	            if (componentProto.encapsulation !== _angular_core.ViewEncapsulation.Native) {
	                this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	            }
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Emulated) {
	                this._contentAttr = shimContentAttribute(styleShimId);
	                this._hostAttr = shimHostAttribute(styleShimId);
	            }
	            else {
	                this._contentAttr = null;
	                this._hostAttr = null;
	            }
	        }
	        DomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	            var el;
	            if (typeof selectorOrNode === 'string') {
	                el = this._rootRenderer.document.querySelector(selectorOrNode);
	                if (!el) {
	                    throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
	                }
	            }
	            else {
	                el = selectorOrNode;
	            }
	            while (el.firstChild) {
	                el.removeChild(el.firstChild);
	            }
	            return el;
	        };
	        DomRenderer.prototype.createElement = function (parent, name, debugInfo) {
	            var el;
	            if (isNamespaced(name)) {
	                var nsAndName = splitNamespace(name);
	                el = document.createElementNS((NAMESPACE_URIS)[nsAndName[0]], nsAndName[1]);
	            }
	            else {
	                el = document.createElement(name);
	            }
	            if (this._contentAttr) {
	                el.setAttribute(this._contentAttr, '');
	            }
	            if (parent) {
	                parent.appendChild(el);
	            }
	            return el;
	        };
	        DomRenderer.prototype.createViewRoot = function (hostElement) {
	            var nodesParent;
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native) {
	                nodesParent = hostElement.createShadowRoot();
	                this._rootRenderer.sharedStylesHost.addHost(nodesParent);
	                for (var i = 0; i < this._styles.length; i++) {
	                    var styleEl = document.createElement('style');
	                    styleEl.textContent = this._styles[i];
	                    nodesParent.appendChild(styleEl);
	                }
	            }
	            else {
	                if (this._hostAttr) {
	                    hostElement.setAttribute(this._hostAttr, '');
	                }
	                nodesParent = hostElement;
	            }
	            return nodesParent;
	        };
	        DomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	            var comment = document.createComment(TEMPLATE_COMMENT_TEXT);
	            if (parentElement) {
	                parentElement.appendChild(comment);
	            }
	            return comment;
	        };
	        DomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	            var node = document.createTextNode(value);
	            if (parentElement) {
	                parentElement.appendChild(node);
	            }
	            return node;
	        };
	        DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	            if (!parentElement)
	                return;
	            appendNodes(parentElement, nodes);
	        };
	        DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) { moveNodesAfterSibling(node, viewRootNodes); };
	        DomRenderer.prototype.detachView = function (viewRootNodes) {
	            for (var i = 0; i < viewRootNodes.length; i++) {
	                var node = viewRootNodes[i];
	                if (node.parentNode) {
	                    node.parentNode.removeChild(node);
	                }
	            }
	        };
	        DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native && hostElement) {
	                this._rootRenderer.sharedStylesHost.removeHost(hostElement.shadowRoot);
	            }
	        };
	        DomRenderer.prototype.listen = function (renderElement, name, callback) {
	            return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	        };
	        DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	            return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	        };
	        DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	            renderElement[propertyName] = propertyValue;
	        };
	        DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	            var attrNs;
	            var attrNameWithoutNs = attributeName;
	            if (isNamespaced(attributeName)) {
	                var nsAndName = splitNamespace(attributeName);
	                attrNameWithoutNs = nsAndName[1];
	                attributeName = nsAndName[0] + ':' + nsAndName[1];
	                attrNs = NAMESPACE_URIS[nsAndName[0]];
	            }
	            if (isPresent(attributeValue)) {
	                if (attrNs) {
	                    renderElement.setAttributeNS(attrNs, attributeName, attributeValue);
	                }
	                else {
	                    renderElement.setAttribute(attributeName, attributeValue);
	                }
	            }
	            else {
	                if (isPresent(attrNs)) {
	                    renderElement.removeAttributeNS(attrNs, attrNameWithoutNs);
	                }
	                else {
	                    renderElement.removeAttribute(attributeName);
	                }
	            }
	        };
	        DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	            if (renderElement.nodeType === Node.COMMENT_NODE) {
	                var existingBindings = renderElement.nodeValue.replace(/\n/g, '').match(TEMPLATE_BINDINGS_EXP);
	                var parsedBindings = JSON.parse(existingBindings[1]);
	                parsedBindings[propertyName] = propertyValue;
	                renderElement.nodeValue =
	                    TEMPLATE_COMMENT_TEXT.replace('{}', JSON.stringify(parsedBindings, null, 2));
	            }
	            else {
	                this.setElementAttribute(renderElement, propertyName, propertyValue);
	            }
	        };
	        DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	            if (isAdd) {
	                renderElement.classList.add(className);
	            }
	            else {
	                renderElement.classList.remove(className);
	            }
	        };
	        DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	            if (isPresent(styleValue)) {
	                renderElement.style[styleName] = stringify(styleValue);
	            }
	            else {
	                // IE requires '' instead of null
	                // see https://github.com/angular/angular/issues/7916
	                renderElement.style[styleName] = '';
	            }
	        };
	        DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	            renderElement[methodName].apply(renderElement, args);
	        };
	        DomRenderer.prototype.setText = function (renderNode, text) { renderNode.nodeValue = text; };
	        DomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing);
	        };
	        return DomRenderer;
	    }());
	    function moveNodesAfterSibling(sibling, nodes) {
	        var parent = sibling.parentNode;
	        if (nodes.length > 0 && parent) {
	            var nextSibling = sibling.nextSibling;
	            if (nextSibling) {
	                for (var i = 0; i < nodes.length; i++) {
	                    parent.insertBefore(nodes[i], nextSibling);
	                }
	            }
	            else {
	                for (var i = 0; i < nodes.length; i++) {
	                    parent.appendChild(nodes[i]);
	                }
	            }
	        }
	    }
	    function appendNodes(parent, nodes) {
	        for (var i = 0; i < nodes.length; i++) {
	            parent.appendChild(nodes[i]);
	        }
	    }
	    function decoratePreventDefault(eventHandler) {
	        return function (event) {
	            var allowDefaultBehavior = eventHandler(event);
	            if (allowDefaultBehavior === false) {
	                // TODO(tbosch): move preventDefault into event plugins...
	                event.preventDefault();
	                event.returnValue = false;
	            }
	        };
	    }
	    var COMPONENT_REGEX = /%COMP%/g;
	    var COMPONENT_VARIABLE = '%COMP%';
	    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
	    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
	    function shimContentAttribute(componentShortId) {
	        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    function shimHostAttribute(componentShortId) {
	        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    function flattenStyles(compId, styles, target) {
	        for (var i = 0; i < styles.length; i++) {
	            var style = styles[i];
	            if (Array.isArray(style)) {
	                flattenStyles(compId, style, target);
	            }
	            else {
	                style = style.replace(COMPONENT_REGEX, compId);
	                target.push(style);
	            }
	        }
	        return target;
	    }
	    var NS_PREFIX_RE = /^:([^:]+):(.+)$/;
	    function isNamespaced(name) {
	        return name[0] === ':';
	    }
	    function splitNamespace(name) {
	        var match = name.match(NS_PREFIX_RE);
	        return [match[1], match[2]];
	    }
	
	    var CORE_TOKENS = {
	        'ApplicationRef': _angular_core.ApplicationRef,
	        'NgZone': _angular_core.NgZone
	    };
	    var INSPECT_GLOBAL_NAME = 'ng.probe';
	    var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	    /**
	     * Returns a {@link DebugElement} for the given native DOM element, or
	     * null if the given native element does not have an Angular view associated
	     * with it.
	     */
	    function inspectNativeElement(element /** TODO #9100 */) {
	        return _angular_core.getDebugNode(element);
	    }
	    /**
	     * @experimental
	     */
	    var NgProbeToken = (function () {
	        function NgProbeToken(name, token) {
	            this.name = name;
	            this.token = token;
	        }
	        return NgProbeToken;
	    }());
	    function _createConditionalRootRenderer(rootRenderer /** TODO #9100 */, extraTokens) {
	        if (_angular_core.isDevMode()) {
	            return _createRootRenderer(rootRenderer, extraTokens);
	        }
	        return rootRenderer;
	    }
	    function _createRootRenderer(rootRenderer /** TODO #9100 */, extraTokens) {
	        getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	        getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, StringMapWrapper.merge(CORE_TOKENS, _ngProbeTokensToMap(extraTokens || [])));
	        return new DebugDomRootRenderer(rootRenderer);
	    }
	    function _ngProbeTokensToMap(tokens) {
	        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
	    }
	    /**
	     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	     */
	    var ELEMENT_PROBE_PROVIDERS = [{
	            provide: _angular_core.RootRenderer,
	            useFactory: _createConditionalRootRenderer,
	            deps: [DomRootRenderer, [NgProbeToken, new _angular_core.Optional()]]
	        }];
	    var ELEMENT_PROBE_PROVIDERS_PROD_MODE = [{
	            provide: _angular_core.RootRenderer,
	            useFactory: _createRootRenderer,
	            deps: [DomRootRenderer, [NgProbeToken, new _angular_core.Optional()]]
	        }];
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var DomEventsPlugin = (function (_super) {
	        __extends$5(DomEventsPlugin, _super);
	        function DomEventsPlugin() {
	            _super.apply(this, arguments);
	        }
	        // This plugin should come last in the list of plugins, because it accepts all
	        // events.
	        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            element.addEventListener(eventName, handler, false);
	            return function () { return element.removeEventListener(eventName, handler, false); };
	        };
	        DomEventsPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomEventsPlugin.ctorParameters = [];
	        return DomEventsPlugin;
	    }(EventManagerPlugin));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var EVENT_NAMES = {
	        // pan
	        'pan': true,
	        'panstart': true,
	        'panmove': true,
	        'panend': true,
	        'pancancel': true,
	        'panleft': true,
	        'panright': true,
	        'panup': true,
	        'pandown': true,
	        // pinch
	        'pinch': true,
	        'pinchstart': true,
	        'pinchmove': true,
	        'pinchend': true,
	        'pinchcancel': true,
	        'pinchin': true,
	        'pinchout': true,
	        // press
	        'press': true,
	        'pressup': true,
	        // rotate
	        'rotate': true,
	        'rotatestart': true,
	        'rotatemove': true,
	        'rotateend': true,
	        'rotatecancel': true,
	        // swipe
	        'swipe': true,
	        'swipeleft': true,
	        'swiperight': true,
	        'swipeup': true,
	        'swipedown': true,
	        // tap
	        'tap': true,
	    };
	    /**
	     * A DI token that you can use to provide{@link HammerGestureConfig} to Angular. Use it to configure
	     * Hammer gestures.
	     *
	     * @experimental
	     */
	    var HAMMER_GESTURE_CONFIG = new _angular_core.OpaqueToken('HammerGestureConfig');
	    /**
	     * @experimental
	     */
	    var HammerGestureConfig = (function () {
	        function HammerGestureConfig() {
	            this.events = [];
	            this.overrides = {};
	        }
	        HammerGestureConfig.prototype.buildHammer = function (element) {
	            var mc = new Hammer(element);
	            mc.get('pinch').set({ enable: true });
	            mc.get('rotate').set({ enable: true });
	            for (var eventName in this.overrides) {
	                mc.get(eventName).set(this.overrides[eventName]);
	            }
	            return mc;
	        };
	        HammerGestureConfig.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGestureConfig.ctorParameters = [];
	        return HammerGestureConfig;
	    }());
	    var HammerGesturesPlugin = (function (_super) {
	        __extends$6(HammerGesturesPlugin, _super);
	        function HammerGesturesPlugin(_config) {
	            _super.call(this);
	            this._config = _config;
	        }
	        HammerGesturesPlugin.prototype.supports = function (eventName) {
	            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
	                return false;
	            }
	            if (!window.Hammer) {
	                throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
	            }
	            return true;
	        };
	        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var _this = this;
	            var zone = this.manager.getZone();
	            eventName = eventName.toLowerCase();
	            return zone.runOutsideAngular(function () {
	                // Creating the manager bind events, must be done outside of angular
	                var mc = _this._config.buildHammer(element);
	                var callback = function (eventObj) {
	                    zone.runGuarded(function () { handler(eventObj); });
	                };
	                mc.on(eventName, callback);
	                return function () { return mc.off(eventName, callback); };
	            });
	        };
	        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	        HammerGesturesPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGesturesPlugin.ctorParameters = [
	            { type: HammerGestureConfig, decorators: [{ type: _angular_core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
	        ];
	        return HammerGesturesPlugin;
	    }(EventManagerPlugin));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
	    var MODIFIER_KEY_GETTERS = {
	        'alt': function (event) { return event.altKey; },
	        'control': function (event) { return event.ctrlKey; },
	        'meta': function (event) { return event.metaKey; },
	        'shift': function (event) { return event.shiftKey; }
	    };
	    /**
	     * @experimental
	     */
	    var KeyEventsPlugin = (function (_super) {
	        __extends$7(KeyEventsPlugin, _super);
	        function KeyEventsPlugin() {
	            _super.call(this);
	        }
	        KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
	        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	            var outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
	            return this.manager.getZone().runOutsideAngular(function () {
	                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
	            });
	        };
	        KeyEventsPlugin.parseEventName = function (eventName) {
	            var parts = eventName.toLowerCase().split('.');
	            var domEventName = parts.shift();
	            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
	                return null;
	            }
	            var key = KeyEventsPlugin._normalizeKey(parts.pop());
	            var fullKey = '';
	            MODIFIER_KEYS.forEach(function (modifierName) {
	                var index = parts.indexOf(modifierName);
	                if (index > -1) {
	                    parts.splice(index, 1);
	                    fullKey += modifierName + '.';
	                }
	            });
	            fullKey += key;
	            if (parts.length != 0 || key.length === 0) {
	                // returning null instead of throwing to let another plugin process the event
	                return null;
	            }
	            var result = {};
	            result['domEventName'] = domEventName;
	            result['fullKey'] = fullKey;
	            return result;
	        };
	        KeyEventsPlugin.getEventFullKey = function (event) {
	            var fullKey = '';
	            var key = getDOM().getEventKey(event);
	            key = key.toLowerCase();
	            if (key === ' ') {
	                key = 'space'; // for readability
	            }
	            else if (key === '.') {
	                key = 'dot'; // because '.' is used as a separator in event names
	            }
	            MODIFIER_KEYS.forEach(function (modifierName) {
	                if (modifierName != key) {
	                    var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
	                    if (modifierGetter(event)) {
	                        fullKey += modifierName + '.';
	                    }
	                }
	            });
	            fullKey += key;
	            return fullKey;
	        };
	        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
	            return function (event /** TODO #9100 */) {
	                if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
	                    zone.runGuarded(function () { return handler(event); });
	                }
	            };
	        };
	        /** @internal */
	        KeyEventsPlugin._normalizeKey = function (keyName) {
	            // TODO: switch to a Map if the mapping grows too much
	            switch (keyName) {
	                case 'esc':
	                    return 'escape';
	                default:
	                    return keyName;
	            }
	        };
	        KeyEventsPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        KeyEventsPlugin.ctorParameters = [];
	        return KeyEventsPlugin;
	    }(EventManagerPlugin));
	
	    /**
	     * A pattern that recognizes a commonly useful subset of URLs that are safe.
	     *
	     * This regular expression matches a subset of URLs that will not cause script
	     * execution if used in URL context within a HTML document. Specifically, this
	     * regular expression matches if (comment from here on and regex copied from
	     * Soy's EscapingConventions):
	     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
	     * (2) or no protocol.  A protocol must be followed by a colon. The below
	     *     allows that by allowing colons only after one of the characters [/?#].
	     *     A colon after a hash (#) must be in the fragment.
	     *     Otherwise, a colon after a (?) must be in a query.
	     *     Otherwise, a colon after a single solidus (/) must be in a path.
	     *     Otherwise, a colon after a double solidus (//) must be in the authority
	     *     (before port).
	     *
	     * The pattern disallows &, used in HTML entity declarations before
	     * one of the characters in [/?#]. This disallows HTML entities used in the
	     * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
	     * It also disallows HTML entities in the first path part of a relative path,
	     * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
	     * that. More importantly, it disallows masking of a colon,
	     * e.g. "javascript&#58;...".
	     *
	     * This regular expression was taken from the Closure sanitization library.
	     */
	    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
	    /** A pattern that matches safe data URLs. Only matches image, video and audio types. */
	    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
	    function sanitizeUrl(url) {
	        url = String(url);
	        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
	            return url;
	        if (_angular_core.isDevMode()) {
	            getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
	        }
	        return 'unsafe:' + url;
	    }
	    function sanitizeSrcset(srcset) {
	        srcset = String(srcset);
	        return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
	    }
	
	    /** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
	    var inertElement = null;
	    /** Lazily initialized to make sure the DOM adapter gets set before use. */
	    var DOM = null;
	    /** Returns an HTML element that is guaranteed to not execute code when creating elements in it. */
	    function getInertElement() {
	        if (inertElement)
	            return inertElement;
	        DOM = getDOM();
	        // Prefer using <template> element if supported.
	        var templateEl = DOM.createElement('template');
	        if ('content' in templateEl)
	            return templateEl;
	        var doc = DOM.createHtmlDocument();
	        inertElement = DOM.querySelector(doc, 'body');
	        if (inertElement == null) {
	            // usually there should be only one body element in the document, but IE doesn't have any, so we
	            // need to create one.
	            var html = DOM.createElement('html', doc);
	            inertElement = DOM.createElement('body', doc);
	            DOM.appendChild(html, inertElement);
	            DOM.appendChild(doc, html);
	        }
	        return inertElement;
	    }
	    function tagSet(tags) {
	        var res = {};
	        for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
	            var t = _a[_i];
	            res[t] = true;
	        }
	        return res;
	    }
	    function merge() {
	        var sets = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sets[_i - 0] = arguments[_i];
	        }
	        var res = {};
	        for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
	            var s = sets_1[_a];
	            for (var v in s) {
	                if (s.hasOwnProperty(v))
	                    res[v] = true;
	            }
	        }
	        return res;
	    }
	    // Good source of info about elements and attributes
	    // http://dev.w3.org/html5/spec/Overview.html#semantics
	    // http://simon.html5.org/html-elements
	    // Safe Void Elements - HTML5
	    // http://dev.w3.org/html5/spec/Overview.html#void-elements
	    var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
	    // Elements that you can, intentionally, leave open (and which close themselves)
	    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
	    var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
	    var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
	    var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
	    // Safe Block Elements - HTML5
	    var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
	        'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
	        'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
	    // Inline Elements - HTML5
	    var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
	        'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
	        'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
	    var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
	    // Attributes that have href and hence need to be sanitized
	    var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
	    // Attributes that have special href set hence need to be sanitized
	    var SRCSET_ATTRS = tagSet('srcset');
	    var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
	        'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
	        'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
	        'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
	        'valign,value,vspace,width');
	    // NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
	    // issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
	    // innerHTML is required, SVG attributes should be added here.
	    // NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
	    // can be sanitized, but they increase security surface area without a legitimate use case, so they
	    // are left out here.
	    var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
	    /**
	     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
	     * attributes.
	     */
	    var SanitizingHtmlSerializer = (function () {
	        function SanitizingHtmlSerializer() {
	            // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
	            // because characters were re-encoded.
	            this.sanitizedSomething = false;
	            this.buf = [];
	        }
	        SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
	            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
	            // However this code never accesses properties off of `document` before deleting its contents
	            // again, so it shouldn't be vulnerable to DOM clobbering.
	            var current = el.firstChild;
	            while (current) {
	                if (DOM.isElementNode(current)) {
	                    this.startElement(current);
	                }
	                else if (DOM.isTextNode(current)) {
	                    this.chars(DOM.nodeValue(current));
	                }
	                else {
	                    // Strip non-element, non-text nodes.
	                    this.sanitizedSomething = true;
	                }
	                if (DOM.firstChild(current)) {
	                    current = DOM.firstChild(current);
	                    continue;
	                }
	                while (current) {
	                    // Leaving the element. Walk up and to the right, closing tags as we go.
	                    if (DOM.isElementNode(current)) {
	                        this.endElement(current);
	                    }
	                    if (DOM.nextSibling(current)) {
	                        current = DOM.nextSibling(current);
	                        break;
	                    }
	                    current = DOM.parentElement(current);
	                }
	            }
	            return this.buf.join('');
	        };
	        SanitizingHtmlSerializer.prototype.startElement = function (element) {
	            var _this = this;
	            var tagName = DOM.nodeName(element).toLowerCase();
	            if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.sanitizedSomething = true;
	                return;
	            }
	            this.buf.push('<');
	            this.buf.push(tagName);
	            DOM.attributeMap(element).forEach(function (value, attrName) {
	                var lower = attrName.toLowerCase();
	                if (!VALID_ATTRS.hasOwnProperty(lower)) {
	                    _this.sanitizedSomething = true;
	                    return;
	                }
	                // TODO(martinprobst): Special case image URIs for data:image/...
	                if (URI_ATTRS[lower])
	                    value = sanitizeUrl(value);
	                if (SRCSET_ATTRS[lower])
	                    value = sanitizeSrcset(value);
	                _this.buf.push(' ');
	                _this.buf.push(attrName);
	                _this.buf.push('="');
	                _this.buf.push(encodeEntities(value));
	                _this.buf.push('"');
	            });
	            this.buf.push('>');
	        };
	        SanitizingHtmlSerializer.prototype.endElement = function (current) {
	            var tagName = DOM.nodeName(current).toLowerCase();
	            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.buf.push('</');
	                this.buf.push(tagName);
	                this.buf.push('>');
	            }
	        };
	        SanitizingHtmlSerializer.prototype.chars = function (chars /** TODO #9100 */) { this.buf.push(encodeEntities(chars)); };
	        return SanitizingHtmlSerializer;
	    }());
	    // Regular Expressions for parsing tags and attributes
	    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	    // ! to ~ is the ASCII range.
	    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
	    /**
	     * Escapes all potentially dangerous characters, so that the
	     * resulting string can be safely inserted into attribute or
	     * element text.
	     * @param value
	     * @returns {string} escaped text
	     */
	    function encodeEntities(value) {
	        return value.replace(/&/g, '&amp;')
	            .replace(SURROGATE_PAIR_REGEXP, function (match) {
	            var hi = match.charCodeAt(0);
	            var low = match.charCodeAt(1);
	            return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	        })
	            .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;');
	    }
	    /**
	     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
	     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
	     *
	     * This is undesirable since we don't want to allow any of these custom attributes. This method
	     * strips them all.
	     */
	    function stripCustomNsAttrs(el) {
	        DOM.attributeMap(el).forEach(function (_, attrName) {
	            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
	                DOM.removeAttribute(el, attrName);
	            }
	        });
	        for (var _i = 0, _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
	            var n = _a[_i];
	            if (DOM.isElementNode(n))
	                stripCustomNsAttrs(n);
	        }
	    }
	    /**
	     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
	     * the DOM in a browser environment.
	     */
	    function sanitizeHtml(unsafeHtmlInput) {
	        try {
	            var containerEl = getInertElement();
	            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
	            var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
	            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
	            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
	            var mXSSAttempts = 5;
	            var parsedHtml = unsafeHtml;
	            do {
	                if (mXSSAttempts === 0) {
	                    throw new Error('Failed to sanitize html because the input is unstable');
	                }
	                mXSSAttempts--;
	                unsafeHtml = parsedHtml;
	                DOM.setInnerHTML(containerEl, unsafeHtml);
	                if (DOM.defaultDoc().documentMode) {
	                    // strip custom-namespaced attributes on IE<=11
	                    stripCustomNsAttrs(containerEl);
	                }
	                parsedHtml = DOM.getInnerHTML(containerEl);
	            } while (unsafeHtml !== parsedHtml);
	            var sanitizer = new SanitizingHtmlSerializer();
	            var safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
	            // Clear out the body element.
	            var parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
	            for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
	                var child = _a[_i];
	                DOM.removeChild(parent_1, child);
	            }
	            if (_angular_core.isDevMode() && sanitizer.sanitizedSomething) {
	                DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
	            }
	            return safeHtml;
	        }
	        catch (e) {
	            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
	            inertElement = null;
	            throw e;
	        }
	    }
	
	    /**
	     * Regular expression for safe style values.
	     *
	     * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
	     *
	     * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
	     * font-family) and hence could allow multiple values to get injected, but that should pose no risk
	     * of XSS.
	     *
	     * The function expression checks only for XSS safety, not for CSS validity.
	     *
	     * This regular expression was taken from the Closure sanitization library, and augmented for
	     * transformation values.
	     */
	    var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
	    var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
	    var COLOR_FNS = '(?:rgb|hsl)a?';
	    var FN_ARGS = '\\([-0-9.%, a-zA-Z]+\\)';
	    var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + ")" + FN_ARGS + ")$", 'g');
	    /**
	     * Matches a `url(...)` value with an arbitrary argument as long as it does
	     * not contain parentheses.
	     *
	     * The URL value still needs to be sanitized separately.
	     *
	     * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
	     * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
	     * by observing whether scroll bars are displayed, or character ranges used by a font face
	     * definition.
	     *
	     * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
	     * binding a URL value without further cooperation from the page will cause an information leak, and
	     * if so, it is just a leak, not a full blown XSS vulnerability.
	     *
	     * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
	     * code is permissive and allows URLs that sanitize otherwise.
	     */
	    var URL_RE = /^url\(([^)]+)\)$/;
	    /**
	     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
	     * that neither escape (\) nor any other character that could result in
	     * breaking out of a string parsing context are allowed;
	     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
	     *
	     * This code was taken from the Closure sanitization library.
	     */
	    function hasBalancedQuotes(value) {
	        var outsideSingle = true;
	        var outsideDouble = true;
	        for (var i = 0; i < value.length; i++) {
	            var c = value.charAt(i);
	            if (c === '\'' && outsideDouble) {
	                outsideSingle = !outsideSingle;
	            }
	            else if (c === '"' && outsideSingle) {
	                outsideDouble = !outsideDouble;
	            }
	        }
	        return outsideSingle && outsideDouble;
	    }
	    /**
	     * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
	     * value) and returns a value that is safe to use in a browser environment.
	     */
	    function sanitizeStyle(value) {
	        value = String(value).trim(); // Make sure it's actually a string.
	        if (!value)
	            return '';
	        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
	        // reasoning behind this.
	        var urlMatch = value.match(URL_RE);
	        if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
	            value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
	            return value; // Safe style values.
	        }
	        if (_angular_core.isDevMode()) {
	            getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
	        }
	        return 'unsafe';
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
	     * values to be safe to use in the different DOM contexts.
	     *
	     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
	     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
	     * the website.
	     *
	     * In specific situations, it might be necessary to disable sanitization, for example if the
	     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
	     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
	     * methods, and then binding to that value from the template.
	     *
	     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
	     * Cross Site Scripting (XSS) security bug!
	     *
	     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
	     * close as possible to the source of the value, to make it easy to verify no security bug is
	     * created by its use.
	     *
	     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
	     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
	     * code. The sanitizer leaves safe values intact.
	     *
	     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
	     * sanitization for the value passed in. Carefully check and audit all values and code paths going
	     * into this call. Make sure any user data is appropriately escaped for this security context.
	     * For more detail, see the [Security Guide](http://g.co/ng/security).
	     *
	     * @stable
	     */
	    var DomSanitizer = (function () {
	        function DomSanitizer() {
	        }
	        return DomSanitizer;
	    }());
	    var DomSanitizerImpl = (function (_super) {
	        __extends$8(DomSanitizerImpl, _super);
	        function DomSanitizerImpl() {
	            _super.apply(this, arguments);
	        }
	        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
	            if (value == null)
	                return null;
	            switch (ctx) {
	                case _angular_core.SecurityContext.NONE:
	                    return value;
	                case _angular_core.SecurityContext.HTML:
	                    if (value instanceof SafeHtmlImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'HTML');
	                    return sanitizeHtml(String(value));
	                case _angular_core.SecurityContext.STYLE:
	                    if (value instanceof SafeStyleImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Style');
	                    return sanitizeStyle(value);
	                case _angular_core.SecurityContext.SCRIPT:
	                    if (value instanceof SafeScriptImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Script');
	                    throw new Error('unsafe value used in a script context');
	                case _angular_core.SecurityContext.URL:
	                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
	                        // Allow resource URLs in URL contexts, they are strictly more trusted.
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'URL');
	                    return sanitizeUrl(String(value));
	                case _angular_core.SecurityContext.RESOURCE_URL:
	                    if (value instanceof SafeResourceUrlImpl) {
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'ResourceURL');
	                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
	                default:
	                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
	            }
	        };
	        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
	            if (value instanceof SafeValueImpl) {
	                throw new Error(("Required a safe " + expectedType + ", got a " + value.getTypeName() + " ") +
	                    "(see http://g.co/ng/security#xss)");
	            }
	        };
	        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
	            return new SafeResourceUrlImpl(value);
	        };
	        DomSanitizerImpl.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSanitizerImpl.ctorParameters = [];
	        return DomSanitizerImpl;
	    }(DomSanitizer));
	    var SafeValueImpl = (function () {
	        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
	            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
	            // empty
	        }
	        SafeValueImpl.prototype.toString = function () {
	            return ("SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity) +
	                " (see http://g.co/ng/security#xss)";
	        };
	        return SafeValueImpl;
	    }());
	    var SafeHtmlImpl = (function (_super) {
	        __extends$8(SafeHtmlImpl, _super);
	        function SafeHtmlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
	        return SafeHtmlImpl;
	    }(SafeValueImpl));
	    var SafeStyleImpl = (function (_super) {
	        __extends$8(SafeStyleImpl, _super);
	        function SafeStyleImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
	        return SafeStyleImpl;
	    }(SafeValueImpl));
	    var SafeScriptImpl = (function (_super) {
	        __extends$8(SafeScriptImpl, _super);
	        function SafeScriptImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
	        return SafeScriptImpl;
	    }(SafeValueImpl));
	    var SafeUrlImpl = (function (_super) {
	        __extends$8(SafeUrlImpl, _super);
	        function SafeUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
	        return SafeUrlImpl;
	    }(SafeValueImpl));
	    var SafeResourceUrlImpl = (function (_super) {
	        __extends$8(SafeResourceUrlImpl, _super);
	        function SafeResourceUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
	        return SafeResourceUrlImpl;
	    }(SafeValueImpl));
	
	    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
	        { provide: _angular_core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
	        { provide: _angular_common.PlatformLocation, useClass: BrowserPlatformLocation }
	    ];
	    /**
	     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
	     * Attacker-controlled data introduced by an unsanitized provider could expose your
	     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
	     * @experimental
	     */
	    var BROWSER_SANITIZATION_PROVIDERS = [
	        { provide: _angular_core.Sanitizer, useExisting: DomSanitizer },
	        { provide: DomSanitizer, useClass: DomSanitizerImpl },
	    ];
	    /**
	     * @stable
	     */
	    var platformBrowser = _angular_core.createPlatformFactory(_angular_core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
	    function initDomAdapter() {
	        BrowserDomAdapter.makeCurrent();
	        BrowserGetTestability.init();
	    }
	    function errorHandler() {
	        return new _angular_core.ErrorHandler();
	    }
	    function _document() {
	        return getDOM().defaultDoc();
	    }
	    function _resolveDefaultAnimationDriver() {
	        if (getDOM().supportsWebAnimation()) {
	            return new WebAnimationsDriver();
	        }
	        return AnimationDriver.NOOP;
	    }
	    /**
	     * The ng module for the browser.
	     *
	     * @stable
	     */
	    var BrowserModule = (function () {
	        function BrowserModule(parentModule) {
	            if (parentModule) {
	                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
	            }
	        }
	        BrowserModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            BROWSER_SANITIZATION_PROVIDERS, { provide: _angular_core.ErrorHandler, useFactory: errorHandler, deps: [] },
	                            { provide: DOCUMENT, useFactory: _document, deps: [] },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
	                            { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
	                            { provide: DomRootRenderer, useClass: DomRootRenderer_ },
	                            { provide: _angular_core.RootRenderer, useExisting: DomRootRenderer },
	                            { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
	                            { provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver }, DomSharedStylesHost,
	                            _angular_core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Title
	                        ],
	                        exports: [_angular_common.CommonModule, _angular_core.ApplicationModule]
	                    },] },
	        ];
	        /** @nocollapse */
	        BrowserModule.ctorParameters = [
	            { type: BrowserModule, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.SkipSelf },] },
	        ];
	        return BrowserModule;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * JS version of browser APIs. This library can only run in the browser.
	     */
	    var win = typeof window !== 'undefined' && window || {};
	
	    var ChangeDetectionPerfRecord = (function () {
	        function ChangeDetectionPerfRecord(msPerTick, numTicks) {
	            this.msPerTick = msPerTick;
	            this.numTicks = numTicks;
	        }
	        return ChangeDetectionPerfRecord;
	    }());
	    /**
	     * Entry point for all Angular debug tools. This object corresponds to the `ng`
	     * global variable accessible in the dev console.
	     */
	    var AngularTools = (function () {
	        function AngularTools(ref) {
	            this.profiler = new AngularProfiler(ref);
	        }
	        return AngularTools;
	    }());
	    /**
	     * Entry point for all Angular profiling-related debug tools. This object
	     * corresponds to the `ng.profiler` in the dev console.
	     */
	    var AngularProfiler = (function () {
	        function AngularProfiler(ref) {
	            this.appRef = ref.injector.get(_angular_core.ApplicationRef);
	        }
	        /**
	         * Exercises change detection in a loop and then prints the average amount of
	         * time in milliseconds how long a single round of change detection takes for
	         * the current state of the UI. It runs a minimum of 5 rounds for a minimum
	         * of 500 milliseconds.
	         *
	         * Optionally, a user may pass a `config` parameter containing a map of
	         * options. Supported options are:
	         *
	         * `record` (boolean) - causes the profiler to record a CPU profile while
	         * it exercises the change detector. Example:
	         *
	         * ```
	         * ng.profiler.timeChangeDetection({record: true})
	         * ```
	         */
	        AngularProfiler.prototype.timeChangeDetection = function (config) {
	            var record = config && config['record'];
	            var profileName = 'Change Detection';
	            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	            var isProfilerAvailable = isPresent(win.console.profile);
	            if (record && isProfilerAvailable) {
	                win.console.profile(profileName);
	            }
	            var start = getDOM().performanceNow();
	            var numTicks = 0;
	            while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
	                this.appRef.tick();
	                numTicks++;
	            }
	            var end = getDOM().performanceNow();
	            if (record && isProfilerAvailable) {
	                // need to cast to <any> because type checker thinks there's no argument
	                // while in fact there is:
	                //
	                // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	                win.console.profileEnd(profileName);
	            }
	            var msPerTick = (end - start) / numTicks;
	            win.console.log("ran " + numTicks + " change detection cycles");
	            win.console.log(msPerTick.toFixed(2) + " ms per check");
	            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	        };
	        return AngularProfiler;
	    }());
	
	    var context = global$1;
	    /**
	     * Enabled Angular 2 debug tools that are accessible via your browser's
	     * developer console.
	     *
	     * Usage:
	     *
	     * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
	     * 1. Type `ng.` (usually the console will show auto-complete suggestion)
	     * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
	     *    then hit Enter.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    function enableDebugTools(ref) {
	        Object.assign(context.ng, new AngularTools(ref));
	        return ref;
	    }
	    /**
	     * Disables Angular 2 tools.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    function disableDebugTools() {
	        delete context.ng.profiler;
	    }
	
	    /**
	     * Predicates for use with {@link DebugElement}'s query functions.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    var By = (function () {
	        function By() {
	        }
	        /**
	         * Match all elements.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
	         */
	        By.all = function () { return function (debugElement) { return true; }; };
	        /**
	         * Match elements by the given CSS selector.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
	         */
	        By.css = function (selector) {
	            return function (debugElement) {
	                return isPresent(debugElement.nativeElement) ?
	                    getDOM().elementMatches(debugElement.nativeElement, selector) :
	                    false;
	            };
	        };
	        /**
	         * Match elements that have the given directive present.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
	         */
	        By.directive = function (type) {
	            return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	        };
	        return By;
	    }());
	
	    var __platform_browser_private__ = {
	        BrowserPlatformLocation: BrowserPlatformLocation,
	        DomAdapter: DomAdapter,
	        BrowserDomAdapter: BrowserDomAdapter,
	        BrowserGetTestability: BrowserGetTestability,
	        getDOM: getDOM,
	        setRootDomAdapter: setRootDomAdapter,
	        DomRootRenderer_: DomRootRenderer_,
	        DomRootRenderer: DomRootRenderer,
	        NAMESPACE_URIS: NAMESPACE_URIS,
	        shimContentAttribute: shimContentAttribute,
	        shimHostAttribute: shimHostAttribute,
	        flattenStyles: flattenStyles,
	        splitNamespace: splitNamespace,
	        isNamespaced: isNamespaced,
	        DomSharedStylesHost: DomSharedStylesHost,
	        SharedStylesHost: SharedStylesHost,
	        ELEMENT_PROBE_PROVIDERS: ELEMENT_PROBE_PROVIDERS,
	        DomEventsPlugin: DomEventsPlugin,
	        KeyEventsPlugin: KeyEventsPlugin,
	        HammerGesturesPlugin: HammerGesturesPlugin,
	        initDomAdapter: initDomAdapter,
	        INTERNAL_BROWSER_PLATFORM_PROVIDERS: INTERNAL_BROWSER_PLATFORM_PROVIDERS,
	        BROWSER_SANITIZATION_PROVIDERS: BROWSER_SANITIZATION_PROVIDERS,
	        WebAnimationsDriver: WebAnimationsDriver
	    };
	
	    exports.BrowserModule = BrowserModule;
	    exports.platformBrowser = platformBrowser;
	    exports.Title = Title;
	    exports.disableDebugTools = disableDebugTools;
	    exports.enableDebugTools = enableDebugTools;
	    exports.AnimationDriver = AnimationDriver;
	    exports.By = By;
	    exports.NgProbeToken = NgProbeToken;
	    exports.DOCUMENT = DOCUMENT;
	    exports.EVENT_MANAGER_PLUGINS = EVENT_MANAGER_PLUGINS;
	    exports.EventManager = EventManager;
	    exports.HAMMER_GESTURE_CONFIG = HAMMER_GESTURE_CONFIG;
	    exports.HammerGestureConfig = HammerGestureConfig;
	    exports.DomSanitizer = DomSanitizer;
	    exports.__platform_browser_private__ = __platform_browser_private__;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.2.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.common = global.ng.common || {}),global.ng.core));
	}(this, function (exports,_angular_core) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * This class should not be used directly by an application developer. Instead, use
	     * {@link Location}.
	     *
	     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	     * agnostic.
	     * This means that we can have different implementation of `PlatformLocation` for the different
	     * platforms
	     * that angular supports. For example, the default `PlatformLocation` is {@link
	     * BrowserPlatformLocation},
	     * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	     *
	     * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	     * when
	     * they need to interact with the DOM apis like pushState, popState, etc...
	     *
	     * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	     * by
	     * the {@link Router} in order to navigate between routes. Since all interactions between {@link
	     * Router} /
	     * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	     * class
	     * they are all platform independent.
	     *
	     * @stable
	     */
	    var PlatformLocation = (function () {
	        function PlatformLocation() {
	        }
	        Object.defineProperty(PlatformLocation.prototype, "pathname", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformLocation.prototype, "search", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformLocation.prototype, "hash", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return PlatformLocation;
	    }());
	
	    /**
	     * `LocationStrategy` is responsible for representing and reading route state
	     * from the browser's URL. Angular provides two strategies:
	     * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	     *
	     * This is used under the hood of the {@link Location} service.
	     *
	     * Applications should use the {@link Router} or {@link Location} services to
	     * interact with application route state.
	     *
	     * For instance, {@link HashLocationStrategy} produces URLs like
	     * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	     * `http://example.com/foo` as an equivalent URL.
	     *
	     * See these two classes for more.
	     *
	     * @stable
	     */
	    var LocationStrategy = (function () {
	        function LocationStrategy() {
	        }
	        return LocationStrategy;
	    }());
	    /**
	     * The `APP_BASE_HREF` token represents the base href to be used with the
	     * {@link PathLocationStrategy}.
	     *
	     * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	     * representing the URL prefix that should be preserved when generating and recognizing
	     * URLs.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {Component, NgModule} from '@angular/core';
	     * import {APP_BASE_HREF} from '@angular/common';
	     *
	     * @NgModule({
	     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
	     * })
	     * class AppModule {}
	     * ```
	     *
	     * @stable
	     */
	    var APP_BASE_HREF = new _angular_core.OpaqueToken('appBaseHref');
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var _global = globalScope;
	    function getTypeNameForDebugging(type) {
	        return type['name'] || typeof type;
	    }
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    _global.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    function isDate(obj) {
	        return obj instanceof Date && !isNaN(obj.valueOf());
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token == null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
	    }
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        return NumberWrapper;
	    }());
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    var _symbolIterator = null;
	    function getSymbolIterator() {
	        if (!_symbolIterator) {
	            if (globalScope.Symbol && Symbol.iterator) {
	                _symbolIterator = Symbol.iterator;
	            }
	            else {
	                // es6-shim specific logic
	                var keys = Object.getOwnPropertyNames(Map.prototype);
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (key !== 'entries' && key !== 'size' &&
	                        Map.prototype[key] === Map.prototype['entries']) {
	                        _symbolIterator = key;
	                    }
	                }
	            }
	        }
	        return _symbolIterator;
	    }
	
	    /**
	     * `Location` is a service that applications can use to interact with a browser's URL.
	     * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	     * to the URL's path or the URL's hash segment.
	     *
	     * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	     * `Location` only if you need to interact with or create normalized URLs outside of
	     * routing.
	     *
	     * `Location` is responsible for normalizing the URL against the application's base href.
	     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	     * trailing slash:
	     * - `/my/app/user/123` is normalized
	     * - `my/app/user/123` **is not** normalized
	     * - `/my/app/user/123/` **is not** normalized
	     *
	     * ### Example
	     *
	     * ```
	     * import {Component} from '@angular/core';
	     * import {Location} from '@angular/common';
	     *
	     * @Component({selector: 'app-component'})
	     * class AppCmp {
	     *   constructor(location: Location) {
	     *     location.go('/foo');
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var Location = (function () {
	        function Location(platformStrategy) {
	            var _this = this;
	            /** @internal */
	            this._subject = new _angular_core.EventEmitter();
	            this._platformStrategy = platformStrategy;
	            var browserBaseHref = this._platformStrategy.getBaseHref();
	            this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
	            this._platformStrategy.onPopState(function (ev) {
	                _this._subject.emit({
	                    'url': _this.path(true),
	                    'pop': true,
	                    'type': ev.type,
	                });
	            });
	        }
	        /**
	         * Returns the normalized URL path.
	         */
	        // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
	        // removed.
	        Location.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            return this.normalize(this._platformStrategy.path(includeHash));
	        };
	        /**
	         * Normalizes the given path and compares to the current normalized path.
	         */
	        Location.prototype.isCurrentPathEqualTo = function (path, query) {
	            if (query === void 0) { query = ''; }
	            return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
	        };
	        /**
	         * Given a string representing a URL, returns the normalized URL path without leading or
	         * trailing slashes.
	         */
	        Location.prototype.normalize = function (url) {
	            return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
	        };
	        /**
	         * Given a string representing a URL, returns the platform-specific external URL path.
	         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	         * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	         */
	        Location.prototype.prepareExternalUrl = function (url) {
	            if (url.length > 0 && !url.startsWith('/')) {
	                url = '/' + url;
	            }
	            return this._platformStrategy.prepareExternalUrl(url);
	        };
	        // TODO: rename this method to pushState
	        /**
	         * Changes the browsers URL to the normalized version of the given URL, and pushes a
	         * new item onto the platform's history.
	         */
	        Location.prototype.go = function (path, query) {
	            if (query === void 0) { query = ''; }
	            this._platformStrategy.pushState(null, '', path, query);
	        };
	        /**
	         * Changes the browsers URL to the normalized version of the given URL, and replaces
	         * the top item on the platform's history stack.
	         */
	        Location.prototype.replaceState = function (path, query) {
	            if (query === void 0) { query = ''; }
	            this._platformStrategy.replaceState(null, '', path, query);
	        };
	        /**
	         * Navigates forward in the platform's history.
	         */
	        Location.prototype.forward = function () { this._platformStrategy.forward(); };
	        /**
	         * Navigates back in the platform's history.
	         */
	        Location.prototype.back = function () { this._platformStrategy.back(); };
	        /**
	         * Subscribe to the platform's `popState` events.
	         */
	        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	            if (onThrow === void 0) { onThrow = null; }
	            if (onReturn === void 0) { onReturn = null; }
	            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
	        };
	        /**
	         * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
	         * is.
	         */
	        Location.normalizeQueryParams = function (params) {
	            return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	        };
	        /**
	         * Given 2 parts of a url, join them with a slash if needed.
	         */
	        Location.joinWithSlash = function (start, end) {
	            if (start.length == 0) {
	                return end;
	            }
	            if (end.length == 0) {
	                return start;
	            }
	            var slashes = 0;
	            if (start.endsWith('/')) {
	                slashes++;
	            }
	            if (end.startsWith('/')) {
	                slashes++;
	            }
	            if (slashes == 2) {
	                return start + end.substring(1);
	            }
	            if (slashes == 1) {
	                return start + end;
	            }
	            return start + '/' + end;
	        };
	        /**
	         * If url has a trailing slash, remove it, otherwise return url as is.
	         */
	        Location.stripTrailingSlash = function (url) {
	            if (/\/$/g.test(url)) {
	                url = url.substring(0, url.length - 1);
	            }
	            return url;
	        };
	        Location.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Location.ctorParameters = [
	            { type: LocationStrategy, },
	        ];
	        return Location;
	    }());
	    function _stripBaseHref(baseHref, url) {
	        if (baseHref.length > 0 && url.startsWith(baseHref)) {
	            return url.substring(baseHref.length);
	        }
	        return url;
	    }
	    function _stripIndexHtml(url) {
	        if (/\/index.html$/g.test(url)) {
	            // '/index.html'.length == 11
	            return url.substring(0, url.length - 11);
	        }
	        return url;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	     * {@link Location} service to represent its state in the
	     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	     * of the browser's URL.
	     *
	     * For instance, if you call `location.go('/foo')`, the browser's URL will become
	     * `example.com#/foo`.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Component, NgModule} from '@angular/core';
	     * import {
	     *   LocationStrategy,
	     *   HashLocationStrategy
	     * } from '@angular/common';
	     *
	     * @NgModule({
	     *   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
	     * })
	     * class AppModule {}
	     * ```
	     *
	     * @stable
	     */
	    var HashLocationStrategy = (function (_super) {
	        __extends(HashLocationStrategy, _super);
	        function HashLocationStrategy(_platformLocation, _baseHref) {
	            _super.call(this);
	            this._platformLocation = _platformLocation;
	            this._baseHref = '';
	            if (isPresent(_baseHref)) {
	                this._baseHref = _baseHref;
	            }
	        }
	        HashLocationStrategy.prototype.onPopState = function (fn) {
	            this._platformLocation.onPopState(fn);
	            this._platformLocation.onHashChange(fn);
	        };
	        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	        HashLocationStrategy.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            // the hash value is always prefixed with a `#`
	            // and if it is empty then it will stay empty
	            var path = this._platformLocation.hash;
	            if (!isPresent(path))
	                path = '#';
	            return path.length > 0 ? path.substring(1) : path;
	        };
	        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	            var url = Location.joinWithSlash(this._baseHref, internal);
	            return url.length > 0 ? ('#' + url) : url;
	        };
	        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
	            if (url.length == 0) {
	                url = this._platformLocation.pathname;
	            }
	            this._platformLocation.pushState(state, title, url);
	        };
	        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
	            if (url.length == 0) {
	                url = this._platformLocation.pathname;
	            }
	            this._platformLocation.replaceState(state, title, url);
	        };
	        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	        HashLocationStrategy.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HashLocationStrategy.ctorParameters = [
	            { type: PlatformLocation, },
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [APP_BASE_HREF,] },] },
	        ];
	        return HashLocationStrategy;
	    }(LocationStrategy));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	     * {@link Location} service to represent its state in the
	     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	     * browser's URL.
	     *
	     * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	     * provided in {@link ROUTER_PROVIDERS}.
	     *
	     * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
	     * or add a base element to the document. This URL prefix that will be preserved
	     * when generating and recognizing URLs.
	     *
	     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	     * `location.go('/foo')`, the browser's URL will become
	     * `example.com/my/app/foo`.
	     *
	     * Similarly, if you add `<base href='/my/app'/>` to the document and call
	     * `location.go('/foo')`, the browser's URL will become
	     * `example.com/my/app/foo`.
	     *
	     * @stable
	     */
	    var PathLocationStrategy = (function (_super) {
	        __extends$1(PathLocationStrategy, _super);
	        function PathLocationStrategy(_platformLocation, href) {
	            _super.call(this);
	            this._platformLocation = _platformLocation;
	            if (isBlank(href)) {
	                href = this._platformLocation.getBaseHrefFromDOM();
	            }
	            if (isBlank(href)) {
	                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	            }
	            this._baseHref = href;
	        }
	        PathLocationStrategy.prototype.onPopState = function (fn) {
	            this._platformLocation.onPopState(fn);
	            this._platformLocation.onHashChange(fn);
	        };
	        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	            return Location.joinWithSlash(this._baseHref, internal);
	        };
	        PathLocationStrategy.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            var pathname = this._platformLocation.pathname +
	                Location.normalizeQueryParams(this._platformLocation.search);
	            var hash = this._platformLocation.hash;
	            return hash && includeHash ? "" + pathname + hash : pathname;
	        };
	        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
	            this._platformLocation.pushState(state, title, externalUrl);
	        };
	        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
	            this._platformLocation.replaceState(state, title, externalUrl);
	        };
	        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	        PathLocationStrategy.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        PathLocationStrategy.ctorParameters = [
	            { type: PlatformLocation, },
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [APP_BASE_HREF,] },] },
	        ];
	        return PathLocationStrategy;
	    }(LocationStrategy));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @experimental
	     */
	    var NgLocalization = (function () {
	        function NgLocalization() {
	        }
	        return NgLocalization;
	    }());
	    /**
	     * Returns the plural category for a given value.
	     * - "=value" when the case exists,
	     * - the plural category otherwise
	     *
	     * @internal
	     */
	    function getPluralCategory(value, cases, ngLocalization) {
	        var nbCase = "=" + value;
	        return cases.indexOf(nbCase) > -1 ? nbCase : ngLocalization.getPluralCategory(value);
	    }
	    /**
	     * Returns the plural case based on the locale
	     *
	     * @experimental
	     */
	    var NgLocaleLocalization = (function (_super) {
	        __extends$2(NgLocaleLocalization, _super);
	        function NgLocaleLocalization(_locale) {
	            _super.call(this);
	            this._locale = _locale;
	        }
	        NgLocaleLocalization.prototype.getPluralCategory = function (value) {
	            var plural = getPluralCase(this._locale, value);
	            switch (plural) {
	                case Plural.Zero:
	                    return 'zero';
	                case Plural.One:
	                    return 'one';
	                case Plural.Two:
	                    return 'two';
	                case Plural.Few:
	                    return 'few';
	                case Plural.Many:
	                    return 'many';
	                default:
	                    return 'other';
	            }
	        };
	        NgLocaleLocalization.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        NgLocaleLocalization.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return NgLocaleLocalization;
	    }(NgLocalization));
	    // This is generated code DO NOT MODIFY
	    // see angular2/script/cldr/gen_plural_rules.js
	    /** @experimental */
	    var Plural;
	    (function (Plural) {
	        Plural[Plural["Zero"] = 0] = "Zero";
	        Plural[Plural["One"] = 1] = "One";
	        Plural[Plural["Two"] = 2] = "Two";
	        Plural[Plural["Few"] = 3] = "Few";
	        Plural[Plural["Many"] = 4] = "Many";
	        Plural[Plural["Other"] = 5] = "Other";
	    })(Plural || (Plural = {}));
	    /**
	     * Returns the plural case based on the locale
	     *
	     * @experimental
	     */
	    function getPluralCase(locale, nLike) {
	        // TODO(vicb): lazy compute
	        if (typeof nLike === 'string') {
	            nLike = parseInt(nLike, 10);
	        }
	        var n = nLike;
	        var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
	        var i = Math.floor(Math.abs(n));
	        var v = nDecimal.length;
	        var f = parseInt(nDecimal, 10);
	        var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
	        var lang = locale.split('-')[0].toLowerCase();
	        switch (lang) {
	            case 'af':
	            case 'asa':
	            case 'az':
	            case 'bem':
	            case 'bez':
	            case 'bg':
	            case 'brx':
	            case 'ce':
	            case 'cgg':
	            case 'chr':
	            case 'ckb':
	            case 'ee':
	            case 'el':
	            case 'eo':
	            case 'es':
	            case 'eu':
	            case 'fo':
	            case 'fur':
	            case 'gsw':
	            case 'ha':
	            case 'haw':
	            case 'hu':
	            case 'jgo':
	            case 'jmc':
	            case 'ka':
	            case 'kk':
	            case 'kkj':
	            case 'kl':
	            case 'ks':
	            case 'ksb':
	            case 'ky':
	            case 'lb':
	            case 'lg':
	            case 'mas':
	            case 'mgo':
	            case 'ml':
	            case 'mn':
	            case 'nb':
	            case 'nd':
	            case 'ne':
	            case 'nn':
	            case 'nnh':
	            case 'nyn':
	            case 'om':
	            case 'or':
	            case 'os':
	            case 'ps':
	            case 'rm':
	            case 'rof':
	            case 'rwk':
	            case 'saq':
	            case 'seh':
	            case 'sn':
	            case 'so':
	            case 'sq':
	            case 'ta':
	            case 'te':
	            case 'teo':
	            case 'tk':
	            case 'tr':
	            case 'ug':
	            case 'uz':
	            case 'vo':
	            case 'vun':
	            case 'wae':
	            case 'xog':
	                if (n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'agq':
	            case 'bas':
	            case 'cu':
	            case 'dav':
	            case 'dje':
	            case 'dua':
	            case 'dyo':
	            case 'ebu':
	            case 'ewo':
	            case 'guz':
	            case 'kam':
	            case 'khq':
	            case 'ki':
	            case 'kln':
	            case 'kok':
	            case 'ksf':
	            case 'lrc':
	            case 'lu':
	            case 'luo':
	            case 'luy':
	            case 'mer':
	            case 'mfe':
	            case 'mgh':
	            case 'mua':
	            case 'mzn':
	            case 'nmg':
	            case 'nus':
	            case 'qu':
	            case 'rn':
	            case 'rw':
	            case 'sbp':
	            case 'twq':
	            case 'vai':
	            case 'yav':
	            case 'yue':
	            case 'zgh':
	            case 'ak':
	            case 'ln':
	            case 'mg':
	            case 'pa':
	            case 'ti':
	                if (n === Math.floor(n) && n >= 0 && n <= 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'am':
	            case 'as':
	            case 'bn':
	            case 'fa':
	            case 'gu':
	            case 'hi':
	            case 'kn':
	            case 'mr':
	            case 'zu':
	                if (i === 0 || n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'ar':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
	                    return Plural.Few;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'ast':
	            case 'ca':
	            case 'de':
	            case 'en':
	            case 'et':
	            case 'fi':
	            case 'fy':
	            case 'gl':
	            case 'it':
	            case 'nl':
	            case 'sv':
	            case 'sw':
	            case 'ur':
	            case 'yi':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                return Plural.Other;
	            case 'be':
	                if (n % 10 === 1 && !(n % 100 === 11))
	                    return Plural.One;
	                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
	                    !(n % 100 >= 12 && n % 100 <= 14))
	                    return Plural.Few;
	                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
	                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'br':
	                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
	                    return Plural.One;
	                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
	                    return Plural.Two;
	                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
	                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
	                        n % 100 >= 90 && n % 100 <= 99))
	                    return Plural.Few;
	                if (!(n === 0) && n % 1e6 === 0)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'bs':
	            case 'hr':
	            case 'sr':
	                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14) ||
	                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
	                        !(f % 100 >= 12 && f % 100 <= 14))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'cs':
	            case 'sk':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
	                    return Plural.Few;
	                if (!(v === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'cy':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n === 3)
	                    return Plural.Few;
	                if (n === 6)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'da':
	                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
	                    return Plural.One;
	                return Plural.Other;
	            case 'dsb':
	            case 'hsb':
	                if (v === 0 && i % 100 === 1 || f % 100 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 100 === 2 || f % 100 === 2)
	                    return Plural.Two;
	                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
	                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'ff':
	            case 'fr':
	            case 'hy':
	            case 'kab':
	                if (i === 0 || i === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'fil':
	                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
	                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
	                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ga':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n === Math.floor(n) && n >= 3 && n <= 6)
	                    return Plural.Few;
	                if (n === Math.floor(n) && n >= 7 && n <= 10)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'gd':
	                if (n === 1 || n === 11)
	                    return Plural.One;
	                if (n === 2 || n === 12)
	                    return Plural.Two;
	                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'gv':
	                if (v === 0 && i % 10 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 10 === 2)
	                    return Plural.Two;
	                if (v === 0 &&
	                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
	                    return Plural.Few;
	                if (!(v === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'he':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (i === 2 && v === 0)
	                    return Plural.Two;
	                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'is':
	                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ksh':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'kw':
	            case 'naq':
	            case 'se':
	            case 'smn':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                return Plural.Other;
	            case 'lag':
	                if (n === 0)
	                    return Plural.Zero;
	                if ((i === 0 || i === 1) && !(n === 0))
	                    return Plural.One;
	                return Plural.Other;
	            case 'lt':
	                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
	                    return Plural.One;
	                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
	                    !(n % 100 >= 11 && n % 100 <= 19))
	                    return Plural.Few;
	                if (!(f === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'lv':
	            case 'prg':
	                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
	                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
	                    return Plural.Zero;
	                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
	                    !(v === 2) && f % 10 === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'mk':
	                if (v === 0 && i % 10 === 1 || f % 10 === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'mt':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
	                    return Plural.Few;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'pl':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14))
	                    return Plural.Few;
	                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
	                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
	                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'pt':
	                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ro':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (!(v === 0) || n === 0 ||
	                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'ru':
	            case 'uk':
	                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14))
	                    return Plural.Few;
	                if (v === 0 && i % 10 === 0 ||
	                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
	                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'shi':
	                if (i === 0 || n === 1)
	                    return Plural.One;
	                if (n === Math.floor(n) && n >= 2 && n <= 10)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'si':
	                if (n === 0 || n === 1 || i === 0 && f === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'sl':
	                if (v === 0 && i % 100 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 100 === 2)
	                    return Plural.Two;
	                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'tzm':
	                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
	                    return Plural.One;
	                return Plural.Other;
	            default:
	                return Plural.Other;
	        }
	    }
	
	    function isListLikeIterable(obj) {
	        if (!isJsObject(obj))
	            return false;
	        return Array.isArray(obj) ||
	            (!(obj instanceof Map) &&
	                getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	    }
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds and removes CSS classes on an HTML element.
	     *
	     * @howToUse
	     * ```
	     *     <some-element [ngClass]="'first second'">...</some-element>
	     *
	     *     <some-element [ngClass]="['first', 'second']">...</some-element>
	     *
	     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
	     *
	     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
	     * ```
	     *
	     * @description
	     *
	     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
	     * - `string` - the CSS classes listed in the string (space delimited) are added,
	     * - `Array` - the CSS classes declared as Array elements are added,
	     * - `Object` - keys are CSS classes that get added when the expression given in the value
	     *              evaluates to a truthy value, otherwise they are removed.
	     *
	     * @stable
	     */
	    var NgClass = (function () {
	        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
	            this._iterableDiffers = _iterableDiffers;
	            this._keyValueDiffers = _keyValueDiffers;
	            this._ngEl = _ngEl;
	            this._renderer = _renderer;
	            this._initialClasses = [];
	        }
	        Object.defineProperty(NgClass.prototype, "klass", {
	            set: function (v) {
	                this._applyInitialClasses(true);
	                this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
	                this._applyInitialClasses(false);
	                this._applyClasses(this._rawClass, false);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgClass.prototype, "ngClass", {
	            set: function (v) {
	                this._cleanupClasses(this._rawClass);
	                this._iterableDiffer = null;
	                this._keyValueDiffer = null;
	                this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
	                if (this._rawClass) {
	                    if (isListLikeIterable(this._rawClass)) {
	                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create(null);
	                    }
	                    else {
	                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create(null);
	                    }
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgClass.prototype.ngDoCheck = function () {
	            if (this._iterableDiffer) {
	                var changes = this._iterableDiffer.diff(this._rawClass);
	                if (changes) {
	                    this._applyIterableChanges(changes);
	                }
	            }
	            else if (this._keyValueDiffer) {
	                var changes = this._keyValueDiffer.diff(this._rawClass);
	                if (changes) {
	                    this._applyKeyValueChanges(changes);
	                }
	            }
	        };
	        NgClass.prototype._cleanupClasses = function (rawClassVal) {
	            this._applyClasses(rawClassVal, true);
	            this._applyInitialClasses(false);
	        };
	        NgClass.prototype._applyKeyValueChanges = function (changes) {
	            var _this = this;
	            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
	            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
	            changes.forEachRemovedItem(function (record) {
	                if (record.previousValue) {
	                    _this._toggleClass(record.key, false);
	                }
	            });
	        };
	        NgClass.prototype._applyIterableChanges = function (changes) {
	            var _this = this;
	            changes.forEachAddedItem(function (record) {
	                if (typeof record.item === 'string') {
	                    _this._toggleClass(record.item, true);
	                }
	                else {
	                    throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + stringify(record.item));
	                }
	            });
	            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
	        };
	        NgClass.prototype._applyInitialClasses = function (isCleanup) {
	            var _this = this;
	            this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
	        };
	        NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
	            var _this = this;
	            if (rawClassVal) {
	                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
	                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
	                }
	                else {
	                    Object.keys(rawClassVal).forEach(function (klass) {
	                        if (isPresent(rawClassVal[klass]))
	                            _this._toggleClass(klass, !isCleanup);
	                    });
	                }
	            }
	        };
	        NgClass.prototype._toggleClass = function (klass, enabled) {
	            var _this = this;
	            klass = klass.trim();
	            if (klass) {
	                klass.split(/\s+/g).forEach(function (klass) { _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, enabled); });
	            }
	        };
	        NgClass.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngClass]' },] },
	        ];
	        /** @nocollapse */
	        NgClass.ctorParameters = [
	            { type: _angular_core.IterableDiffers, },
	            { type: _angular_core.KeyValueDiffers, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        NgClass.propDecorators = {
	            'klass': [{ type: _angular_core.Input, args: ['class',] },],
	            'ngClass': [{ type: _angular_core.Input },],
	        };
	        return NgClass;
	    }());
	
	    var NgForRow = (function () {
	        function NgForRow($implicit, index, count) {
	            this.$implicit = $implicit;
	            this.index = index;
	            this.count = count;
	        }
	        Object.defineProperty(NgForRow.prototype, "first", {
	            get: function () { return this.index === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "last", {
	            get: function () { return this.index === this.count - 1; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "even", {
	            get: function () { return this.index % 2 === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "odd", {
	            get: function () { return !this.even; },
	            enumerable: true,
	            configurable: true
	        });
	        return NgForRow;
	    }());
	    /**
	     * The `NgFor` directive instantiates a template once per item from an iterable. The context for
	     * each instantiated template inherits from the outer context with the given loop variable set
	     * to the current item from the iterable.
	     *
	     * ### Local Variables
	     *
	     * `NgFor` provides several exported values that can be aliased to local variables:
	     *
	     * * `index` will be set to the current loop iteration for each template context.
	     * * `first` will be set to a boolean value indicating whether the item is the first one in the
	     *   iteration.
	     * * `last` will be set to a boolean value indicating whether the item is the last one in the
	     *   iteration.
	     * * `even` will be set to a boolean value indicating whether this item has an even index.
	     * * `odd` will be set to a boolean value indicating whether this item has an odd index.
	     *
	     * ### Change Propagation
	     *
	     * When the contents of the iterator changes, `NgFor` makes the corresponding changes to the DOM:
	     *
	     * * When an item is added, a new instance of the template is added to the DOM.
	     * * When an item is removed, its template instance is removed from the DOM.
	     * * When items are reordered, their respective templates are reordered in the DOM.
	     * * Otherwise, the DOM element for that item will remain the same.
	     *
	     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
	     * those changes in the DOM. This has important implications for animations and any stateful
	     * controls
	     * (such as `<input>` elements which accept user input) that are present. Inserted rows can be
	     * animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state such
	     * as user input.
	     *
	     * It is possible for the identities of elements in the iterator to change while the data does not.
	     * This can happen, for example, if the iterator produced from an RPC to the server, and that
	     * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
	     * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
	     * elements were deleted and all new elements inserted). This is an expensive operation and should
	     * be avoided if possible.
	     *
	     * To customize the default tracking algorithm, `NgFor` supports `trackBy` option.
	     * `trackBy` takes a function which has two arguments: `index` and `item`.
	     * If `trackBy` is given, Angular tracks changes by the return value of the function.
	     *
	     * ### Syntax
	     *
	     * - `<li *ngFor="let item of items; let i = index; trackBy: trackByFn">...</li>`
	     * - `<li template="ngFor let item of items; let i = index; trackBy: trackByFn">...</li>`
	     *
	     * With `<template>` element:
	     *
	     * ```
	     * <template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
	     *   <li>...</li>
	     * </template>
	     * ```
	     *
	     * ### Example
	     *
	     * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
	     * example.
	     *
	     * @stable
	     */
	    var NgFor = (function () {
	        function NgFor(_viewContainer, _template, _differs, _cdr) {
	            this._viewContainer = _viewContainer;
	            this._template = _template;
	            this._differs = _differs;
	            this._cdr = _cdr;
	            this._differ = null;
	        }
	        Object.defineProperty(NgFor.prototype, "ngForTemplate", {
	            set: function (value) {
	                if (value) {
	                    this._template = value;
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgFor.prototype.ngOnChanges = function (changes) {
	            if ('ngForOf' in changes) {
	                // React on ngForOf changes only once all inputs have been initialized
	                var value = changes['ngForOf'].currentValue;
	                if (!this._differ && value) {
	                    try {
	                        this._differ = this._differs.find(value).create(this._cdr, this.ngForTrackBy);
	                    }
	                    catch (e) {
	                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
	                    }
	                }
	            }
	        };
	        NgFor.prototype.ngDoCheck = function () {
	            if (this._differ) {
	                var changes = this._differ.diff(this.ngForOf);
	                if (changes)
	                    this._applyChanges(changes);
	            }
	        };
	        NgFor.prototype._applyChanges = function (changes) {
	            var _this = this;
	            var insertTuples = [];
	            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
	                if (item.previousIndex == null) {
	                    var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForRow(null, null, null), currentIndex);
	                    var tuple = new RecordViewTuple(item, view);
	                    insertTuples.push(tuple);
	                }
	                else if (currentIndex == null) {
	                    _this._viewContainer.remove(adjustedPreviousIndex);
	                }
	                else {
	                    var view = _this._viewContainer.get(adjustedPreviousIndex);
	                    _this._viewContainer.move(view, currentIndex);
	                    var tuple = new RecordViewTuple(item, view);
	                    insertTuples.push(tuple);
	                }
	            });
	            for (var i = 0; i < insertTuples.length; i++) {
	                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
	            }
	            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
	                var viewRef = this._viewContainer.get(i);
	                viewRef.context.index = i;
	                viewRef.context.count = ilen;
	            }
	            changes.forEachIdentityChange(function (record) {
	                var viewRef = _this._viewContainer.get(record.currentIndex);
	                viewRef.context.$implicit = record.item;
	            });
	        };
	        NgFor.prototype._perViewChange = function (view, record) {
	            view.context.$implicit = record.item;
	        };
	        NgFor.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngFor][ngForOf]' },] },
	        ];
	        /** @nocollapse */
	        NgFor.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: _angular_core.IterableDiffers, },
	            { type: _angular_core.ChangeDetectorRef, },
	        ];
	        NgFor.propDecorators = {
	            'ngForOf': [{ type: _angular_core.Input },],
	            'ngForTrackBy': [{ type: _angular_core.Input },],
	            'ngForTemplate': [{ type: _angular_core.Input },],
	        };
	        return NgFor;
	    }());
	    var RecordViewTuple = (function () {
	        function RecordViewTuple(record, view) {
	            this.record = record;
	            this.view = view;
	        }
	        return RecordViewTuple;
	    }());
	
	    /**
	     * Removes or recreates a portion of the DOM tree based on an {expression}.
	     *
	     * If the expression assigned to `ngIf` evaluates to a falsy value then the element
	     * is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/fe0kgemFBtmQOY31b4tw?p=preview)):
	     *
	     * ```
	     * <div *ngIf="errorCount > 0" class="error">
	     *   <!-- Error message displayed when the errorCount property in the current context is greater
	     * than 0. -->
	     *   {{errorCount}} errors detected
	     * </div>
	     * ```
	     *
	     * ### Syntax
	     *
	     * - `<div *ngIf="condition">...</div>`
	     * - `<div template="ngIf condition">...</div>`
	     * - `<template [ngIf]="condition"><div>...</div></template>`
	     *
	     * @stable
	     */
	    var NgIf = (function () {
	        function NgIf(_viewContainer, _template) {
	            this._viewContainer = _viewContainer;
	            this._template = _template;
	            this._hasView = false;
	        }
	        Object.defineProperty(NgIf.prototype, "ngIf", {
	            set: function (condition) {
	                if (condition && !this._hasView) {
	                    this._hasView = true;
	                    this._viewContainer.createEmbeddedView(this._template);
	                }
	                else if (!condition && this._hasView) {
	                    this._hasView = false;
	                    this._viewContainer.clear();
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgIf.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngIf]' },] },
	        ];
	        /** @nocollapse */
	        NgIf.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	        ];
	        NgIf.propDecorators = {
	            'ngIf': [{ type: _angular_core.Input },],
	        };
	        return NgIf;
	    }());
	
	    var SwitchView = (function () {
	        function SwitchView(_viewContainerRef, _templateRef) {
	            this._viewContainerRef = _viewContainerRef;
	            this._templateRef = _templateRef;
	            this._created = false;
	        }
	        SwitchView.prototype.create = function () {
	            this._created = true;
	            this._viewContainerRef.createEmbeddedView(this._templateRef);
	        };
	        SwitchView.prototype.destroy = function () {
	            this._created = false;
	            this._viewContainerRef.clear();
	        };
	        SwitchView.prototype.enforceState = function (created) {
	            if (created && !this._created) {
	                this.create();
	            }
	            else if (!created && this._created) {
	                this.destroy();
	            }
	        };
	        return SwitchView;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
	     *             expression.
	     *
	     * @howToUse
	     * ```
	     *     <container-element [ngSwitch]="switch_expression">
	     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
	     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
	     *       <ng-container *ngSwitchCase="match_expression_3">
	     *         <!-- use a ng-container to group multiple root nodes -->
	     *         <inner-element></inner-element>
	     *         <inner-other-element></inner-other-element>
	     *       </ng-container>
	     *       <some-element *ngSwitchDefault>...</some-element>
	     *     </container-element>
	     * ```
	     * @description
	     *
	     * `NgSwitch` stamps out nested views when their match expression value matches the value of the
	     * switch expression.
	     *
	     * In other words:
	     * - you define a container element (where you place the directive with a switch expression on the
	     * `[ngSwitch]="..."` attribute)
	     * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
	     * root elements.
	     *
	     * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
	     * be preserved at the location.
	     *
	     * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
	     * expression is evaluated.
	     * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
	     * stamped out.
	     *
	     * @stable
	     */
	    var NgSwitch = (function () {
	        function NgSwitch() {
	            this._defaultUsed = false;
	            this._caseCount = 0;
	            this._lastCaseCheckIndex = 0;
	            this._lastCasesMatched = false;
	        }
	        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
	            set: function (newValue) {
	                this._ngSwitch = newValue;
	                if (this._caseCount === 0) {
	                    this._updateDefaultCases(true);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSwitch.prototype._addCase = function () { return this._caseCount++; };
	        /** @internal */
	        NgSwitch.prototype._addDefault = function (view) {
	            if (!this._defaultViews) {
	                this._defaultViews = [];
	            }
	            this._defaultViews.push(view);
	        };
	        /** @internal */
	        NgSwitch.prototype._matchCase = function (value) {
	            var matched = value == this._ngSwitch;
	            this._lastCasesMatched = this._lastCasesMatched || matched;
	            this._lastCaseCheckIndex++;
	            if (this._lastCaseCheckIndex === this._caseCount) {
	                this._updateDefaultCases(!this._lastCasesMatched);
	                this._lastCaseCheckIndex = 0;
	                this._lastCasesMatched = false;
	            }
	            return matched;
	        };
	        NgSwitch.prototype._updateDefaultCases = function (useDefault) {
	            if (this._defaultViews && useDefault !== this._defaultUsed) {
	                this._defaultUsed = useDefault;
	                for (var i = 0; i < this._defaultViews.length; i++) {
	                    var defaultView = this._defaultViews[i];
	                    defaultView.enforceState(useDefault);
	                }
	            }
	        };
	        NgSwitch.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitch]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitch.ctorParameters = [];
	        NgSwitch.propDecorators = {
	            'ngSwitch': [{ type: _angular_core.Input },],
	        };
	        return NgSwitch;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Creates a view that will be added/removed from the parent {@link NgSwitch} when the
	     *             given expression evaluate to respectively the same/different value as the switch
	     *             expression.
	     *
	     * @howToUse
	     * ```
	     * <container-element [ngSwitch]="switch_expression">
	     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     * </container-element>
	     *```
	     * @description
	     *
	     * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
	     * expression.
	     *
	     * If multiple match expressions match the switch expression value, all of them are displayed.
	     *
	     * See {@link NgSwitch} for more details and example.
	     *
	     * @stable
	     */
	    var NgSwitchCase = (function () {
	        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
	            this.ngSwitch = ngSwitch;
	            ngSwitch._addCase();
	            this._view = new SwitchView(viewContainer, templateRef);
	        }
	        NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
	        NgSwitchCase.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitchCase]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitchCase.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
	        ];
	        NgSwitchCase.propDecorators = {
	            'ngSwitchCase': [{ type: _angular_core.Input },],
	        };
	        return NgSwitchCase;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Creates a view that is added to the parent {@link NgSwitch} when no case expressions
	     * match the
	     *             switch expression.
	     *
	     * @howToUse
	     * ```
	     * <container-element [ngSwitch]="switch_expression">
	     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     *   <some-other-element *ngSwitchDefault>...</some-other-element>
	     * </container-element>
	     * ```
	     *
	     * @description
	     *
	     * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
	     * expression.
	     *
	     * See {@link NgSwitch} for more details and example.
	     *
	     * @stable
	     */
	    var NgSwitchDefault = (function () {
	        function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
	            ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
	        }
	        NgSwitchDefault.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitchDefault]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitchDefault.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
	        ];
	        return NgSwitchDefault;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
	     *
	     * @howToUse
	     * ```
	     * <some-element [ngPlural]="value">
	     *   <ng-container *ngPluralCase="'=0'">there is nothing</ng-container>
	     *   <ng-container *ngPluralCase="'=1'">there is one</ng-container>
	     *   <ng-container *ngPluralCase="'few'">there are a few</ng-container>
	     *   <ng-container *ngPluralCase="'other'">there are exactly #</ng-container>
	     * </some-element>
	     * ```
	     *
	     * @description
	     *
	     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
	     * that match the switch expression's pluralization category.
	     *
	     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
	     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
	     * expression:
	     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
	     *   matches the switch expression exactly,
	     * - otherwise, the view will be treated as a "category match", and will only display if exact
	     *   value matches aren't found and the value maps to its category for the defined locale.
	     *
	     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
	     *
	     * @experimental
	     */
	    var NgPlural = (function () {
	        function NgPlural(_localization) {
	            this._localization = _localization;
	            this._caseViews = {};
	        }
	        Object.defineProperty(NgPlural.prototype, "ngPlural", {
	            set: function (value) {
	                this._switchValue = value;
	                this._updateView();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
	        NgPlural.prototype._updateView = function () {
	            this._clearViews();
	            var cases = Object.keys(this._caseViews);
	            var key = getPluralCategory(this._switchValue, cases, this._localization);
	            this._activateView(this._caseViews[key]);
	        };
	        NgPlural.prototype._clearViews = function () {
	            if (this._activeView)
	                this._activeView.destroy();
	        };
	        NgPlural.prototype._activateView = function (view) {
	            if (view) {
	                this._activeView = view;
	                this._activeView.create();
	            }
	        };
	        NgPlural.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngPlural]' },] },
	        ];
	        /** @nocollapse */
	        NgPlural.ctorParameters = [
	            { type: NgLocalization, },
	        ];
	        NgPlural.propDecorators = {
	            'ngPlural': [{ type: _angular_core.Input },],
	        };
	        return NgPlural;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Creates a view that will be added/removed from the parent {@link NgPlural} when the
	     *             given expression matches the plural expression according to CLDR rules.
	     *
	     * @howToUse
	     * ```
	     * <some-element [ngPlural]="value">
	     *   <ng-container *ngPluralCase="'=0'">...</ng-container>
	     *   <ng-container *ngPluralCase="'other'">...</ng-container>
	     * </some-element>
	     *```
	     *
	     * See {@link NgPlural} for more details and example.
	     *
	     * @experimental
	     */
	    var NgPluralCase = (function () {
	        function NgPluralCase(value, template, viewContainer, ngPlural) {
	            this.value = value;
	            ngPlural.addCase(value, new SwitchView(viewContainer, template));
	        }
	        NgPluralCase.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngPluralCase]' },] },
	        ];
	        /** @nocollapse */
	        NgPluralCase.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['ngPluralCase',] },] },
	            { type: _angular_core.TemplateRef, },
	            { type: _angular_core.ViewContainerRef, },
	            { type: NgPlural, decorators: [{ type: _angular_core.Host },] },
	        ];
	        return NgPluralCase;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Update an HTML element styles.
	     *
	     * @howToUse
	     * ```
	     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
	     *
	     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
	     *
	     * <some-element [ngStyle]="objExp">...</some-element>
	     * ```
	     *
	     * @description
	     *
	     * The styles are updated according to the value of the expression evaluation:
	     * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
	     * - values are the values assigned to those properties (expressed in the given unit).
	     *
	     * @stable
	     */
	    var NgStyle = (function () {
	        function NgStyle(_differs, _ngEl, _renderer) {
	            this._differs = _differs;
	            this._ngEl = _ngEl;
	            this._renderer = _renderer;
	        }
	        Object.defineProperty(NgStyle.prototype, "ngStyle", {
	            set: function (v) {
	                this._ngStyle = v;
	                if (!this._differ && v) {
	                    this._differ = this._differs.find(v).create(null);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgStyle.prototype.ngDoCheck = function () {
	            if (this._differ) {
	                var changes = this._differ.diff(this._ngStyle);
	                if (changes) {
	                    this._applyChanges(changes);
	                }
	            }
	        };
	        NgStyle.prototype._applyChanges = function (changes) {
	            var _this = this;
	            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
	            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
	            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
	        };
	        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
	            var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
	            value = value && unit ? "" + value + unit : value;
	            this._renderer.setElementStyle(this._ngEl.nativeElement, name, value);
	        };
	        NgStyle.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngStyle]' },] },
	        ];
	        /** @nocollapse */
	        NgStyle.ctorParameters = [
	            { type: _angular_core.KeyValueDiffers, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        NgStyle.propDecorators = {
	            'ngStyle': [{ type: _angular_core.Input },],
	        };
	        return NgStyle;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Inserts an embedded view from a prepared `TemplateRef`
	     *
	     * @howToUse
	     * ```
	     * <template [ngTemplateOutlet]="templateRefExpression"
	     *           [ngOutletContext]="objectExpression">
	     * </template>
	     * ```
	     *
	     * @description
	     *
	     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngOutletContext]`.
	     * `[ngOutletContext]` should be an object, the object's keys will be the local template variables
	     * available within the `TemplateRef`.
	     *
	     * Note: using the key `$implicit` in the context object will set it's value as default.
	     *
	     * @experimental
	     */
	    var NgTemplateOutlet = (function () {
	        function NgTemplateOutlet(_viewContainerRef) {
	            this._viewContainerRef = _viewContainerRef;
	        }
	        Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
	            set: function (context) { this._context = context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
	            set: function (templateRef) { this._templateRef = templateRef; },
	            enumerable: true,
	            configurable: true
	        });
	        NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
	            if (this._viewRef) {
	                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
	            }
	            if (this._templateRef) {
	                this._viewRef = this._viewContainerRef.createEmbeddedView(this._templateRef, this._context);
	            }
	        };
	        NgTemplateOutlet.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngTemplateOutlet]' },] },
	        ];
	        /** @nocollapse */
	        NgTemplateOutlet.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	        ];
	        NgTemplateOutlet.propDecorators = {
	            'ngOutletContext': [{ type: _angular_core.Input },],
	            'ngTemplateOutlet': [{ type: _angular_core.Input },],
	        };
	        return NgTemplateOutlet;
	    }());
	
	    /**
	     * A collection of Angular directives that are likely to be used in each and every Angular
	     * application.
	     */
	    var COMMON_DIRECTIVES = [
	        NgClass,
	        NgFor,
	        NgIf,
	        NgTemplateOutlet,
	        NgStyle,
	        NgSwitch,
	        NgSwitchCase,
	        NgSwitchDefault,
	        NgPlural,
	        NgPluralCase,
	    ];
	
	    var isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var BaseError = (function (_super) {
	        __extends$4(BaseError, _super);
	        function BaseError(message) {
	            // Errors don't use current this, instead they create a new instance.
	            // We have to do forward all of our api to the nativeInstance.
	            var nativeError = _super.call(this, message);
	            this._nativeError = nativeError;
	        }
	        Object.defineProperty(BaseError.prototype, "message", {
	            get: function () { return this._nativeError.message; },
	            set: function (message) { this._nativeError.message = message; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "name", {
	            get: function () { return this._nativeError.name; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "stack", {
	            get: function () { return this._nativeError.stack; },
	            set: function (value) { this._nativeError.stack = value; },
	            enumerable: true,
	            configurable: true
	        });
	        BaseError.prototype.toString = function () { return this._nativeError.toString(); };
	        return BaseError;
	    }(Error));
	    /**
	     * @stable
	     */
	    var WrappedError = (function (_super) {
	        __extends$4(WrappedError, _super);
	        function WrappedError(message, error) {
	            _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
	            this.originalError = error;
	        }
	        Object.defineProperty(WrappedError.prototype, "stack", {
	            get: function () {
	                return (this.originalError instanceof Error ? this.originalError : this._nativeError)
	                    .stack;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return WrappedError;
	    }(BaseError));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var InvalidPipeArgumentError = (function (_super) {
	        __extends$3(InvalidPipeArgumentError, _super);
	        function InvalidPipeArgumentError(type, value) {
	            _super.call(this, "Invalid argument '" + value + "' for pipe '" + stringify(type) + "'");
	        }
	        return InvalidPipeArgumentError;
	    }(BaseError));
	
	    var ObservableStrategy = (function () {
	        function ObservableStrategy() {
	        }
	        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
	        };
	        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
	        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
	        return ObservableStrategy;
	    }());
	    var PromiseStrategy = (function () {
	        function PromiseStrategy() {
	        }
	        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	            return async.then(updateLatestValue, function (e) { throw e; });
	        };
	        PromiseStrategy.prototype.dispose = function (subscription) { };
	        PromiseStrategy.prototype.onDestroy = function (subscription) { };
	        return PromiseStrategy;
	    }());
	    var _promiseStrategy = new PromiseStrategy();
	    var _observableStrategy = new ObservableStrategy();
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Unwraps a value from an asynchronous primitive.
	     * @howToUse `observable_or_promise_expression | async`
	     * @description
	     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
	     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
	     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
	     * potential memory leaks.
	     *
	     *
	     * ## Examples
	     *
	     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
	     * promise.
	     *
	     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
	     *
	     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
	     * to the view. The Observable continuesly updates the view with the current time.
	     *
	     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
	     *
	     * @stable
	     */
	    var AsyncPipe = (function () {
	        function AsyncPipe(_ref) {
	            this._ref = _ref;
	            this._latestValue = null;
	            this._latestReturnedValue = null;
	            this._subscription = null;
	            this._obj = null;
	            this._strategy = null;
	        }
	        AsyncPipe.prototype.ngOnDestroy = function () {
	            if (this._subscription) {
	                this._dispose();
	            }
	        };
	        AsyncPipe.prototype.transform = function (obj) {
	            if (!this._obj) {
	                if (obj) {
	                    this._subscribe(obj);
	                }
	                this._latestReturnedValue = this._latestValue;
	                return this._latestValue;
	            }
	            if (obj !== this._obj) {
	                this._dispose();
	                return this.transform(obj);
	            }
	            if (this._latestValue === this._latestReturnedValue) {
	                return this._latestReturnedValue;
	            }
	            this._latestReturnedValue = this._latestValue;
	            return _angular_core.WrappedValue.wrap(this._latestValue);
	        };
	        AsyncPipe.prototype._subscribe = function (obj) {
	            var _this = this;
	            this._obj = obj;
	            this._strategy = this._selectStrategy(obj);
	            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
	        };
	        AsyncPipe.prototype._selectStrategy = function (obj) {
	            if (isPromise(obj)) {
	                return _promiseStrategy;
	            }
	            if (obj.subscribe) {
	                return _observableStrategy;
	            }
	            throw new InvalidPipeArgumentError(AsyncPipe, obj);
	        };
	        AsyncPipe.prototype._dispose = function () {
	            this._strategy.dispose(this._subscription);
	            this._latestValue = null;
	            this._latestReturnedValue = null;
	            this._subscription = null;
	            this._obj = null;
	        };
	        AsyncPipe.prototype._updateLatestValue = function (async, value) {
	            if (async === this._obj) {
	                this._latestValue = value;
	                this._ref.markForCheck();
	            }
	        };
	        AsyncPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'async', pure: false },] },
	        ];
	        /** @nocollapse */
	        AsyncPipe.ctorParameters = [
	            { type: _angular_core.ChangeDetectorRef, },
	        ];
	        return AsyncPipe;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var NumberFormatStyle;
	    (function (NumberFormatStyle) {
	        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
	        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
	        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
	    })(NumberFormatStyle || (NumberFormatStyle = {}));
	    var NumberFormatter = (function () {
	        function NumberFormatter() {
	        }
	        NumberFormatter.format = function (num, locale, style, _a) {
	            var _b = _a === void 0 ? {} : _a, minimumIntegerDigits = _b.minimumIntegerDigits, minimumFractionDigits = _b.minimumFractionDigits, maximumFractionDigits = _b.maximumFractionDigits, currency = _b.currency, _c = _b.currencyAsSymbol, currencyAsSymbol = _c === void 0 ? false : _c;
	            var options = {
	                minimumIntegerDigits: minimumIntegerDigits,
	                minimumFractionDigits: minimumFractionDigits,
	                maximumFractionDigits: maximumFractionDigits,
	                style: NumberFormatStyle[style].toLowerCase()
	            };
	            if (style == NumberFormatStyle.Currency) {
	                options.currency = currency;
	                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
	            }
	            return new Intl.NumberFormat(locale, options).format(num);
	        };
	        return NumberFormatter;
	    }());
	    var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
	    var PATTERN_ALIASES = {
	        yMMMdjms: datePartGetterFactory(combine([
	            digitCondition('year', 1),
	            nameCondition('month', 3),
	            digitCondition('day', 1),
	            digitCondition('hour', 1),
	            digitCondition('minute', 1),
	            digitCondition('second', 1),
	        ])),
	        yMdjm: datePartGetterFactory(combine([
	            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
	            digitCondition('hour', 1), digitCondition('minute', 1)
	        ])),
	        yMMMMEEEEd: datePartGetterFactory(combine([
	            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
	            digitCondition('day', 1)
	        ])),
	        yMMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
	        yMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
	        yMd: datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
	        jms: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
	        jm: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
	    };
	    var DATE_FORMATS = {
	        yyyy: datePartGetterFactory(digitCondition('year', 4)),
	        yy: datePartGetterFactory(digitCondition('year', 2)),
	        y: datePartGetterFactory(digitCondition('year', 1)),
	        MMMM: datePartGetterFactory(nameCondition('month', 4)),
	        MMM: datePartGetterFactory(nameCondition('month', 3)),
	        MM: datePartGetterFactory(digitCondition('month', 2)),
	        M: datePartGetterFactory(digitCondition('month', 1)),
	        LLLL: datePartGetterFactory(nameCondition('month', 4)),
	        L: datePartGetterFactory(nameCondition('month', 1)),
	        dd: datePartGetterFactory(digitCondition('day', 2)),
	        d: datePartGetterFactory(digitCondition('day', 1)),
	        HH: digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
	        H: hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
	        hh: digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
	        h: hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
	        jj: datePartGetterFactory(digitCondition('hour', 2)),
	        j: datePartGetterFactory(digitCondition('hour', 1)),
	        mm: digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
	        m: datePartGetterFactory(digitCondition('minute', 1)),
	        ss: digitModifier(datePartGetterFactory(digitCondition('second', 2))),
	        s: datePartGetterFactory(digitCondition('second', 1)),
	        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
	        // we can be just safely rely on using `sss` since we currently don't support single or two digit
	        // fractions
	        sss: datePartGetterFactory(digitCondition('second', 3)),
	        EEEE: datePartGetterFactory(nameCondition('weekday', 4)),
	        EEE: datePartGetterFactory(nameCondition('weekday', 3)),
	        EE: datePartGetterFactory(nameCondition('weekday', 2)),
	        E: datePartGetterFactory(nameCondition('weekday', 1)),
	        a: hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
	        Z: timeZoneGetter('short'),
	        z: timeZoneGetter('long'),
	        ww: datePartGetterFactory({}),
	        // first Thursday of the year. not support ?
	        w: datePartGetterFactory({}),
	        // of the year not support ?
	        G: datePartGetterFactory(nameCondition('era', 1)),
	        GG: datePartGetterFactory(nameCondition('era', 2)),
	        GGG: datePartGetterFactory(nameCondition('era', 3)),
	        GGGG: datePartGetterFactory(nameCondition('era', 4))
	    };
	    function digitModifier(inner) {
	        return function (date, locale) {
	            var result = inner(date, locale);
	            return result.length == 1 ? '0' + result : result;
	        };
	    }
	    function hourClockExtractor(inner) {
	        return function (date, locale) { return inner(date, locale).split(' ')[1]; };
	    }
	    function hourExtractor(inner) {
	        return function (date, locale) { return inner(date, locale).split(' ')[0]; };
	    }
	    function intlDateFormat(date, locale, options) {
	        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
	    }
	    function timeZoneGetter(timezone) {
	        // To workaround `Intl` API restriction for single timezone let format with 24 hours
	        var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
	        return function (date, locale) {
	            var result = intlDateFormat(date, locale, options);
	            // Then extract first 3 letters that related to hours
	            return result ? result.substring(3) : '';
	        };
	    }
	    function hour12Modify(options, value) {
	        options.hour12 = value;
	        return options;
	    }
	    function digitCondition(prop, len) {
	        var result = {};
	        result[prop] = len === 2 ? '2-digit' : 'numeric';
	        return result;
	    }
	    function nameCondition(prop, len) {
	        var result = {};
	        if (len < 4) {
	            result[prop] = len > 1 ? 'short' : 'narrow';
	        }
	        else {
	            result[prop] = 'long';
	        }
	        return result;
	    }
	    function combine(options) {
	        return (_a = Object).assign.apply(_a, [{}].concat(options));
	        var _a;
	    }
	    function datePartGetterFactory(ret) {
	        return function (date, locale) { return intlDateFormat(date, locale, ret); };
	    }
	    var DATE_FORMATTER_CACHE = new Map();
	    function dateFormatter(format, date, locale) {
	        var fn = PATTERN_ALIASES[format];
	        if (fn)
	            return fn(date, locale);
	        var parts = DATE_FORMATTER_CACHE.get(format);
	        if (!parts) {
	            parts = [];
	            var match = void 0;
	            DATE_FORMATS_SPLIT.exec(format);
	            while (format) {
	                match = DATE_FORMATS_SPLIT.exec(format);
	                if (match) {
	                    parts = parts.concat(match.slice(1));
	                    format = parts.pop();
	                }
	                else {
	                    parts.push(format);
	                    format = null;
	                }
	            }
	            DATE_FORMATTER_CACHE.set(format, parts);
	        }
	        return parts.reduce(function (text, part) {
	            var fn = DATE_FORMATS[part];
	            return text + (fn ? fn(date, locale) : partToTime(part));
	        }, '');
	    }
	    function partToTime(part) {
	        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
	    }
	    var DateFormatter = (function () {
	        function DateFormatter() {
	        }
	        DateFormatter.format = function (date, locale, pattern) {
	            return dateFormatter(pattern, date, locale);
	        };
	        return DateFormatter;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a date according to locale rules.
	     * @howToUse `date_expression | date[:format]`
	     * @description
	     *
	     * Where:
	     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
	     * (https://www.w3.org/TR/NOTE-datetime).
	     * - `format` indicates which date/time components to include. The format can be predifined as
	     *   shown below or custom as shown in the table.
	     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
	     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
	     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
	     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
	     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
	     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
	     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
	     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
	     *
	     *
	     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
	     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
	     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
	     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
	     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
	     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
	     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
	     *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
	     *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
	     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
	     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
	     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
	     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
	     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
	     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
	     *
	     * In javascript, only the components specified will be respected (not the ordering,
	     * punctuations, ...) and details of the formatting will be dependent on the locale.
	     *
	     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
	     *
	     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
	     * applied and the formatted text will have the same day, month and year of the expression.
	     *
	     * WARNINGS:
	     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
	     *   Instead users should treat the date as an immutable object and change the reference when the
	     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
	     *   which would be an expensive operation).
	     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
	     *   browsers.
	     *
	     * ### Examples
	     *
	     * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
	     * in the _local_ time and locale is 'en-US':
	     *
	     * ```
	     *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
	     *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
	     *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
	     *     {{ dateObj | date:'mmss' }}        // output is '43:11'
	     * ```
	     *
	     * {@example common/pipes/ts/date_pipe.ts region='DatePipe'}
	     *
	     * @stable
	     */
	    var DatePipe = (function () {
	        function DatePipe(_locale) {
	            this._locale = _locale;
	        }
	        DatePipe.prototype.transform = function (value, pattern) {
	            if (pattern === void 0) { pattern = 'mediumDate'; }
	            var date;
	            if (isBlank$1(value))
	                return null;
	            if (typeof value === 'string') {
	                value = value.trim();
	            }
	            if (isDate(value)) {
	                date = value;
	            }
	            else if (NumberWrapper.isNumeric(value)) {
	                date = new Date(parseFloat(value));
	            }
	            else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
	                /**
	                * For ISO Strings without time the day, month and year must be extracted from the ISO String
	                * before Date creation to avoid time offset and errors in the new Date.
	                * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
	                * date, some browsers (e.g. IE 9) will throw an invalid Date error
	                * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
	                * is applied
	                * Note: ISO months are 0 for January, 1 for February, ...
	                */
	                var _a = value.split('-').map(function (val) { return parseInt(val, 10); }), y = _a[0], m = _a[1], d = _a[2];
	                date = new Date(y, m - 1, d);
	            }
	            else {
	                date = new Date(value);
	            }
	            if (!isDate(date)) {
	                throw new InvalidPipeArgumentError(DatePipe, value);
	            }
	            return DateFormatter.format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
	        };
	        /** @internal */
	        DatePipe._ALIASES = {
	            'medium': 'yMMMdjms',
	            'short': 'yMdjm',
	            'fullDate': 'yMMMMEEEEd',
	            'longDate': 'yMMMMd',
	            'mediumDate': 'yMMMd',
	            'shortDate': 'yMd',
	            'mediumTime': 'jms',
	            'shortTime': 'jm'
	        };
	        DatePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'date', pure: true },] },
	        ];
	        /** @nocollapse */
	        DatePipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return DatePipe;
	    }());
	    function isBlank$1(obj) {
	        return obj == null || obj === '';
	    }
	
	    var _INTERPOLATION_REGEXP = /#/g;
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
	     * @howToUse `expression | i18nPlural:mapping`
	     * @description
	     *
	     *  Where:
	     *  - `expression` is a number.
	     *  - `mapping` is an object that mimics the ICU format, see
	     *    http://userguide.icu-project.org/formatparse/messages
	     *
	     *  ## Example
	     *
	     * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
	     *
	     * @experimental
	     */
	    var I18nPluralPipe = (function () {
	        function I18nPluralPipe(_localization) {
	            this._localization = _localization;
	        }
	        I18nPluralPipe.prototype.transform = function (value, pluralMap) {
	            if (isBlank(value))
	                return '';
	            if (typeof pluralMap !== 'object' || pluralMap === null) {
	                throw new InvalidPipeArgumentError(I18nPluralPipe, pluralMap);
	            }
	            var key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
	            return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
	        };
	        I18nPluralPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'i18nPlural', pure: true },] },
	        ];
	        /** @nocollapse */
	        I18nPluralPipe.ctorParameters = [
	            { type: NgLocalization, },
	        ];
	        return I18nPluralPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Generic selector that displays the string that matches the current value.
	     * @howToUse `expression | i18nSelect:mapping`
	     * @description
	     *
	     *  Where `mapping` is an object that indicates the text that should be displayed
	     *  for different values of the provided `expression`.
	     *  If none of the keys of the mapping match the value of the `expression`, then the content
	     *  of the `other` key is returned when present, otherwise an empty string is returned.
	     *
	     *  ## Example
	     *
	     * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
	     *
	     *  @experimental
	     */
	    var I18nSelectPipe = (function () {
	        function I18nSelectPipe() {
	        }
	        I18nSelectPipe.prototype.transform = function (value, mapping) {
	            if (value == null)
	                return '';
	            if (typeof mapping !== 'object' || typeof value !== 'string') {
	                throw new InvalidPipeArgumentError(I18nSelectPipe, mapping);
	            }
	            if (mapping.hasOwnProperty(value)) {
	                return mapping[value];
	            }
	            if (mapping.hasOwnProperty('other')) {
	                return mapping['other'];
	            }
	            return '';
	        };
	        I18nSelectPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'i18nSelect', pure: true },] },
	        ];
	        /** @nocollapse */
	        I18nSelectPipe.ctorParameters = [];
	        return I18nSelectPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Converts value into JSON string.
	     * @howToUse `expression | json`
	     * @description
	     *
	     * Converts value into string using `JSON.stringify`. Useful for debugging.
	     *
	     * ### Example
	     * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
	     *
	     * @stable
	     */
	    var JsonPipe = (function () {
	        function JsonPipe() {
	        }
	        JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
	        JsonPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'json', pure: false },] },
	        ];
	        /** @nocollapse */
	        JsonPipe.ctorParameters = [];
	        return JsonPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Transforms string to lowercase.
	     * @howToUse `expression | lowercase`
	     * @description
	     *
	     * Converts value into a lowercase string using `String.prototype.toLowerCase()`.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
	     *
	     * @stable
	     */
	    var LowerCasePipe = (function () {
	        function LowerCasePipe() {
	        }
	        LowerCasePipe.prototype.transform = function (value) {
	            if (isBlank(value))
	                return value;
	            if (typeof value !== 'string') {
	                throw new InvalidPipeArgumentError(LowerCasePipe, value);
	            }
	            return value.toLowerCase();
	        };
	        LowerCasePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'lowercase' },] },
	        ];
	        /** @nocollapse */
	        LowerCasePipe.ctorParameters = [];
	        return LowerCasePipe;
	    }());
	
	    var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
	    function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
	        if (currency === void 0) { currency = null; }
	        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
	        if (isBlank(value))
	            return null;
	        // Convert strings to numbers
	        value = typeof value === 'string' && NumberWrapper.isNumeric(value) ? +value : value;
	        if (typeof value !== 'number') {
	            throw new InvalidPipeArgumentError(pipe, value);
	        }
	        var minInt;
	        var minFraction;
	        var maxFraction;
	        if (style !== NumberFormatStyle.Currency) {
	            // rely on Intl default for currency
	            minInt = 1;
	            minFraction = 0;
	            maxFraction = 3;
	        }
	        if (digits) {
	            var parts = digits.match(_NUMBER_FORMAT_REGEXP);
	            if (parts === null) {
	                throw new Error(digits + " is not a valid digit info for number pipes");
	            }
	            if (isPresent(parts[1])) {
	                minInt = NumberWrapper.parseIntAutoRadix(parts[1]);
	            }
	            if (isPresent(parts[3])) {
	                minFraction = NumberWrapper.parseIntAutoRadix(parts[3]);
	            }
	            if (isPresent(parts[5])) {
	                maxFraction = NumberWrapper.parseIntAutoRadix(parts[5]);
	            }
	        }
	        return NumberFormatter.format(value, locale, style, {
	            minimumIntegerDigits: minInt,
	            minimumFractionDigits: minFraction,
	            maximumFractionDigits: maxFraction,
	            currency: currency,
	            currencyAsSymbol: currencyAsSymbol,
	        });
	    }
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number according to locale rules.
	     * @howToUse `number_expression | number[:digitInfo]`
	     *
	     * Formats a number as text. Group sizing and separator and other locale-specific
	     * configurations are based on the active locale.
	     *
	     * where `expression` is a number:
	     *  - `digitInfo` is a `string` which has a following format: <br>
	     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
	     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
	     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
	     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
	     *
	     * For more information on the acceptable range for each of these numbers and other
	     * details see your native internationalization library.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
	     *
	     * @stable
	     */
	    var DecimalPipe = (function () {
	        function DecimalPipe(_locale) {
	            this._locale = _locale;
	        }
	        DecimalPipe.prototype.transform = function (value, digits) {
	            if (digits === void 0) { digits = null; }
	            return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
	        };
	        DecimalPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'number' },] },
	        ];
	        /** @nocollapse */
	        DecimalPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return DecimalPipe;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number as a percentage according to locale rules.
	     * @howToUse `number_expression | percent[:digitInfo]`
	     *
	     * @description
	     *
	     * Formats a number as percentage.
	     *
	     * - `digitInfo` See {@link DecimalPipe} for detailed description.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
	     *
	     * @stable
	     */
	    var PercentPipe = (function () {
	        function PercentPipe(_locale) {
	            this._locale = _locale;
	        }
	        PercentPipe.prototype.transform = function (value, digits) {
	            if (digits === void 0) { digits = null; }
	            return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
	        };
	        PercentPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'percent' },] },
	        ];
	        /** @nocollapse */
	        PercentPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return PercentPipe;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number as currency using locale rules.
	     * @howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
	     * @description
	     *
	     * Use `currency` to format a number as currency.
	     *
	     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
	     *    as `USD` for the US dollar and `EUR` for the euro.
	     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
	     *   - `true`: use symbol (e.g. `$`).
	     *   - `false`(default): use code (e.g. `USD`).
	     * - `digitInfo` See {@link DecimalPipe} for detailed description.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
	     *
	     * @stable
	     */
	    var CurrencyPipe = (function () {
	        function CurrencyPipe(_locale) {
	            this._locale = _locale;
	        }
	        CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
	            if (currencyCode === void 0) { currencyCode = 'USD'; }
	            if (symbolDisplay === void 0) { symbolDisplay = false; }
	            if (digits === void 0) { digits = null; }
	            return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
	        };
	        CurrencyPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'currency' },] },
	        ];
	        /** @nocollapse */
	        CurrencyPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return CurrencyPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Creates a new List or String containing a subset (slice) of the elements.
	     * @howToUse `array_or_string_expression | slice:start[:end]`
	     * @description
	     *
	     * Where the input expression is a `List` or `String`, and:
	     * - `start`: The starting index of the subset to return.
	     *   - **a positive integer**: return the item at `start` index and all items after
	     *     in the list or string expression.
	     *   - **a negative integer**: return the item at `start` index from the end and all items after
	     *     in the list or string expression.
	     *   - **if positive and greater than the size of the expression**: return an empty list or string.
	     *   - **if negative and greater than the size of the expression**: return entire list or string.
	     * - `end`: The ending index of the subset to return.
	     *   - **omitted**: return all items until the end.
	     *   - **if positive**: return all items before `end` index of the list or string.
	     *   - **if negative**: return all items before `end` index from the end of the list or string.
	     *
	     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
	     * and `String.prototype.slice()`.
	     *
	     * When operating on a [List], the returned list is always a copy even when all
	     * the elements are being returned.
	     *
	     * When operating on a blank value, the pipe returns the blank value.
	     *
	     * ## List Example
	     *
	     * This `ngFor` example:
	     *
	     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
	     *
	     * produces the following:
	     *
	     *     <li>b</li>
	     *     <li>c</li>
	     *
	     * ## String Examples
	     *
	     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
	     *
	     * @stable
	     */
	    var SlicePipe = (function () {
	        function SlicePipe() {
	        }
	        SlicePipe.prototype.transform = function (value, start, end) {
	            if (isBlank(value))
	                return value;
	            if (!this.supports(value)) {
	                throw new InvalidPipeArgumentError(SlicePipe, value);
	            }
	            return value.slice(start, end);
	        };
	        SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
	        SlicePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'slice', pure: false },] },
	        ];
	        /** @nocollapse */
	        SlicePipe.ctorParameters = [];
	        return SlicePipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Transforms string to uppercase.
	     * @howToUse `expression | uppercase`
	     * @description
	     *
	     * Converts value into an uppercase string using `String.prototype.toUpperCase()`.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
	     *
	     * @stable
	     */
	    var UpperCasePipe = (function () {
	        function UpperCasePipe() {
	        }
	        UpperCasePipe.prototype.transform = function (value) {
	            if (isBlank(value))
	                return value;
	            if (typeof value !== 'string') {
	                throw new InvalidPipeArgumentError(UpperCasePipe, value);
	            }
	            return value.toUpperCase();
	        };
	        UpperCasePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'uppercase' },] },
	        ];
	        /** @nocollapse */
	        UpperCasePipe.ctorParameters = [];
	        return UpperCasePipe;
	    }());
	
	    /**
	     * A collection of Angular pipes that are likely to be used in each and every application.
	     */
	    var COMMON_PIPES = [
	        AsyncPipe,
	        UpperCasePipe,
	        LowerCasePipe,
	        JsonPipe,
	        SlicePipe,
	        DecimalPipe,
	        PercentPipe,
	        CurrencyPipe,
	        DatePipe,
	        I18nPluralPipe,
	        I18nSelectPipe,
	    ];
	
	    // Note: This does not contain the location providers,
	    // as they need some platform specific implementations to work.
	    /**
	     * The module that includes all the basic Angular directives like {@link NgIf}, {@link NgFor}, ...
	     *
	     * @stable
	     */
	    var CommonModule = (function () {
	        function CommonModule() {
	        }
	        CommonModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
	                        exports: [COMMON_DIRECTIVES, COMMON_PIPES],
	                        providers: [
	                            { provide: NgLocalization, useClass: NgLocaleLocalization },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        CommonModule.ctorParameters = [];
	        return CommonModule;
	    }());
	
	    exports.NgLocalization = NgLocalization;
	    exports.CommonModule = CommonModule;
	    exports.NgClass = NgClass;
	    exports.NgFor = NgFor;
	    exports.NgIf = NgIf;
	    exports.NgPlural = NgPlural;
	    exports.NgPluralCase = NgPluralCase;
	    exports.NgStyle = NgStyle;
	    exports.NgSwitch = NgSwitch;
	    exports.NgSwitchCase = NgSwitchCase;
	    exports.NgSwitchDefault = NgSwitchDefault;
	    exports.NgTemplateOutlet = NgTemplateOutlet;
	    exports.AsyncPipe = AsyncPipe;
	    exports.DatePipe = DatePipe;
	    exports.I18nPluralPipe = I18nPluralPipe;
	    exports.I18nSelectPipe = I18nSelectPipe;
	    exports.JsonPipe = JsonPipe;
	    exports.LowerCasePipe = LowerCasePipe;
	    exports.CurrencyPipe = CurrencyPipe;
	    exports.DecimalPipe = DecimalPipe;
	    exports.PercentPipe = PercentPipe;
	    exports.SlicePipe = SlicePipe;
	    exports.UpperCasePipe = UpperCasePipe;
	    exports.PlatformLocation = PlatformLocation;
	    exports.LocationStrategy = LocationStrategy;
	    exports.APP_BASE_HREF = APP_BASE_HREF;
	    exports.HashLocationStrategy = HashLocationStrategy;
	    exports.PathLocationStrategy = PathLocationStrategy;
	    exports.Location = Location;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=app.md.bundle.map