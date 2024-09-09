const list = document.getElementById("more");
const nav = document.querySelector("nav");
const exit = document.getElementById("exit");

list.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

exit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});