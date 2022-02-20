
document.getElementById("randomSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // const value = document.getElementById("weatherInput").value;
    // if (value === "")
    //   return;
    // console.log(value);
    const url = "https://animechan.vercel.app/api/random";
    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(json) {
        let results = "";
        results += '<h2>"' + json.quote + '"</h2>';
        results += '<p><em>--' + json.character + '</em></p>';
        results += '<p>From <strong>' + json.anime + '</strong></p>';
       
        document.getElementById("randomResult").innerHTML = results;
      })

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=583aa8dc36381f6643c7eeb94498eaaa";
    fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let forecast = "";
        for (let i=0; i < json.list.length; i++) {
            forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
            forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
            forecast += "<p>Weather: " 
            forecast += json.list[i].weather[0].main + "</p>"
            forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        }

         
        document.getElementById("forecastResults").innerHTML = forecast;
    })


  });  