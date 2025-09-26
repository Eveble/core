import 'reflect-metadata';
import { types } from '../types';
export declare class Library {
    static STATES: {
        default: string;
        override: string;
    };
    protected state: types.State;
    protected types: Map<string, any>;
    constructor();
    registerType(typeName: types.TypeName, type: any, shouldOverride?: boolean): void;
    overrideType(typeName: types.TypeName, type: any): void;
    getType(typeName: types.TypeName): any | undefined;
    getTypeOrThrow(typeName: types.TypeName): any;
    getTypeOrFail(typeName: types.TypeName): any;
    getTypes(): Map<string, any>;
    hasType(typeName: types.TypeName): boolean;
    removeType(typeName: types.TypeName): void;
    isInState(state: types.State): boolean;
    setState(state: types.State): void;
    clear(): void;
}
