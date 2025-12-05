/*اختيار فئه*/

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


/*اختيار منتج رابح*/
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


    /* home page*/
const toggle = document.querySelector(".dark-toggle");

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ------------ WEEKLY DATA ------------ */
const weeklyData = {
    labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    values:[30,45,50,40,60,20,35]
};

const wtx = document.getElementById("weeklyChart").getContext("2d");
new Chart(wtx,{
    type:"bar",
    data:{
        labels:weeklyData.labels,
        datasets:[{
            data:weeklyData.values,
            backgroundColor:(ctx)=>{
                const g=wtx.createLinearGradient(0,0,0,200);
                g.addColorStop(0,"#ffd24a");
                g.addColorStop(1,"#ff9f3a");
                return g;
            },
            borderRadius:10
        }]
    },
    options:{ plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}}}}
});

/* ------------ MONTHLY DATA ------------ */
const monthlyData = {
    labels:Array.from({length:31},(_,i)=>i+1),
    values:[
        12,15,17,18,20,22,23,21,20,
        18,17,16,15,17,20,25,28,30,
        32,34,36,38,37,35,30,28,27,26,25,24,23
    ]
};

const mtx=document.getElementById("monthlyChart").getContext("2d");

let gradient=mtx.createLinearGradient(0,0,0,300);
gradient.addColorStop(0,"rgba(255,80,80,0.35)");
gradient.addColorStop(1,"rgba(255,80,80,0)");

new Chart(mtx,{
    type:"line",
    data:{
        labels:monthlyData.labels,
        datasets:[{
            data:monthlyData.values,
            borderColor:"#ff5555",
            backgroundColor:gradient,
            borderWidth:3,
            tension:0.5,
            pointRadius:0
        }]
    },
    options:{
        plugins:{legend:{display:false}},
        scales:{
            x:{grid:{display:false}},
            y:{grid:{color:"rgba(180,180,180,0.15)"}}
        }
    }
});

document.querySelectorAll(".dropdown").forEach(item => {
    item.addEventListener("click", () => {
        let submenu = item.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";

        // تدوير السهم
        item.querySelector(".arrow").classList.toggle("rotate");
    });
});
const storeBtn = document.getElementById("storeBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// فتح وإغلاق القائمة
storeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !storeBtn.contains(e.target)) {
        dropdownMenu.style.display = "none";
    }
});
const rowMenu = document.getElementById("rowMenu");

document.querySelectorAll(".actions").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        
        const rect = btn.getBoundingClientRect();

   
        rowMenu.style.top = (rect.bottom + window.scrollY) + "px";
        rowMenu.style.left = (rect.left + window.scrollX - 95) + "px"; 
        rowMenu.style.display = "block";
    });
});


document.addEventListener("click", () => {
    rowMenu.style.display = "none";
});










/*end home page*/

document.querySelectorAll(".has-submenu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
        let parent = item.parentElement;
        parent.classList.toggle("open");
        let submenu = parent.querySelector(".submenu");

        if (parent.classList.contains("open")) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
 }  )  
 });