const apiKey = "0cdac1d52f11499fa45799c7ea450624";

let dateObj = new Date();
let currentday = dateObj.getDate();
let daysToSubtract = 7;
let newDay = currentday - daysToSubtract;

dateObj.setDate(newDay);

let fromDate = dateObj.toISOString().split("T")[0];
let currentDate = new Date().toISOString().split("T")[0];

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

function getNews(searchTerm) {
  return fetch(
    `${newsApiBaseUrl}?q=${searchTerm}&apiKey=${apiKey}&from=${fromDate}&to=${currentDate}&pageSize=100`,
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      return data.articles;
    });
}

export { getNews };
