/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPrimitiveType = (val: any) => Object.prototype.toString.call(val).slice(8, -1);

export const isObj = (val: any) => getPrimitiveType(val) === 'Object';

export const isFunc = (val: any) => typeof val === 'function';

export const isPromise = (val: any) => val instanceof Promise;