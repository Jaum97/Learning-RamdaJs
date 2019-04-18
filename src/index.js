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

const arr = [
  { id: 1, name: "fluffkins" },
  { id: 2, name: "bob" },
  { id: 3, name: "jerry" },
  { id: 4, name: "ermin" },
  { id: 5, name: "joseph" },
  { id: 6, name: "mike" }
];

const potato = R.pluck("name");

const test = potato(arr);

test;
