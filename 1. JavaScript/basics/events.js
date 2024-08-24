let btn = document.querySelector(".custom-button");
let curMode = "light";

btn.addEventListener("click", (evt) => {
  if(curMode === "light"){
    curMode = "dark"; 
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white"; 
  }
  else {
    curMode = "light"; 
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black"; 
  }
  console.log(evt);
});