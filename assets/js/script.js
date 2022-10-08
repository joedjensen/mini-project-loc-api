//  https://www.loc.gov/maps/?q=civil war&fo=json
var submitButtonEl = $('#submit-button')
var searchTextEl = $('#text-input')
var dropDownEl = $('#dropdown')



function fetchResults(event) {
    event.preventDefault()
    var format = dropDownEl.find(":selected").attr("data-search-text")
    fetch('https://www.loc.gov/' + format + '/?q=' + searchTextEl.val() + "&fo=json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

    document.location.replace("./search-results.html?q=" + searchTextEl.val() + "&form=" + format);
}

// TODO: display search

//takes user to next page
function moveToResults(event) {



}

submitButtonEl.on("click", fetchResults)


//repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);