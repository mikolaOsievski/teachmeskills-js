/* Task #1

  Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
  Запишите поле name в переменную userName, поле year в переменную userName, поле car в переменную userCar,
  остальные поля записать в объект userOtherInfo.
*/

let user = {
  name: "Ivan",
  years: 19,
  car: "Subaru",
  telePhone: "iPhone",
  city: "Minsk",
};

/* Task #2

  Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"].
  Используя оператор расширение и соответсвие порядка следования элементов запишите первые два элемента массива
  в переменные firstElement, secondElement, число 89 (четвертый элемент массива) в переменную fifthElement.
  Остальные элементы после 89 запишите в массив otherElements.
*/

let arr = [1, "str", 24, { name: "Ivan" }, 89, undeifined, "10"];

/* Task #3

  Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY (например 5.12.2020).
  Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней ставился "0" (например 05.12.2020)

*/

/* Task #4

  Дан объект let user = {name: "Ivan", age: 19};
	Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());
*/
let user = { name: "Ivan", age: 19 };
