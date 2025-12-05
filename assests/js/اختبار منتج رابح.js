document.querySelector(".analyze-btn").addEventListener("click", function () {
    
    let productName = document.querySelector(".ai-input").value.trim();
    if (productName === "") {
        alert("من فضلك أدخل نوع المنتج");
        return;
    }

    let container = document.getElementById("analysisContainer");

    // قالب التحليل
    let analysisBox = `
    <div class="ai-result-box">
        <h3 class="ai-result-title">نتائج التحليل لمنتج: ${productName}</h3>

        <p class="ai-result-text">
            بناءً على تحليل سوق ${productName}، يظهر أن هذا المجال يشهد نمواً كبيراً بفضل الاهتمام المتزايد من الجمهور. فيما يلي أهم النقاط:
        </p>

        <ol class="ai-result-list">
            <li>دراسة السوق: تحليل الاتجاهات الحالية المرتبطة بـ ${productName}.</li>
            <li>تحديد الجمهور المستهدف لهذا المنتج.</li>
            <li>اختيار المواد أو المكونات المناسبة ذات الجودة العالية.</li>
            <li>ابتكار تصميمات فريدة لتمييز المنتج عن المنافسين.</li>
            <li>الالتزام بالجودة لضمان رضا العملاء.</li>
            <li>متابعة أحدث التطورات في المجال لتطوير المنتج باستمرار.</li>
        </ol>
    </div>
    `;

    // إضافة تحليل جديد أسفل الموجود
    container.insertAdjacentHTML("beforeend", analysisBox);

    // مسح الخانة بعد الإضافة
    document.querySelector(".ai-input").value = "";
});