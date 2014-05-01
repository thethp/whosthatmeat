javascript:(function(){
  $('body').toggleClass('whosthatmeat');
  if(!$('body').hasClass('whosthatmeat')) {
      console.log('Huh');
    $('.whosthatMeatMarker').remove();
  }
  var whoaremeat = function() {
    element = $(this);
    var fingerprint = element.attr('data-fingerprint');
    if(fingerprint != undefined && $('body').hasClass('whosthatmeat')) {
      var colorString = fingerprint.substring(0,6);
      var height = (document.URL.indexOf('face') === -1) ? "101px;" : "30px";
      element.append('<div class="whosthatMeatMarker" style="position:absolute;width:18px;height:'+height+';left:0;top:0;background-color:#'+colorString+'"></div>');
    }
  };
      $('#chat-list').on("DOMNodeInserted", function(event) {
	      event.target.nodeName == 'LI' && whoaremeat.bind(event.target)();
	  }).find('li').each(whoaremeat);
})();
