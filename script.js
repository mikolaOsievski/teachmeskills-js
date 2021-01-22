/* Task #1
  Создайте функцию - конструктор houseBuilder,
  которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
  Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора.
  (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами).
*/

function HouseBuilder(widthFloor, lengthFloor, numberFloors) {
  this.widthFloor = widthFloor;
  this.lengthFloor = lengthFloor;
  this.numberFloors = numberFloors;
}

let firstHouse = new HouseBuilder(100, 200, 9);
let secondHouse = new HouseBuilder(150, 250, 11);

console.log("firstHouse: ", firstHouse);
console.log("firstHouse: ", secondHouse);

/* Task #2
  Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома.
  Данный метод занести в прототип конструктора. Вызвать данный метод на каждом созданном объекте
  и результат записать в поле totalArea каждого объекта.
*/

function calcArea() {
  return this.widthFloor * this.lengthFloor * this.numberFloors;
}

HouseBuilder.prototype.calcArea = calcArea;

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();

console.log("firstHouse ", firstHouse);
console.log("secondHouse ", secondHouse);

/* Task #3
  Дана функция

    function askArea(result, resolve, reject) {
    	let area = result();
    	if area >= "120") resolve();
    	else reject();
  	}

  Добавьте в прототип конструктора houseBuilder метод для проверки того что выполнен план по площади checkAreaSuccessfully, которая
  выполняет alert("План по стройке выполнен"). Добавьте также метод для проверки того что не выполнен план по площади checkAreaFail,
  которая выполняет alert("План по стройке не выполнен выполнен").

  Попробуйте вызвать:

  askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
  askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)

  Будет ли такой код работать корректно? Если нет то используйте известные вам механизмы привязки
  чтобы решить эту задачу.
*/

function askArea(result, resolve, reject) {
  let area = result();
  if (area >= "120") resolve();
  else reject();
}

function checkAreaSuccessfully() {
  console.log("План по стройке выполнен");
}

function checkAreaFail() {
  console.log("План по стройке НЕ выполнен");
}

HouseBuilder.prototype.checkAreaSuccessfully = checkAreaSuccessfully;
HouseBuilder.prototype.checkAreaFail = checkAreaFail;

/*
askArea(
  firstHouse.calcArea,
  firstHouse.checkAreaSuccessfully,
  firstHouse.checkAreaFail
);

askArea(
  secondHouse.calcArea,
  secondHouse.checkAreaSuccessfully,
  secondHouse.checkAreaFail
);

Данный код работает некорректно, т.к. теряется контекст (this).
Переменная area в функции askArea() будет равна NaN (area = NaN), т.к.
this.widthFloor = undefined, this.lengthFloor = undefined, this.numberFloors = undefined (потерян контекст),
а перемножение undefined будет равно NaN (undefined * undefined * undefined = NaN).

Поэтому в данном коде, в функции askArea() всегда будет выполняться reject().

Для исправлении данной ситуации необходимо привязать контекст выполнения (this),
при помощи метода bind(), который будет создавать новую  "привязанную функцию" к контексту.

*/

askArea(
  firstHouse.calcArea.bind(firstHouse),
  firstHouse.checkAreaSuccessfully,
  firstHouse.checkAreaFail
);

askArea(
  secondHouse.calcArea.bind(secondHouse),
  secondHouse.checkAreaSuccessfully,
  secondHouse.checkAreaFail
);
