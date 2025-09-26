import 'reflect-metadata';
import chai, { expect } from 'chai';
import { getTypeName } from '@eveble/helpers';
import { stubInterface } from 'ts-sinon';
import sinonChai from 'sinon-chai';
// import { Type } from 'typend';
import {
  InvalidTypeNameError,
  Type,
} from '../../../src/decorators/type.decorator';
import { kernel } from '../../../src/kernel';
import { types } from '../../../src/types';
import { SERIALIZABLE_LIST_PROPS_KEY } from '../../../src/constants/metadata-keys';

chai.use(sinonChai);

describe(`Type`, () => {
  let originalLibrary: any;
  let library: any;

  before(() => {
    originalLibrary = kernel.library;
  });

  beforeEach(() => {
    library = stubInterface<types.Library>();
    kernel.setLibrary(library);
  });

  after(() => {
    kernel.setLibrary(originalLibrary);
  });

  // Stub EJSONable interface(currently used serializer is EJSON) from @eveble/eveble
  class Serializable {
    typeName(): types.TypeName {
      return 'type-name';
    }

    toJSONValue(): Record<string, any> {
      return {};
    }
  }

  describe('hooks', () => {
    describe('beforeType', () => {
      it('throws InvalidTypeNameError if invalid type name is passed', () => {
        const fn = (): void => {
          @Type(1234)
          class MyType {}
          new MyType();
        };

        expect(() => fn()).to.throw(
          InvalidTypeNameError,
          `Expected type name argument to be a String, got Number(1234)`
        );
      });
    });
  });

  describe('afterType', () => {
    it('sets the optional type name for type', () => {
      @Type('Namespace.MyType')
      class MyType {
        key: string;
      }
      expect(getTypeName(MyType)).to.be.equal('Namespace.MyType');
    });

    describe('registration', () => {
      it('registers serializable type', () => {
        @Type('MySerializable')
        class MySerializable extends Serializable {
          name: string;

          constructor(props: any) {
            super();
            Object.assign(this, props);
          }
        }

        new MySerializable({});

        expect(library.registerType).to.be.called;

        const [registeredName, RegisteredClass] =
          library.registerType.getCall(0).args;

        // Test the name
        expect(registeredName).to.equal('MySerializable');

        // Test that it's a function (constructor)
        expect(RegisteredClass).to.be.a('function');
        expect(RegisteredClass.name).to.equal('MySerializable');

        // Test instantiation and behavior
        const instance = new RegisteredClass({ name: 'test' });
        expect(instance.name).to.equal('test');
        expect(instance).to.be.instanceOf(Serializable);
      });

      it('omits registration of serializable type if isRegistrable options is set to false', () => {
        @Type('MySerializable', { isRegistrable: false })
        class MySerializable extends Serializable {}
        new MySerializable();
        expect(library.registerType).to.not.be.called;
      });

      it('skips registration on non-serializable types', () => {
        @Type('MyStruct')
        class MyStruct {}
        new MyStruct();
        expect(library.registerType).to.not.be.called;
      });

      it(`ensures that the property initializers are working`, () => {
        @Type('MyClass')
        class MyClass extends Serializable {
          stringKey = 'my-string';

          numberKey = 1337;
        }
        expect(new MyClass()).to.be.eql({
          stringKey: 'my-string',
          numberKey: 1337,
        });
      });

      it(`sets the serializable lists for later use for performance reasons`, () => {
        @Type('Employee', { isRegistrable: false })
        class Employee extends Serializable {
          id: string;
        }

        @Type('Car', { isRegistrable: false })
        class Car extends Serializable {
          plate: string;
        }

        @Type('Company', { isRegistrable: false })
        class Company extends Serializable {
          employee: Employee[];

          fleet: Car[];
        }
        expect(
          Reflect.getOwnMetadata(SERIALIZABLE_LIST_PROPS_KEY, Company)
        ).to.be.eql({
          employee: Employee,
          fleet: Car,
        });
      });
    });
  });
});
