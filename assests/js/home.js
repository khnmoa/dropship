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
    });
});

/* ===== WEEKLY CHART ===== */
const weeklyData = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    values: [30,45,50,40,60,20,35]
};

const wtx = document.getElementById("weeklyChart");
if (wtx) {
    const ctxWeekly = wtx.getContext("2d");
    new Chart(ctxWeekly, {
        type: "bar",
        data: {
            labels: weeklyData.labels,
            datasets: [{
                data: weeklyData.values,
                backgroundColor: (ctx) => {
                    const g = ctxWeekly.createLinearGradient(0,0,0,200);
                    g.addColorStop(0,"#ffd24a");
                    g.addColorStop(1,"#ff9f3a");
                    return g;
                },
                borderRadius: 10
            }]
        },
        options: {
            plugins: {legend: {display:false}},
            scales: {x:{grid:{display:false}}}
        }
    });
}

/* ===== MONTHLY CHART ===== */
const monthlyData = {
    labels: Array.from({length:31}, (_,i)=>i+1),
    values: [
        12,15,17,18,20,22,23,21,20,
        18,17,16,15,17,20,25,28,30,
        32,34,36,38,37,35,30,28,27,26,25,24,23
    ]
};

const mtx = document.getElementById("monthlyChart");
if (mtx) {
    const ctxMonthly = mtx.getContext("2d");
    let gradient = ctxMonthly.createLinearGradient(0,0,0,300);
    gradient.addColorStop(0,"rgba(255,80,80,0.35)");
    gradient.addColorStop(1,"rgba(255,80,80,0)");

    new Chart(ctxMonthly, {
        type: "line",
        data: {
            labels: monthlyData.labels,
            datasets: [{
                data: monthlyData.values,
                borderColor: "#ff5555",
                backgroundColor: gradient,
                borderWidth: 3,
                tension: 0.5,
                pointRadius: 0
            }]
        },
        options: {
            plugins: {legend:{display:false}},
            scales:{
                x:{grid:{display:false}},
                y:{grid:{color:"rgba(180,180,180,0.15)"}}
            }
        }
    });
}

/* ===== DROPDOWN MENU STORE ===== */
const storeBtn = document.getElementById("storeBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

if (storeBtn && dropdownMenu) {
    storeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!dropdownMenu.contains(e.target) && !storeBtn.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
}

/* ===== ROW ACTION MENU ===== */
const rowMenu = document.getElementById("rowMenu");

document.querySelectorAll(".actions").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const rect = btn.getBoundingClientRect();
        rowMenu.style.top = (rect.bottom + window.scrollY) + "px";
        rowMenu.style.left = (rect.left + window.scrollX - 95) + "px"; // RTL adjustment
        rowMenu.style.display = "block";
    });
});

document.addEventListener("click", () => {
    if(rowMenu) rowMenu.style.display = "none";
});

/* ===== SIDEBAR SUBMENU ===== */
document.querySelectorAll(".has-submenu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const submenu = item.nextElementSibling;
        if(submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }

        const arrow = item.querySelector(".arrow i");
        if(arrow) arrow.classList.toggle("rotate");
    });
});