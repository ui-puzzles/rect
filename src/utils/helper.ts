import { resolve } from 'path'

export function getDefaultValueWhenUndefinedOrNull(value: any, defaultValue: any = '') {
  if (typeof value === 'undefined' || value === null) {
    return defaultValue;
  }

  return value;
}

// get local path
export const getDirPath = (relPath = '') => {
  return resolve(__dirname, relPath)
}

// get run path
export const getCwdPath = (relPath = '') => {
  return resolve(process.cwd(), relPath)
}
