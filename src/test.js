(function (root, factory) {
  // if (typeof exports === 'function') {
  //   exports = factory;
  // }
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    window.test = factory();
  }
})(this, function () {
  return {
    said() {
      console.log('hhhh');
    }
  }
})
// module.exports = {
//   said() {
//     console.log('hhhh');
//   }
// }