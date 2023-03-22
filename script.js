let searchForm = $("#userForm");
let searchBtn = $("#searchBtn");

function handleFormSubmit(event) {
  event.preventDefault();
  let birdName = $("#birdSearch").val();

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;

      if (species > 1) {
        console.log("Be more specific");
      } else if (species == 0) {
        console.log("No results matches your Search");
      } else {
        console.log("Working");
      }
      console.log(data);
    });
}

// searchForm.on("submit", handleFormSubmit);

searchBtn.on("click", handleFormSubmit);

//TODO on JS:

//1. Create Prompts for if statement
//1.2. Either create it dynamically through js or create on out html and apply a "hidden" attribute and unhide as we need to
//1.3. Pull data for what we need for "fun facts" and most importantly our recording, only pulling from first array of data fetch [0]
//2. fetch our pictures from second API
