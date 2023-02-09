
const putt = document.getElementById('name');

function list() {
  const textInput = putt.value;
  console.log(textInput);
  if (textInput.length > 7) {
    alert("character must not be more than 7");
  }
  else if (textInput.length < 7) {
    alert("characters must be up to 7");
  }
  else {
    alert("you are good to do");
  }
}
    document.querySelector("button").addEventListener("click", list);





var colorChanger = document.querySelector("#sudo");
var colors = ["yellow", "skyblue", "pink", "brown", "black", "aqua", "orange", "red", "green"];
var counter = 0;

function changeColor() {
  colorChanger.style.background = colors[counter];
  counter++;

}

setInterval(changeColor, 1000);