//  https://www.loc.gov/maps/?q=civil war&fo=json
var submitButtonEl = $('#submit-button')
var searchTextEl = $('#text-input')
var dropDownEl = $('#dropdown')



function fetchResults(event) {
    event.preventDefault()
    var format = dropDownEl.find(":selected").attr("data-search-text")
    if (format && searchTextEl.val()) {
        document.location = ("./search-results.html?q=" + searchTextEl.val() + "&form=" + format);
    } else {
        alert("Please enter both parameters")
    }
}

// TODO: display search

//takes user to next page
function moveToResults(event) {



}

submitButtonEl.on("click", fetchResults)


//repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);