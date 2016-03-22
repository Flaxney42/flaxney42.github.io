(function() {
  
  var htmlButton = document.getElementById("addHtmlBtn");
  
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
  
  htmlButton.addEventListener("click", requestHtmlAjax);
}());