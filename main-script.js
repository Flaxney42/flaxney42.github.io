$(function() {
  'use strict';
  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date(Date.now());
    console.log(date);
    console.log(e.timeStamp);
    date.setTime(e.timeStamp);
    console.log(date);
    var clicked = date.toDateString();
    console.log(clicked);
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  })
});

