import { Container } from 'inversify';
export declare namespace types {
    type State = string | number | undefined;
    type TypeName = string;
    type ErrorProps = {
        name?: string;
        message: string;
        stack?: string;
        code?: number;
    };
    type Injector = Container;
    type Validator = any;
    type Describer = any;
    type Converter = any;
    type Library = any;
    type Serializer = any;
    type Assertion = any;
    type Asserter = any;
    type Serializable = any;
    type KernelConfig = {
        conversion: {
            type: 'manual' | 'runtime';
        };
        validation: {
            type: 'manual' | 'runtime';
        };
        describer: {
            formatting: 'default' | 'compact' | 'debug';
        };
    };
}
