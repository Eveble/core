import { expect } from 'chai';
import { PropTypes } from 'typend';
import {
  isSerializable,
  resolveSerializableFromPropType,
} from '../../../src/utils/helpers';
import { define } from '../../../src/decorators/define';
/* eslint-disable @typescript-eslint/no-empty-function */

describe('helpers', () => {
  @define('SerializableStub')
  class SerializableStub {
    typeName(): void {}

    toJSONValue(): void {}
  }

  describe('isSerializable', () => {
    it('returns true for defined(@define) class instances implementing Serializable interface', () => {
      @define('MySerialziable', { isRegistrable: false })
      class MySerializable extends SerializableStub {}

      expect(isSerializable(new MySerializable())).to.be.true;
    });

    it('returns false for not defined(@define) class instances that implementing Serializable interface', () => {
      class MySerializable extends SerializableStub {}

      expect(isSerializable(new MySerializable())).to.be.false;
    });

    it('returns false for nil', () => {
      expect(isSerializable(null)).to.be.false;
      expect(isSerializable(undefined)).to.be.false;
    });

    it('returns false for other arguments', () => {
      class InvalidSerializable {}
      expect(isSerializable(InvalidSerializable)).to.be.false;
    });
  });

  describe('resolveSerializableFromPropType', () => {
    it('resolves serializable type from root-level list', () => {
      const propType = PropTypes.arrayOf(SerializableStub);
      expect(resolveSerializableFromPropType(propType)).to.be.equal(
        SerializableStub
      );
    });

    it('resolves serializable type from root-level list with nested instance of', () => {
      const propType = PropTypes.arrayOf(
        PropTypes.instanceOf(SerializableStub)
      );
      expect(resolveSerializableFromPropType(propType)).to.be.equal(
        SerializableStub
      );
    });

    it('resolves serializable type from root-level optional list with nested instance of', () => {
      const propType = PropTypes.arrayOf(
        PropTypes.instanceOf(SerializableStub)
      ).isOptional;
      expect(resolveSerializableFromPropType(propType)).to.be.equal(
        SerializableStub
      );
    });

    it('returns undefined for non-list serializable types', () => {
      const propType = PropTypes.instanceOf(SerializableStub);
      expect(resolveSerializableFromPropType(propType)).to.be.undefined;
    });

    it('returns undefined for nil prop type', () => {
      expect(resolveSerializableFromPropType(null)).to.be.undefined;
      expect(resolveSerializableFromPropType(undefined)).to.be.undefined;
    });
  });
});
