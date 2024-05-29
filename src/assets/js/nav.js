const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector("#cs-navigation .cs-toggle");
const ul = document.querySelector(".nav-ul");

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");

     // set aria expanded attribute
     ul.getAttribute("aria-expanded") === "true" ? ul.setAttribute("aria-expanded", "false") : ul.setAttribute("aria-expanded", "true");    
});
