---
id: "types"
title: "@eveble/core"
sidebar_label: "README"
---

## Index

### Type aliases

* [Asserter](types.md#asserter)
* [Assertion](types.md#assertion)
* [Converter](types.md#converter)
* [Describer](types.md#describer)
* [ErrorProps](types.md#errorprops)
* [Injector](types.md#injector)
* [KernelConfig](types.md#kernelconfig)
* [Library](types.md#library)
* [Serializable](types.md#serializable)
* [Serializer](types.md#serializer)
* [State](types.md#state)
* [TypeName](types.md#typename)
* [Validator](types.md#validator)

## Type aliases

###  Asserter

Ƭ **Asserter**: *any*

___

###  Assertion

Ƭ **Assertion**: *any*

___

###  Converter

Ƭ **Converter**: *any*

___

###  Describer

Ƭ **Describer**: *any*

___

###  ErrorProps

Ƭ **ErrorProps**: *object*

#### Type declaration:

* **code**? : *number*

* **message**: *string*

* **name**? : *string*

* **stack**? : *string*

___

###  Injector

Ƭ **Injector**: *inversifyTypes.Container*

___

###  KernelConfig

Ƭ **KernelConfig**: *object*

#### Type declaration:

* **conversion**(): *object*

  * **type**: *"manual" | "runtime"*

* **describer**(): *object*

  * **formatting**: *"default" | "compact" | "debug"*

* **validation**(): *object*

  * **type**: *"manual" | "runtime"*

___

###  Library

Ƭ **Library**: *any*

___

###  Serializable

Ƭ **Serializable**: *any*

___

###  Serializer

Ƭ **Serializer**: *any*

___

###  State

Ƭ **State**: *string | number | undefined*

___

###  TypeName

Ƭ **TypeName**: *string*

___

###  Validator

Ƭ **Validator**: *any*
