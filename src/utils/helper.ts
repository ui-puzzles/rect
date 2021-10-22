export function getDefaultValueWhenUndefinedOrNull(value: any, defaultValue: any = '') {
  if (typeof value === 'undefined' || value === null) {
    return defaultValue;
  }

  return value;
}
