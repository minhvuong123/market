function parseCurrentVND(value){
  return value.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
}

export {
  parseCurrentVND
}