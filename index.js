const hamburger = document.querySelector(".nav-toggle img");


btnClickHandler = () => {
    console.log("working...");

    if (hamburger.classList.contains("change")) {
        hamburger.classList.toggle("change");
        hamburger.setAttribute("src", "./images/icon-hamburger.svg");
        
    }
}