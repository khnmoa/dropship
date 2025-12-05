document.querySelectorAll(".has-submenu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
        let parent = item.parentElement;
        parent.classList.toggle("open");
        let submenu = parent.querySelector(".submenu");

        if (parent.classList.contains("open")) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    });
});