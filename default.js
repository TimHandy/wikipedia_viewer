// TODO: User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

// TODO: User Story: I can click a button to see a random Wikipedia entry.


// take the user input and assign to a var
var html = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
 
$(document).ready(function() {
    $("#result-button").click(function() {
        var searchTerm = document.getElementById("search").value;
        console.log(searchTerm);
        var apiString = html + searchTerm; // TODO: take care of multi-word strings by adding '+' between the words.
        console.log(apiString);
        var jsonResults = $.getJSON(apiString, function(json) {
            console.log(jsonResults);
            for (var i = 0; i < 10; i++) {
                var resultTitle = jsonResults.responseJSON.query.search[i].title;
                console.log(resultTitle);
                var resultSnippet = jsonResults.responseJSON.query.search[i].snippet;
                var resultUrl = "https://en.wikipedia.org/wiki/" + resultTitle.split(" ").join("_");
                console.log(resultUrl)
                    // console.log(resultSnippet);
                $("#search-results-div:last-child").append("<a href='" + resultUrl + "' target='_blank'>" + "<h3>" + resultTitle + "</h3></a>");
                $("#search-results-div:last-child").append("<p>" + resultSnippet + "</p>");
            }
        });
    });
});

// object, responseJSON, query, search, 10 objects, title, snippet




//var searchResults = [];
//	$.each( data, function( key, val ) {
// searchResults.push( "<li id='" + key + "'>" + val + "</li>" );


// format it to the wikipedia api requirements
// call the api and retrieve JSON
// assign JSON to a var

// loop through

// replace HTML with the results


//https://www.freecodecamp.com/challenges/get-json-with-the-jquery-getjson-method





// Demo string
// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein




// https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix


// http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max
