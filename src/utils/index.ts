/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPrimitiveType = (val: unknown) => Object.prototype.toString.call(val).slice(8, -1);

export const isObj = (val: unknown): val is Record<any, any> => getPrimitiveType(val) === 'Object';

export const isFunc = (val: unknown): val is CallableFunction => typeof val === 'function';

export const isTrue = (val: unknown): val is boolean => val === true;

export const isString = (str: unknown): str is string => typeof str === 'string';

export const isPromise = <T = any>(val: any): val is Promise<T> => {
  return isObj(val) && isFunc(val.then) && isFunc(val.catch);
};

type UndefType = null | undefined;
export const isUndef = (val: unknown): val is UndefType => val === undefined || val === null;

export const warning = (msg: string) => {
  if (!msg) return;

  console.warn(`Warning: ${msg}`);
};

export const logError = (msg: string) => {
  if (!msg) return;

  console.error(`ERROR: ${msg}`);
};

export const isDev = (() => process.env.NODE_ENV !== 'production')();

export /**
 * @description auto adjust text's font size dependent parent's element.
 *
 * @param {HTMLElement} textElem text element, NOTE: can't be an inline-element
 * @param {HTMLElement} wrapper wrapper of text element
 * @param {number} [wrapperSize] specify the wrapper size
 * @param {number} [offset=8] specify gap of text
 */
const autoFixFontSize = (
  textElem: HTMLElement | null,
  wrapper: HTMLElement | null,
  wrapperSize?: number,
  offset = 8
) => {
  if (textElem) {
    const textWidth = textElem.clientWidth;
    const size = wrapperSize || wrapper?.offsetWidth || 0;
    const scale = size / (textWidth + offset);

    if (size && scale < 1) {
      textElem.style.transform = `scale(${scale}) translateX(-50%)`;
    }
  }
};

export const wipeUndefValueOfObj = <T>(val: T): Pick<T, keyof T> | undefined => {
  try {
    if (!isObj(val)) throw new TypeError(`${val} must be an plain object.`);

    const ret = {} as Pick<T, keyof T>;
    const valKeys = Object.keys(val) as Array<keyof T>;

    valKeys.forEach((k) => {
      if (!isUndef(val[k])) {
        ret[k] = val[k];
      }
    });

    return ret;
  } catch (error) {
    logError(`${error}`);
    return;
  }
};
