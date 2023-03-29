
// Different variables to make buttons work on homepage
let searchForm = $("#userForm");
let searchBtn = $("#searchBtn");
let toucanBtn = $("#toucanButton");
let baldEagleBtn = $("#baldEagleButton");
let blueJayBtn = $("#blueJayButton");
let andeanCondorBtn = $("#andeanCondorButton");
let chileanFlamingoBtn = $("#chileanFlamingoButton");
let indianPeafowlBtn = $("#indianPeafowlButton");

// below are all the functions for the searchbar or clicking an image on homepage
function fetchBirdAPI(event) {
  event.preventDefault();

  let birdName = $("#birdSearch").val();

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;


  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        $(".modal").attr("class", "modal is-active");
        $("#mText").text("Be more Specific!");
      } else if (species == 0) {
        $(".modal").attr("class", "modal is-active");
        $("#mText").text("No results found!");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}

function fetchtoucanAPI(event) {
  event.preventDefault();

  let birdName = "Keel-billed toucan";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;


  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}

function fetchBaldEagleAPI(event) {
  event.preventDefault();

  let birdName = "bald eagle";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}

function fetchblueJayAPI(event) {
  event.preventDefault();

  let birdName = "blue jay";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}

function fetchandeanCondorAPI(event) {
  event.preventDefault();

  let birdName = "andean condor";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}
function fetchchileanFlamingoAPI(event) {
  event.preventDefault();

  let birdName = "chilean flamingo";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}
function fetchindianPeafowlAPI(event) {
  event.preventDefault();

  let birdName = "indian peafowl";

  let birdApiUrl = "https://xeno-canto.org/api/2/recordings?query=" + birdName;

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}
//Created Function to load new page once search values matches our working conditions
let loadSecondPage = function () {
  window.location.href = "secondindex.html";
};

// buttons to make the the API calls and generate second page
searchBtn.on("click", fetchBirdAPI);
toucanBtn.on("click", fetchtoucanAPI);
baldEagleBtn.on("click", fetchBaldEagleAPI);
blueJayBtn.on("click", fetchblueJayAPI);
andeanCondorBtn.on("click", fetchandeanCondorAPI);
chileanFlamingoBtn.on("click", fetchchileanFlamingoAPI);
indianPeafowlBtn.on("click", fetchindianPeafowlAPI);

// modal function to return be more specific or no results found
$("#closeM").on("click", function () {
  $(".modal").removeClass("is-active");
});

