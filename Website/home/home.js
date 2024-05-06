const headshotArray = [
  "../img/headshot1.JPEG",
  "../img/headshot2.JPEG",
  "../img/headshot3.JPEG",
  "../img/headshot4.JPEG",
  "../img/headshot5.JPEG",
  "../img/headshot6.JPEG",
  "../img/headshot7.JPEG"
];
let i = 1;

function next() {
  if (i == headshotArray.length - 1) {
    $("#headshot").fadeOut(700, function() {
      $("#headshot").attr("src", headshotArray[i]);
      i = 0;
      $("#headshot").fadeIn(1000);
    });
  } else {
    $("#headshot").fadeOut(700, function() {
      $("#headshot").attr("src", headshotArray[i]);
      i++;
      $("#headshot").fadeIn(1000);
    });
  }
  console.log(i);
}

function auto(){
  next();
}

$(document).ready(function() {
    setInterval(auto, 6000);
});