/* Task #1
Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... },
которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).

В зависимости от этого числа опеределяется сколько времени надо потратить на уборку,
это время равно значению dirtyLevel * 1000 в мс.
Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.

Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`);
где result это аргумент resolve.
*/

function cleanRoom(dirtyLevel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  });
}

cleanRoom(3).then((result) =>
  console.log(`Уборка проведена успешно за ${result} секунд(ы)(у)`)
);

/* Task #2
Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс
возвращали выполненный с ошибкой промис.

Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject.
Текст ошибки придумайте сами.
*/

function cleanRoom(dirtyLevel) {
  return new Promise((resolve, reject) => {
    if (dirtyLevel > 10) {
      reject("Совсем грязная комната!!! Я в сарае не убираю! ");
    } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

cleanRoom(2).then(
  (result) => console.log(`Уборка проведена успешно за ${result} секунд(ы)(у)`),
  (err) => console.log(err)
);

/* Task #3
Задание со звездочкой.
Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат.

Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена,
пользователь может начать убирать новую.

Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью.
Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргумента,
каждый из кторых описывает уровень загрязнения каждой комнаты.
*/

function cleanRoomOne(dirtyLevel) {
  return new Promise((resolve, reject) => {
    if (dirtyLevel > 10) {
      reject("Совсем грязная комната!!! Я в сарае не убираю! ");
    } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

function cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  cleanRoomOne(dirtyLevel_1)
    .then(() => {
      console.log(
        `Уборка комнаты #1 проведена успешно за ${dirtyLevel_1} секунд(ы)(у)`
      );
      return cleanRoomOne(dirtyLevel_2);
    })
    .then(() => {
      console.log(
        `Уборка комнаты #2 проведена успешно за ${dirtyLevel_2} секунд(ы)(у)`
      );
      return cleanRoomOne(dirtyLevel_3);
    })
    .then(() => {
      console.log(
        `Уборка комнаты #3 проведена успешно за ${dirtyLevel_3} секунд(ы)(у)`
      );
      console.log(`Все комнаты убраны!`);
    })
    .catch((err) => console.log(err));
}

cleanRoom(2, 11, 6);

/* Task #4
Задача на повторение массивов.
Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
Ваша задача написать функцию countRepeats которая будет выводить информацию о том
какой элемент в данном массиве сколько раз повторяется.

Функция должна возвращать объект типа:
	{
	str:  3,
	str1: 2,
	str2: 2,
	str4: 2,
	str3: 1,
}

Обратите внимание что информация должна быть отсортирована по убыванию повторений.
*/

let arr = [
  "str",
  "str1",
  "str2",
  "str",
  "str2",
  "str",
  "str3",
  "str1",
  "str4",
  "str4",
];

function countRepeats(array) {
  let obj = {};

  array.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  let arrSorted = Object.entries(obj).sort(function (a, b) {
    return b[1] - a[1];
  });

  let objSorted = {};
  arrSorted.forEach((item) => (objSorted[item[0]] = item[1]));
  return objSorted;
}

console.log(countRepeats(arr));
