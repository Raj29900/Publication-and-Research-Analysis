let chartsCreated = false;
let countersStarted = false;
let typingStarted = false;
const charts = [];

/* BACKGROUND */
function createStars() {
    const starField = document.getElementById('starField');
    const shootingStars = document.getElementById('shootingStars');

    if (!starField || !shootingStars) return;

    starField.innerHTML = '';
    shootingStars.innerHTML = '';

    const starCount = window.innerWidth < 700 ? 120 : 220;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('span');
        const size = Math.random() * 2.2 + 0.7;

        star.className = 'star';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--speed', `${Math.random() * 4 + 2}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;

        starField.appendChild(star);
    }

    for (let i = 0; i < 7; i++) {
        const meteor = document.createElement('span');

        meteor.className = 'shooting-star';
        meteor.style.left = `${Math.random() * 100}%`;
        meteor.style.top = `${Math.random() * 70}%`;
        meteor.style.setProperty('--duration', `${Math.random() * 5 + 7}s`);
        meteor.style.animationDelay = `${Math.random() * 12}s`;

        shootingStars.appendChild(meteor);
    }
}

/* PLANET NAVIGATION */
function openSection(sectionName) {
    const solarHome = document.getElementById('solarHome');
    const portal = document.getElementById('sectionPortal');

    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active-section');
    });

    const target = document.getElementById(`section-${sectionName}`);
    if (target) {
        target.classList.add('active-section');
    }

    solarHome.classList.add('hide');
    portal.classList.add('show');

    if (sectionName === 'home') startTyping();
    if (sectionName === 'analytics') createCharts();

    startCounters();
}

function closeSection() {
    document.getElementById('solarHome').classList.remove('hide');
    document.getElementById('sectionPortal').classList.remove('show');
}

function connectPlanets() {
    document.querySelectorAll('.planet-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openSection(btn.dataset.section);
        });
    });

    document.getElementById('backBtn').addEventListener('click', closeSection);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeSection();
    });
}

/* TYPEWRITER */
function startTyping() {
    if (typingStarted) return;

    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    typingStarted = true;

    const roles = [
        'Industrial Engineer',
        'AI Researcher',
        'Sustainability Analyst',
        'CAD Designer',
        'Green Logistics Researcher',
        'Smart Manufacturing Enthusiast'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const current = roles[roleIndex];
        typingText.textContent = current.slice(0, charIndex);

        if (!deleting && charIndex < current.length) {
            charIndex++;
            setTimeout(typeLoop, 70);
        } else if (!deleting) {
            deleting = true;
            setTimeout(typeLoop, 1300);
        } else if (charIndex > 0) {
            charIndex--;
            setTimeout(typeLoop, 35);
        } else {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeLoop, 300);
        }
    }

    typeLoop();
}

/* COUNTERS */
function startCounters() {
    if (countersStarted) return;

    countersStarted = true;

    document.querySelectorAll('[data-count]').forEach(item => {
        const target = Number(item.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 45));

        const timer = setInterval(() => {
            current = Math.min(target, current + step);
            item.textContent = current;

            if (current >= target) {
                clearInterval(timer);
            }
        }, 28);
    });
}

/* DATA */
const publications = [
    {
        title: 'Performance Study of the Single Slope Solar Still using Nano Dispersed Phase Change Material',
        type: 'Journal',
        year: '2022',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785322000761?dgcid=author',
        buttonText: 'View Publication'
    },
    {
        title: 'Performance Study of the Single Slope Solar Still using Nano Dispersed Phase Change Material',
        type: 'Conference',
        year: '2022',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785322000761?dgcid=author',
        buttonText: 'View Publication'
    },
    {
        title: 'Electric Vehicle Adoption in Urban Freight Systems',
        type: 'Article',
        year: '2026',
        link: 'https://medium.com/@kprrahul2018/electric-vehicle-adoption-in-urban-freight-systems-a-review-of-sustainability-challenges-policy-1770ec156f79',
        buttonText: 'View Article'
    },
    {
        title: 'AI-Powered Green Logistics for Carbon Footprint Reduction',
        type: 'Article',
        year: '2026'
    },
    {
        title: 'Electric Vehicle Adoption in Urban Freight Systems',
        type: 'Article',
        year: '2026'
    },
];

const projects = [
    {
        title:'Go-Kart Chassis Design',
        text: 'Focus: 3D CAD Modeling, Structural Integrity, Mechanical Design'
    },
    {
        title:'Axial Cooling Fan',
        text: 'Focus: Airflow, Circularity, Aerodynamics, Blades, Detailing'
    },
    {
        title: 'UB-Inspired Robotic Arm',
        text: 'Focus: 3D Design, CAD Assembly, Mechanical Components'
    },
    {
        title: 'Design and Optimization of the 5-Blade Boat Propeller',
        text: 'Focus: Propeller, Hydraulics, Modeling, Simulation'
    },
    {
        title: 'Quick Return Mechanism',
        text: ' Focus: CAD Modeling, Mechanism Motion, Simulation Principles'
    },
    {
        title: 'Flat Head Screw Driver',
        text: 'Focus: Modeling, Assembly, Detailing, Parametric, Tolerancing',
    },
    {
        title:'UB Phone Stand',
        text: 'Focus: Product Design, CAD Modeling, Branding, Structural Support, Detailing'
    },
    {
        title:'Sledge Hammer',
        text: 'Focus: Precision, Ergonomics, Visualization, Geometry, CAD, Design'
    },
    {
        title:'Design of the Golf Ball',
        text: 'Focus: 3D CAD, Surface Detailing, Pattern Design'
    },
    {
        title:'Radial Engine Assembly Design and Simulation',
        text: 'Focus: Motion Simulation, Engine Assembly, Kinematic Design'
    },
    {
        title:'Table Design',
        text: 'Focus: 3D CAD Modeling, Structural Design, Product Visualization'
    },
    {
        title:'Design of the Hand Gripper',
        text: 'Focus: Modeling, 3D Design, Mechanical Functionality, Structural Balance, Pivot-Based Motion'
    },
    {
        title:'Flower Vase Design',
        text: 'Focus: Layout Design, Asthethic Designing, Surface Modeling, Structural Stability'
    },
    {
        title:'Twisted Connector Design',
        text: 'Focus: 3D CAD Modeling, Mechanical Design, Product Visualization'
    },
    {
        title:'Design of an Iphone',
        text: 'Focus: Detailling, Properties, Surface, Camera, Ergonomics'
    },
    {
        title:'Design of the Basket Ball',
        text: 'Focus: Surface Modeling, Product Visualization, Geometric Detailing, CAD Design, Rendering'
    },
    {
        title:'Design of the Patio Umberlla',
        text: 'Focus: Modeling, Curvature, Surfaces, Design, Concepting, Detailing, Texturing'
    },
    {
        title:'V6 Engine',
        text: 'Focus: Piston, Crankshaft, Rotation, Alignment, Connecting Rods'
    },
    {
        title:'Heart Design',
        text: 'Focus: Surface Modeling, Symmetry, 3D CAD Design'
    },
    {
        title:'Design of the Allen Wrench',
        text: 'Focus: Tool, Inspection, Modeling, Geometric Dimension and Tolerance'
    },
    {
        title:'Design of the Socket Wrench',
        text: 'Focus: Materials, Rendering, Ergonomics, Constraint, Tool'
    },
    {
        title:'Design of the Ball Bearing',
        text: 'Focus: Computer Integrated Manufacturing, Modelling, Fitting, Design'
    },
    {
        title:'Scissors',
        text: 'Focus: Assembly, Ergonomics, Modeling, Precision, Prototyping, Design, Functionality'
    },
    {
        title:'Design of the KPR Flask Design',
        text: 'Focus: Logo, Branding, Prototype, Modeling, Visualization'
    },
    {
        title:'9V Battery Design',
        text: 'Focus: 3D CAD Design, Modelling, Product Visualization'
    },
    {
        title:'Design of the Axial Turbine',
        text: 'Focus: Machining, CAD, Modeling, Visualization'
    },
    {
        title:'Design of the Spur Gear',
        text: 'Focus: CAD Modeling, Material Strength, Stress Analysis, Modeling'
    },
    
];

const experiences = [
    {
        title: 'Research Intern — University at Buffalo',
        text: 'Investigated truck companies shift to alternative fuels, linking it to long-term cost savings and lower environmental penalties'
    },
    {
        title: 'Graduate Trainee — University at Buffalo',
        text: 'Supported the creation of safety training modules and standard operating procedures (SOPs) to promote health and hygiene awareness among employees.'
    },
    {
        title: 'Industrial Service Engineer — MABS Associates / Grundfos',
        text: 'Implemented preventive maintenance schedules, increasing the lifespan of industrial equipment and reducing operating costs.'
    },
    {
        title: 'Mechanical Engineering Intern — NLC Power Station Private Limited',
        text: 'Increased overall plant efficiency by 10% by identifying key areas for improvement during plant efficiency studies and implementing effective solutions.'
    },
    {
        title: 'Production Engineering Intern — Harihar Alloys Private Limited',
        text: 'Compiled and analyzed production data to identify trends and opportunities for process improvement, supporting data-driven decision-making.'
    },
    {
        title: 'Supply Chain Coordinator Assistant — Shree Vari Fly Ash Bricks',
        text: 'Developed strong relationships with fly ash suppliers to ensure a consistent and reliable supply chain, negotiating favorable terms and maintaining open lines of communication.'
    },
    {
        title:'CNC Machine Operator Intern - Mirra Hi Tech Engineering',
        text: 'Contributed to enhanced machine performance by identifying and replacing worn tools and dies, resulting in increased accuracy and efficiency.'
    }
    
];

const skills = [
    'SQL',
    'Python',
    'Power BI',
    'Tableau',
    'Excel',
    'Minitab',
    'AutoCAD',
    'SolidWorks',
    'Fusion 360',
    'Lean Manufacturing',
    'Six Sigma',
    '5S',
    'SPC',
    'Operations Research',
    'Supply Chain Analytics',
    'Sustainable Manufacturing',
    'CAD Modeling',
    'Dashboard Design'
];

const achievements = [
    {
        title: 'Runner Up: Engineering Drawing Competition',
        text: 'KPR Institute of Engineering and Technology · Jan 2019'
    },
    {
        title: 'Third Rank: Technical Event (Junkyard)',
        text: 'KPR Institute of Engineering and Technology · Feb 2020'
    },
    {
        title: 'Third Rank: Moto Quiz Competition',
        text: 'KPR Institute of Engineering and Technology · Feb 2020'
    },
    {
        title: 'Research Paper Presentation — Journal Paper',
        text: 'Dr. NGP Institute of Technology · Mar 2022'
    },
    {
        title: 'Research Paper Presentation — Journal Paper',
        text: 'Dr. NGP Institute of Technology · Mar 2022'
    },
    {
        title: 'Student Learning Assessment Test — Rating 4/5',
        text: 'AICTE · Mar 2022'
    },
    {
        title: 'Research Paper — ICMSSMT International Conference',
        text: 'International Conference on Materials Science · Mar 2022'
    },
    {
        title: 'Nineth Rank — Physics Sparks',
        text: 'Think Works · Jan 2026'
    },
    {
        title: 'Second Rank — Nerds AI Quest',
        text: 'Nerds Room · Jan 2026'
    },
    {
        title: 'Nineth Rank — Industry Ready Engineer Challenge 2026',
        text: 'Mindenious · Mar 2026'
    }
];

const patents = [
    {
        title: 'Self Charging Drone Docking Station using Hybrid Solar-Wind Energy with Predictive Landing Control',
        text: 'Ongoing'
    },
    {
        title: 'AI Based Autonomous Foreign Object Debris (FOD) Detection and Risk Prediction System for Airport Runways',
        text: 'Ongoing'
    },
    {
        title: 'AI Powered Aircraft Composite Structure Crack Prediction Using Digital Twin and Federated Learning',
        text: 'Ongoing'
    },
     {
        title: 'Machine Learning Based Intelligent Aircraft Fuel Optimization System Using Real Time Weather Analysis',
        text: 'Ongoing'
    }
];

/* RENDER CONTENT */
function cardTemplate(item) {
    const description = item.text
        ? item.text
        : `${item.type || ''}${item.type && item.year ? ' · ' : ''}${item.year || ''}`;

    return `
        <div class="card glow-card portfolio-card">

            ${item.image ? `
                <div class="portfolio-image-wrapper">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="portfolio-card-image"
                        loading="lazy"
                        onerror="this.parentElement.style.display='none'"
                    >
                </div>
            ` : ''}

            <div class="portfolio-card-content">

                ${item.type || item.year ? `
                    <div class="card-meta">
                        ${item.type ? `<span>${item.type}</span>` : ''}
                        ${item.year ? `<span>${item.year}</span>` : ''}
                    </div>
                ` : ''}

                <h3>${item.title}</h3>

                ${item.status ? `
                    <span class="patent-status">${item.status}</span>
                ` : ''}

                <p>${description}</p>

                ${item.link && item.link !== '#' ? `
                    <a
                        href="${item.link}"
                        class="portfolio-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${item.buttonText || 'View Details'} →
                    </a>
                ` : ''}

            </div>
        </div>
    `;
}

function renderContent() {
    renderPublications(publications);

    document.getElementById('projectGrid').innerHTML =
        projects.map(cardTemplate).join('');

    document.getElementById('experienceTimeline').innerHTML =
        experiences.map(item => `
            <div class="timeline-card glow-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `).join('');

    document.getElementById('skillsGrid').innerHTML =
        skills.map(skill => `<div class="skill-pill glow-card">${skill}</div>`).join('');

    document.getElementById('achievementGrid').innerHTML =
        achievements.map(cardTemplate).join('');

    document.getElementById('patentGrid').innerHTML =
        patents.map(cardTemplate).join('');
}

function renderPublications(data) {
    document.getElementById('publicationGrid').innerHTML =
        data.map(cardTemplate).join('');
}

function connectPublicationFilters() {
    const search = document.getElementById('publicationSearch');
    const filter = document.getElementById('publicationFilter');

    function applyFilters() {
        const query = search.value.toLowerCase().trim();
        const type = filter.value;

        const filtered = publications.filter(item => {
            const matchSearch =
                item.title.toLowerCase().includes(query) ||
                item.type.toLowerCase().includes(query);

            const matchType = type === 'all' || item.type === type;

            return matchSearch && matchType;
        });

        renderPublications(filtered);
    }

    search.addEventListener('input', applyFilters);
    filter.addEventListener('change', applyFilters);
}

/* HIGH-RESOLUTION CHARTS */
function createCharts() {
    if (chartsCreated) {
        charts.forEach(chart => chart.resize());
        return;
    }

    chartsCreated = true;

    Chart.defaults.font.family = 'Poppins';
    Chart.defaults.color = '#f4fbff';
    Chart.defaults.devicePixelRatio = Math.min(window.devicePixelRatio || 1, 3);

    const commonGrid = {
        color: 'rgba(255,255,255,0.09)'
    };

    const commonTicks = {
        color: '#dbe9ff'
    };

    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        animation: {
            duration: 1400,
            easing: 'easeOutQuart'
        },
        plugins: {
            legend: {
                labels: {
                    color: '#f4fbff',
                    usePointStyle: true,
                    padding: 18
                }
            },
            tooltip: {
                backgroundColor: 'rgba(4,8,24,0.95)',
                titleColor: '#00f7ff',
                bodyColor: '#ffffff',
                borderColor: 'rgba(0,247,255,0.45)',
                borderWidth: 1
            }
        },
        scales: {
            x: {
                ticks: commonTicks,
                grid: commonGrid
            },
            y: {
                beginAtZero: true,
                ticks: commonTicks,
                grid: commonGrid
            }
        }
    };

    charts.push(new Chart(document.getElementById('publicationChart'), {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Publications',
                data: [4, 7, 11, 16],
                backgroundColor: ['#00f7ff', '#2f7bff', '#ff2bf0', '#ffe15d'],
                borderColor: '#ffffff',
                borderWidth: 1,
                borderRadius: 14,
                maxBarThickness: 70
            }]
        },
        options: baseOptions
    }));

    charts.push(new Chart(document.getElementById('impactChart'), {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Projects Completed',
                data: [10, 15, 25, 47],
                borderColor: '#57ff9a',
                backgroundColor: 'rgba(87,255,154,0.18)',
                pointBackgroundColor: ['#00f7ff', '#2f7bff', '#ff2bf0', '#ffe15d'],
                pointBorderColor: '#ffffff',
                pointRadius: 6,
                pointHoverRadius: 10,
                borderWidth: 3,
                tension: 0.42,
                fill: true
            }]
        },
        options: baseOptions
    }));

    charts.push(new Chart(document.getElementById('skillRadarChart'), {
        type: 'radar',
        data: {
            labels: [
                'AI/ML',
                'Data Analysis',
                'Supply Chain',
                'CAD Design',
                'Research',
                'Simulation',
                'Sustainability'
            ],
            datasets: [{
                label: 'Skill Strength',
                data: [82, 92, 88, 91, 90, 84, 95],
                backgroundColor: 'rgba(255,43,240,0.18)',
                borderColor: '#ff2bf0',
                pointBackgroundColor: ['#00f7ff', '#2f7bff', '#ff2bf0', '#ffe15d', '#57ff9a', '#ff8b2b', '#a66bff'],
                pointBorderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1400,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f4fbff',
                        usePointStyle: true
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    ticks: {
                        color: '#dbe9ff',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.12)'
                    },
                    angleLines: {
                        color: 'rgba(255,255,255,0.16)'
                    },
                    pointLabels: {
                        color: '#ffffff',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    }));

    charts.push(new Chart(document.getElementById('domainChart'), {
        type: 'doughnut',
        data: {
            labels: [
                'Healthcare AI',
                'Green Logistics',
                'CAD Design',
                'Manufacturing',
                'Sustainability',
                'Operations Research'
            ],
            datasets: [{
                data: [18, 24, 20, 16, 14, 8],
                backgroundColor: ['#00f7ff', '#57ff9a', '#ff2bf0', '#ffe15d', '#2f7bff', '#ff8b2b'],
                borderColor: 'rgba(255,255,255,0.85)',
                borderWidth: 2,
                hoverOffset: 14
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1400
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f4fbff',
                        usePointStyle: true,
                        padding: 16
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(4,8,24,0.95)',
                    titleColor: '#00f7ff',
                    bodyColor: '#ffffff'
                }
            }
        }
    }));
}

window.addEventListener('resize', () => {
    charts.forEach(chart => chart.resize());
});

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    connectPlanets();
    renderContent();
    connectPublicationFilters();
});

/* Better mobile/tablet chart resizing */
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        charts.forEach(chart => chart.resize());
    }, 350);
});