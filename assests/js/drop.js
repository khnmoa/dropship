
document.addEventListener("DOMContentLoaded", function () {

const storeBtn = document.getElementById("storeBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

storeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !storeBtn.contains(e.target)) {
        dropdownMenu.style.display = "none";
    }
});})