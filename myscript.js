// data termnine
let data = new Date("Feb 6, 2023 09:30:00").getTime();

//funzione conta ogni secondo
let x = setInterval(function () {
  // data e tempo di oggi
  let ora = new Date().getTime();

  //trovo differenza tra data consegna e oggi
  let distance = data - ora;

  // calcolo giorni ore minuti e secondi
  let giorni = Math.floor(distance / (1000 * 60 * 60 * 24));
  let ore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondi = Math.floor((distance % (1000 * 60)) / 1000);

  //innerHTML al p
  document.getElementById("countdown").innerHTML =
    giorni + "d " + ore + "h " + minuti + "m " + secondi + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TERMINATO!";
  }
}, 1000);
