const _ = require('lodash');

// let testArr = Array.from('0123456789').map(Number);
const aFunc = () => {
  console.log('next => x');
};
const a = next => {
  console.log('console a:');
  return next();
};
const b = next => {
  console.log('console b:');
  return next();
};
const c = next => {
  console.log('console c:');
  return next();
};
const d = next => {
  console.log('console d:');
  return next();
};
const e = next => {
  console.log('console e:');
  return next();
};
const f = next => {
  console.log('console f:');
  return next();
};
const g = (...info) => {
  console.log('console g:', ...info);
  return [...info];
};

let testArr = [a, b, c, d, e, f, g];

const combinedFunc = testArr.reduce((_a, _b) => (...args) => {
  return _a(_b(...args));
});

combinedFunc('I', 'am', 'Chloe');
// Output:
// console g: I am Chloe
// console f: [ 'I', 'am', 'Chloe' ]
// console e: [ 'I', 'am', 'Chloe' ]
// console d: [ 'I', 'am', 'Chloe' ]
// console c: [ 'I', 'am', 'Chloe' ]
// console b: [ 'I', 'am', 'Chloe' ]
// console a: [ 'I', 'am', 'Chloe' ]
