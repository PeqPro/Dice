function start() {
  /* create random number between 1 and 6 for eacht dice */
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  /* change number of picture */
  let randomDiceImg1 = "dicee" + randomNumber1 + ".png";
  let randomDiceImg2 = "dicee" + randomNumber2 + ".png";

  /* change it in the source of where the pictures are */
  let randomImgSource1 = "multimedia/img/" + randomDiceImg1;
  let randomImgSource2 = "multimedia/img/" + randomDiceImg2;

  /* select left img in HTML and then the right img */
  let img1 = document.querySelectorAll("img")[0];
  let img2 = document.querySelectorAll("img")[1];

  /* change the src of numbered img to random numbered in HTML */
  img1.setAttribute("src", randomImgSource1);
  img2.setAttribute("src", randomImgSource2);

  /* What happens if someone wins */
  const player1Won = "🎈 Player 1 wins!";
  const player2Won = "Player 2 wins! 🎈";
  const playersDraw = "It's a draw!";

  /* Who won? */
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1Won;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = player2Won;
  } else {
    document.querySelector("h1").innerHTML = playersDraw;
  }
}
