import {readFileSync} from 'fs';
import {join} from 'path';

const filePath = join(__dirname, '..', '..', 'input.txt');
const file = readFileSync(filePath);
const input: string = file.toString();
const inputArr = input.split('\n');
const values = inputArr.map(value => Number.parseInt(value));

let currentValue = values[0];
let previousValue;
let increases = 0;
for (let i = 0; i < values.length; i++) {
  previousValue = currentValue;
  currentValue = values[i];

  if (previousValue < currentValue) {
    increases++;
  }
}

console.log(
  `There are ${increases} measurements in which the depth is higher than the measurement taken just before.`
);
