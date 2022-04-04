function message(){
  alert("This game is supported on Linux");
}

var currentcount = 2
var countadd = document.querySelector("#two")

function add(){
  currentcount++;
  countadd.innerText = currentcount;
  return (currentcount);
}

var mainImg = document.querySelector("#img2switch");

function switchimgpixel(){
  mainImg.src = "pixel-ninjas-2.png";
}

function switchimgstone(){
  mainImg.src = "stonepunk.png";
}


