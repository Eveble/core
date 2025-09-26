import { ExtendableError } from './components/extendable-error';
export declare class KernelError extends ExtendableError {
}
export declare class UnavailableSerializerError extends KernelError {
    constructor();
}
export declare class UnavailableAsserterError extends KernelError {
    constructor();
}
export declare class TypeError extends ExtendableError {
}
export declare class TypeExistsError extends TypeError {
    constructor(source: string, typeName: string);
}
export declare class TypeNotFoundError extends TypeError {
    constructor(source: string, typeName: string);
}
export declare class UnregistrableTypeError extends TypeError {
    constructor(got: string);
}
