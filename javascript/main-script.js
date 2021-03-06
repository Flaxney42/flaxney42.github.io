(function() {
  "use strict";
  /* Assign value of button elements to variables */
  var htmlButton = document.getElementById("addHtmlBtn");
  var jsonButton = document.getElementById("addJsonBtn");
  var xmlButton = document.getElementById("addXmlBtn");
  
  /* Request HTML file data from the server */
  function requestHtmlAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        document.getElementById('html').innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', 'html-data.html', true);
    xhr.send(null);
  }
  
  /* Request jSON file from the server */
  function requestJsonAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        var responseObject = JSON.parse(xhr.responseText);
        for (var i = 0; i < responseObject.restaurants.length; i++) {
          document.getElementById('json').innerHTML += responseObject.restaurants[i].name +
            ", ";
        }
        document.getElementById('json').innerHTML = 
        document.getElementById('json').innerHTML.replace(/,\s*$/, "");
      }
    };
    xhr.open('GET', '/json-data/json-data.json', true);
    xhr.send(null);
  }
  
  /* Request xml data from the server */
  function requestXmlAjax() {
     var xhr = new XMLHttpRequest();
     xhr.onload = function() {
       if (xhr.status >= 200 && xhr.status < 400) {
         var xmlDoc = xhr.responseXML;
         var xmlContent = xmlDoc.getElementsByTagName("p")[0].childNodes[0].nodeValue;
         document.getElementById("xml").innerHTML = xmlContent;
       }
     }
     xhr.open("GET", '/xml-data/xml-data.xml', true);
     xhr.send(null);
  }
  
  /* Request jSON data from server and populate list */
  $("#first-choice").change(function() {

	var $dropdown = $(this);

	$.getJSON("/json-data/json-list-data.json", function(data) {
	
		var key = $dropdown.val();
		var vals = [];
							
		switch(key) {
			case 'beverages':
				vals = data.beverages.split(",");
				break;
			case 'snacks':
				vals = data.snacks.split(",");
				break;
			case 'base':
				vals = ['Please choose from above'];
		}
		
		var $secondChoice = $("#second-choice");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

	});
});
  /* Add event listeners to button elements */
  htmlButton.addEventListener("click", requestHtmlAjax);
  jsonButton.addEventListener("click", requestJsonAjax);
  xmlButton.addEventListener("click", requestXmlAjax);
}());