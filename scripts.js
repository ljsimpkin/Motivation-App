var timer = timeText.value;
var bank = parseInt(document.getElementById("bank").innerHTML);

// console.log(typeof potential_pts);
// console.log(potential_pts);

function buttonFunction(){
  var myVar = setInterval(myTimer, 1000);
  var potentialPoints = parseInt(timeText.value);
  document.getElementById("potentialPoints").innerHTML = potentialPoints;

  function myTimer() {
//set minutes and seconds variables based on timer input
  var minutes = Math.floor(timer / 60);
  var seconds = timer % 60;
//add 0 so that minutes and seconds always display 2 digits, need to convert to string
  if (minutes < 10) {
	minutes = "0".concat(String(minutes));
  }
  
  if (seconds < 10) {
	seconds = "0".concat(String(seconds));
  }

  document.getElementById("minutesDisplay").innerHTML = minutes;
  document.getElementById("secondsDisplay").innerHTML = seconds;
  timer -= 1;
  if (timer < 0){
    clearInterval(myVar);
    bank += potentialPoints;
    document.getElementById("bank").innerHTML = bank;
    points = 0;
    document.getElementById("potentialPoints").innerHTML = potentialPoints;
    document.getElementById("startButton").innerHTML = "Start";
  }

  if( window.innerHeight != screen.height) {
    document.getElementById("potentialPoints").innerHTML = 0;
    clearInterval(myVar);
    document.getElementById("minutesDisplay").innerHTML = "00";
    document.getElementById("secondsDisplay").innerHTML = "00";
    document.getElementById("startButton").innerHTML = "Start";
  }
  }
  timer = timeText.value;
}

// rename function buttonfunction

var elem = document.documentElement;
function openFullscreen() {
  buttonFunction();
  document.getElementById("startButton").innerHTML = "Processing...";
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}