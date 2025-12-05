function generateContent() {

    let product = document.getElementById("productName").value.trim();
    let age = document.getElementById("ageRange").value;

    let cities = [];
    document.querySelectorAll('.cities-box input:checked').forEach(c => {
        cities.push(c.value);
    });

    if (!product) {
        alert("الرجاء كتابة نوع المنتج");
        return;
    }

    if (!age) {
        alert("الرجاء اختيار الفئة العمرية");
        return;
    }

    if (cities.length === 0) {
        alert("الرجاء اختيار مدينة واحدة على الأقل");
        return;
    }

    document.getElementById("analysisContainer").innerHTML = `
        <div class="ai-result-box">

            <div class="ai-result-title">تحليل الجمهور:</div>

            <div class="ai-result-text">
           نتائج التحليل: الجمهور المستهدف لنظارة شمسية في الفئة العمرية 18-24 يشمل شريحة كبيرة من الشباب الذين يهتمون بالموضة والأناقة ويبحثون عن منتجات تعكس شخصيتهم وتلبي احتياجاتهم اليومية. هؤلاء الأشخاص عادة ما يكونون على دراية بأحدث صيحات الموضة ويحبون تجربة أشياء جديدة ومميزة.  في مدينة الرياض، يمكن استهداف الجمهور المستهدف عبر الإعلانات التسويقية في المولات الكبيرة والأماكن التي يحبذها الشباب للتسوق والترفيه مثل الرياض غاليري والروشان مول. يمكن أيضاً استغلال وسائل التواصل الاجتماعي مثل إنستغرام وتويتر للتواصل مع هذه الفئة العمرية بشكل فعال.  أما في مدينة جدة، يعتبر كورنيش جدة والمراكز التجارية الكبيرة مثل رد سي مول والعزيزية مول من أفضل الأماكن لاستهداف الجمهور المستهدف. يمكن أيضاً تنظيم فعاليات ترويجية في الأماكن العامة والحدائق التي يفضلها الشباب في جدة.  يمكن تعزيز التسويق لنظارة الشمسية بطرق إبداعية مثل التعاون مع مدونين أو مؤثرين رقميين على وسائل التواصل الاجتماعي لعرض المنتج والترويج له بشكل مباشر. كما يمكن تقديم عروض وخصومات خاصة لهذه الفئة العمرية لجذب اهتمامهم وزيادة مبيعات المنتج.  باختصار، يمكن لشركة تسويق نظارات الشمسية استهداف الشباب في الفئة العمرية 18-24 في مدن الرياض وجدة من خلال الإعلانات في المولات والمراكز التجارية الكبيرة والاستفادة من وسائل التواصل الاجتماعي والترويج بشكل إبداعي لزيادة مبيعاتها.

               <div class="ai-buttons">
                <button class="ai-generate-btn" onclick="newProduct()">+ محتوى لمنتج آخر</button>
                <button class="ai-close-btn" onclick="clearContent()">إغلاق</button>
            </div>

        </div>
    `;
}

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
