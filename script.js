
var colorChanger = document.querySelector("#sudo");
  var colors = [ "white", "yellow", "skyblue", "pink", "brown", "black", "aqua", "orange", "red", "green"];
var counter = 0;

function changeColor() {
  colorChanger.style.background = colors[counter];
  counter++;

}

setInterval(changeColor, 1000);



const btn = document.querySelector("button");
const fill = document.querySelector("#div2");
const put = document.querySelectorAll("input")[0];
const toons = document.querySelector("#toon");
 
console.log(put);
console.log(fill);
console.log(btn);

 btn.addEventListener("click", function(){
  if (put.value === "") {
    fill.style.display = "block";
    
  } else {
    toons.style.display = "block";
  };

  
  setTimeout(function(){
    fill.style.display = "none"
}, 2000)

setTimeout(function(){
      toons.style.display = "none"
}, 4000)

 })



 
