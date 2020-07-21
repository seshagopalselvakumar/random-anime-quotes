let buttonMain = document.querySelector(".get-button");
let apiUrl =
  "https://cors-anywhere.herokuapp.com/https://anime-chan.herokuapp.com/api/quotes/random";
let quoteOutput = document.querySelector(".p-quote");
let characterOutput = document.querySelector(".p-character");
let animeOutput = document.querySelector(".p-anime");
let mainCard = document.querySelector(".main-card");
let loader = document.querySelector(".lds-roller");
let clickCount = 0;
getParams = (val) => {
  mainCard.style.display = "block";
  console.log("anime", val[0].anime);
  quoteOutput.innerHTML = val[0].quote;
  characterOutput.innerHTML = val[0].character;
  animeOutput.innerHTML = `Anime: ${val[0].anime}`;
  loader.style.display = "none";
  if (clickCount > 0) {
    buttonMain.innerHTML = "Try again?";
  }
};
buttonMain.addEventListener(
  "click",
  (getQuote = () => {
    clickCount = clickCount + 1;
    mainCard.style.display = "none";
    setTimeout(() => {
      loader.style.display = "block";
    }, 500);
    fetch(apiUrl)
      .then((response) => {
        Promise.resolve(response.json()).then((value) => {
          getParams(value);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  })
);
