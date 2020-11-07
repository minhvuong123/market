function parseCurrentVND(value){
  return value.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
}

function cancellablePromise(promise) {
  const isCancelled = { value: false };
  const wrappedPromise = new Promise((res, rej) => {
    promise
      .then(d => {
        return isCancelled.value ? rej(isCancelled) : res(d);
      })
      .catch(e => {
        rej(isCancelled.value ? isCancelled : e);
      });
  });

  return {
    promise: wrappedPromise,
    cancel: () => {
      isCancelled.value = true;
    }
  };
};

export {
  parseCurrentVND,
  cancellablePromise
}