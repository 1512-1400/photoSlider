var $ =document;
var slide = $.querySelector(`.slide`);
var leftArrow = $.querySelector(`.leftArrow`);
var rightArrow = $.querySelector(`.rightArrow`);
var srcArray = [`./pexels-negative-space-34153.jpg`, `./pexels-valdemaras-d-1647962.jpg`,`./photo_2022-07-30_01-33-13.jpg`];

var i = 0;

function next(){
  if (i < 2){
    i++;
  }else{
    i=0
  }
  slide.src = srcArray[i];
}

rightArrow.addEventListener(`click`, next)

leftArrow.addEventListener(`click`, ()=>{
  if (i <= 0){
    i = 2;
  }else{
    i--
  }
  slide.src = srcArray[i];
})

setInterval(next, 5000)
