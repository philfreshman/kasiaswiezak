// var img0 = "url('content/images/sample1.jpg')";
// var img1 = "url('content/images/sample2.jpg')";
// var img2 = "url('content/images/sample3.jpg')";

// change(0);
// function change(index){
//     switch(index){
//         case 0:
//             document.getElementById('hero').style.animationName = "fade";
//             document.getElementById('hero').style.backgroundImage = img1;
//             setTimeout(function(){ index++; reset_animation(); change(index);},3000)
//             console.log(index);
//         break;

//         case 2:
//             document.getElementById('hero').style.animationName = "fade";

//             document.getElementById('hero').style.backgroundImage = img1;
//             setTimeout(function(){ index++; reset_animation(); change(index);},3000)
//             console.log(index);
//         break;

//         case 1:
//             document.getElementById('hero').style.backgroundImage = img2;
//             setTimeout(function(){ index=0; reset_animation(); change(index)},3000)
//             console.log(index);
//         break;    
//     }
// }



// var timedelay = 1;
// var _delay = setInterval(delayCheck, 100);

// $('.parent').on('mousemove', showAllEvent);

// function delayCheck() {
//   if (timedelay == 5) {
//     $('.flex-container').fadeOut(800);
//     timedelay = 1;
//   }
//   timedelay = timedelay + 1;
// }

function showAllEvent() {
  $('.flex-container').fadeIn();
  timedelay = 1;
  clearInterval(_delay);
  _delay = setInterval(delayCheck, 1000);
}