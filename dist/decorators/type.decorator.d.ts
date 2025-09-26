import 'reflect-metadata';
import { Type } from 'typend';
import { ExtendableError } from '../components/extendable-error';
export declare class InvalidTypeNameError extends ExtendableError {
    constructor(invalidTypeName: any);
}
export { Type };
