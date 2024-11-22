async function getData(fetchURL: string) {
		const response = await fetch(fetchURL);
		const json = await response.json();
		console.log(json);
}

getData("https://jsonplaceholder.typicode.com/posts");


