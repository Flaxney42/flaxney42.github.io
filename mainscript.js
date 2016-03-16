(function() {
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  
  xhr.open('GET', 'data.html', true);
  xhr.send(null);
}());