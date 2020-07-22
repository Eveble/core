---
id: "kernel"
title: "Kernel"
sidebar_label: "Kernel"
---

## Hierarchy

* **Kernel**

## Index

### Constructors

* [constructor](kernel.md#constructor)

### Properties

* [injector](kernel.md#optional-injector)

### Accessors

* [asserter](kernel.md#asserter)
* [converter](kernel.md#converter)
* [describer](kernel.md#describer)
* [library](kernel.md#library)
* [serializer](kernel.md#serializer)
* [validator](kernel.md#validator)

### Methods

* [disableValidation](kernel.md#disablevalidation)
* [enableValidation](kernel.md#enablevalidation)
* [isConverting](kernel.md#isconverting)
* [isValidating](kernel.md#isvalidating)
* [setAsserter](kernel.md#setasserter)
* [setConverter](kernel.md#setconverter)
* [setDescriber](kernel.md#setdescriber)
* [setInjector](kernel.md#setinjector)
* [setLibrary](kernel.md#setlibrary)
* [setSerializer](kernel.md#setserializer)
* [setValidator](kernel.md#setvalidator)

## Constructors

###  constructor

\+ **new Kernel**(`converter`: [Converter](../modules/types.md#converter), `validator`: [Validator](../modules/types.md#validator), `describer`: [Describer](../modules/types.md#describer), `library`: [Library](../modules/types.md#library), `config`: [KernelConfig](../modules/types.md#kernelconfig)): *[Kernel](kernel.md)*

Creates an instance of Kernel.
Creates an instance of Kernel.

**`remarks`** 
Allows to have a single point of entry for low level components of the framework.
Most are used on runtime, and would as constructor dependencies/property dependencies -
cause a lot of unnecessary complexity on construction or initialization of components.

**`remarks`** 
Allows to have a single point of entry for low level components of the framework.
Most are used on runtime, and would as constructor dependencies/property dependencies -
cause a lot of unnecessary complexity on construction or initialization of components.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`converter` | [Converter](../modules/types.md#converter) | `Converter` implementation. |
`validator` | [Validator](../modules/types.md#validator) | `Validator` implementation. |
`describer` | [Describer](../modules/types.md#describer) | `Describer` implementation. |
`library` | [Library](../modules/types.md#library) | `Library` implementation. |
`config` | [KernelConfig](../modules/types.md#kernelconfig) | Kernel configuration.  |

**Returns:** *[Kernel](kernel.md)*

## Properties

### `Optional` injector

• **injector**? : *[Injector](../modules/types.md#injector)*

## Accessors

###  asserter

• **get asserter**(): *[Asserter](../modules/types.md#asserter)*

Returns asserter assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Asserter](../modules/types.md#asserter)*

Instance implementing `types.Asserter` interface.

___

###  converter

• **get converter**(): *[Converter](../modules/types.md#converter)*

Returns converter assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Converter](../modules/types.md#converter)*

Instance implementing `types.Converter` interface.

___

###  describer

• **get describer**(): *[Describer](../modules/types.md#describer)*

Returns describer assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Describer](../modules/types.md#describer)*

Instance implementing `types.Describer` interface.

___

###  library

• **get library**(): *[Library](../modules/types.md#library)*

Returns library assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Library](../modules/types.md#library)*

Instance implementing `types.Library` interface.

___

###  serializer

• **get serializer**(): *[Serializer](../modules/types.md#serializer)*

Returns serializer assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Serializer](../modules/types.md#serializer)*

Instance implementing `types.Serializer` interface.

___

###  validator

• **get validator**(): *[Validator](../modules/types.md#validator)*

Returns validator assigned to Kernel or one from IoC container(if container is assigned to Kernel).

**Returns:** *[Validator](../modules/types.md#validator)*

Instance implementing `types.Validator` interface.

## Methods

###  disableValidation

▸ **disableValidation**(): *void*

Disables validation.

**Returns:** *void*

___

###  enableValidation

▸ **enableValidation**(): *void*

Enable validation.

**Returns:** *void*

___

###  isConverting

▸ **isConverting**(): *boolean*

Evaluates if conversion is done on runtime.

**Returns:** *boolean*

Returns `true` if conversion is done on runtime, else `false`.

___

###  isValidating

▸ **isValidating**(): *boolean*

Evaluates if validation is done on runtime.

**Returns:** *boolean*

Returns `true` if validation is done on runtime, else `false`.

___

###  setAsserter

▸ **setAsserter**(`asserter`: [Asserter](../modules/types.md#asserter)): *void*

Sets asserter on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asserter` | [Asserter](../modules/types.md#asserter) | Instance implementing `Asserter` interface.  |

**Returns:** *void*

___

###  setConverter

▸ **setConverter**(`converter`: [Converter](../modules/types.md#converter)): *void*

Sets converter on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`converter` | [Converter](../modules/types.md#converter) | Instance implementing `Converter` interface.  |

**Returns:** *void*

___

###  setDescriber

▸ **setDescriber**(`describer`: [Describer](../modules/types.md#describer)): *void*

Sets describer on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`describer` | [Describer](../modules/types.md#describer) | Instance implementing `Describer` interface.  |

**Returns:** *void*

___

###  setInjector

▸ **setInjector**(`injector`: [Injector](../modules/types.md#injector)): *void*

Sets the IoC container on Kernel.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`injector` | [Injector](../modules/types.md#injector) | IoC container implementing `Container` interface.  |

**Returns:** *void*

___

###  setLibrary

▸ **setLibrary**(`library`: [Library](../modules/types.md#library)): *void*

Sets library on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`library` | [Library](../modules/types.md#library) | Instance implementing `Library` interface.  |

**Returns:** *void*

___

###  setSerializer

▸ **setSerializer**(`serializer`: [Serializer](../modules/types.md#serializer)): *void*

Sets serializer on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serializer` | [Serializer](../modules/types.md#serializer) | Instance implementing `Serializer` interface.  |

**Returns:** *void*

___

###  setValidator

▸ **setValidator**(`validator`: [Validator](../modules/types.md#validator)): *void*

Sets validator on Kernel and IoC container(if container is assigned to Kernel).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validator` | [Validator](../modules/types.md#validator) | Instance implementing `Validator` interface.  |

**Returns:** *void*
