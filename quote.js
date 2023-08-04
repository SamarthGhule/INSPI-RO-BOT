let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// const url = "https://api.quotable.io/random";
const url = "https://favqs.com/api/";
// const url = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click",getQuote);
