function generateContent() {
    let product = document.getElementById("productName").value.trim();
    let platform = document.querySelector('input[name="platform"]:checked');

    if (product === "") {
        alert("الرجاء كتابة اسم المنتج");
        return;
    }

    if (!platform) {
        alert("الرجاء اختيار منصة");
        return;
    }

    // هنا نعرض النتيجة داخل الدالة
    document.getElementById("analysisContainer").innerHTML = `
        <div class="ai-result-box">

            <div class="ai-result-title">المحتوى المقترح:</div>

            <div class="ai-result-text">
            تمتع بإطلالة أنيقة ومميزة مع نظارة شمسية راقية <br><br>

            تتميز النظارة الشمسية هذه بتصميم عصري وجودة عالية تجعلها تبرز بين الجميع سواء كنت تستمتع بيوم مشمس على الشاطئ أو تتجول في المدينة. مناسبة لكل الأوقات وتضيف اللمسة المثالية لإكمال إطلالتك بأناقة.<br><br>

            احصل الآن على نظارة شمسية تناسبك تمنحك أفضل شكل ممكن في كل مكان!
            </div>

            <div class="ai-result-text">
            #نظارة #نظارة_شمسية #أناقة #إطلالة #إبداع #ستايل <br>
            Rii #Sunglasses #Fashion #Style #Creativity #ShopNow
            </div>

            <div class="ai-buttons">
                <button class="ai-generate-btn" onclick="newProduct()">+ محتوى لمنتج آخر</button>
                <button class="ai-close-btn" onclick="clearContent()">إغلاق</button>
            </div>

        </div>
    `;
}

// زر إغلاق
function clearContent() {
    document.getElementById("analysisContainer").innerHTML = "";
    document.getElementById("productName").value = "";
    let checked = document.querySelector('input[name="platform"]:checked');
    if (checked) checked.checked = false;
}

// زر منتج آخر
function newProduct() {  
    clearContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
}