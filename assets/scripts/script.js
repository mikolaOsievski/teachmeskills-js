// Task #1
let number = 8;
let bigInt = 8n;
let string = "Trololo";
let bool = true;
let emptiness = null;
let undef = undefined;
let obj = { width: 100, height: 100 };
let symbolBy = Symbol("id");

function printVariable(variable) {
  alert(`${typeof variable} = ${variable}`);
  console.log(`${typeof variable} = ${variable}`);
}

function printVariableSymbol(variable) {
  alert(`${typeof variable} = ${variable.toString()}`);
  console.log(`${typeof variable} = ${variable.toString()}`);
}

printVariable(number);
printVariable(bigInt);
printVariable(string);
printVariable(bool);
printVariable(emptiness);
printVariable(undef);
printVariable(obj);
printVariableSymbol(symbolBy);

// Task #2
let age = +prompt("How old are you?", "number");
if (age > 0 && age !== "NaN") {
  if (age >= 18) {
    alert(
      `Congratulations, you are ${age} full years old!\nYou are an adult! 🧔`
    );
  } else {
    alert(
      `Congratulations, you are ${age} full years old!\nYou are underage! 👶`
    );
  }
} else {
  alert(`You entered an invalid value! You must enter a number! 🤦‍♀️`);
}

// Task #3
let numbers = [10, 25, 0.1, "100000", "ewwefw", true, { age: 30 }, 100];

let sum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      result += array[i];
    }
  }
  return result;
};

console.log(sum(numbers));

// Task #4*
let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 24 },
  { name: "Sasha", age: 29 },
];

let outputSortUser = (array) => {
  let arrayAdults = [];
  let arrayMinors = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].age >= 18) {
      arrayAdults.push(array[i]);
    } else if (array[i].age > 0 && array[i].age < 18) {
      arrayMinors.push(array[i]);
    }
  }
  return [arrayAdults, arrayMinors];
};

console.log(outputSortUser(users));
