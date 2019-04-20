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
  { id: 1, other: { name: "fluffkins" } },
  { id: 2, other: { name: "bob" } },
  { id: 3, other: { name: "jerry" } },
  { id: 4, other: { name: "ermin" } },
  { id: 5, other: { name: "joseph" } },
  { id: 6, other: { name: "mike" } }
];

const potato = R.pluck("name", R.pluck("other", arr));

const abby = { name: "Abby", age: 7, hair: "blond" };
const fred = { name: "Fred", age: 12, hair: "brown" };
const rusty = { name: "Rusty", age: 10, hair: "brown" };
const alois = { name: "Alois", age: 15, disposition: "surly" };
const kids = [abby, fred, rusty, alois];
const hasBrownHair = R.propEq("hair", "brown");
const potato = R.filter(hasBrownHair, kids);

potato;

const groupNames = (acc, { name }) => acc.concat(name);
const groupScore = (acc, { score }) => acc.concat(score);
const toGrade = ({ score }) =>
  score < 65
    ? "F"
    : score < 70
    ? "D"
    : score < 80
    ? "C"
    : score < 90
    ? "B"
    : "A";

var students = [
  { name: "Abby", score: 83 },
  { name: "Bart", score: 62 },
  { name: "Curt", score: 88 },
  { name: "Dora", score: 92 }
];

const maninho = R.reduceBy(groupScore, [], toGrade, students);

maninho;

const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
const potato2 = R.indexBy(R.prop('id'), list);

potato2

const raceResults = {
  first: 'alice',
  second: 'jake'
};

const potato3 = R.invertObj(raceResults);

potato3

