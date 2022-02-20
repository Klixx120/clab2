document.getElementById("randomSubmit").addEventListener("click", function(event){
    event.preventDefault();
    
    const url = 'https://animechan.vercel.app/api/available/anime';

    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(json) {
        let results = "";
        json.sort();
        json.forEach(addAnime);
        function addAnime(currentValue, index){
            results += '<p><strong>' + json[index] + '</strong></p>';
        }
       
        document.getElementById("listResult").innerHTML = results;
      })

});