let btn = document.querySelector(".custom-button");
let curMode = "light";

btn.addEventListener("click", (evt) => {
  if(curMode === "light"){
    curMode = "dark"; 
    document.querySelector("body").style.backgroundColor = "gray";
  }
  else {
    curMode = "light"; 
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(evt);
});