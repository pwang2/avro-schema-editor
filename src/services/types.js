export const complexTypes = ['record', 'enum', 'array', 'map'];
export const primitiveTypes = [
  'nul',
  'bytes',
  'boolean',
  'int',
  'long',
  'float',
  'double',
  'string'
];
export const types = [...complexTypes, ...primitiveTypes];
export function isObject(v) {
  return !!v && typeof v === 'object' && v.constructor === Object;
}
export function isPrimitive(v) {
  return !!v && typeof v === 'string' && primitiveTypes.includes(v);
}
export function isNullable(v) {
  return Array.isArray(v) && v.length > 1 && v[0] === 'null';
}
export function getDisplayType(type) {
  if (isNullable(type)) {
    return getDisplayType(type[1]);
  } else if (typeof type === 'string') {
    return type;
  } else if (type.type && typeof type.type === 'string') {
    return type.type;
  }
  // eslint-disable-next-line
  console.warn(
    `type should be one of the following
       * string literal points to primitive type,
       * array points to a nullable,
       * object points to type detail`
  );
  return 'null';
}
