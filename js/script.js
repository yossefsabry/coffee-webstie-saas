// show mega menu
let megaMenu = document.querySelector("nav");
let megaMenuBtn = document.querySelector(".menu");

megaMenuBtn.addEventListener("click", function () {
  if (megaMenu.style.display === "block") {
    megaMenu.style.display = "none";
  } else {
    megaMenu.style.display = "block";
  }
});

// button to top
let btnTop = document.querySelector("#btn-top");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};
btnTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
