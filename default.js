// STORY: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

function HandleResponseAndUpdatePage(json) {
	//console.log(jsonResults);
	for (var i = 0; i < json.query.search.length; i++) {
		var resultTitle = json.query.search[i].title;
		console.log(resultTitle);
		var resultSnippet = json.query.search[i].snippet;
		console.log(resultSnippet);
		var resultUrl = "https://en.wikipedia.org/wiki/" + resultTitle.split(" ").join("_");
		console.log(resultUrl);
		$("#search-results-div:last-child").append("<a href='" + resultUrl + "' target='_blank'>" + "<h3>" + resultTitle + "</h3></a>");
		$("#search-results-div:last-child").append("<p>" + resultSnippet + "..." + "</p>");
	}
}

function sendRequest() {
	document.getElementById("search-results-div").innerHTML = "";	// clear existing search results
	var html = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
	var searchTerm = document.getElementById("search").value.split(" ").join("+");
	console.log(searchTerm);
	var apiString = html + searchTerm;
	console.log(apiString);
	var jsonResults = $.getJSON(apiString, HandleResponseAndUpdatePage);
}

$("#result-button").click(sendRequest);
// Event handler for the Enter key press
$("#search").keypress(function(event) {		// watch for a keypress in the search box
	if (event.keyCode == 13) {		// specifically, watch for the Enter key
		sendRequest();	// click the result button... which has it's own function sendRequest() in the click handler above.
	}
});


/*

https://www.freecodecamp.com/challenges/get-json-with-the-jquery-getjson-method

Demo string
https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein

https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix

http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max

*/
