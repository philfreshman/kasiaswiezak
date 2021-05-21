function loadImages(){

const leftCol = document.getElementById('left-column');
const rightCol = document.getElementById('right-column');

let newDiv;
let newImg;

imgs.forEach(function(url, index,) {

    newDiv = document.createElement('div');
    newImg = document.createElement('img');

    newImg.src = url;
    newImg.className = "picture";
    newDiv.className = "box";

    newDiv.appendChild(newImg);

    if(index%2==0){
        leftCol.appendChild(newDiv);
    }
    else{
        newDiv.id = "right";
        rightCol.appendChild(newDiv)
    }
});
}

