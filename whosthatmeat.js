javascript:(function(){
  document.body.classList.toggle('whosthatmeat');
  if(!document.body.classList.contains('whosThatmeat')) {
      [].forEach.call(document.querySelectorAll('.whosThatMeatMarker'),removeMarker(e));
  }

  var whoaremeat = function() {
    element = this;
    var fingerprint = element.getAttribute('data-fp');
    if(fingerprint !== undefined && document.body.classList.contains('whosThatmeat')) {
      var colorString = fingerprint.substring(0,6);
      var height = (document.URL.indexOf('face') === -1) ? "200px;" : "30px";
      var newWTM = document.createElement('div');
      newWTM.className = 'whosThatMeatMarker';
      newWTM.setAttribute('colorString',colorString);
      newWTM.style.cursor = 'pointer';
      newWTM.style.position = 'absolute';
      newWTM.style.width = '30px';
      newWTM.style.height = height;
      newWTM.style.left = '100%';
      newWTM.style.top = '0';
      newWTM.style.background = '#'+colorString;
      element.appendChild(newWTM);
    }
  };
  $('#chat-list').on("DOMNodeInserted", function(_event) {
    _event.target.nodeName == 'LI' && whoaremeat.bind(_event.target)();
  }).find('li').each(whoaremeat);

  $('#chat-list').on('click', '.whosThatMeatMarker', function(_event) {
    $('.whosThatMeatMarker:not([colorString='+$(_event.target).attr("colorString")+'])').toggle();
  });
  
  function removeMarker(_element) {
    e.parent.removeChild(_element);
  }
})();

