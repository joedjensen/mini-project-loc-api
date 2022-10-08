


var getResultsName = function () {
    // grabbing from the url 
    var queryString = document.location.search;
    console.log(queryString);
    //seperates at the "&" 
    var resultsText = queryString.split('&')[0];
    //seperate for the search
    resultsText = resultsText.split('=')[1];
    var resultsForm = queryString.split('&')[1];
    resultsForm = resultsForm.split('=')[1]

    console.log(resultsText);
    console.log(resultsForm);


    getSearchResults(resultsForm, resultsText);

    // if (repoName) {
    //     repoNameEl.textContent = repoName;

    //     getRepoIssues(repoName);
    // } else {
    //     //if empty will return to index
    //     document.location.replace('./homepage.html');
    // }
};

function getSearchResults(format, searchText) {

    fetch('https://www.loc.gov/' + format + '/?q=' + searchText + "&fo=json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.results);
            displayResults(data.results);
        });

}

function displayResults(resultsArray) {
    //buttonEl = $('<button>', { "class": "saveBtn col-1" })

    for (var i = 0; i < resultsArray.length; i++) {
        var resultObj = resultsArray[i];
        console.log(resultObj);

        var cardEl = $("<li>", { "class": "card mt-2" });
        var cardBodyEl = $("<div>", { "class": "card-body" });
        var cardTitleEl = $("<h5>", { "class": "card-title" });
        cardTitleEl.text(resultObj.title);
        var cardDateEl = $("<p>", { "class": "card-text" });
        cardDateEl.text(resultObj.date);
        var cardTextEl = $("<p>", { "class": "card-text" });
        cardTextEl.text(resultObj.description);
        var cardButtonEl = $("<a>", { "class": "btn btn-primary" });
        cardButtonEl.text("Read More")
        cardButtonEl.attr("href", resultObj.id);

        cardEl.append(cardBodyEl);
        cardBodyEl.append(cardTitleEl, cardDateEl, cardTextEl, cardButtonEl);
        $("#cardPlace").append(cardEl);
    }


}

// displayResults();
getResultsName();