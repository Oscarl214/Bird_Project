let searchForm=$("#user-form");

function handleFormSubmit (event) {
    event.preventDefault ();
        let birdApiUrl= "https://xeno-canto.org/api/2/recordings?query=cnt:" + country

        let country=$("#cnt-name").val()

    fetch (birdApiUrl,{cache:"reload",})
    
    .then (function(response){
        return response.json() 
    })

    .then (function (data){
        console.log (data)
    })

}

searchForm.on("submit", handleFormSubmit)
console.log (birdApiUrl, country);