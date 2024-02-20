function accept() {
  document.getElementById("character-img").style.display = "none";
  document.getElementById("smurfette-img").style.display = "block";
  document.getElementById("response-buttons").style.display = "none";
  document.getElementById("yuppii").style.display = "block";
  document.getElementById("yuppii").innerHTML = "Yuppii!";
}

function decline() {
  const noButton = document.querySelector("button:nth-of-type(2)");
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}
