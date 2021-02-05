/* Task #1
  Отправьте GET на адресс 'https://jsonplaceholder.typicode.com/posts' после чего извлеките только первые 20 записей
	и отсортируйте их по убыванию длины title.
*/

async function getPosts(url) {
  let response = await fetch(url);
  let result = await response.json();

  let posts = result.slice(0, 20);

  posts.sort((a, b) => b.title.length - a.title.length);

  console.log(posts);
}

let url = "https://jsonplaceholder.typicode.com/posts";

getPosts(url);

/* Task #2
	Создайте html документ, в котором подключите script.js. В html файле создайте кнопку (любого вида).
	По нажатию на кнопку отправляйте с помощтю POST запроса на адресс https://jsonplaceholder.typicode.com/posts объект
	  {
    		title: 'foo',
    		body: 'bar',
    		userId: 1,
  	  }
	В случае получения ответа создайте div, в котором будет храниться информация о полученном ответе (поля title и body ответа).
	Оформление div придумайте сами.
*/

let post = { title: "foo", body: "bar", userId: 1 };

let button = document.querySelector("button#send");
button.addEventListener("click", () => sendPost(url, post));

async function sendPost(url, post) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let result = await response.json();
  if (response.ok) {
    let section = document.querySelector("section.container");
    let div = document.createElement("div");
    div.innerHTML = `<p><strong>Title:</strong> ${result.title}.</p> <p><strong>Body:</strong> ${result.body}.</p>`;
    section.replaceChild(div, section.childNodes[1]);
  }
}
