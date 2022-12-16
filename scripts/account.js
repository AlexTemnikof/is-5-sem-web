import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        const loaderTemplate = document.querySelector("#loader");
        const loaderItem = loaderTemplate.content.cloneNode(true);
        const loaderGif = loaderTemplate.querySelector(".loader__image");
        loaderGif.setAttribute("src", "gif/loader.gif")
    });