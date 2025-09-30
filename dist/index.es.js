export { types as CoreTypes, types } from 'util';
import { isObject, isString, isEmpty } from 'lodash';
import getenv from 'getenv';
import 'reflect-metadata';
import { injectable } from '@parisholley/inversify-async';
import { getTypeName, isMocha, isMochaInWatchMode, setTypeName } from '@eveble/helpers';
import { typend, isType, Optional, List, InstanceOf, Type } from 'typend';
export { Type } from 'typend';

const BINDINGS = {
    Injector: Symbol.for('Injector'),
    Converter: Symbol.for('Converter'),
    Library: Symbol.for('Library'),
    Validator: Symbol.for('Validator'),
    Describer: Symbol.for('Describer'),
    Serializer: Symbol.for('Serializer'),
    Asserter: Symbol.for('Asserter'),
};

const DEFAULT_PROPS_KEY = Symbol('eveble:containers:default-props');
const SERIALIZABLE_LIST_PROPS_KEY = Symbol('eveble:container:serializable-list-props');
const METADATA_KEYS = {
    DEFAULT_PROPS_KEY,
    SERIALIZABLE_LIST_PROPS_KEY,
};

class ExtendableError extends Error {
    constructor(messageOrProps) {
        const props = isObject(messageOrProps)
            ? messageOrProps
            : { message: messageOrProps };
        props.message = props.message
            ? props.message
            : ExtendableError.prototype.message || '';
        const processedProps = props;
        super();
        this.initializeProperties(processedProps.message);
        const errorProps = this.fillErrorProps(processedProps);
        Object.assign(this, errorProps);
    }
    initializeProperties(message) {
        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: getenv.bool('EVEBLE_SHOW_INTERNALS', false),
            value: message,
            writable: true,
        });
        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: getenv.bool('EVEBLE_SHOW_INTERNALS', false),
            value: this.constructor.name,
            writable: true,
        });
        if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
            return;
        }
        Object.defineProperty(this, 'stack', {
            configurable: true,
            enumerable: getenv.bool('EVEBLE_SHOW_INTERNALS', false),
            value: new Error(message).stack,
            writable: true,
        });
    }
    fillErrorProps(props) {
        const errorProps = props;
        errorProps.message = props.message;
        errorProps.name = this.constructor.name;
        const error = Error.call(this, props.message);
        error.name = this.constructor.name;
        if (error.stack !== undefined) {
            errorProps.stack = error.stack;
        }
        return errorProps;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

class KernelError extends ExtendableError {
}
class UnavailableSerializerError extends KernelError {
    constructor() {
        super(`Serialization is unavailable outside on application environment.
      Define application before using any features related to serialization or set serializer on kernel by using <kernel.setSerializer()>`);
    }
}
class UnavailableAsserterError extends KernelError {
    constructor() {
        super(`Assertion is unavailable outside on application environment. Define application before using any features related to assertion on entities or set asserter on kernel by using <kernel.setAsserter()>`);
    }
}
class TypeError extends ExtendableError {
}
class TypeExistsError extends TypeError {
    constructor(source, typeName) {
        super(`${source}: type '${typeName}' is already registered`);
    }
}
class TypeNotFoundError extends TypeError {
    constructor(source, typeName) {
        super(`${source}: type '${typeName}' not found`);
    }
}
class UnregistrableTypeError extends TypeError {
    constructor(got) {
        super(`Type '${got}' must implement Serializable interface`);
    }
}

var Library_1;
let Library = Library_1 = class Library {
    constructor() {
        this.types = new Map();
        this.setState(Library_1.STATES.default);
    }
    registerType(typeName, type, shouldOverride = false) {
        if (this.hasType(typeName)) {
            if (!shouldOverride && !this.isInState(Library_1.STATES.override)) {
                throw new TypeExistsError(getTypeName(this.constructor), typeName);
            }
        }
        this.types.set(typeName, type);
    }
    overrideType(typeName, type) {
        this.registerType(typeName, type, true);
    }
    getType(typeName) {
        return this.types.get(typeName);
    }
    getTypeOrThrow(typeName) {
        const type = this.types.get(typeName);
        if (type === undefined) {
            throw new TypeNotFoundError(getTypeName(this.constructor), typeName);
        }
        return type;
    }
    getTypeOrFail(typeName) {
        return this.getTypeOrThrow(typeName);
    }
    getTypes() {
        return this.types;
    }
    hasType(typeName) {
        return this.types.has(typeName);
    }
    removeType(typeName) {
        this.types.delete(typeName);
    }
    isInState(state) {
        return this.state === state;
    }
    setState(state) {
        this.state = state;
    }
    clear() {
        this.types.clear();
    }
};
Library.STATES = {
    default: 'default',
    override: 'override',
};
Library = Library_1 = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], Library);

class Kernel {
    constructor(converter, validator, describer, library, config) {
        this._converter = converter;
        this._validator = validator;
        this._describer = describer;
        this._library = library;
        this._config = config;
        this.describer.setFormatting(this._config.describer.formatting);
    }
    get converter() {
        var _a, _b;
        return ((_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.get(BINDINGS.Converter)) !== null && _b !== void 0 ? _b : this._converter);
    }
    get validator() {
        var _a, _b;
        return ((_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.get(BINDINGS.Validator)) !== null && _b !== void 0 ? _b : this._validator);
    }
    get describer() {
        var _a, _b;
        return ((_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.get(BINDINGS.Describer)) !== null && _b !== void 0 ? _b : this._describer);
    }
    get library() {
        var _a, _b;
        return (_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.get(BINDINGS.Library)) !== null && _b !== void 0 ? _b : this._library;
    }
    get serializer() {
        var _a, _b;
        if ((_a = this.injector) === null || _a === void 0 ? void 0 : _a.isBound(BINDINGS.Serializer)) {
            return (_b = this.injector) === null || _b === void 0 ? void 0 : _b.get(BINDINGS.Serializer);
        }
        if (this._serializer !== undefined) {
            return this._serializer;
        }
        throw new UnavailableSerializerError();
    }
    get asserter() {
        var _a, _b;
        if ((_a = this.injector) === null || _a === void 0 ? void 0 : _a.isBound(BINDINGS.Asserter)) {
            return (_b = this.injector) === null || _b === void 0 ? void 0 : _b.get(BINDINGS.Asserter);
        }
        if (this._asserter !== undefined) {
            return this._asserter;
        }
        throw new UnavailableAsserterError();
    }
    setConverter(converter) {
        var _a, _b;
        this._converter = converter;
        (_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.rebind(BINDINGS.Converter)) === null || _b === void 0 ? void 0 : _b.toConstantValue(converter);
    }
    setValidator(validator) {
        var _a, _b;
        this._validator = validator;
        (_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.rebind(BINDINGS.Validator)) === null || _b === void 0 ? void 0 : _b.toConstantValue(validator);
    }
    setDescriber(describer) {
        var _a, _b;
        this._describer = describer;
        (_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.rebind(BINDINGS.Describer)) === null || _b === void 0 ? void 0 : _b.toConstantValue(describer);
    }
    setLibrary(library) {
        var _a, _b;
        this._library = library;
        (_b = (_a = this.injector) === null || _a === void 0 ? void 0 : _a.rebind(BINDINGS.Library)) === null || _b === void 0 ? void 0 : _b.toConstantValue(library);
    }
    setSerializer(serializer) {
        var _a, _b, _c;
        this._serializer = serializer;
        if ((_a = this.injector) === null || _a === void 0 ? void 0 : _a.isBound(BINDINGS.Serializer)) {
            (_c = (_b = this.injector) === null || _b === void 0 ? void 0 : _b.rebind(BINDINGS.Serializer)) === null || _c === void 0 ? void 0 : _c.toConstantValue(serializer);
        }
    }
    setAsserter(asserter) {
        var _a, _b, _c;
        this._asserter = asserter;
        if ((_a = this.injector) === null || _a === void 0 ? void 0 : _a.isBound(BINDINGS.Asserter)) {
            (_c = (_b = this.injector) === null || _b === void 0 ? void 0 : _b.rebind(BINDINGS.Asserter)) === null || _c === void 0 ? void 0 : _c.toConstantValue(asserter);
        }
    }
    setInjector(injector) {
        this.injector = injector;
    }
    isConverting() {
        var _a, _b;
        return ((_b = (_a = this._config) === null || _a === void 0 ? void 0 : _a.conversion) === null || _b === void 0 ? void 0 : _b.type) === 'runtime';
    }
    isValidating() {
        var _a, _b;
        return ((_b = (_a = this._config) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.type) === 'runtime';
    }
    disableValidation() {
        this._config.validation.type = 'manual';
    }
    enableValidation() {
        this._config.validation.type = 'runtime';
    }
}
const library = new Library();
if (isMocha(global) && isMochaInWatchMode(process)) {
    library.setState(Library.STATES.override);
}
const config = {
    conversion: {
        type: getenv.string('EVEBLE_CONVERSION_TYPE', 'runtime'),
    },
    validation: {
        type: getenv.string('EVEBLE_VALIDATION_TYPE', 'runtime'),
    },
    describer: {
        formatting: getenv.string('EVEBLE_DESCRIBER_FORMATTING', 'default'),
    },
};
const kernel = new Kernel(typend.converter, typend, typend.describer, library, config);

function isSerializable(arg) {
    if (arg == null)
        return false;
    return (typeof arg.typeName === 'function' &&
        typeof arg.toJSONValue === 'function' &&
        isType(arg.constructor));
}
function resolveSerializableFromPropType(propType) {
    if (propType == null)
        return undefined;
    let type = propType;
    if (type instanceof Optional) {
        type = type[0];
    }
    if (type instanceof List) {
        type = type[0];
    }
    else {
        return undefined;
    }
    if (type instanceof InstanceOf) {
        if (type[0] != null &&
            type[0].prototype !== undefined &&
            isSerializable(type[0].prototype)) {
            type = type[0];
        }
        else {
            return undefined;
        }
    }
    return type;
}

class InvalidTypeNameError extends ExtendableError {
    constructor(invalidTypeName) {
        super(`Expected type name argument to be a String, got ${invalidTypeName}`);
    }
}
Type.beforeHook = function (_target, _reflectedType, ...args) {
    const name = args[0];
    if (name !== undefined && !isString(name)) {
        throw new InvalidTypeNameError(kernel.describer.describe(name));
    }
};
Type.afterHook = function (target, reflectedType, ...args) {
    const name = args[0];
    let typeName;
    if (name !== undefined) {
        typeName = name;
        setTypeName(target, name);
    }
    else {
        typeName = target.name;
    }
    const options = args[1];
    const isRegistrable = options === undefined || (options === null || options === void 0 ? void 0 : options.isRegistrable) !== false;
    if (isRegistrable && isSerializable(target.prototype)) {
        kernel.library.registerType(typeName, target);
    }
    if (reflectedType.type === undefined) {
        reflectedType.type = target;
    }
    const defaults = {};
    const classPattern = kernel.converter.convert(reflectedType);
    if (classPattern === undefined && classPattern.properties === undefined) {
        return;
    }
    const propTypes = classPattern.properties;
    for (const [key, propType] of Object.entries(propTypes)) {
        if (typeof propType.hasInitializer === 'function' &&
            propType.hasInitializer()) {
            defaults[key] = propType.getInitializer();
        }
    }
    if (!isEmpty(defaults)) {
        Reflect.defineMetadata(DEFAULT_PROPS_KEY, defaults, target);
    }
    const serializableListProps = {};
    for (const key of Object.keys(propTypes)) {
        const serializable = resolveSerializableFromPropType(propTypes[key]);
        if (serializable !== undefined)
            serializableListProps[key] = serializable;
    }
    Reflect.defineMetadata(SERIALIZABLE_LIST_PROPS_KEY, serializableListProps, target);
};

export { BINDINGS, BINDINGS as CORE_BINDINGS, METADATA_KEYS as CORE_METADATA_KEYS, ExtendableError, InvalidTypeNameError, Kernel, KernelError, Library, METADATA_KEYS, TypeError, TypeExistsError, TypeNotFoundError, UnavailableAsserterError, UnavailableSerializerError, UnregistrableTypeError, isSerializable, kernel, resolveSerializableFromPropType };
