/* Task #1
  Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов
  (сколько раз ее вызызвали до этого плюс этот вызов).
*/

let func = (() => {
  let counter = 0;

  return () => ++counter;
})();

for (let i = 0; i < 20; i++) {
  // console.log(func());
}

/* Task #2
  Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20,
  при чем переменная будет увеличивать свое значение на еденицу каждые 2 секунды.
  Когда переменная станет равной 20 прекратить увеличение.
  Попробуйте реализовать через setInterval и через рекурснивный setTimeout.
*/

let counterTwoSeconds = (start = 0, end = 20) => {
  let i = start;
  console.log(i);
  let timerIntervalId = setInterval(
    (end) => {
      i++;
      console.log(i);

      if (i === end) {
        clearInterval(timerIntervalId);
      }
    },
    2000,
    end
  );
};

// counterTwoSeconds();
// counterTwoSeconds(0, 4);

let counterTwoSecondsRecursion = (start = 0, end = 20) => {
  let i = start;

  let timerTimeoutId = setTimeout(
    function addOne(end) {
      if (i === end) {
        clearTimeout(timerTimeoutId);
      } else {
        i++;
        console.log(i);

        timerTimeoutId = setTimeout(addOne, 2000, end);
      }
    },
    2000,
    end
  );
};

// counterTwoSecondsRecursion();
// counterTwoSecondsRecursion(0, 5);

/* Task #3
  Напишите функцию startTimer() которая будет запускать вывод через confirm("Реклама исчезнет счерез 5 секунд,
  вы согласны ?"), при нажатии "ДА" вывоите alert("Реклама") через 5 секунд,
  если нажали "НЕТ", то повторить вопрос confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?")
  и так до тех пор пока пользовательне нажмет "ДА" и не увидит эту рекламу через alert.
*/

function startTimer() {
  // *** solution option 1 ***
  let question;

  do {
    question = confirm("Реклама исчезнет через 5 секунд, Вы согласны ?");

    if (question) {
      setTimeout(() => alert("Реклама 👕 👖 🧦"), 5000);
    }
  } while (!question);

  // *** solution option 2 ***
  // let timerIntervalId = setInterval(() => {
  //   let question = confirm("Реклама исчезнет через 5 секунд, Вы согласны ?");
  //   if (question) {
  //     clearInterval(timerIntervalId);
  //     timerId = setTimeout(() => alert("Реклама 👕 👖 🧦"), 5000);
  //   }
  // }, 0);
}

// startTimer();
