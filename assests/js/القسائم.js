
    const openBtn = document.getElementById("openCategoryModal");
    const modal = document.getElementById("categoryModal");
    const closeBtn = document.getElementById("closeCategoryModal");
    const cancelBtn = document.getElementById("cancelModal");

    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
    cancelBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };

      document.querySelector('.btn:nth-child(2)').addEventListener('click', () => {
    alert('فتح قائمة المنتجات مثال فقط');
  });
  flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "m/d/Y",
    locale: "ar",
});
