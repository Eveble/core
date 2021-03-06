import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { Library } from '../../../src/components/library';
import { TypeExistsError, TypeNotFoundError } from '../../../src/errors';

chai.use(sinonChai);

describe(`Library`, () => {
  class MyType {
    key: string;
  }

  class MyOtherType {
    key: string;
  }

  describe('construction', () => {
    it('initializes with empty map of types', () => {
      const lib = new Library();
      expect(lib.getTypes()).to.be.instanceof(Map);
      expect(lib.getTypes()).to.be.empty;
    });

    it('initializes with default state', () => {
      const lib = new Library();
      expect(lib.isInState(Library.STATES.default)).to.be.true;
    });
  });

  describe('registration', () => {
    it('throws TypeExistsError if provided type is already registered on library', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(() => lib.registerType('MyType', MyOtherType)).to.throw(
        TypeExistsError,
        `Library: type 'MyType' is already registered`
      );
    });

    it('registers type', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(lib.getType('MyType')).to.be.equal(MyType);
    });

    it('allows for explicit override of existing type', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(lib.getType('MyType')).to.be.equal(MyType);
      expect(() => lib.overrideType('MyType', MyOtherType)).to.not.throw(
        TypeExistsError
      );
      expect(lib.getType('MyType')).to.be.equal(MyOtherType);
    });

    it('always override existing types while in override state', () => {
      const lib = new Library();
      lib.setState(Library.STATES.override);
      lib.registerType('MyType', MyType);
      expect(lib.getType('MyType')).to.be.equal(MyType);
      expect(() => lib.registerType('MyType', MyOtherType)).to.not.throw(
        TypeExistsError
      );
      expect(lib.getType('MyType')).to.be.equal(MyOtherType);
    });
  });

  describe('evaluation', () => {
    it('returns true if type is registered', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(lib.hasType('MyType')).to.be.true;
    });

    it('returns false if type is registered', () => {
      const lib = new Library();
      expect(lib.hasType('MyType')).to.be.false;
    });
  });

  describe('getters', () => {
    it('returns registered type', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(lib.getType('MyType')).to.be.equal(MyType);
    });

    it('throws TypeNotFoundError if type is not registered on library', () => {
      const lib = new Library();
      expect(() => lib.getTypeOrThrow('MyType')).to.throw(
        TypeNotFoundError,
        `Library: type 'MyType' not found`
      );
    });

    it('returns mappings of all registered types', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      lib.registerType('MyOtherType', MyOtherType);
      expect(lib.getTypes()).to.be.instanceof(Map);
      expect(lib.getTypes()).to.be.eql(
        new Map([
          ['MyType', MyType],
          ['MyOtherType', MyOtherType],
        ])
      );
    });
  });

  describe('mutators', () => {
    it('removes registered type', () => {
      const lib = new Library();
      lib.registerType('MyType', MyType);
      expect(lib.getType('MyType')).to.be.equal(MyType);
      lib.removeType('MyType');
      expect(lib.getType('MyType')).to.be.undefined;
    });
  });
});
