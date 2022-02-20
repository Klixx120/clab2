document.getElementById("titleSubmit").addEventListener("click", function(event){
    event.preventDefault();
    const value = document.getElementById("titleInput").value;
    if (value === ""){
        alert("Please enter an anime title :)");
        return;
    }
    const url = 'https://animechan.vercel.app/api/quotes/anime?title=' + value;

    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(json) {
        let results = "";
        results += '<h2>"' + json[0].quote + '"</h2>';
        results += '<p><em>--' + json[0].character + '</em></p>';
        results += '<p>From <strong>' + json[0].anime + '</strong></p>';
       
        document.getElementById("randomResult").innerHTML = results;
      })

});