const hamburger = document.querySelector(".nav-toggle img");
const mobileMenu =document.querySelector(".mobile-menu");


btnClickHandler = () => {
    console.log("working...");

    if (hamburger.classList.contains("change")) {
        hamburger.classList.toggle("change");
        hamburger.setAttribute("src", "./blogr-landing-page-main/images/icon-hamburger.svg");
        mobileMenu.classList.remove("mobile-active");
    }else{
        hamburger.classList.toggle("change");
        hamburger.setAttribute("src", "./blogr-landing-page-main/images/icon-close.svg");
        hamburger.setAttribute("alt", "close button");
        mobileMenu.classList.add("mobile-active");
    }
};

hamburger.addEventListener("click", () => btnClickHandler());