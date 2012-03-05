document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\)/g, ' <img src="http://benjamin0331.googlepages.com/smile.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s;-*\)/g, ' <img src="http://benjamin0331.googlepages.com/blink.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\$/g, ' <img src="http://benjamin0331.googlepages.com/oops.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\(/g, ' <img src="http://benjamin0331.googlepages.com/sad.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*D/g, ' <img src="http://benjamin0331.googlepages.com/lol.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*p/g, '<img src="http://benjamin0331.googlepages.com/tongue.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*k/g, ' <img src="http://benjamin0331.googlepages.com/kiss.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\@/g, ' <img src="http://benjamin0331.googlepages.com/angry.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\#/g, ' <img src="http://benjamin0331.googlepages.com/sealed.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*x/g, ' <img src="http://benjamin0331.googlepages.com/oh.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*o/g, ' <img src="http://benjamin0331.googlepages.com/oeye.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

var d = document.getElementsByClassName('comment-body');
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\)/g, ' <img src="http://benjamin0331.googlepages.com/smile.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s;-*\)/g, ' <img src="http://benjamin0331.googlepages.com/blink.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\$/g, ' <img src="http://benjamin0331.googlepages.com/oops.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\(/g, ' <img src="http://benjamin0331.googlepages.com/sad.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*D/g, ' <img src="http://benjamin0331.googlepages.com/lol.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*p/g, '<img src="http://benjamin0331.googlepages.com/tongue.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*k/g, ' <img src="http://benjamin0331.googlepages.com/kiss.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\@/g, ' <img src="http://benjamin0331.googlepages.com/angry.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\#/g, ' <img src="http://benjamin0331.googlepages.com/sealed.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*x/g, ' <img src="http://benjamin0331.googlepages.com/oh.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*o/g, ' <img src="http://benjamin0331.googlepages.com/oeye.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

var d = document.getElementsByClassName('comment-body-author');
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\)/g, ' <img src="http://benjamin0331.googlepages.com/smile.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s;-*\)/g, ' <img src="http://benjamin0331.googlepages.com/blink.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\$/g, ' <img src="http://benjamin0331.googlepages.com/oops.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\(/g, ' <img src="http://benjamin0331.googlepages.com/sad.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*D/g, ' <img src="http://benjamin0331.googlepages.com/lol.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*p/g, '<img src="http://benjamin0331.googlepages.com/tongue.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*k/g, ' <img src="http://benjamin0331.googlepages.com/kiss.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\@/g, ' <img src="http://benjamin0331.googlepages.com/angry.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\#/g, ' <img src="http://benjamin0331.googlepages.com/sealed.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*x/g, ' <img src="http://benjamin0331.googlepages.com/oh.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*o/g, ' <img src="http://benjamin0331.googlepages.com/oeye.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

var d = document.getElementsByClassName('widget-content');
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\)/g, ' <img src="http://benjamin0331.googlepages.com/smile.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s;-*\)/g, ' <img src="http://benjamin0331.googlepages.com/blink.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\$/g, ' <img src="http://benjamin0331.googlepages.com/oops.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\(/g, ' <img src="http://benjamin0331.googlepages.com/sad.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*D/g, ' <img src="http://benjamin0331.googlepages.com/lol.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*p/g, '<img src="http://benjamin0331.googlepages.com/tongue.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*k/g, ' <img src="http://benjamin0331.googlepages.com/kiss.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\@/g, ' <img src="http://benjamin0331.googlepages.com/angry.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*\#/g, ' <img src="http://benjamin0331.googlepages.com/sealed.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*x/g, ' <img src="http://benjamin0331.googlepages.com/oh.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*o/g, ' <img src="http://benjamin0331.googlepages.com/oeye.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);