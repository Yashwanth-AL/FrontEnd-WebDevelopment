alert("yashwanth");
let key = document.querySelector(".heading1").innerHTML;
document.querySelector(".heading1").innerHTML = key +  "  This text has been appended by javascript";

let divi = document.querySelectorAll(".box");

divi[0].innerHTML = "added text to first div element";
divi[1].innerHTML = "added text to second div element";
divi[2].innerHTML = "added text to third div element";