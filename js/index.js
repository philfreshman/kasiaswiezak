
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    // document.getElementById("navbar").style.top = "0";
    document.getElementById("flex-container").style.backgroundColor="rgba(255, 255, 255, 1)";
    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(100)");
    document.getElementById("flex-container").style.height="46px";



    document.getElementById("kasia").style.border="0px";


  } else {
    document.getElementById("flex-container").style.height="70px";
    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(0)");

    document.getElementById("kasia").style.border="1px solid black";



  }
}