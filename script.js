"use strict";

/* =========================================================
   PORTFOLIO CONTENT — edit these arrays to update the website.
========================================================= */
const publications = [
    { title: "Performance Study of the Single Slope Solar Still using Nano Dispersed Phase Change Material", type: "Journal", year: "2022", link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785322000761?dgcid=author", buttonText: "View Publication" },
    { title: "Performance Study of the Single Slope Solar Still using Nano Dispersed Phase Change Material", type: "Conference", year: "2022", link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785322000761?dgcid=author", buttonText: "View Conference Paper" },
    { title: "Electric Vehicle Adoption in Urban Freight Systems", type: "Article", year: "2026", link: "https://medium.com/@kprrahul2018/electric-vehicle-adoption-in-urban-freight-systems-a-review-of-sustainability-challenges-policy-1770ec156f79", buttonText: "View Article" },
    { title: "AI-Powered Green Logistics for Carbon Footprint Reduction", type: "Article", year: "2026" },
    { title: "Electric Vehicle Adoption in Urban Freight Systems", type: "Review", year: "2026" }
];

const projects = [
    { title: "Go-Kart Chassis Design", text: "Focus: 3D CAD Modeling, Structural Integrity, Mechanical Design" },
    { title: "Axial Cooling Fan", text: "Focus: Airflow, Circularity, Aerodynamics, Blades, Detailing" },
    { title: "UB-Inspired Robotic Arm", text: "Focus: 3D Design, CAD Assembly, Mechanical Components" },
    { title: "Design and Optimization of the 5-Blade Boat Propeller", text: "Focus: Propeller, Hydraulics, Modeling, Simulation" },
    { title: "Quick Return Mechanism", text: "Focus: CAD Modeling, Mechanism Motion, Simulation Principles" },
    { title: "Flat Head Screwdriver", text: "Focus: Modeling, Assembly, Detailing, Parametric Design, Tolerancing" },
    { title: "UB Phone Stand", text: "Focus: Product Design, CAD Modeling, Branding, Structural Support, Detailing" },
    { title: "Sledge Hammer", text: "Focus: Precision, Ergonomics, Visualization, Geometry, CAD, Design" },
    { title: "Design of the Golf Ball", text: "Focus: 3D CAD, Surface Detailing, Pattern Design" },
    { title: "Radial Engine Assembly Design and Simulation", text: "Focus: Motion Simulation, Engine Assembly, Kinematic Design" },
    { title: "Table Design", text: "Focus: 3D CAD Modeling, Structural Design, Product Visualization" },
    { title: "Design of the Hand Gripper", text: "Focus: Modeling, 3D Design, Mechanical Functionality, Structural Balance, Pivot-Based Motion" },
    { title: "Flower Vase Design", text: "Focus: Layout Design, Aesthetic Design, Surface Modeling, Structural Stability" },
    { title: "Twisted Connector Design", text: "Focus: 3D CAD Modeling, Mechanical Design, Product Visualization" },
    { title: "Design of an iPhone", text: "Focus: Detailing, Properties, Surface Design, Camera, Ergonomics" },
    { title: "Design of the Basketball", text: "Focus: Surface Modeling, Product Visualization, Geometric Detailing, CAD Design, Rendering" },
    { title: "Design of the Patio Umbrella", text: "Focus: Modeling, Curvature, Surfaces, Concept Design, Detailing, Texturing" },
    { title: "V6 Engine", text: "Focus: Piston, Crankshaft, Rotation, Alignment, Connecting Rods" },
    { title: "Heart Design", text: "Focus: Surface Modeling, Symmetry, 3D CAD Design" },
    { title: "Design of the Allen Wrench", text: "Focus: Tool Design, Inspection, Modeling, Geometric Dimensioning and Tolerancing" },
    { title: "Design of the Socket Wrench", text: "Focus: Materials, Rendering, Ergonomics, Constraints, Tool Design" },
    { title: "Design of the Ball Bearing", text: "Focus: Computer Integrated Manufacturing, Modeling, Fitting, Design" },
    { title: "Scissors", text: "Focus: Assembly, Ergonomics, Modeling, Precision, Prototyping, Functionality" },
    { title: "KPR Flask Design", text: "Focus: Logo, Branding, Prototype, Modeling, Visualization" },
    { title: "9V Battery Design", text: "Focus: 3D CAD Design, Modeling, Product Visualization" },
    { title: "Design of the Axial Turbine", text: "Focus: Machining, CAD, Modeling, Visualization" },
    { title: "Design of the Spur Gear", text: "Focus: CAD Modeling, Material Strength, Stress Analysis, Modeling" }
];

const experiences = [
    { title: "Research Intern — University at Buffalo", text: "Investigated truck companies' shift to alternative fuels, connecting adoption with long-term cost savings and lower environmental penalties." },
    { title: "Graduate Trainee — University at Buffalo", text: "Supported safety training modules and standard operating procedures to promote health, hygiene and OSHA-aligned workplace practices." },
    { title: "Industrial Service Engineer — MABS Associates / Grundfos", text: "Implemented preventive-maintenance schedules that supported equipment reliability, longer service life and reduced operating costs." },
    { title: "Mechanical Engineering Intern — NLC Power Station Private Limited", text: "Studied plant efficiency and identified improvement areas to support stronger operating performance." },
    { title: "Production Engineering Intern — Harihar Alloys Private Limited", text: "Compiled and analyzed production data to identify trends and process-improvement opportunities for data-driven decision-making." },
    { title: "Supply Chain Coordinator Assistant — Shree Vari Fly Ash Bricks", text: "Developed supplier relationships, supported reliable material availability and contributed to procurement and logistics coordination." },
    { title: "CNC Machine Operator Intern — Mirra Hi-Tech Engineering", text: "Supported machine performance by identifying and replacing worn tools and dies, improving accuracy and operating efficiency." }
];

const skills = [
    "SQL", "Python", "Power BI", "Tableau", "Advanced Excel", "Minitab", "AutoCAD", "SolidWorks", "Fusion 360",
    "Lean Manufacturing", "Six Sigma", "5S", "SPC", "Operations Research", "Supply Chain Analytics",
    "Sustainable Manufacturing", "CAD Modeling", "Dashboard Design"
];

const achievements = [
    { title: "Runner-Up — Engineering Drawing Competition", text: "KPR Institute of Engineering and Technology · Jan 2019" },
    { title: "Third Rank — Technical Event (Junkyard)", text: "KPR Institute of Engineering and Technology · Feb 2020" },
    { title: "Third Rank — Moto Quiz Competition", text: "KPR Institute of Engineering and Technology · Feb 2020" },
    { title: "Research Paper Presentation — Journal Paper", text: "Dr. NGP Institute of Technology · Mar 2022" },
    { title: "Research Paper Presentation — Journal Paper", text: "Dr. NGP Institute of Technology · Mar 2022" },
    { title: "Student Learning Assessment Test — Rating 4/5", text: "AICTE · Mar 2022" },
    { title: "Research Paper — ICMSSMT International Conference", text: "International Conference on Materials Science · Mar 2022" },
    { title: "Ninth Rank — Physics Sparks", text: "Think Works · Jan 2026" },
    { title: "Second Rank — Nerds AI Quest", text: "Nerds Room · Jan 2026" },
    { title: "Ninth Rank — Industry Ready Engineer Challenge 2026", text: "Mindenious · Mar 2026" }
];

const patents = [
    { title: "Self-Charging Drone Docking Station using Hybrid Solar-Wind Energy with Predictive Landing Control", text: "Ongoing", status: "Ongoing" },
    { title: "AI-Based Autonomous Foreign Object Debris (FOD) Detection and Risk Prediction System for Airport Runways", text: "Ongoing", status: "Ongoing" },
    { title: "AI-Powered Aircraft Composite Structure Crack Prediction Using Digital Twin and Federated Learning", text: "Ongoing", status: "Ongoing" },
    { title: "Machine Learning-Based Intelligent Aircraft Fuel Optimization System Using Real-Time Weather Analysis", text: "Ongoing", status: "Ongoing" }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const byId = (id) => document.getElementById(id);
let chartsCreated = false;
const chartInstances = [];

function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function cardTemplate(item, index = 0) {
    const title = escapeHtml(item.title);
    const text = escapeHtml(item.text || "");
    const meta = [item.type, item.year].filter(Boolean).map((value) => `<span>${escapeHtml(value)}</span>`).join("");
    const status = item.status ? `<span class="status-pill">${escapeHtml(item.status)}</span>` : "";
    const link = item.link ? `<a class="portfolio-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.buttonText || "View Details")} →</a>` : "";
    return `<article class="portfolio-card glass-card reveal" style="--order:${index}"><div class="card-meta">${meta}${status}</div><h3>${title}</h3>${text ? `<p>${text}</p>` : ""}${link}</article>`;
}

function renderPublications(items = publications) {
    const grid = byId("publicationGrid");
    if (!grid) return;
    grid.innerHTML = items.length ? items.map(cardTemplate).join("") : '<div class="empty-state glass-card">No publications match your search.</div>';
    observeReveals(grid);
}

function renderProjects(items = projects) {
    const grid = byId("projectGrid");
    if (!grid) return;
    grid.innerHTML = items.length ? items.map(cardTemplate).join("") : '<div class="empty-state glass-card">No projects match your search.</div>';
    observeReveals(grid);
}

function renderContent() {
    renderPublications();
    renderProjects();
    byId("experienceTimeline").innerHTML = experiences.map((item, index) => `<article class="timeline-card glass-card reveal" style="--order:${index}"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("");
    byId("skillsGrid").innerHTML = skills.map((skill, index) => `<article class="skill-card glass-card reveal" style="--order:${index}">${escapeHtml(skill)}</article>`).join("");
    byId("achievementGrid").innerHTML = achievements.map(cardTemplate).join("");
    byId("patentGrid").innerHTML = patents.map(cardTemplate).join("");
}

function connectFilters() {
    const publicationSearch = byId("publicationSearch");
    const publicationFilter = byId("publicationFilter");
    const projectSearch = byId("projectSearch");

    const filterPublications = () => {
        const query = publicationSearch.value.trim().toLowerCase();
        const type = publicationFilter.value;
        renderPublications(publications.filter((item) => {
            const searchable = `${item.title} ${item.type} ${item.year}`.toLowerCase();
            return searchable.includes(query) && (type === "all" || item.type === type);
        }));
    };

    publicationSearch?.addEventListener("input", filterPublications);
    publicationFilter?.addEventListener("change", filterPublications);
    projectSearch?.addEventListener("input", () => {
        const query = projectSearch.value.trim().toLowerCase();
        renderProjects(projects.filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(query)));
    });
}

/* NAVIGATION: only one application view is shown at a time. */
function connectNavigation() {
    const views = $$(".app-view");
    const nav = byId("primaryNav");
    const toggle = byId("menuToggle");
    const navLinks = $$(".nav-link");

    const closeMenu = () => {
        nav?.classList.remove("open");
        toggle?.classList.remove("active");
        toggle?.setAttribute("aria-expanded", "false");
    };

    const validView = (id) => views.some((view) => view.id === id);

    const openView = (requestedId, updateHistory = true) => {
        const id = validView(requestedId) ? requestedId : "home";
        const target = byId(id);
        views.forEach((view) => {
            const active = view === target;
            view.classList.toggle("active-view", active);
            view.setAttribute("aria-hidden", String(!active));
        });
        navLinks.forEach((link) => {
            const active = link.dataset.viewTarget === id;
            link.classList.toggle("active", active);
            if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
        });
        closeMenu();
        const scroller = $(".view-scroll, .home-scroll", target);
        scroller?.scrollTo({ top: 0, left: 0, behavior: "auto" });
        requestAnimationFrame(() => observeReveals(target));
        if (id === "analytics") createCharts();
        if (updateHistory) {
            const hash = `#${id}`;
            if (location.hash !== hash) history.pushState({ view: id }, "", hash);
        }
        window.setTimeout(() => target?.focus({ preventScroll: true }), 60);
    };

    toggle?.addEventListener("click", () => {
        const open = !nav.classList.contains("open");
        nav.classList.toggle("open", open);
        toggle.classList.toggle("active", open);
        toggle.setAttribute("aria-expanded", String(open));
    });

    $$('[data-view-target]').forEach((control) => control.addEventListener("click", (event) => {
        const id = control.dataset.viewTarget;
        if (!validView(id)) return;
        event.preventDefault();
        openView(id, true);
    }));

    const openFromHash = () => openView(location.hash.slice(1) || "home", false);
    window.addEventListener("popstate", openFromHash);
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (nav?.classList.contains("open")) return closeMenu();
        if (!byId("home").classList.contains("active-view")) openView("home", true);
    });
    openFromHash();
}

function startTypewriter() {
    const target = byId("typingText");
    if (!target) return;
    const roles = ["Industrial Engineer", "AI Researcher", "Sustainability Analyst", "CAD Designer", "Green Logistics Researcher", "Smart Manufacturing Enthusiast"];
    let role = 0, char = 0, deleting = false;
    const loop = () => {
        const current = roles[role];
        target.textContent = current.slice(0, char);
        if (!deleting && char < current.length) { char += 1; setTimeout(loop, 70); }
        else if (!deleting) { deleting = true; setTimeout(loop, 1250); }
        else if (char > 0) { char -= 1; setTimeout(loop, 34); }
        else { deleting = false; role = (role + 1) % roles.length; setTimeout(loop, 260); }
    };
    loop();
}

function startCounters() {
    $$('[data-counter]').forEach((counter) => {
        const target = Number(counter.dataset.counter || 0);
        const duration = 1100;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });
}

let revealObserver;
function setupReveals() {
    if (!("IntersectionObserver" in window)) return $$(".reveal").forEach((el) => el.classList.add("visible"));
    revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: .08 });
    observeReveals(document);
}
function observeReveals(scope = document) {
    $$(".reveal:not(.visible)", scope).forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 38, 220)}ms`;
        revealObserver ? revealObserver.observe(element) : element.classList.add("visible");
    });
}

function createCharts() {
    if (chartsCreated || typeof Chart === "undefined") {
        chartInstances.forEach((chart) => chart.resize());
        return;
    }
    chartsCreated = true;
    Chart.defaults.color = "#dcecff";
    Chart.defaults.font.family = "Poppins";
    const grid = { color: "rgba(255,255,255,.08)" };
    const ticks = { color: "#a9bddc" };
    const common = {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1250, easing: "easeOutQuart" },
        plugins: {
            legend: { labels: { color: "#f4fbff", usePointStyle: true, padding: 16 } },
            tooltip: { backgroundColor: "rgba(2,8,24,.96)", borderColor: "rgba(69,251,255,.45)", borderWidth: 1, titleColor: "#45fbff", bodyColor: "#fff" }
        },
        scales: { x: { grid, ticks }, y: { beginAtZero: true, grid, ticks } }
    };

    chartInstances.push(new Chart(byId("publicationChart"), {
        type: "bar", data: { labels: ["2023", "2024", "2025", "2026"], datasets: [{ label: "Publications", data: [4, 7, 11, 16], backgroundColor: ["#45fbff", "#3c82ff", "#9d5cff", "#f450ff"], borderRadius: 12, maxBarThickness: 72 }] }, options: common
    }));
    chartInstances.push(new Chart(byId("impactChart"), {
        type: "line", data: { labels: ["2023", "2024", "2025", "2026"], datasets: [{ label: "Projects Completed", data: [10, 15, 25, 47], borderColor: "#62ffb2", backgroundColor: "rgba(98,255,178,.13)", pointBackgroundColor: "#45fbff", pointRadius: 5, borderWidth: 3, tension: .42, fill: true }] }, options: common
    }));
    chartInstances.push(new Chart(byId("skillRadarChart"), {
        type: "radar", data: { labels: ["AI/ML", "Data Analysis", "Supply Chain", "CAD Design", "Research", "Simulation", "Sustainability"], datasets: [{ label: "Skill Strength", data: [82, 92, 88, 91, 90, 84, 95], backgroundColor: "rgba(244,80,255,.15)", borderColor: "#f450ff", pointBackgroundColor: "#45fbff", borderWidth: 3 }] },
        options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1250 }, plugins: { legend: { labels: { color: "#fff", usePointStyle: true } } }, scales: { r: { min: 0, max: 100, ticks: { color: "#a9bddc", backdropColor: "transparent" }, grid: { color: "rgba(255,255,255,.1)" }, angleLines: { color: "rgba(255,255,255,.12)" }, pointLabels: { color: "#fff", font: { size: 11 } } } } }
    }));
    chartInstances.push(new Chart(byId("domainChart"), {
        type: "doughnut", data: { labels: ["CAD & Mechanical", "AI & Analytics", "Sustainability", "Manufacturing", "Supply Chain"], datasets: [{ data: [34, 22, 18, 15, 11], backgroundColor: ["#45fbff", "#3c82ff", "#f450ff", "#62ffb2", "#ffe76b"], borderColor: "rgba(2,7,19,.9)", borderWidth: 4, hoverOffset: 10 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: "63%", animation: { duration: 1250 }, plugins: { legend: { position: "bottom", labels: { color: "#fff", usePointStyle: true, padding: 15 } } } }
    }));
}

function createParticles() {
    const canvas = byId("particleCanvas");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let width = 0, height = 0, dpr = 1, particles = [], raf;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
        dpr = Math.min(devicePixelRatio || 1, 2);
        width = innerWidth; height = innerHeight;
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = reduced ? 35 : Math.min(125, Math.max(55, Math.round(width / 12)));
        particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.4 + .35, vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .12, a: Math.random() * .7 + .2 }));
    };
    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < -5) p.x = width + 5; if (p.x > width + 5) p.x = -5;
            if (p.y < -5) p.y = height + 5; if (p.y > height + 5) p.y = -5;
            ctx.beginPath(); ctx.fillStyle = `rgba(170,225,255,${p.a})`; ctx.shadowBlur = 7; ctx.shadowColor = "#45fbff"; ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        });
        ctx.shadowBlur = 0;
        if (!reduced) raf = requestAnimationFrame(draw);
    };
    addEventListener("resize", resize, { passive: true });
    resize(); draw();
    addEventListener("beforeunload", () => cancelAnimationFrame(raf), { once: true });
}

function connectParallax() {
    const visual = byId("heroVisual");
    const frame = byId("commandFrame");
    if (!visual || !frame || matchMedia("(hover: none), (pointer: coarse)").matches) return;
    visual.addEventListener("pointermove", (event) => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        frame.style.setProperty("--ry", `${x * 5.5}deg`);
        frame.style.setProperty("--rx", `${y * -5.5}deg`);
    });
    visual.addEventListener("pointerleave", () => { frame.style.setProperty("--ry", "0deg"); frame.style.setProperty("--rx", "0deg"); });
}

function connectProfileFallback() {
    const image = byId("profilePhoto");
    if (!image) return;
    const fail = () => image.parentElement.classList.add("image-error");
    image.addEventListener("error", fail);
    if (image.complete && image.naturalWidth === 0) fail();
}

function connectContactForm() {
    byId("contactForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = byId("contactName").value.trim();
        const email = byId("contactEmail").value.trim();
        const subject = byId("contactSubject").value.trim();
        const message = byId("contactMessage").value.trim();
        const body = `Hello Rahul,\n\n${message}\n\nRegards,\n${name}\n${email}`;
        location.href = `mailto:kprrahul2018@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

function initialize() {
    renderContent();
    setupReveals();
    connectFilters();
    connectNavigation();
    startTypewriter();
    startCounters();
    createParticles();
    connectParallax();
    connectProfileFallback();
    connectContactForm();
    window.setTimeout(() => byId("preloader")?.classList.add("hidden"), 650);
}

document.addEventListener("DOMContentLoaded", initialize);
