/* Task #1
  Используйте метод reduce в комбинации с concat для свёртки массива массивов
  в один массив, у которого есть все элементы входных массивов.
	Например:
		var arrays = [[1, 2, 3], [4, 5], [6]];
		// Ваш код тут
		// → [1, 2, 3, 4, 5, 6]
*/

var arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(newArray);

/* Task #2
  Создайте функцию-конструктор, которая позволяет создавать объект пользователя
  с полями first_name, second_name, age, city.
  С помощью данной функции создайте два объекта пользователей (два пользователя),
  имя, фамилию, возраст, город проживания задайте сами.
*/

function User(first_name, second_name, age, city) {
  this.first_name = first_name;
  this.second_name = second_name;
  this.age = age;
  this.city = city;
}

let creator = new User("Ryan", "Dahl", 40, "California");
let designer = new User("Artemy", "Lebedev", 45, "Moscow");

console.log(creator);
console.log(designer);

/* Task #3
  Создайте функцию, которая позволяет вывести полную информацию
  о каждом из двух пользователей созданных в предыдущем задании.
  Функция должна выполнять вывод информации и не принимать аргументов.
  По сути нужно одну функцию привязать два объекта.
*/

function userInfo() {
  console.log(this);
}

creator.userInfo = userInfo;
designer.userInfo = userInfo;

creator.userInfo();
designer.userInfo();

// using call()
// userInfo.call(creator);
// userInfo.call(designer);
