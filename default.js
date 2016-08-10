function sendRequest() {
	document.getElementById("search-results-div").innerHTML = "";
	var html = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";	// Question: Do I have to keep using CORS crossorigin.me, or am I doing something wrong?
	var searchTerm = document.getElementById("search").value.split(" ").join("+");
	console.log(searchTerm);
	var apiString = html + searchTerm;
	//console.log(apiString);
	var jsonResults = $.getJSON(apiString, function(json) {
		//console.log(jsonResults);
		for (var i = 0; i < jsonResults.responseJSON.query.search.length; i++) {
			var resultTitle = jsonResults.responseJSON.query.search[i].title;
			//console.log(resultTitle);
			var resultSnippet = jsonResults.responseJSON.query.search[i].snippet;
			var resultUrl = "https://en.wikipedia.org/wiki/" + resultTitle.split(" ").join("_");
			//console.log(resultUrl);
			// console.log(resultSnippet);
			$("#search-results-div:last-child").append("<a href='" + resultUrl + "' target='_blank'>" + "<h3>" + resultTitle + "</h3></a>");
			$("#search-results-div:last-child").append("<p>" + resultSnippet + "..." + "</p>");
		}
	});
}

$(document).ready(function() {
	// STORY: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.
    $("#result-button").click(sendRequest);
	// Event handler for the Enter key press
	$("#search").keypress(function(event) {		// watch for a keypress in the search box
		if (event.keyCode == 13) {		// specifically, watch for the Enter key
			$("#result-button").click();	// click the result button... which has it's own function sendRequest() in the click handler above.
		}
	});
});


// RANDOM NOTES

//var searchResults = [];
//	$.each( data, function( key, val ) {
// searchResults.push( "<li id='" + key + "'>" + val + "</li>" );


// format it to the wikipedia api requirements
// call the api and retrieve JSON
// assign JSON to a var


//https://www.freecodecamp.com/challenges/get-json-with-the-jquery-getjson-method


// Demo string
// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein


// https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix


// http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max
