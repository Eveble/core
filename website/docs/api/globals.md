---
id: "globals"
title: "@eveble/core"
sidebar_label: "Globals"
---

## Index

### Namespaces

* [types](modules/types.md)

### Classes

* [ExtendableError](classes/extendableerror.md)
* [InvalidTypeNameError](classes/invalidtypenameerror.md)
* [Kernel](classes/kernel.md)
* [KernelError](classes/kernelerror.md)
* [Library](classes/library.md)
* [TypeError](classes/typeerror.md)
* [TypeExistsError](classes/typeexistserror.md)
* [TypeNotFoundError](classes/typenotfounderror.md)
* [UnavailableAsserterError](classes/unavailableassertererror.md)
* [UnavailableSerializerError](classes/unavailableserializererror.md)
* [UnregistrableTypeError](classes/unregistrabletypeerror.md)

### Variables

* [DEFAULT_PROPS_KEY](globals.md#const-default_props_key)
* [SERIALIZABLE_LIST_PROPS_KEY](globals.md#const-serializable_list_props_key)
* [kernel](globals.md#const-kernel)
* [library](globals.md#const-library)

### Functions

* [isSerializable](globals.md#isserializable)
* [resolveSerializableFromPropType](globals.md#resolveserializablefromproptype)

### Object literals

* [BINDINGS](globals.md#const-bindings)
* [config](globals.md#const-config)

## Variables

### `Const` DEFAULT_PROPS_KEY

• **DEFAULT_PROPS_KEY**: *keyof symbol* = Symbol(
  'eveble:containers:default-props'
)

___

### `Const` SERIALIZABLE_LIST_PROPS_KEY

• **SERIALIZABLE_LIST_PROPS_KEY**: *keyof symbol* = Symbol(
  'eveble:container:serializable-list-props'
)

___

### `Const` kernel

• **kernel**: *Kernel‹›* = new Kernel(
  typend.converter,
  typend,
  typend.describer,
  library,
  config
)

___

### `Const` library

• **library**: *Library‹›* = new Library()

## Functions

###  isSerializable

▸ **isSerializable**(`arg`: any): *boolean*

Evaluates if provided argument is serialziable i.e. at current time implements  `Ejsonable` implementation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | **Instance** of evaluated argument. |

**Returns:** *boolean*

Returns `true` if provided argument is implementing `Ejsonable` interface, else `false`.

___

###  resolveSerializableFromPropType

▸ **resolveSerializableFromPropType**(`propType`: any): *[Serializable](modules/types.md#serializable) | undefined*

Resolves `Serializable` from prop type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`propType` | any | Property type for converted class type. |

**Returns:** *[Serializable](modules/types.md#serializable) | undefined*

`Serializable` from prop type, else if not present - `undefined`.

## Object literals

### `Const` BINDINGS

### ▪ **BINDINGS**: *object*

###  Asserter

• **Asserter**: *symbol* = Symbol.for('Asserter')

###  Converter

• **Converter**: *symbol* = Symbol.for('Converter')

###  Describer

• **Describer**: *symbol* = Symbol.for('Describer')

###  Injector

• **Injector**: *symbol* = Symbol.for('Injector')

###  Library

• **Library**: *symbol* = Symbol.for('Library')

###  Serializer

• **Serializer**: *symbol* = Symbol.for('Serializer')

###  Validator

• **Validator**: *symbol* = Symbol.for('Validator')

___

### `Const` config

### ▪ **config**: *object*

▪ **conversion**: *object*

* **type**: *"manual" | "runtime"* = getenv.string('EVEBLE_CONVERSION_TYPE', 'runtime') as
      | 'runtime'
      | 'manual'

▪ **describer**: *object*

* **formatting**: *"default" | "compact" | "debug"* = getenv.string('EVEBLE_DESCRIBER_FORMATTING', 'default') as
      | 'default'
      | 'compact'
      | 'debug'

▪ **validation**: *object*

* **type**: *"manual" | "runtime"* = getenv.string('EVEBLE_VALIDATION_TYPE', 'runtime') as
      | 'runtime'
      | 'manual'
