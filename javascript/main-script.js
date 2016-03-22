(function() {
  
  var htmlButton = document.getElementById("addHtmlBtn");
  
  var jsonButton = document.getElementById("addJsonBtn");
  
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
  
  function requestJsonAjax() {
    var xhr = new XMLHttpRequest();
    
    if (xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);
      var newContent = '';
      newContent += responseObject["text"];
      console.log(responseObject["text"]);
      document.getElementById('json').innerHTML = newContent;
    }
    xhr.open('GET', '/json-data/json-data.json', true);
    xhr.send(null);
  }
  htmlButton.addEventListener("click", requestHtmlAjax);
  
  
  jsonButton.addEventListener("click", requestJsonAjax)
}());