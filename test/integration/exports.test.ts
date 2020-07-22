import { expect } from 'chai';
import { define } from 'typend';
import { ExtendableError } from '../../src/components/extendable-error';
import { Library } from '../../src/components/library';
import { kernel, Kernel } from '../../src/kernel';
import { InvalidTypeNameError } from '../../src/decorators/define';
import {
  isSerializable,
  resolveSerializableFromPropType,
} from '../../src/utils/helpers';
import {
  TypeExistsError,
  TypeNotFoundError,
  UnregistrableTypeError,
  TypeError,
  KernelError,
  UnavailableSerializerError,
  UnavailableAsserterError,
} from '../../src/errors';

import {
  // Components
  ExtendableError as ExtendableErrorExported,
  Library as LibraryExported,
  // Core
  kernel as kernelExported,
  Kernel as KernelExported,
  // Decorators
  define as defineExported,
  // Helpers
  isSerializable as isSerializableExported,
  resolveSerializableFromPropType as resolveSerializableFromPropTypeExported,
  // Errors
  KernelError as KernelErrorExported,
  UnavailableSerializerError as UnavailableSerializerErrorExported,
  UnavailableAsserterError as UnavailableAsserterErrorExported,
  InvalidTypeNameError as InvalidTypeNameErrorExported,
  TypeExistsError as TypeExistsErrorExported,
  TypeNotFoundError as TypeNotFoundErrorExported,
  UnregistrableTypeError as UnregistrableTypeErrorExported,
  TypeError as TypeErrorExported,
} from '../../src/index';

describe('exports', function () {
  describe('decorators', () => {
    it('define', () => {
      expect(defineExported).to.be.equal(define);
    });
  });

  describe('core', () => {
    it('kernel', () => {
      expect(kernel).to.be.equal(kernelExported);
    });
    it('Kernel', () => {
      expect(Kernel).to.be.equal(KernelExported);
    });
  });

  describe('helpers', () => {
    it('isSerializable', () => {
      expect(isSerializableExported).to.be.equal(isSerializable);
    });
    it('resolveSerializableFromPropType', () => {
      expect(resolveSerializableFromPropTypeExported).to.be.equal(
        resolveSerializableFromPropType
      );
    });
  });

  describe('components', () => {
    it('ExtendableError', () => {
      expect(ExtendableErrorExported).to.be.equal(ExtendableError);
    });
    it('Library', () => {
      expect(LibraryExported).to.be.equal(Library);
    });
  });

  describe('errors', () => {
    it('KernelError', () => {
      expect(KernelErrorExported).to.be.equal(KernelError);
    });
    it('UnavailableSerializerError', () => {
      expect(UnavailableSerializerErrorExported).to.be.equal(
        UnavailableSerializerError
      );
    });
    it('UnavailableAsserterError', () => {
      expect(UnavailableAsserterErrorExported).to.be.equal(
        UnavailableAsserterError
      );
    });
    it('InvalidTypeNameError', () => {
      expect(InvalidTypeNameErrorExported).to.be.equal(InvalidTypeNameError);
    });
    it('TypeExistsError', () => {
      expect(TypeExistsErrorExported).to.be.equal(TypeExistsError);
    });
    it('TypeNotFoundError', () => {
      expect(TypeNotFoundErrorExported).to.be.equal(TypeNotFoundError);
    });
    it('UnregistrableTypeError', () => {
      expect(UnregistrableTypeErrorExported).to.be.equal(
        UnregistrableTypeError
      );
    });
    it('TypeError', () => {
      expect(TypeErrorExported).to.be.equal(TypeError);
    });
  });
});
