// Task #1
let hello1 = () => "Привет, JavaScript!";

console.log(hello1());

// Task #2
let hello2 = (name = "гость") => `Привет, ${name}`;

let name = "Василий";
console.log(hello2(name));

// Task #3
let mul = (n, m) => {
  if (isNaN(n) || isNaN(m)) {
    return "n or m is not Number!";
  } else {
    return n * m;
  }
};

console.log(mul(2, 35));
console.log(mul(2, "3.5"));
console.log(mul(2, "35trololo"));

// Task #4
let repeat = (str = "", n = 2) => {
  let strOutput = "";

  if (typeof str == "string") {
    if (typeof n == "number" && !isNaN(n) && n >= 0) {
      n = Math.trunc(n);
      for (let i = 0; i < n; i++) {
        strOutput += str;
      }
      return strOutput;
    } else {
      return "n not a number or n < 0";
    }
  } else {
    return "str not a string";
  }
};

console.log(repeat("Trololo", 5));
console.log(repeat("Trololo"));
console.log(repeat("Trololo", -5));
console.log(repeat("Trololo", NaN));
console.log(repeat("22", 1.2));
console.log(repeat(22, 3));

// Task #5
let rgb = (a = 0, b = 0, c = 0) => {
  if (a >= 0 && b >= 0 && c >= 0) {
    return `rgb(${Math.trunc(a)}, ${Math.trunc(b)}, ${Math.trunc(c)})`;
  } else {
    return " 'a' or 'b' or 'c' is less than zero";
  }
};

console.log(rgb(2, 17, 5));
console.log(rgb(2.75, 17, 5));
console.log(rgb(2, 17, -5));

// Task #6
function avg() {
  if (arguments.length == 1) {
    return arguments[0];
  } else {
    let sum = 0;
    let countElement = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (isNumber(arguments[i])) {
        sum += arguments[i];
        countElement++;
      }
    }
    return sum / countElement;
  }
}

function isNumber(x) {
  return typeof x == "number" && !isNaN(x);
}

console.log(avg(4));
console.log(avg(4, 6));
console.log(avg(2, 4, 7));
console.log(avg(2, "15", NaN, null, undefined, [2, 3, 5], 3, 7));

// Task #7
let words = (n = 0) => {
  let arrayWords = ["товар", "товара", "товаров"];
  if (n % 100 >= 11 && n % 100 <= 19) {
    return `${n} ${arrayWords[2]}`;
  } else {
    let result = "";
    switch (n % 10) {
      case 1:
        result = `${n} ${arrayWords[0]}`;
        break;
      case 2:
      case 3:
      case 4:
        result = `${n} ${arrayWords[1]}`;
        break;
      default:
        result = `${n} ${arrayWords[2]}`;
        break;
    }
    return result;
  }
};

console.log(words(1));
console.log(words(2));
console.log(words(5));
console.log(words(11));
console.log(words(12));
console.log(words(16));
console.log(words(20));
console.log(words(21));
console.log(words(22));

// Task #8*
let quadraticEquation = (a = 1, b, c) => {
  if (a == 0) {
    return "This is not quadratic equation";
  }
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { x1: x1, x2: x2 };
  } else if (D == 0) {
    let x = -b / (2 * a);
    return { x: x };
  } else {
    return "No roots of the equation";
  }
};

console.log(quadraticEquation(1, 2, -48));
console.log(quadraticEquation(1, -4, 4));
console.log(quadraticEquation(1, -5, 17));
console.log(quadraticEquation(2, -15, 13));
