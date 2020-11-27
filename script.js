// Task #1
var arr = [1, 10, 25, 67, 87, 56];

var leng = arr.push(4);

console.log(arr);
console.log(leng);

var lastElement = arr.pop();

arr.unshift(lastElement);
console.log(arr);

// Task #2
var arr1 = [2, 5, 90, 4];

var arr2 = arr.concat(arr1);
console.log(`arr = [ ${arr} ]`);
console.log(`arr1 = [ ${arr1} ]`);
console.log(`arr2 = [ ${arr2} ]`);

// Task #3
var indexNinety = arr2.indexOf(90);
console.log(indexNinety);

arr2.splice(indexNinety, 1, 19, 2, 91);
console.log(`arr2 = [ ${arr2} ]`);

// Task #4
var arr3 = arr2.slice(-4);
console.log(`arr2 = [ ${arr2} ]`);
console.log(`arr3 = [ ${arr3} ]`);

arr3.sort((a, b) => a - b);
console.log(`arr3 = [ ${arr3} ]`);

// Task #5
arr2.sort((a, b) => b - a);
console.log(`arr2 = [ ${arr2} ]`);

var sumElementsArr2 = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumElementsArr2);

// Task 6
var users = [
  { id: 1, name: "Вася", age: 20 },
  { id: 2, name: "Петя", age: 19 },
  { id: 3, name: "Маша", age: 18 },
];

users.push({ id: 4, name: "Дима", age: 17 });
console.log(users);

users.reverse();
console.log(users);

var userPete = users.find((item) => item.name == "Петя");
console.log(userPete.age);

// Task 7
var sumAgeUsers = users.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);
console.log(sumAgeUsers);
