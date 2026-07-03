/* ==================================================
   MOBILE MENU
================================================== */
 
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
 
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
 
/* ==================================================
   TYPING ANIMATION (HERO)
================================================== */
 
const typingText = document.getElementById("typingText");
 
const roles = [
    "Industrial Engineer",
    "Sustainability Analyst",
    "CAD Designer",
    "Researcher"
];
 
let roleIndex = 0;
let charIndex = 0;
 
function typeEffect() {
 
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}
 
function eraseEffect() {
 
    if (charIndex > 0) {
        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(typeEffect, 300);
    }
}
 
document.addEventListener("DOMContentLoaded", typeEffect);
 
/* ==================================================
   COUNTER ANIMATION (STATS)
================================================== */
 
const counters = document.querySelectorAll("[data-target]");
 
const animateCounters = () => {
 
    counters.forEach(counter => {
 
        const update = () => {
 
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 80;
 
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
 
        update();
    });
};
 
window.addEventListener("load", animateCounters);
 
/* ==================================================
   DATA STRUCTURE (EDIT HERE ONLY)
================================================== */
 
const publications = [
    { title: "Performance Study of the Single Slope Solar Still by using Nano Disbanded Phase Change Material", type: "Journal", year: 2022 },
    { title: "Performance Study of the Single Slope Solar Still by using Nano Disbanded Phase Change Material", type: "Conference", year: 2022 },
    { title: "", type: "Review", year: 2024 },
    { title: "Additive Manufacturing Optimization Models", type: "Journal", year: 2023 }
];
 
const patents = [
    { title: "Self-Charging Drone Docking Station Using Hybrid Solar-Wind Energy with Predictive Landing Control", year: 2026 },
   
];
 
const articles = [
    { title: "Electric Vehicle Adoption in Urban Freight Systems" },
    { title: "Performance Analysis of EV Batteries Using a Data-Driven Method" },
    { title: "Engineering Design of a Tubular Go-Kart Chassis Using CAD" },
    { title: "Designing a University at Buffalo-Inspired Robotic Arm"},
    { title: "Design of a 9V Battery with Custom UB Branding"},
    { title: "Brand-Focused Flask Design and Visualization"},
    { title: "Design of the Axial Cooling Fan"},
    { title: "Meet Tally: How BJ’s Autonomous Aisle Robot Quietly Supports People"},
    { title: "The Role of Collaborative Robots in Modern Industry"},
];

const blogs = [
    { title: "Electric Vehicle Adoption in Urban Freight Systems" },
    { title: "Performance Analysis of EV Batteries Using a Data-Driven Method" },
];
 
const journals = [
    { title: "Performance Study of the Single Slope Solar Still by using Nano Disbanded Phase Change Material" },
    { title: "Sustainable Smart Manufacturing Review" }
];
 
const honors = [
    { title: "Runner up - Engineering Drawing Competition" },
    { title: "Third Rank - Technical Event (Junkyard)" },
    { title: "Third Rank - Moto Quiz Competition" },
    { title: "Second Rank - Nerds AI Quest" },
    { title: "Research Paper Presentation - Journal Paper" },
    { title: "Research Paper Presentation - Journal Paper" },
    { title: "Research Paper Presentation — ICMSSMT International Conference" },
    { title: "Student Learning Assessment Test — Rating 4/5" },
    { title: "Ninth Rank — Industry Ready Engineer Challenge 2026" },
    { title: "Ninth Rank — Physics Sparks" },
    { title: "Second Rank — Nerds AI Quest Valentine Edition" }
];
 
/* ==================================================
   RENDER FUNCTIONS
================================================== */
 
const publicationContainer = document.getElementById("publicationContainer");
const patentTimeline = document.getElementById("patentTimeline");
const articleContainer = document.getElementById("articleContainer");
const blogContainer = document.getElementById("blogContainer");
const journalContainer = document.getElementById("journalContainer");
const honorContainer = document.getElementById("honorContainer");
 
/* ---------- PUBLICATIONS ---------- */
 
function renderPublications(data) {
 
    publicationContainer.innerHTML = "";
 
    data.forEach(item => {
 
        publicationContainer.innerHTML += `
        <div class="publication-card reveal active">
            <h3>${item.title}</h3>
            <p class="publication-type">${item.type}</p>
            <p>Year: ${item.year}</p>
        </div>
        `;
    });
}
 
/* ---------- PATENTS ---------- */
 
function renderPatents() {
 
    patentTimeline.innerHTML = "";
 
    patents.forEach(p => {
 
        patentTimeline.innerHTML += `
        <div class="timeline-item reveal">
            <span class="timeline-dot"></span>
            <h3>${p.title}</h3>
            <p>${p.year}</p>
        </div>
        `;
    });
}

/* ---------- ARTICLES ---------- */
 
function renderArticles() {
 
    articleContainer.innerHTML = "";
 
    articles.forEach(a => {
 
        articleContainer.innerHTML += `
        <div class="publication-card reveal">
            <h3>${a.title}</h3>
            <p>Technical Article</p>
        </div>
        `;
    });
}
 
/* ---------- BLOGS ---------- */
 
function renderBlogs() {
 
    blogContainer.innerHTML = "";
 
    blogs.forEach(b => {
 
        blogContainer.innerHTML += `
        <div class="publication-card reveal">
            <h3>${b.title}</h3>
            <p>Technical Blog</p>
        </div>
        `;
    });
}
 
/* ---------- JOURNALS ---------- */
 
function renderJournals() {
 
    journalContainer.innerHTML = "";
 
    journals.forEach(j => {
 
        journalContainer.innerHTML += `
        <div class="publication-card reveal">
            <h3>${j.title}</h3>
            <p>Journal Article</p>
        </div>
        `;
    });
}
 
/* ---------- HONORS ---------- */
 
function renderHonors() {
 
    honorContainer.innerHTML = "";
 
    honors.forEach(h => {
 
        honorContainer.innerHTML += `
        <div class="publication-card reveal">
            <h3>${h.title}</h3>
            <p>Honors</p>
        </div>
        `;
    });
}
 
/* ==================================================
   INITIAL LOAD
================================================== */
 
function init() {
 
    renderPublications(publications);
    renderPatents();
    renderArticles();
    renderBlogs();
    renderJournals();
    renderHonors();
}
 
init();
 
/* ==================================================
   SEARCH + FILTER
================================================== */
 
const searchInput = document.getElementById("searchInput");
const filter = document.getElementById("publicationFilter");
 
searchInput.addEventListener("input", () => {
 
    const value = searchInput.value.toLowerCase();
 
    const filtered = publications.filter(p =>
        p.title.toLowerCase().includes(value)
    );
 
    renderPublications(filtered);
});
 
filter.addEventListener("change", () => {
 
    if (filter.value === "all") {
        renderPublications(publications);
    } else {
        renderPublications(
            publications.filter(p => p.type === filter.value)
        );
    }
});
 
/* ==================================================
   CHARTS (RESEARCH ANALYTICS)
================================================== */
 
window.addEventListener("load", () => {
 
    const pubCtx = document.getElementById("publicationChart");
    const citeCtx = document.getElementById("citationChart");
 
    /* BAR CHART */
    new Chart(pubCtx, {
        type: "bar",
        data: {
            labels: ["2023","2024","2025","2026"],
            datasets: [{
                label: "Publications",
                data: [3,3,9,10],
                backgroundColor: "#5cc0eeff"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: "#EAF2FF" } }
            },
            scales: {
                x: { ticks: { color: "#EAF2FF" } },
                y: { ticks: { color: "#EAF2FF" } }
            }
        }
    });
 
    /* LINE CHART */
    new Chart(citeCtx, {
        type: "line",
        data: {
            labels: ["2023","2024","2025","2026"],
            datasets: [{
                label: "Project",
                data: [5,15,30,47],
                borderColor: "#2ab2f1ff",
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: "#dee4eeff" } }
            },
            scales: {
                x: { ticks: { color: "#e7ebf1ff" } },
                y: { ticks: { color: "#e8ecf3ff" } }
            }
        }
    });
});
 
/* ==================================================
   SCROLL REVEAL ANIMATION
================================================== */
 
const revealElements = document.querySelectorAll(".reveal");
 
const revealOnScroll = () => {
 
    const windowHeight = window.innerHeight;
 
    revealElements.forEach(el => {
 
        const elementTop = el.getBoundingClientRect().top;
 
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};
 
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
 
/* =====================================
   SKILL PROFICIENCY RADAR CHART
===================================== */
 
const radarCtx = document.getElementById('skillRadarChart');
 
if (radarCtx) {
 
    new Chart(radarCtx, {
        type: 'radar',
 
        data: {
            labels: [
                'Transportation and Logistics',
                'Data Analysis',
                'Supply Chain Analytics',
                'CAD / Manufacturing',
                'Sustainability',
                'Simulation / Modeling',
                'Mechanical Engineering',
                'Engineering Research'
            ],
 
            datasets: [{
                label: 'Skill Proficiency (%)',
 
                data: [
                    88, // AI
                    91, // Data Analysis
                    85, // Supply Chain
                    92, // CAD
                    95, // Sustainability
                    87,  // Simulation
                    89, // Mechanical
                    90 // Research
                ],
 
                backgroundColor: 'rgba(0, 255, 255, 0.15)',
 
                borderColor: '#00ffff',
 
                borderWidth: 3,
 
                pointBackgroundColor: '#00ffff',
 
                pointBorderColor: '#ffffff',
 
                pointRadius: 5,
 
                pointHoverRadius: 8
            }]
        },
 
        options: {
            responsive: true,
 
            maintainAspectRatio: false,
 
            plugins: {
 
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
 
                tooltip: {
                    backgroundColor: '#111827',
                    titleColor: '#00ffff',
                    bodyColor: '#ffffff'
                }
            },
 
            scales: {
 
                r: {
 
                    min: 0,
                    max: 100,
 
                    ticks: {
                        stepSize: 20,
                        color: '#9ca3af',
                        backdropColor: 'transparent'
                    },
 
                    grid: {
                        color: 'rgba(255,255,255,0.15)'
                    },
 
                    angleLines: {
                        color: 'rgba(255,255,255,0.2)'
                    },
 
                    pointLabels: {
                        color: '#ffffff',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                }
            }
        }
    });
}
 
/* ==================================
   PROJECT IMPACT SCORE PIE CHART
================================== */
 
 const impactCtx =
document.getElementById('projectImpactChart');
 
if(impactCtx){
 
    new Chart(impactCtx,{
 
        type:'pie',
 
        data:{
 
            labels:[
                'EV Analytics Research',
                'Green Supply Chain',
                'Manufacturing Engineer',
                'Inventory Management',
                'Sustainability',
                'Operations Research'
            ],
 
            datasets:[{

                data:[
                    24,
                    18,
                    20,
                    12,
                    16,
                    10
                ],
 
                backgroundColor:[
                    '#00FFFF',
                    '#4ADE80',
                    '#F59E0B',
                    '#A855F7',
                    '#2b11c4ff',
                    '#f50e0eff'
                ],
 
                borderColor:'#111827',
                borderWidth:2
 
            }]
        },
 
        options:{
 
            responsive:true,
 
            maintainAspectRatio:false,
 
            plugins:{
 
                legend:{
                    position:'bottom',
 
                    labels:{
                        color:'#ffffff',
                        padding:20,
                        font:{
                            size:13,
                            weight:'bold'
                        }
                    }
                },
 
                tooltip:{
 
                    backgroundColor:'#111827',
 
                    titleColor:'#00FFFF',
 
                    bodyColor:'#ffffff',
 
                    callbacks:{
                        label:function(context){
                            return context.label +
                            ': ' +
                            context.raw +
                            '%';
                        }
                    }
                }
            }
        }
    });
}
