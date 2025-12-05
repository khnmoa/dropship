document.querySelector(".ai-dropdown-header").addEventListener("click", function () {
    let menu = document.querySelector(".ai-dropdown-menu");
    let arrow = document.querySelector(".arrow-icon");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        menu.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
});