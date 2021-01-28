/* Task #1
Попрубуйте реализовать задачу на цепочку промисов из предудущего домашнего задания через async/await.
*/

async function cleanRoomOne(dirtyLevel) {
  return new Promise((resolve, reject) => {
    if (dirtyLevel > 10) {
      setTimeout(
        () => reject("Совсем грязная комната!!! Я в сарае не убираю!"),
        1000
      );
    } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

async function cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  try {
    let timeCleanFirstRoom = await cleanRoomOne(dirtyLevel_1);
    console.log(
      `Уборка комнаты #1 проведена успешно за ${timeCleanFirstRoom} секунд(ы)(у)`
    );
    let timeCleanSecondRoom = await cleanRoomOne(dirtyLevel_2);
    console.log(
      `Уборка комнаты #2 проведена успешно за ${timeCleanSecondRoom} секунд(ы)(у)`
    );
    let timeCleanThirdRoom = await cleanRoomOne(dirtyLevel_3);
    console.log(
      `Уборка комнаты #3 проведена успешно за ${timeCleanThirdRoom} секунд(ы)(у)`
    );
  } catch (err) {
    console.log(err);
  }
}

cleanRoom(2, 11, 6);

/* Task #2
На основанни задачи из прошлого дамашнего задания сделайте так,
чтобы можно было осуществить параллельную уборку трех комнат.

Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки.

Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью.
Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать
три аргемента, каждый из которых описывает уровень загрязнения каждой комнаты.
*/

// Option #1 (Promise)
function cleanRoomMin(dirtyLevel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  });
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  let maxLevelPollution = Math.max(...arguments);

  if (maxLevelPollution > 10) {
    Promise.reject(
      "Есть комната совсем грязная !!! Я в сарае не убираю! "
    ).catch((err) => {
      setTimeout(() => console.log(err), 1000);
    });
  } else {
    Promise.all([
      cleanRoomMin(dirtyLevel_1),
      cleanRoomMin(dirtyLevel_2),
      cleanRoomMin(dirtyLevel_3),
    ])
      .then(() => {
        console.log(
          `Уборка всех комнат проведена успешно за ${maxLevelPollution} секунд(ы)(у)`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

cleanRooms(11, 2, 6);

// Option #2 (Async/await)

// async function cleanRoomMin(dirtyLevel) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
//   });
// }

// async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
//   let maxLevelPollution = Math.max(...arguments);

//   if (maxLevelPollution > 10) {
//     Promise.reject(
//       "Есть комната совсем грязная !!! Я в сарае не убираю! "
//     ).catch((err) => {
//       setTimeout(() => console.log(err), 1000);
//     });
//   } else {
//     try {
//       await Promise.all([
//         cleanRoomMin(dirtyLevel_1),
//         cleanRoomMin(dirtyLevel_2),
//         cleanRoomMin(dirtyLevel_3),
//       ]);
//       console.log(
//         `Уборка всех комнат проведена успешно за ${maxLevelPollution} секунд(ы)(у)`
//       );
//     } catch (err) {
//       setTimeout(() => console.log(err), 1000);
//     }
//   }
// }

// cleanRooms(5, 4, 8);
