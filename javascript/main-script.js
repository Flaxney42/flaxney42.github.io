(function() {
  
  var htmlButton = document.getElementById("addHtmlBtn");
  var xmlButton = document.getElementById("addXmlBtn");
  
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
  
  function requestXmlAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = xhr.responseXML;
        var paragraphs = response.getElementsByTagName('p');
        document.getElementById('xml').innerHTML = paragraphs;
      }
    };
    
    xhr.open('GET', '/xml-data/xml-data.xml', true);
    xhr.send(null);
   }
  
  htmlButton.addEventListener("click", requestHtmlAjax);
  
  xmlButton.addEventListener("click", requestXmlAjax);
}());