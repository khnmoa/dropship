const settingsButton = document.getElementById("openSettings");

const modal = document.getElementById("trackingSettingsModal");


settingsButton.addEventListener("click", () => {
    modal.style.display = "flex";
});


document.querySelector(".close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});


document.querySelector(".cancel-btn-modal").addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


document.getElementById("activateBtn").addEventListener("click", function() {
    document.getElementById("activateBtn").style.display = "none";  
    document.getElementById("afterActivate").style.display = "block";
});


const activateBtn = document.getElementById("activateBtn");
const afterActivate = document.getElementById("afterActivate");
const statusText = document.getElementById("statusText");
const alertBox = document.getElementById("alertBox");
const cancelBtn = document.querySelector(".cancel-btn");

// عند التفعيل
activateBtn.addEventListener("click", function() {

    activateBtn.style.display = "none";  
  
    afterActivate.style.flexDirection = "column";
    afterActivate.style.gap = "10px";

    // إظهار كلمة مفعل
    statusText.style.display = "inline-block";
    statusText.classList.add("active");

    // رسالة تنبيه
    alertBox.className = "alert success";
    alertBox.innerText = "تم التفعيل بنجاح";
    alertBox.style.display = "block";

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(() => alertBox.style.display = "none", 3000);
});


// عند إلغاء التفعيل
cancelBtn.addEventListener("click", function() {

    afterActivate.style.display = "none";
    activateBtn.style.display = "block";

    // إخفاء كلمة مفعل
    statusText.style.display = "none";

    // رسالة تنبيه
    alertBox.className = "alert error";
    alertBox.innerText = "تم إلغاء التفعيل";
    alertBox.style.display = "block";

    setTimeout(() => alertBox.style.display = "none", 3000);
});


const storeBtn = document.getElementById("storeBtn");
const dropdownMenu = document.getElementById("dropdownMenu");


storeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع إغلاق المنيو مباشرة
    dropdownMenu.classList.toggle("show");
});


document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
});
