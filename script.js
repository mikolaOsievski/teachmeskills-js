/* Task #1

  Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
  На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr
  но без дублирующихся по своим значениям элементам. Использовать методы reduce и indexOf.
*/

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

var arrUnique = arr.reduce((a, b) => {
  if (a.indexOf(b) === -1) {
    return a.concat(b);
  } else {
    return a;
  }
}, []);

console.log(arrUnique);

/* Task #2

  Дан массив пользователей.

  var users = [
 						  {id: 1, name: "Вася", age: 19},
  						{id: 2, name: "Петя", age: 18},
  						{id: 3, name: "Маша", age: 17},
  						{id: 4, name: "Света", age: 18},
  						{id: 5, name: "Наташа", age: 17},
						  {id: 6, name: "Женя", age: 12},
						  {id: 7, name: "Коля", age: 30},
						  {id: 8, name: "Настя", age: 16},
						  {id: 9, name: "Антон", age: 19},
						  {id: 10, name: "Иван", age: 20},
						  {id: 11, name: "Павел", age: 16},
						  {id: 12, name: "Денис", age: 20}
            ];

  На основании этого массива сформировать новый массив usersAfterYear
  где все пользователи повзрсолели на год и являются совершенолетними (повзрослевших на год,
  но оставшимися все еще несовершенолетних пользователей в новый массив usersAfterYear не включать).
  Сам массив users должен остаться неизменным.
  Использовать метод map.
*/

var users = [
  { id: 1, name: "Вася", age: 19 },
  { id: 2, name: "Петя", age: 18 },
  { id: 3, name: "Маша", age: 17 },
  { id: 4, name: "Света", age: 18 },
  { id: 5, name: "Наташа", age: 17 },
  { id: 6, name: "Женя", age: 12 },
  { id: 7, name: "Коля", age: 30 },
  { id: 8, name: "Настя", age: 16 },
  { id: 9, name: "Антон", age: 19 },
  { id: 10, name: "Иван", age: 20 },
  { id: 11, name: "Павел", age: 16 },
  { id: 12, name: "Денис", age: 20 },
];

var usersAfterYear = users
  .map((user) => {
    let objUser = { ...user };
    objUser.age += 1;
    return objUser;
  })
  .filter((user) => user.age >= 18);

console.log(users);
console.log(usersAfterYear);

/* Task #3

  На основании массива usersAfterYear,
  полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge,
  в котором нет пользователей с одинаковым возрастом.
  Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19},
  то вы должны оставить	только Петю или Свету одного а не их двоих).
  (Это задание похоже на первое задания про массив arr и arrUnique)
*/

var usersAfterYearUniqueAge = usersAfterYear.reduce((a, b) => {
  var result = a.find((item) => item.age == b.age);
  if (result === undefined) {
    return a.concat(b);
  } else {
    return a;
  }
}, []);

console.log(usersAfterYearUniqueAge);

/* Task #4

	Дан объект var users = {
				                  	first_name: "pavel",
				                  	second_name: "ivanov",
				                  	father_name: "ivanovich",
				                  	city: "minsk",
				                  	car: "subaru",
				                  	telephone: "samsung"
				                  }
  Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы
  (например не "pavel" a "Pavel").
  Для решения этой задачи рекомендую использовать методы Object.keys или Object.values и методы строк
  как UpperCase.
*/

var users = {
  first_name: "pavel",
  second_name: "ivanov",
  father_name: "ivanovich",
  city: "minsk",
  car: "subaru",
  telephone: "samsung",
};

var usersUpperCase = Object.fromEntries(
  Object.entries(users).map(([key, value]) => {
    return [key, value[0].toUpperCase() + value.slice(1)];
  })
);

console.log(users);
console.log(usersUpperCase);

/* Task #5

  Посчитать первые 8 чисел Фибоначчи использую рекурсию.
  Например: fibonachi(n); (При вызове функции положите n = 8);
*/

function fibonachi(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonachi(n - 1) + fibonachi(n - 2);
  }
}

console.log(fibonachi(8));

/* Task #6

  Посчитать с помощью рекурсии факториал числа 10.
  Например: factorial(n); (При выозове полжите n = 10);
*/

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(10));
console.log(factorial(0));
