javascript:(function(){
  var whoaremeat = function() {
    element = $(this);
    var fingerprint = element.attr('data-fingerprint');
    if(fingerprint != undefined) {
      var colorString = fingerprint.substring(0,6);
      var height = (document.URL.indexOf('face') === -1) ? "101px;" : "30px";
      element.append('<div style="position:absolute;width:30px;height:'+height+';left:0;top:0;background-color:#'+colorString+'"></div>');
    }
  };

  $('#chat-list').on("DOMNodeInserted", function(event) {
    event.target.nodeName == 'LI' && whoaremeat.bind(event.target)();
  }).find('li').each(whoaremeat);
})();
