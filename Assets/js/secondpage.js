let englishName = $("#englishName");
let scienceName = $("#scienceName");
let countryRec = $("#countryRec");
let cityRec = $("#cityRec");

$(document).ready(function () {
  // Retrieved stored data from local storage
  let birdData = JSON.parse(localStorage.getItem("birdData"));

  // Populated HTML element with retrieved data that I want to target specifically
  englishName.text(birdData.recordings[0].en);
  scienceName.text(birdData.recordings[0].sp);
  countryRec.text(birdData.recordings[0].cnt);
  cityRec.text(birdData.recordings[0].loc);
});

//TODO

//1.CREATE A PLAY BUTTON
//2. FETCH AUDIO RECORDING AND FIGURE OUT HOW TO SET IT TO PLAY BUTTON AND THEN ACTUALLY HAVE IT PLAY!!!
