(function() {
  "use strict";
  /* Assign value of button elements to variables */
  var htmlButton = document.getElementById("addHtmlBtn");
  var jsonButton = document.getElementById("addJsonBtn");
  
  /* Request HTML file data from the server */
  function requestHtmlAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
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
      if (xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);
        for (var i = 0; i < responseObject.restaurants.length; i++) {
          document.getElementById('json').innerHTML += responseObject.restaurants[i].name +
            ", ";
        }
      }
    };
    xhr.open('GET', '/json-data/json-data.json', true);
    xhr.send(null);
  }
  
  /* Request xml data from the server */
  
  htmlButton.addEventListener("click", requestHtmlAjax);
  jsonButton.addEventListener("click", requestJsonAjax)
}());