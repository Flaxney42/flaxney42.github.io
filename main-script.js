$(function() {
  'use strict';
  $(':header').addClass('headline');
  $('li:lt(3)').hide().fadeIn(1500);
  $('li').on('click', function() {
    $(this).remove();
  });
  $('li em').addClass('seasonal');
  $('li.hot').addClass('favorite');
  $('li[id!="one"]')
  .hide()
  .delay(500)
  .fadeIn(1400);
});

