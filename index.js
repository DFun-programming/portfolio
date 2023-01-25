let typeData = new Typed(".role" , {
strings:[
    "Full Stack Developer",
    "Web Developer",
    "UI-UX Designer",
    "Backend Developer",
    "Blockchain Developer",
    "Tutor"
],
loop:true,
typeSpeed: 100,
backDelay: 1000,
backSpeed: 70,


})
$(".btn-col").click(function () {
 
    let userChosenColour = $(this).attr("id");
      animatePress(userChosenColour);  
  });
  
  function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
