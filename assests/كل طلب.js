const btn = document.getElementById("statusBtn");
const dropdown = document.getElementById("statusDropdown");

btn.addEventListener("click", () => {
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});

const openBtn = document.querySelector(".merge.red");
const popup = document.getElementById("trackPopup");
const overlay = document.getElementById("trackOverlay");
const closeBtn = document.getElementById("closePopup");
const cancelBtn = document.querySelector(".cancel");

openBtn.onclick = () => {
    popup.style.display = "block";
    overlay.style.display = "block";
};

closeBtn.onclick = closePopup;
cancelBtn.onclick = closePopup;
overlay.onclick = closePopup;

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}