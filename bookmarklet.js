javascript:(function(){;var%20numDependencies=0,loadedDependencies=0;function%20scriptLoaded()%7BloadedDependencies++;if(numDependencies===loadedDependencies)%7BafterDepsLoaded()%7D%7Dfunction%20afterDepsLoaded()%7Bjavascript:(function()%7B$(%22li%22).each(function()%7Bvar%20fingerprint=$(this).attr(%22data-fingerprint%22);if(fingerprint!=undefined)%7Bvar%20colorString=fingerprint.substring(0,6);$(this).append('%3Cdiv%20style=%22position:absolute;width:30px;height:30px;left:0;top:0;background-color:#'+colorString+'%22%3E%3C/div%3E')%7D%7D)%7D)()%7DafterDepsLoaded();})()