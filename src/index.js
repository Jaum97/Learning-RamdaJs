const R = require("ramda");

const greet = R.replace("{name}", R.__, "Hello, {name}!");
const test = greet("Alice");

const add3 = R.add(3);

const add5 = R.add(5);

const add8 = R.compose(
  add3,
  add5
);

const test2 = add8(8);
