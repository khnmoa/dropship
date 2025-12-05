
document.getElementById("openCoupon").onclick = () => {
    document.getElementById("couponModal").style.display = "flex";
};

document.getElementById("closeCoupon").onclick = () => {
    document.getElementById("couponModal").style.display = "none";
};

document.querySelector(".cancel-btn").onclick = () => {
    document.getElementById("couponModal").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("openCoupon");

    const inputs = document.querySelectorAll(
        ".product-form input, .product-form select, .product-form textarea"
    );

    function checkForm() {
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
            }
        });

        if (valid) {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        } else {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
        }
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkForm);
        input.addEventListener("change", checkForm);
    });
});

document.getElementById("browseBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click();
});
document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        const previewImg = document.getElementById("previewImage");
        const placeholder = document.getElementById("placeholderBox");

        previewImg.src = e.target.result;
        previewImg.style.display = "block";

        placeholder.style.display = "none";
    };

    reader.readAsDataURL(file);
});

// ⬅️ السويتش يتحكم بظهور / إخفاء الصورة
document.querySelector(".switch input").addEventListener("change", function () {
    const previewImg = document.getElementById("previewImage");
    const placeholder = document.getElementById("placeholderBox");

    if (this.checked) {
        previewImg.style.display = "block";
        placeholder.style.display = "none";
    } else {
        previewImg.style.display = "none";
        placeholder.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {

    // عناصر الإدخال
    const nameInput = document.querySelector(".product-form input[type='text']");
    const priceInput = document.querySelectorAll(".product-form input[type='number']")[0];
    const qtyInput = document.querySelectorAll(".product-form input[type='number']")[1];
    const descInput = document.querySelector(".product-form textarea");

    // عناصر المعاينة
    const previewName = document.getElementById("previewName");
    const previewDesc = document.getElementById("previewDesc");
    const previewPrice = document.getElementById("previewPrice");
    const previewQty = document.getElementById("previewQty");
    const previewImg = document.getElementById("previewImage");

    const previewDetails = document.getElementById("previewDetails");
    const placeholder = document.getElementById("placeholderBox");

    const toggle = document.getElementById("previewToggle"); // السلايدر

    function updatePreview() {
        if (!toggle.checked) return; // ⬅️ أهم شيء: لا يظهر شيء قبل التفعيل

        previewDetails.style.display = "block";
        placeholder.style.display = "none";

        previewName.textContent = nameInput.value;
        previewDesc.textContent = descInput.value;
        previewPrice.textContent = priceInput.value || "0";
        previewQty.textContent = qtyInput.value || "0";
    }

    nameInput.addEventListener("input", updatePreview);
    descInput.addEventListener("input", updatePreview);
    priceInput.addEventListener("input", updatePreview);
    qtyInput.addEventListener("input", updatePreview);

    // تغيير حالة السلايدر
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            // تفعيل المعاينة
            previewDetails.style.display = "block";
            placeholder.style.display = "none";
        } else {
            // إيقاف المعاينة
            previewDetails.style.display = "none";
            previewImg.style.display = "none";
            placeholder.style.display = "block";
        }
    });

    // رفع الصور — لا تظهر إلا إذا السلايدر مفعّل
    document.getElementById("fileInput").addEventListener("change", function () {
        const file = this.files[0];
        if (!file || !toggle.checked) return; // ⬅️ مهم جداً

        const reader = new FileReader();
        reader.onload = function (e) {

            previewImg.src = e.target.result;
            previewImg.style.display = "block";

            previewDetails.style.display = "block";
            placeholder.style.display = "none";
        };
        reader.readAsDataURL(file);
    });

});


document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        const previewImg = document.getElementById("previewImage");
        const placeholder = document.getElementById("placeholderBox");
        const previewDetails = document.getElementById("previewDetails");
        const toggle = document.getElementById("previewToggle");

        // ========== 1) إضافة الصورة المصغرة (دائمًا) ==========
        const container = document.getElementById("uploadedImages");
        const div = document.createElement("div");
        div.className = "image-thumb";
        div.style.backgroundImage = `url('${e.target.result}')`;

        // زر الحذف
        const del = document.createElement("div");
        del.className = "delete-icon";
        del.innerHTML = "✖";

        del.onclick = function () {
            div.remove();

            // لو مفيش صور مصغرة، ارجع للبلس هولدر لكن حسب حالة السويتش
            if (!container.children.length) {
                if (!toggle.checked) {
                    previewImg.style.display = "none";
                    previewDetails.style.display = "none";
                    placeholder.style.display = "block";
                }
            }
        };

        div.appendChild(del);
        container.appendChild(div);

        // ========== 2) تحديث المعاينة الكبيرة (فقط لو السويتش شغال) ==========
        if (toggle.checked) {
            previewImg.src = e.target.result;
            previewImg.style.display = "block";
            previewDetails.style.display = "block";
            placeholder.style.display = "none";
        }
    };

    reader.readAsDataURL(file);
});


