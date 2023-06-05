const mcLogo = document.getElementById("MicrowebLogo");

window.addEventListener("scroll", function () {
  let navmenu = document.querySelector("nav");
  navmenu.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > 0) mcLogo.src = "./img/microweb-logo-menta.svg";
  else {
    mcLogo.src = "./img/microweb-logo-feher.svg";
  }
});
