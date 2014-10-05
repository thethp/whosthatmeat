javascript:(function(){
  document.body.classList.toggle('whosthatmeat');
  if(!document.body.classList.contains('whosThatmeat')) {
      [].forEach.call(document.querySelectorAll('.whosThatMeatMarker'),removeMarker);
  }

  var whoaremeat = function(_element) {
    element = _element;
    var fingerprint = element.getAttribute('data-fp');
    if(fingerprint !== undefined && document.body.classList.contains('whosthatmeat')) {
      var colorString = fingerprint.substring(0,6);
      var newWTM = document.createElement('div');
      newWTM.className = 'whosThatMeatMarker';
      newWTM.setAttribute('colorString',colorString);
      newWTM.style.cursor = 'pointer';
      newWTM.style.position = 'absolute';
      newWTM.style.width = '30px';
      newWTM.style.height = '150px';
      newWTM.style.left = '200px';
      newWTM.style.top = '0';
      newWTM.style.zIndex = '-1';
      newWTM.style.background = '#'+colorString;
      element.appendChild(newWTM);
    }
  };
  document.getElementById('messages').addEventListener('DOMNodeInserted', function(_event) {
    _event.target.nodeName === 'li' && whoaremeat.bind(_event.target)();
  });
  [].forEach.call(document.querySelectorAll('#messages li'), function(_element){whoaremeat(_element);});

  function toggleMarker(_event) {
      [].forEach.call(document.querySelectorAll('.whosThatMeatMarker:not([colorString='+_event.target.getAttribute('colorString')+'])'),function(_element){console.log(_element);});
  }
  function removeMarker(_element) {
    _element.parent.removeChild(_element);
  }
})();
