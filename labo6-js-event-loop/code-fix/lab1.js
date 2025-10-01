// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
    console.log('this is the start');

    setTimeout(() => {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    setTimeout(() => {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
  },

  executeAfterDelay(callback, delay) {
    // use setTimeout
    setTimeout(() => {
      callback();
    }, delay);
  },

  executeInOrder(callback1, callback2) {
    /* setTimeout(() => {
      callback1();
    }); */
    callback1();
    setTimeout(() => {
      callback2();
    });
  },

  stopInterval(intervalId, callback) {
    //  https://developer.mozilla.org/fr/docs/Web/API/Window/clearInterval
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
    clearInterval(intervalId);
    callback();
  },

  executePromise(callback) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    const promise = new Promise((resolve) => {
      callback({ status: true, value: 'foo' });
      const result = {
        status: true,
        value: 'foo',
      };
      resolve(result);
    });

    setImmediate(() => {
      promise.then();
    });
  },

  executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('first'), 250)),
      new Promise((resolve) => setTimeout(() => resolve('second'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('third'), 500)),
    ];

    Promise.all(promises).then(callback);
  },
};

module.exports = functions;
