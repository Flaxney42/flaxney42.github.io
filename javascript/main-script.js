(function() {
  
  var htmlButton = document.getElementById("addHtmlBtn");
  var xmlButton = document.getElementById("addXmlBtn");
  var jsonButton = document.getElementById("addJsonBtn");
  /* requests HTML, inserts into page
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
  //requests XML, inserts into page (broken, must fix)
  function requestXmlAjax() {
    var xhr = new XMLHttpRequest();
    var response = xhr.responseXML;
    var xmlTags = response.getElementsByTagName('p');
    var paragraph = document.getElementById('xml');
    
    paragraph.appendChild(document.createTextNode(getNodeValue(xmlTags[i]), 'p'));
   
   function getNodeValue(obj, tag) {
     return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
   }
    
    
    xhr.open('GET', '/xml-data/xml-data.xml', true);
    xhr.send(null);
   } 
   */
  function requestJsonAjax() {
    var xhr = new XMLHttpRequest();
    
    if (xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);
      var newContent = '';
      newContent += responseObject.text;
      document.getElementById('json').innerHTML = newContent;
    }
    xhr.open('GET', '/json-data/json-data.json', true);
    xhr.send(null);
  }
  htmlButton.addEventListener("click", requestHtmlAjax);
  
  xmlButton.addEventListener("click", requestXmlAjax);
  
  jsonButton.addEventListener("click", requestJsonAjax)
}());