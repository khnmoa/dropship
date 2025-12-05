  document.querySelector('.btn:nth-child(2)').addEventListener('click', () => {
    alert('فتح قائمة المنتجات مثال فقط');
  });
  flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "m/d/Y",
    locale: "ar", 
});
