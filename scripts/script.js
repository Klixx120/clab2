
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

  });  

