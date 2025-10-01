import { Container } from 'inversify';
/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts
that would made naming just hard.
*/
export namespace types {
  export type State = string | number | undefined;

  export type TypeName = string;

  export type ErrorProps = {
    name?: string;
    message: string;
    stack?: string;
    code?: number;
  };

  // Stub interfaces so there is no code duplication/mismatch with Eveble
  export type Injector = Container;

  export type Validator = any;

  export type Describer = any;

  export type Converter = any;

  export type Library = any;

  export type Serializer = any;

  export type Assertion = any;

  export type Asserter = any;

  export type Serializable = any;

  export type KernelConfig = {
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
