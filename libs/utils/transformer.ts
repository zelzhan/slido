import { ObjectId } from 'mongodb';

export type Transformer<T, U> = (val: T | T[]) => U | U[];

export namespace Transformers {
  function createTransformer<T, U>(callback: (val: T) => U): Transformer<T, U> {
    const applyCallback = (val: T): U => {
      if (typeof val === 'string' && val === 'null') {
        return null;
      }
      return callback(val);
    };
    return val => {
      if (val === null) {
        return null;
      }
      if (!val) {
        return undefined;
      }
      if (Array.isArray(val)) {
        return val.map(applyCallback);
      }

      return applyCallback(val);
    };
  }

  function toArray(val: string): string[] {
    // 'null' is a special case here where we want the value to be null, but not undefined
    if (val === 'null' || val == null) {
      return null;
    }

    if (Array.isArray(val)) {
      return val;
    }

    if (typeof val !== 'string') {
      return val;
    }

    if (val.length === 0) {
      // string.split on an empty string returns [""] instead of an empty array.
      return [];
    }

    return val.split(',');
  }

  function combine(...transformers: Transformer<any, any>[]) {
    return (initialVal: string | string[]) => transformers.reduce((val, fn) => fn(val), initialVal);
  }

  export const toInt = createTransformer<string, number>(val => Number.parseInt(val, 10));
  export const toIntArray = combine(toArray, toInt);

  export const toFloat = createTransformer(Number.parseFloat);
  export const toFloatArray = combine(toArray, toFloat);

  export const toBoolean = createTransformer<string, boolean>(val => (val === 'true' ? true : val === 'false' ? false : undefined));
  export const toBooleanArray = combine(toArray, toBoolean);

  export const toDate = createTransformer<string, Date>(val => new Date(val));
  export const toDateArray = combine(toArray, toDate);

  function isValidObjectId(val: any) {
    return typeof val === 'string' && ObjectId.isValid(val);
  }

  export const toObjectId = createTransformer<any, ObjectId>(val => (isValidObjectId(val) ? new ObjectId(val) : val));
  export const toObjectIdArray = combine(toArray, toObjectId);
}