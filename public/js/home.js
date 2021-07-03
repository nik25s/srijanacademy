var i = 0;
var txt = 'Learn Math, Science, English'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tw_hc").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(window).on("load", function(){
    typeWriter();
})