let countClick = 0;
document.querySelector(".button").addEventListener("click", function () {
  //1st click :the background change to black
  if (countClick === 0) {
    document.querySelector("body").style.backgroundColor = "#080808";
    document.querySelector(".button").style.color = "#080808";
    document.querySelector(".button").style.backgroundColor = "white";
    document.querySelector(".button:hover").style.borderColor = "white";
    countClick = 1;
    //2st click :the background change to white
  } else if (countClick === 1) {
    document.querySelector("body").style.backgroundColor = "#f0f2f0";
    document.querySelector(".button").style.color = "#f0f2f0";
    document.querySelector(".button").style.backgroundColor = "#080808";
    document.querySelector(".button:hover").style.borderColor = "black";
    countClick = 0;
  }
});
