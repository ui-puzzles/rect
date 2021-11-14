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

export /**
 * @description auto adjust text's font size dependent parent's element.
 *
 * @param {HTMLElement} textElem text element, NOTE: can't be an inline-element
 * @param {HTMLElement} wrapper wrapper of text element
 * @param {number} [wrapperSize] specify the wrapper size
 * @param {number} [offset=8] specify gap of text
 */
const  autoFixFontSize = (
  textElem: HTMLElement | null,
  wrapper: HTMLElement | null,
  wrapperSize?: number,
  offset = 8) => {
  if (textElem) {
    const textWidth = textElem.clientWidth;
    const size = wrapperSize || wrapper?.offsetWidth || 0;
    const scale = size / (textWidth + offset);

    if (size && scale < 1) {
      textElem.style.transform = `scale(${scale}) translateX(-50%)`;
    }
  }
};
