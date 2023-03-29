// Variables for pulling API data 

let englishName = $("#englishName");
let scienceName = $("#scienceName");
let countryRec = $("#countryRec");
let cityRec = $("#cityRec");
let downlink = $("#downBtn");
let imgHolder = $("#fetchedPhoto");
let imgPlace = $("#fetchedPhoto2");

// Function that populates API data to second page
$(document).ready(function () {
  // Retrieved stored data from local storage
  let birdData = JSON.parse(localStorage.getItem("birdData"));

  // Populated HTML element with retrieved data that I want to target specifically
  englishName.text(birdData.recordings[0].en);
  scienceName.text(birdData.recordings[0].sp);
  countryRec.text(birdData.recordings[0].cnt);
  cityRec.text(birdData.recordings[0].loc);
  downlink.attr("href", birdData.recordings[0].file);

  let birdValue = birdData.recordings[0].en;

  fetch("https://api.pexels.com/v1/search?query=" + birdValue, {
    headers: {
      Authorization: "FuhXBroha0FVf7V25shqXMuFhsGQYgxaA0dIL0esUNLnwAR7hJ3ZNhVa",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      imgHolder.attr("src", data.photos[0].src.original);
      imgPlace.attr("src", data.photos[1].src.large2x);
    });
});


