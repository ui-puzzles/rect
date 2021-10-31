/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPrimitiveType = (val: any) => Object.prototype.toString.call(val).slice(8, -1);

export const isObj = (val: any) => getPrimitiveType(val) === 'Object';

export const isFunc = (val: any) => typeof val === 'function';

export const isString = (str: any) => typeof str === 'string';

export const isPromise = (val: any) => val instanceof Promise;

export const warning = (msg: string) => {
  if (!msg) return;

  console.warn(`Warning: ${msg}`);
};

export const isDev = (() => process.env.NODE_ENV !== 'production')();
