var fuck = document.getElementById("measure");
let height;



function getPosition(){
    console.log(`position = ${parseInt(fuck.getBoundingClientRect().top)}`);
    height = parseInt(fuck.getBoundingClientRect().top);
    console.log(height);
    colorHeader();
}




function colorHeader() {
  if (height >= 80) {

    // Normal state:
    document.getElementById("flex-container").style.height="6vh";


    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(0)");
    document.getElementById("flex-container").style.transition="0.7s"
    

  } else {

    // On scroll
    document.getElementById("flex-container").style.height="30vh";

    // document.getElementById("flex-container").style.backgroundColor="rgba(255, 255, 255, 1)";
    document.getElementById("flex-container").setAttribute("style","-webkit-filter:invert(100)");
    document.getElementById("flex-container").style.transition="0.7s"


  }
}





