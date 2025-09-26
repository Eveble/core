import { Optional, List, InstanceOf, isType } from 'typend';
import { types } from '../types';

/**
 * Evaluates if provided argument is serialziable i.e. at current time implements  `Ejsonable` implementation.
 * @param arg - **Instance** of evaluated argument.
 * @returns Returns `true` if provided argument is implementing `Ejsonable` interface, else `false`.
 */
export function isSerializable(arg: any): boolean {
  if (arg == null) return false;
  return (
    // Matches Ejsonable type from Eveble
    typeof arg.typeName === 'function' &&
    typeof arg.toJSONValue === 'function' &&
    isType(arg.constructor)
  );
}

/**
 * Resolves `Serializable` from prop type.
 * @param propType - Property type for converted class type.
 * @returns `Serializable` from prop type, else if not present - `undefined`.
 */
export function resolveSerializableFromPropType(
  propType: any
): types.Serializable | undefined {
  if (propType == null) return undefined;

  let type = propType;
  // PropTypes.arrayOf(Serializable).isOptional
  if (type instanceof Optional) {
    type = type[0];
  }

  if (type instanceof List) {
    type = type[0];
  } else {
    // [!] Unwrap only array of Serializables
    return undefined;
  }

  // Unwrap only Serializable from ProtoType.instanceOf(Serializable)
  if (type instanceof InstanceOf) {
    if (
      type[0] != null &&
      type[0].prototype !== undefined &&
      isSerializable(type[0].prototype)
    ) {
      type = type[0];
    } else {
      return undefined;
    }
  }
  return type;
}
