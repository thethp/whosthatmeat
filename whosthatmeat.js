javascript:(function(){
  $('li').each(function() {
    var fingerprint = $(this).attr('data-fingerprint');
    if(fingerprint != undefined) {
      var colorString = fingerprint.substring(0,6);
      var height = (document.URL.indexOf('face') === -1) ? "101px;" : "30px";
      $(this).append('<div style="position:absolute;width:30px;height:'+height+';left:0;top:0;background-color:#'+colorString+'"></div>');
    }
  });
})();
