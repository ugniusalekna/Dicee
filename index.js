document.addEventListener("keydown", function(event) {
  if (event.key.toLowerCase() === "r") {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let newSource1 = "images/dice" + String(randomNumber1) + ".png";
    let newSource2 = "images/dice" + String(randomNumber2) + ".png";
    document.querySelector(".image-one").setAttribute("src", newSource1);
    document.querySelector(".image-two").setAttribute("src", newSource2);

    document.querySelector(".title-text").textContent = winner();

    function winner() {
      if (randomNumber1 === randomNumber2) {
        return "Draw";
      } else if (randomNumber1 > randomNumber2) {
        return "Player 1 Wins!";
      } else {
        return "Player 2 Wins!";
      }
    }
  };
});
