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

	module.exports = __webpack_require__(37);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.1.2
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
	        if (token === undefined || token === null) {
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
	         * `CheckedOnce` means that after calling detectChanges the mode of the change detector
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
	
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
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
	                list.splice(index, 1);
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
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (candidate == null) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (Array.isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
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
	        if (isPresent(provider.useClass)) {
	            var useClass = resolveForwardRef(provider.useClass);
	            factoryFn = reflector.factory(useClass);
	            resolvedDeps = _dependenciesFor(useClass);
	        }
	        else if (isPresent(provider.useExisting)) {
	            factoryFn = function (aliasInstance) { return aliasInstance; };
	            resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
	        }
	        else if (isPresent(provider.useFactory)) {
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
	        return MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
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
	            if (isPresent(existing)) {
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
	                var resolvedProvider;
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
	            var params = dependencies.map(function (t) { return [t]; });
	            return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params); });
	        }
	    }
	    function _dependenciesFor(typeOrFunc) {
	        var params = reflector.parameters(typeOrFunc);
	        if (!params)
	            return [];
	        if (params.some(isBlank)) {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	        return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	    }
	    function _extractToken(typeOrFunc /** TODO #9100 */, metadata /** TODO #9100 */ /*any[] | any*/, params) {
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
	        if (isPresent(token)) {
	            return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	        }
	        else {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	    }
	    function _createDependency(token /** TODO #9100 */, optional /** TODO #9100 */, lowerBoundVisibility /** TODO #9100 */, upperBoundVisibility /** TODO #9100 */, depProps /** TODO #9100 */) {
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
	                var record;
	                var nextRecord;
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
	
	    /**
	     * An AppElement is created for elements that have a ViewContainerRef,
	     * a nested component or a <template> element to keep data around
	     * that is needed for later instantiations.
	     */
	    var AppElement = (function () {
	        function AppElement(index, parentIndex, parentView, nativeElement) {
	            this.index = index;
	            this.parentIndex = parentIndex;
	            this.parentView = parentView;
	            this.nativeElement = nativeElement;
	            this.nestedViews = null;
	            this.componentView = null;
	        }
	        Object.defineProperty(AppElement.prototype, "elementRef", {
	            get: function () { return new ElementRef(this.nativeElement); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppElement.prototype, "vcRef", {
	            get: function () { return new ViewContainerRef_(this); },
	            enumerable: true,
	            configurable: true
	        });
	        AppElement.prototype.initComponent = function (component, componentConstructorViewQueries, view) {
	            this.component = component;
	            this.componentConstructorViewQueries = componentConstructorViewQueries;
	            this.componentView = view;
	        };
	        Object.defineProperty(AppElement.prototype, "parentInjector", {
	            get: function () { return this.parentView.injector(this.parentIndex); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppElement.prototype, "injector", {
	            get: function () { return this.parentView.injector(this.index); },
	            enumerable: true,
	            configurable: true
	        });
	        AppElement.prototype.mapNestedViews = function (nestedViewClass, callback) {
	            var result = [];
	            if (isPresent(this.nestedViews)) {
	                this.nestedViews.forEach(function (nestedView) {
	                    if (nestedView.clazz === nestedViewClass) {
	                        result.push(callback(nestedView));
	                    }
	                });
	            }
	            return result;
	        };
	        AppElement.prototype.moveView = function (view, currentIndex) {
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
	            var refRenderNode;
	            if (currentIndex > 0) {
	                var prevView = nestedViews[currentIndex - 1];
	                refRenderNode = prevView.lastRootNode;
	            }
	            else {
	                refRenderNode = this.nativeElement;
	            }
	            if (isPresent(refRenderNode)) {
	                view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	            }
	            view.markContentChildAsMoved(this);
	        };
	        AppElement.prototype.attachView = function (view, viewIndex) {
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            var nestedViews = this.nestedViews;
	            if (nestedViews == null) {
	                nestedViews = [];
	                this.nestedViews = nestedViews;
	            }
	            nestedViews.splice(viewIndex, 0, view);
	            var refRenderNode;
	            if (viewIndex > 0) {
	                var prevView = nestedViews[viewIndex - 1];
	                refRenderNode = prevView.lastRootNode;
	            }
	            else {
	                refRenderNode = this.nativeElement;
	            }
	            if (isPresent(refRenderNode)) {
	                view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	            }
	            view.addToContentChildren(this);
	        };
	        AppElement.prototype.detachView = function (viewIndex) {
	            var view = this.nestedViews.splice(viewIndex, 1)[0];
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            view.detach();
	            view.removeFromContentChildren(this);
	            return view;
	        };
	        return AppElement;
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
	        function ViewUtils(_renderer, _appId, sanitizer) {
	            this._renderer = _renderer;
	            this._appId = _appId;
	            this._nextCompTypeId = 0;
	            this.sanitizer = sanitizer;
	        }
	        /**
	         * Used by the generated code
	         */
	        // TODO (matsko): add typing for the animation function
	        ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles, animations) {
	            return new RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
	        };
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
	            { type: undefined, decorators: [{ type: Inject, args: [APP_ID,] },] },
	            { type: Sanitizer, },
	        ];
	        return ViewUtils;
	    }());
	    function flattenNestedViewRenderNodes(nodes) {
	        return _flattenNestedViewRenderNodes(nodes, []);
	    }
	    function _flattenNestedViewRenderNodes(nodes, renderNodes) {
	        for (var i = 0; i < nodes.length; i++) {
	            var node = nodes[i];
	            if (node instanceof AppElement) {
	                var appEl = node;
	                renderNodes.push(appEl.nativeElement);
	                if (isPresent(appEl.nestedViews)) {
	                    for (var k = 0; k < appEl.nestedViews.length; k++) {
	                        _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
	                    }
	                }
	            }
	            else {
	                renderNodes.push(node);
	            }
	        }
	        return renderNodes;
	    }
	    var EMPTY_ARR = [];
	    function ensureSlotCount(projectableNodes, expectedSlotCount) {
	        var res;
	        if (!projectableNodes) {
	            res = EMPTY_ARR;
	        }
	        else if (projectableNodes.length < expectedSlotCount) {
	            var givenSlotCount = projectableNodes.length;
	            res = new Array(expectedSlotCount);
	            for (var i = 0; i < expectedSlotCount; i++) {
	                res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
	            }
	        }
	        else {
	            res = projectableNodes;
	        }
	        return res;
	    }
	    var MAX_INTERPOLATION_VALUES = 9;
	    function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
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
	        }
	        else {
	            hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
	        }
	        return hostElement;
	    }
	    var InlineArray0 = (function () {
	        function InlineArray0() {
	            this.length = 0;
	        }
	        InlineArray0.prototype.get = function (index) { return undefined; };
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
	        return InlineArrayDynamic;
	    }());
	    var EMPTY_INLINE_ARRAY = new InlineArray0();
	
	
	    var view_utils = Object.freeze({
	        ViewUtils: ViewUtils,
	        flattenNestedViewRenderNodes: flattenNestedViewRenderNodes,
	        ensureSlotCount: ensureSlotCount,
	        MAX_INTERPOLATION_VALUES: MAX_INTERPOLATION_VALUES,
	        interpolate: interpolate,
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
	        function ComponentRef_(_hostElement, _componentType) {
	            _super.call(this);
	            this._hostElement = _hostElement;
	            this._componentType = _componentType;
	        }
	        Object.defineProperty(ComponentRef_.prototype, "location", {
	            get: function () { return this._hostElement.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "injector", {
	            get: function () { return this._hostElement.injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "instance", {
	            get: function () { return this._hostElement.component; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "hostView", {
	            get: function () { return this._hostElement.parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	            get: function () { return this._hostElement.parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "componentType", {
	            get: function () { return this._componentType; },
	            enumerable: true,
	            configurable: true
	        });
	        ComponentRef_.prototype.destroy = function () { this._hostElement.parentView.destroy(); };
	        ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	        return ComponentRef_;
	    }(ComponentRef));
	    /**
	     * @experimental
	     */
	    var EMPTY_CONTEXT = new Object();
	    /**
	     * @stable
	     */
	    var ComponentFactory = (function () {
	        function ComponentFactory(selector, _viewFactory, _componentType) {
	            this.selector = selector;
	            this._viewFactory = _viewFactory;
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
	            // Note: Host views don't need a declarationAppElement!
	            var hostView = this._viewFactory(vu, injector, null);
	            var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
	            return new ComponentRef_(hostElement, this._componentType);
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
	        TestabilityRegistry.prototype.getAllTestabilities = function () { return MapWrapper.values(this._applications); };
	        TestabilityRegistry.prototype.getAllRootElements = function () { return MapWrapper.keys(this._applications); };
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
	            if (exportName === undefined)
	                exportName = 'default';
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
	        function TemplateRef_(_appElement, _viewFactory) {
	            _super.call(this);
	            this._appElement = _appElement;
	            this._viewFactory = _viewFactory;
	        }
	        TemplateRef_.prototype.createEmbeddedView = function (context) {
	            var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
	            view.create(context || {}, null, null);
	            return view.ref;
	        };
	        Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	            get: function () { return this._appElement.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        return TemplateRef_;
	    }(TemplateRef));
	
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
	        ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
	        ViewRef_.prototype.destroy = function () { this._view.destroy(); };
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
	            if (isPresent(parent) && parent instanceof DebugElement) {
	                parent.addChild(this);
	            }
	            else {
	                this.parent = null;
	            }
	            this.listeners = [];
	        }
	        Object.defineProperty(DebugNode.prototype, "injector", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.injector : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "componentInstance", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.component : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "context", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.context : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "references", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.references : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "providerTokens", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "source", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.source : null; },
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
	            if (isPresent(child)) {
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
	                    if (isPresent(newChild.parent)) {
	                        newChild.parent.removeChild(newChild);
	                    }
	                    newChild.parent = this;
	                }
	            }
	        };
	        DebugElement.prototype.query = function (predicate) {
	            var results = this.queryAll(predicate);
	            return results.length > 0 ? results[0] : null;
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
	                var children = [];
	                this.childNodes.forEach(function (node) {
	                    if (node instanceof DebugElement) {
	                        children.push(node);
	                    }
	                });
	                return children;
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
	                if (!isPresent(this.parentPlayer)) {
	                    this.destroy();
	                }
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
	            this._onFinish();
	            this._players.forEach(function (player) { return player.destroy(); });
	        };
	        AnimationGroupPlayer.prototype.reset = function () { this._players.forEach(function (player) { return player.reset(); }); };
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
	                if (!isPresent(this.parentPlayer)) {
	                    this.destroy();
	                }
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
	            if (this._players.length > 0) {
	                this.reset();
	                this._players[0].restart();
	            }
	        };
	        AnimationSequencePlayer.prototype.reset = function () { this._players.forEach(function (player) { return player.reset(); }); };
	        AnimationSequencePlayer.prototype.finish = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.finish(); });
	        };
	        AnimationSequencePlayer.prototype.destroy = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.destroy(); });
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
	                    var debugViewRootNodes = [];
	                    viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(getDebugNode(rootNode)); });
	                    debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
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
	                while (isPresent(componentView.declarationAppElement) &&
	                    componentView.type !== ViewType.COMPONENT) {
	                    componentView = componentView.declarationAppElement.parentView;
	                }
	                return isPresent(componentView.declarationAppElement) ?
	                    componentView.declarationAppElement.nativeElement :
	                    null;
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
	                    var refs = staticNodeInfo.refTokens;
	                    Object.keys(refs).forEach(function (refName) {
	                        var refToken = refs[refName];
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
	    var _UNDEFINED$1 = new Object();
	    var ElementInjector = (function (_super) {
	        __extends$15(ElementInjector, _super);
	        function ElementInjector(_view, _nodeIndex) {
	            _super.call(this);
	            this._view = _view;
	            this._nodeIndex = _nodeIndex;
	        }
	        ElementInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            var result = _UNDEFINED$1;
	            if (result === _UNDEFINED$1) {
	                result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED$1);
	            }
	            if (result === _UNDEFINED$1) {
	                result = this._view.parentInjector.get(token, notFoundValue);
	            }
	            return result;
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
	     * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	     *
	     */
	    var AppView = (function () {
	        function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
	            this.clazz = clazz;
	            this.componentType = componentType;
	            this.type = type;
	            this.viewUtils = viewUtils;
	            this.parentInjector = parentInjector;
	            this.declarationAppElement = declarationAppElement;
	            this.cdMode = cdMode;
	            this.contentChildren = [];
	            this.viewChildren = [];
	            this.viewContainerElement = null;
	            this.numberOfChecks = 0;
	            this.ref = new ViewRef_(this);
	            if (type === ViewType.COMPONENT || type === ViewType.HOST) {
	                this.renderer = viewUtils.renderComponent(componentType);
	            }
	            else {
	                this.renderer = declarationAppElement.parentView.renderer;
	            }
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
	        AppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	            this.context = context;
	            var projectableNodes;
	            switch (this.type) {
	                case ViewType.COMPONENT:
	                    projectableNodes = ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
	                    break;
	                case ViewType.EMBEDDED:
	                    projectableNodes = this.declarationAppElement.parentView.projectableNodes;
	                    break;
	                case ViewType.HOST:
	                    // Note: Don't ensure the slot count for the projectableNodes as we store
	                    // them only for the contained component view (which will later check the slot count...)
	                    projectableNodes = givenProjectableNodes;
	                    break;
	            }
	            this._hasExternalHostElement = isPresent(rootSelectorOrNode);
	            this.projectableNodes = projectableNodes;
	            return this.createInternal(rootSelectorOrNode);
	        };
	        /**
	         * Overwritten by implementations.
	         * Returns the AppElement for the host element for ViewType.HOST.
	         */
	        AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	        AppView.prototype.init = function (rootNodesOrAppElements, allNodes, disposables, subscriptions) {
	            this.rootNodesOrAppElements = rootNodesOrAppElements;
	            this.allNodes = allNodes;
	            this.disposables = disposables;
	            this.subscriptions = subscriptions;
	            if (this.type === ViewType.COMPONENT) {
	                // Note: the render nodes have been attached to their host element
	                // in the ViewFactory already.
	                this.declarationAppElement.parentView.viewChildren.push(this);
	                this.dirtyParentQueriesInternal();
	            }
	        };
	        AppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	            return this.injectorGetInternal(token, nodeIndex, notFoundResult);
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	            return notFoundResult;
	        };
	        AppView.prototype.injector = function (nodeIndex) {
	            if (isPresent(nodeIndex)) {
	                return new ElementInjector(this, nodeIndex);
	            }
	            else {
	                return this.parentInjector;
	            }
	        };
	        AppView.prototype.destroy = function () {
	            if (this._hasExternalHostElement) {
	                this.renderer.detachView(this.flatRootNodes);
	            }
	            else if (isPresent(this.viewContainerElement)) {
	                this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	            }
	            this._destroyRecurse();
	        };
	        AppView.prototype._destroyRecurse = function () {
	            if (this.cdMode === ChangeDetectorStatus.Destroyed) {
	                return;
	            }
	            var children = this.contentChildren;
	            for (var i = 0; i < children.length; i++) {
	                children[i]._destroyRecurse();
	            }
	            children = this.viewChildren;
	            for (var i = 0; i < children.length; i++) {
	                children[i]._destroyRecurse();
	            }
	            this.destroyLocal();
	            this.cdMode = ChangeDetectorStatus.Destroyed;
	        };
	        AppView.prototype.destroyLocal = function () {
	            var _this = this;
	            var hostElement = this.type === ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
	            for (var i = 0; i < this.disposables.length; i++) {
	                this.disposables[i]();
	            }
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                this.subscriptions[i].unsubscribe();
	            }
	            this.destroyInternal();
	            this.dirtyParentQueriesInternal();
	            if (this._animationContext) {
	                this._animationContext.onAllActiveAnimationsDone(function () { return _this.renderer.destroyView(hostElement, _this.allNodes); });
	            }
	            else {
	                this.renderer.destroyView(hostElement, this.allNodes);
	            }
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
	                this._animationContext.onAllActiveAnimationsDone(function () { return _this.renderer.detachView(_this.flatRootNodes); });
	            }
	            else {
	                this.renderer.detachView(this.flatRootNodes);
	            }
	        };
	        Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	            get: function () { return this.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "parent", {
	            get: function () {
	                return isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "flatRootNodes", {
	            get: function () { return flattenNestedViewRenderNodes(this.rootNodesOrAppElements); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "lastRootNode", {
	            get: function () {
	                var lastNode = this.rootNodesOrAppElements.length > 0 ?
	                    this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] :
	                    null;
	                return _findLastRenderNode(lastNode);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.dirtyParentQueriesInternal = function () { };
	        AppView.prototype.detectChanges = function (throwOnChange) {
	            var s = _scope_check(this.clazz);
	            if (this.cdMode === ChangeDetectorStatus.Checked ||
	                this.cdMode === ChangeDetectorStatus.Errored)
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
	        AppView.prototype.detectChangesInternal = function (throwOnChange) {
	            this.detectContentChildrenChanges(throwOnChange);
	            this.detectViewChildrenChanges(throwOnChange);
	        };
	        AppView.prototype.detectContentChildrenChanges = function (throwOnChange) {
	            for (var i = 0; i < this.contentChildren.length; ++i) {
	                var child = this.contentChildren[i];
	                if (child.cdMode === ChangeDetectorStatus.Detached)
	                    continue;
	                child.detectChanges(throwOnChange);
	            }
	        };
	        AppView.prototype.detectViewChildrenChanges = function (throwOnChange) {
	            for (var i = 0; i < this.viewChildren.length; ++i) {
	                var child = this.viewChildren[i];
	                if (child.cdMode === ChangeDetectorStatus.Detached)
	                    continue;
	                child.detectChanges(throwOnChange);
	            }
	        };
	        AppView.prototype.markContentChildAsMoved = function (renderAppElement) { this.dirtyParentQueriesInternal(); };
	        AppView.prototype.addToContentChildren = function (renderAppElement) {
	            renderAppElement.parentView.contentChildren.push(this);
	            this.viewContainerElement = renderAppElement;
	            this.dirtyParentQueriesInternal();
	        };
	        AppView.prototype.removeFromContentChildren = function (renderAppElement) {
	            ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
	            this.dirtyParentQueriesInternal();
	            this.viewContainerElement = null;
	        };
	        AppView.prototype.markAsCheckOnce = function () { this.cdMode = ChangeDetectorStatus.CheckOnce; };
	        AppView.prototype.markPathToRootAsCheckOnce = function () {
	            var c = this;
	            while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
	                if (c.cdMode === ChangeDetectorStatus.Checked) {
	                    c.cdMode = ChangeDetectorStatus.CheckOnce;
	                }
	                var parentEl = c.type === ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
	                c = isPresent(parentEl) ? parentEl.parentView : null;
	            }
	        };
	        AppView.prototype.eventHandler = function (cb) { return cb; };
	        AppView.prototype.throwDestroyedError = function (details) { throw new ViewDestroyedError(details); };
	        return AppView;
	    }());
	    var DebugAppView = (function (_super) {
	        __extends$14(DebugAppView, _super);
	        function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
	            _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
	            this.staticNodeDebugInfos = staticNodeDebugInfos;
	            this._currentDebugContext = null;
	        }
	        DebugAppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	            this._resetDebug();
	            try {
	                return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
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
	        DebugAppView.prototype.destroyLocal = function () {
	            this._resetDebug();
	            try {
	                _super.prototype.destroyLocal.call(this);
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
	            return function (event) {
	                _this._resetDebug();
	                try {
	                    return superHandler(event);
	                }
	                catch (e) {
	                    _this._rethrowWithContext(e);
	                    throw e;
	                }
	            };
	        };
	        return DebugAppView;
	    }(AppView));
	    function _findLastRenderNode(node) {
	        var lastNode;
	        if (node instanceof AppElement) {
	            var appEl = node;
	            lastNode = appEl.nativeElement;
	            if (isPresent(appEl.nestedViews)) {
	                // Note: Views might have no root nodes at all!
	                for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
	                    var nestedView = appEl.nestedViews[i];
	                    if (nestedView.rootNodesOrAppElements.length > 0) {
	                        lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
	                    }
	                }
	            }
	        }
	        else {
	            lastNode = node;
	        }
	        return lastNode;
	    }
	
	    var __core_private__ = {
	        isDefaultChangeDetectionStrategy: isDefaultChangeDetectionStrategy,
	        ChangeDetectorStatus: ChangeDetectorStatus,
	        constructDependencies: constructDependencies,
	        LifecycleHooks: LifecycleHooks,
	        LIFECYCLE_HOOKS_VALUES: LIFECYCLE_HOOKS_VALUES,
	        ReflectorReader: ReflectorReader,
	        CodegenComponentFactoryResolver: CodegenComponentFactoryResolver,
	        AppElement: AppElement,
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	var MainComponent = function () {
	    function MainComponent() {
	        _classCallCheck(this, MainComponent);
	    }
	
	    _createClass(MainComponent, [{
	        key: "ngAfterViewInit",
	        value: function ngAfterViewInit() {
	            $(document).ready(function () {
	                setTimeout(function () {
	                    // (<any>$('.button-collapse')).sideNav();
	                    // (<any>$('.parallax')).parallax();
	                }, 0);
	            });
	        }
	    }]);
	
	    return MainComponent;
	}();
	MainComponent = __decorate([core_1.Component({
	    selector: 'main-app',
	    template: "\n  <about></about>\n  <projects-component></projects-component>\n  <services-component></services-component>\n  <project-management></project-management>\n  <working-together></working-together>\n  "
	}), __metadata('design:paramtypes', [])], MainComponent);
	exports.MainComponent = MainComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }
/******/ ]);
//# sourceMappingURL=main.component.bundle.map