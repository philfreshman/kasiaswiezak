
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    // On scroll
    document.getElementById("flex-container").style.backgroundColor="rgba(255, 255, 255, 1)";
    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(100)");
    document.getElementById("flex-container").style.height="54.7px";
    document.getElementById("flex-container").style.transition="0.7s"

    document.getElementById("kasia").style.border="0px";


  } else {
    // Normal state:

    document.getElementById("flex-container").style.height="63px";
    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(0)");
    document.getElementById("flex-container").style.transition="0.7s"


    // document.getElementById("kasia").style.border="1px solid black";

  }
}