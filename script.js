/* Task #1
  Создайте класс House, которая позволяет создавать объект здания с параметрами длины(length),
  ширины(width) и количество этажей(floors).

  Добавьте ему статический метод sortBuyFloors
  который можно будет использовать для сортировки зданий по возрастанию их высоты.
*/

class House {
  constructor(length, width, floors) {
    this.length = length;
    this.width = width;
    this.floors = floors;
  }

  // Implementation option #1
  // static sortBuyFloors(house1, house2) {
  //   return house1.floors - house2.floors;
  // }

  // Implementation option #2
  static sortBuyFloors(args) {
    return args.sort((house1, house2) => house1.floors - house2.floors);
  }
}

let house1 = new House(100, 50, 10);
let house2 = new House(150, 55, 5);
let house3 = new House(180, 58, 8);

let houses = [house1, house2, house3];

console.log(houses);

// For implementation option #1
// houses.sort(House.sortBuyFloors);

// For implementation option #2
houses = House.sortBuyFloors(houses);

console.log(houses);

/* Task #2
  На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование).
  Данный класс кроме свойств length, width и floors должен предоставлять
  дополнительное свойство offices (количество выделенных в офисе задний, можете задать их любым на ваше усмотрение);
  Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба.
  Данное свойсвто создать через get/set.
  При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи
  а длина и ширина не поменялись, площадь может быть только увеличена.
  Опишите в get как будет осуществляться подсчет площади и вывод этой площадь,
  а в set определите как будет определяться новое количесвто этажей.
*/

class Skyscraper extends House {
  constructor(length, width, floors, offices) {
    super(length, width, floors);
    this.offices = offices;
    // this.fullArea = null;
  }

  get fullArea() {
    return this.length * this.width * this.floors;
  }
  set fullArea(value) {
    if (value < this.length * this.width * this.floors) {
      console.log("Площадь может быть только увеличена!");
      return;
    }
    this.floors = Math.round(value / (this.length * this.width));
  }
}

let skyscraper = new Skyscraper(10, 10, 20, 300);

console.log(skyscraper.fullArea);
console.log(skyscraper);
skyscraper.fullArea = 2200;
console.log(skyscraper);

/* Task #3
  Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper.
  Выведите площадь каждого из них используя get fullArea.
  Попробуйте задать кому-нибудь из них большую площаь чем первоначальная.
  Выведите теперь новое количество этажей изменненного внебоскреба.
  Убедитесь что количество этажей поменялось а длина и ширина - нет.
  Если это так - то логика внутри set fullArea реализована правильно.
*/

let firstSkyscraper = new Skyscraper(10, 5, 25, 500);
let secondSkyscraper = new Skyscraper(20, 10, 50, 1000);
let thirdSkyscraper = new Skyscraper(11, 6, 30, 550);

console.log(firstSkyscraper.fullArea);
console.log(secondSkyscraper.fullArea);
console.log(thirdSkyscraper.fullArea);

secondSkyscraper.fullArea = 15000;
console.log(secondSkyscraper.floors);
console.log(secondSkyscraper);

/* Task #4
  Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers
  и отсортируйте его по возрастанию высоты небоскребов, используя статический метод класса-родителя sortBuyFloors.
*/

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

console.log(skyscrapers);

skyscrapers = Skyscraper.sortBuyFloors(skyscrapers);
console.log(skyscrapers);
