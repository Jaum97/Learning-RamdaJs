const arr = Array(100000).fill(0).map((x, i) => i)

const isEven = x => x % 2 === 0

const greaterThan10 = x => x > 50000

const evenAndGreaterThan10 = R.anyPass([isEven, greaterThan10])

var t0 = performance.now();

const t00 = R.filter(evenAndGreaterThan10, R.filter(isEven, arr))

var t1 = performance.now();

console.log("Call to ramda filter took " + (t1 - t0) + " milliseconds.");

var t2 = performance.now();

const t01 = arr.filter(isEven).filter(greaterThan10)

var t3 = performance.now();

console.log("Call to js filter took " + (t3 - t2) + " milliseconds.");

var t4 = performance.now();

const transducer = R.compose(R.filter(isEven), R.filter(greaterThan10));

const t02 = R.transduce(transducer, R.flip(R.append), [], arr);

var t5 = performance.now();

console.log("Call to transduce took " + (t5 - t4) + " milliseconds.");
/*
Call to ramda filter took 6.139999954029918 milliseconds.
Call to js filter took 3.1900000758469105 milliseconds.
Call to transduce took 1639.0499998815358 milliseconds.
Call to ramda filter took 10.109999915584922 milliseconds.
Call to js filter took 5.890000145882368 milliseconds.
Call to transduce took 1730.0249999389052 milliseconds.
*/

