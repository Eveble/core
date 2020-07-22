import { ExtendableError } from './components/extendable-error';

/*
KERNEL ERRORS
*/
export class KernelError extends ExtendableError {}

export class UnavailableSerializerError extends KernelError {
  constructor() {
    super(
      `Serialization is unavailable outside on application environment.
      Define application before using any features related to serialization or set serializer on kernel by using <kernel.setSerializer()>`
    );
  }
}
export class UnavailableAsserterError extends KernelError {
  constructor() {
    super(
      `Assertion is unavailable outside on application environment. Define application before using any features related to assertion on entities or set asserter on kernel by using <kernel.setAsserter()>`
    );
  }
}

/*
TYPE ERRORS
*/
export class TypeError extends ExtendableError {}

export class TypeExistsError extends TypeError {
  constructor(source: string, typeName: string) {
    super(`${source}: type '${typeName}' is already registered`);
  }
}
export class TypeNotFoundError extends TypeError {
  constructor(source: string, typeName: string) {
    super(`${source}: type '${typeName}' not found`);
  }
}

export class UnregistrableTypeError extends TypeError {
  constructor(got: string) {
    super(`Type '${got}' must implement Serializable interface`);
  }
}
