const navToggle = document.querySelector(".nav-toggle");
const openLink = document.querySelector(".link-arrow");
const productLink = document.querySelector(".product-links");
const companyLink = document.querySelector(".company-links");
const connectLink = document.querySelector(".connect-links");

//console.log();

openLink.addEventListener("click", function () {
    openLink.classList.toggle("show-links");

});