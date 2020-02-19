// const isNonEmptyArray = v => Array.isArray(v) && v.length > 0;
// const isObject = v => v && typeof v === 'object' && v.constructor === Object;
// const primativeTypes = ['nul', 'bytes', 'float', 'double', 'long', 'string'];

export function wrapInput(arr) {
  arr.forEach(d => {
    if (d.type.fields) {
      d.fields = wrapInput(d.type.fields);
    }
    if (d.items && d.items.type === 'record') {
      d.items.fields = wrapInput(JSON.parse(JSON.stringify(d.items.fields)));
    }
  });
  return arr;
}

export function unwrapInput(arr) {
  // arr.forEach(d => {
  // if (!isNonEmptyArray(d.aliases)) {
  // delete d.aliases;
  // }
  // if (isObject(d.type) && d.type.type === 'record') {
  // d.type.fields = unwrapInput(JSON.parse(JSON.stringify(d.fields)));
  // delete d.fields;
  // }
  // if (isObject(d.type) && d.type.type === 'array') {
  // if (isObject(d.type.items)) {
  // if (primativeTypes.includes(d.type.items.type)) {
  // d.type.items = d.type.items.type;
  // } else {
  // d.type.items = unwrapInput([
  // { type: d.type.items, fields: d.type.items.fields }
  // ])[0].type;
  // }
  // }
  // }
  // });
  return arr;
}
