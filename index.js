var buttonFetch = document.getElementById("fetch-button");

var apiKey = "1b2544288b29fdd8bc2775dfb51e6c20";

var url = `https://api.musixmatch.com/ws/1.1/chart.artists.get/?${apiKey}&page=1&page_size=3&country=it`;

function searchapi() {
  fetch(url, {
    mode: "no-cors",
  })
    .then((resp) => console.log(resp))
    .then((response) => console.log(response));
}

buttonFetch.addEventListener("click", searchapi);
