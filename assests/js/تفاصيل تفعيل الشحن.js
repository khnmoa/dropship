const cityModal = document.getElementById("cityModal");
const cityOpenBtns = document.querySelectorAll(".link");
const cityCloseBtns = document.querySelectorAll(".city-modal-close, .city-modal-close-btn");

// فتح النافذة
cityOpenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        cityModal.style.display = "flex";
    });
});

// إغلاق النافذة
cityCloseBtns.forEach(close => {
    close.addEventListener("click", () => {
        cityModal.style.display = "none";
    });
});

// إغلاق عند الضغط خارج الصندوق
window.addEventListener("click", e => {
    if (e.target === cityModal) {
        cityModal.style.display = "none";
    }
});