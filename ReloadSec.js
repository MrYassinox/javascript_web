var seconds;
  var temp;
function removem1() {
    var xkl = getQueryVariable("url");
    var nkl=xkl.replace("&m=1", "");
document.getElementById("reload").innerHTML=nkl;
}
removem1();
document.getElementById('reload').href=window.location.href;
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("?&&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=_");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 6);

    if (seconds == 0) {
      temp = document.getElementById('countdown');
      parent.location.replace(document.getElementById("reload").innerHTML)
           return;
    }
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1500);
  } 
setTimeout(function(){ countdown(); }, 5000);
