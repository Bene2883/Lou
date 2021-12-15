const forside1 = document.querySelector(".forside1");
const forside2 = document.querySelector(".forside2");
const forside3 = document.querySelector(".forside3");
const tekst = document.querySelector(".forside_tekst");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector(".dot1").addEventListener("click", img1);
  document.querySelector(".dot2").addEventListener("click", img2);
  document.querySelector(".dot3").addEventListener("click", img3);

  img1();
}

function img1() {
  console.log("img1");

  //   Fjerne og tilføje splash billede
  forside1.classList.add("hide");
  forside2.classList.add("hide");
  forside3.classList.add("hide");

  forside1.classList.remove("hide");

  // text farve
  tekst.classList.remove("text_farve1");
  tekst.classList.remove("text_farve3");
  tekst.classList.add("text_farve1");
}

function img2() {
  console.log("img2");

  // Fjerne og tilføje splash billede
  forside1.classList.add("hide");
  forside2.classList.add("hide");
  forside3.classList.add("hide");

  forside2.classList.remove("hide");

  // text - farve
  tekst.classList.remove("text_farve1");
  tekst.classList.remove("text_farve3");
  tekst.classList.add("text_farve3");
}

function img3() {
  console.log("img3");

  //  Fjerne og tilføje splash billede
  forside1.classList.add("hide");
  forside2.classList.add("hide");
  forside3.classList.add("hide");

  forside3.classList.remove("hide");

  // text farve
  tekst.classList.remove("text_farve1");
  tekst.classList.remove("text_farve3");
  tekst.classList.add("text_farve3");
}
