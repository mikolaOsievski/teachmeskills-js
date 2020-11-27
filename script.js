// Task #1 (function declaration)
function f(x) {
  if (arguments.length == 0) {
    return 0;
  } else {
    let arrResult = [];
    for (const value of arguments) {
      if (value === undefined) {
        return 0;
      } else {
        arrResult.push(value);
      }
    }
    return arrResult;
  }
}

let trololo;
console.log(f());
console.log(f(1, 2, 4));
console.log(f(undefined));
console.log(f("hello", NaN, true, true, null));
console.log(f(1, 3, 6, trololo));

// Task #1 (arrow function)
let fa = (...x) => {
  if (x.length == 0) {
    return 0;
  } else {
    let arrResult = [];
    for (const value of x) {
      if (value === undefined) {
        return 0;
      } else {
        arrResult.push(value);
      }
    }
    return arrResult;
  }
};

console.log(fa());
console.log(fa(1, 2, 4));
console.log(fa(undefined));
console.log(fa("hello", NaN, true, true, null));
console.log(fa(1, 3, 6, trololo));

// Task #2 (function declaration)
function sum(a, b) {
  if (arguments.length == 0) {
    return "No arguments";
  } else if (arguments.length == 1) {
    return "No second argument";
  } else {
    let result = 0;
    for (const value of arguments) {
      if (typeof value === "number" && !isNaN(value)) {
        result += value;
      } else {
        return "Non-numeric argument passed";
      }
    }
    return result;
  }
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, NaN));
console.log(sum(5, 7, 9, true));
console.log(sum(5, 7, 9, [1, 3, 5, 7]));
console.log(sum(1, 1.2, 1.3, 3));

// Task #2 (arrow function)
let suma = (...arg) => {
  if (arg.length == 0) {
    return "No arguments";
  } else {
    let result = 0;
    for (const value of arg) {
      if (typeof value === "number" && !isNaN(value)) {
        result += value;
      } else {
        return "Non-numeric argument passed";
      }
    }
    return result;
  }
};

console.log(suma());
console.log(suma(1));
console.log(suma(1, NaN));
console.log(suma(5, 7, 9, true));
console.log(suma(5, 7, 9, [1, 3, 5, 7]));
console.log(suma(1, 1.2, 1.3, 3));

// Task #3
let arrNumber = [1, 2, 56, 28, 90, 5, 6];

function sortArrNumber(arr) {
  if (Array.isArray(arr)) {
    arr.sort((a, b) => a - b);
  } else {
    console.log("This is not an array");
  }
}

function findIndexNumber(number, arr) {
  if (Array.isArray(arr)) {
    if (arr.indexOf(number) !== -1) {
      return arr.indexOf(number);
    } else {
      return "This number is not in the array";
    }
  } else {
    return "No array specified";
  }
}

sortArrNumber(arrNumber);

console.log(arrNumber);
console.log(findIndexNumber(6, arrNumber));
console.log(findIndexNumber(0, arrNumber));
console.log(findIndexNumber(6, 5, 6));

// Task #4
let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 24 },
  { name: "Sasha", age: 29 },
  { name: "Sasha", age: 15 },
  { name: "Sasha", age: 17 },
];

let sortUsersGroups = (arr) => {
  const arrayAdults = arr.filter((user) => user.age >= 18);
  const arrayMinors = arr.filter((user) => user.age > 0 && user.age < 18);
  return [arrayAdults, arrayMinors];
};

let sortUsersGroupsDescending = (arr) => {
  if (Array.isArray(arr)) {
    for (const value of arr) {
      value.sort((a, b) => {
        if (b.age > a.age) {
          return 1;
        }
        if (b.age < a.age) {
          return -1;
        }
      });
    }
  } else {
    console.log("This is not an array");
  }
};

let resultSort = sortUsersGroups(users);
console.log(resultSort);

sortUsersGroupsDescending(resultSort);
console.log(resultSort);

users = users.filter((user) => user.age >= 18);
console.log(users);
