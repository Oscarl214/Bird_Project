let searchForm = $("#userForm");
let searchBtn = $("#searchBtn");
let toucanBtn = $("#toucanButton");
let baldEagleBtn = $("#baldEagleButton");
let blueJayBtn = $("#blueJayButton");
let andeanCondorBtn = $("#andeanCondorButton");
let chileanFlamingoBtn = $("#chileanFlamingoButton");
let indianPeafowlBtn = $("#indianPeafowlButton");

function fetchBirdAPI(event) {
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
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
      }
      //SET OUR FETCHED DATA TO OUR LOCAL STORAGE
      localStorage.setItem("birdData", JSON.stringify(data));

      if (data.numSpecies == 1 && data.numPages == 1) {
        loadSecondPage();
      }
    });
}

function fetchBirdAPI(event) {
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
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

  // let attempt2 = "https://xeno-canto.org/api/2/recordings?query=grey+parrot";

  fetch(birdApiUrl, {
    cache: "reload",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let species = data.numSpecies;
      if (species > 1) {
        alert("Be more specific");
      } else if (species == 0) {
        alert("No results matches your Search");
      } else {
        console.log("Working");
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

searchBtn.on("click", fetchBirdAPI);
toucanBtn.on("click", fetchtoucanAPI);
baldEagleBtn.on("click", fetchBaldEagleAPI);
blueJayBtn.on("click", fetchblueJayAPI);
andeanCondorBtn.on("click", fetchandeanCondorAPI);
chileanFlamingoBtn.on("click", fetchchileanFlamingoAPI);
indianPeafowlBtn.on("click", fetchindianPeafowlAPI);
//TODO on JS:

//1. Create Prompts for if statement
//1.2. Either create it dynamically through js or create on out html and apply a "hidden" attribute and unhide as we need to
//1.3. Pull data for what we need for "fun facts" and most importantly our recording, only pulling from first array of data fetch [0]
//2. fetch our pictures from second API
