javascript:(function(){
  $('li').each(function() {
    var fingerprint = $(this).attr('data-fingerprint');
    if(fingerprint != undefined) {
      var colorString = fingerprint.substring(0,6);
      $(this).append('<div style="position:absolute;width:30px;height:30px;left:0;top:0;background-color:#'+colorString+'"></div>');
    }
  });
})();
