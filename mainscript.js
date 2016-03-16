(function() {
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    var getNodeValue = function(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
      };
    if (xhr.readystate === 4 && xhr.status === 200) {
      var response = xhr.responseXML;
      var events = response.getElementsByTagName('event');
      
      for (var i = 0; i < events.length; i++) {
        var container, location, city, newline;
        
        container = document.createElement('div');
        container.className = 'event';
        
        location = document.createElement('p');
        city = document.createElement('b');
        newline = document.createElement('br');
        city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
        location.appendChild(newline);
        location.insertBefore(city, newline);
        location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
        container.appendChild(location);
        
        document.getElementById('content').appendChild(container);
        
      }
     
    }
  };
  xhr.open('GET', 'data.xml', true);
  xhr.send(null);
}());