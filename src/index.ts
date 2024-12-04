const list = document.getElementById("list");
list.innerHTML = "<div>Hello</div>";

async function getData(fetchURL: string) {
		const response = await fetch(fetchURL);
		const json = await response.json();
		console.log(json);
		setTimeout(() => console.log("Hello"), 1000)
		list.innerHTML = "<div>Not Hello</div>";
}

getData("https://jsonplaceholder.typicode.com/posts");
