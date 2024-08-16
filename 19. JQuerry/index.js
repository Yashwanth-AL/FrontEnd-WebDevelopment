$("h1").css("color", "red");

console.log($("h1").css("font-size"));

$("button").addClass("btn");

console.log($("h1").hasClass("btn"));

$("h1").text("good morning");

$("h1").html("<em>hello</em>")

//get attribute
console.log($("img").attr("src"));
//set attribute
// $("img").attr("src", "image.png");

$("a").attr("href", "https://www.bing.com");


$("h1").click(function(){
  $("h1").css("color", "purple");
})


$("button").click(function(){
  // $("h1").css("color", "purple");
  // $("h2").toggle();  
  // $("h2").fadeOut();
  // $("h2").fadeIn();
  // $("h2").fadeToggle();
  // $("h2").slideUp();
  // $("h2").slideToggle();
  // $("h2").animate({opacity:0.5}); // here the second number should be a numeric value.
  $("h2").slideUp().slideDown().animate({opacity:0.4});




})

$(document).keydown(function(event){
  var key = event.key;
  $("h1").text(key);
})

$("h1").on("mouseover", function(){
  $("h1").css("color", "green");
})

$("h1").after("<h2>good morning</h2>");

//we can aslo use prepend and append to add the code inside the tag itself before the content of the tag and also append to add the content after the content but before the closing tag

$("h2").hide();
$("h2").show();

// $("h2").remove();

