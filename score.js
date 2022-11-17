function getScore() {
    var scoreboard = JSON.parse(localStorage.getItem("scoreboard"));

     var sortedData = scoreboard.sort(function(a,b){
        return b.time - a.time;
    });

    for (let i = 0; i < sortedData.length; i++) {
        var liEl = document.createElement("li")
        
        liEl.textContent = sortedData[i].initials + " - " + sortedData[i].time;

        document.querySelector(".data").appendChild(liEl);
    }
}

getScore();

