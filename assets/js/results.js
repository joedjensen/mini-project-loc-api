var submitButtonEl = $('#submit-button')
var searchTextEl = $('#text-input')
var dropDownEl = $('#dropdown')
var backButtonEl = $('#back-button')

function parseSiteName (){
    argsArray  = document.location.search.split('?')[1].split('&');
    var argsObject = {}
    for (argIndex = 0; argIndex < argsArray.length; argIndex++) {
        var paramArray = argsArray[argIndex].split('=')
        argsObject[paramArray[0]] = paramArray[1]
    }
    return argsObject
}
var getResultsName = function () {
    // grabbing from the url 
    var argsObject = parseSiteName()
    getSearchResults(argsObject.form, argsObject.q);

    // if (repoName) {
    //     repoNameEl.textContent = repoName;

    //     getRepoIssues(repoName);
    // } else {
    //     //if empty will return to index
    //     document.location.replace('./homepage.html');
    // }
};

function getSearchResults(format, searchText) {
    if (format && searchText) {
        console.log(format)
    fetch('https://www.loc.gov/' + format + '/?q=' + searchText + "&fo=json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.results);
            displayResults(data.results);
        });
    }
}

function displayResults(resultsArray) {
    //buttonEl = $('<button>', { "class": "saveBtn col-1" })
    if (resultsArray.length > 0) {
        $("#cardPlace").text("")
        for (var i = 0; i < resultsArray.length; i++) {
            var resultObj = resultsArray[i];
    
            var cardEl = $("<li>", { "class": "card mt-2" });
            var cardBodyEl = $("<div>", { "class": "card-body" });
            var cardTitleEl = $("<h5>", { "class": "card-title" });
            cardTitleEl.text(resultObj.title);
            var cardDateEl = $("<p>", { "class": "card-text" });
            cardDateEl.text("Date: " + resultObj.date);
            var cardTextEl = $("<p>", { "class": "card-text" });
            cardTextEl.text("Description: " + resultObj.description);
            var cardButtonEl = $("<a>", { "class": "btn btn-primary" });
            var cardSubjectsEl = $("<p>", { "class": "card-text" });
            cardSubjectsEl.text("Subjects: " + resultObj.subject);
            cardButtonEl.text("Read More")
            cardButtonEl.attr("href", resultObj.id);
    
            cardEl.append(cardBodyEl);
            cardBodyEl.append(cardTitleEl, cardDateEl, cardTextEl, cardSubjectsEl, cardButtonEl);
            $("#cardPlace").append(cardEl);
        }
    } else {
        $("#cardPlace").text("No results found for your search")
    }



}

function fetchResults(event) {
    event.preventDefault()
    var format = dropDownEl.find(":selected").attr("data-search-text")
    if (format && searchTextEl.val()) {
        document.location.replace("./search-results.html?q=" + searchTextEl.val() + "&form=" + format);
    } else {
        alert("Please enter both parameters")
    }
}


// displayResults();
getResultsName();

submitButtonEl.on("click", fetchResults)
backButtonEl.on("click", function (event) {
    event.preventDefault()
    document.location.replace("./homepage.html")
})