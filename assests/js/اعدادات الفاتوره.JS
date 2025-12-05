/*اعدادات الفاتوره*/
function openTab(evt, tabName) {
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".tab").forEach(el => el.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add("active");
}