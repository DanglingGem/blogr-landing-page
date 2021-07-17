const navToggle = document.querySelector(".nav-toggle");
const openArrow = document.querySelector(".link-arrow");
const productLink = document.querySelector(".product-links");
const companyLink = document.querySelector(".company-links");
const connectLink = document.querySelector(".connect-links");

//console.log(openLink);

openArrow.addEventListener("click", function () {
   if (openArrow.classList.contains("product-links")) {
       openArrow.classList.remove("product-links");
   } else {
       openArrow.classList.add("product-links");
   }
   

});