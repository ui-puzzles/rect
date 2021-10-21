import {
  getPrimitiveType,
  isFunc,
  isObj,
} from './index';

const simpleTestObject = {
  name: 'sunny',
  age: 24
};

const simpleTestFunc = () => {};

describe('test function of utils', () => {
  it ('test getPrimitiveType', () => {
    expect(getPrimitiveType(2)).toBe('Number');
    expect(getPrimitiveType('puzzle')).toBe('String');
    expect(getPrimitiveType(null)).toBe('Null');
  });

  it('test isObj', () => {
    expect(isObj(simpleTestObject)).toBeTruthy();
    expect(isObj('sunny')).toBeFalsy();
  });

  it('test isFunc', () => {
    expect(isFunc(simpleTestFunc)).toBeTruthy();
  });
});
