/* ==========================================================================
   Design.Szn Creative Portfolio Script Interactions
   ========================================================================== */

// --- Project Data Store for Dynamic Case Study Modals ---
// --- Project Data Store for Dynamic Case Study Modals & Portfolio ---
const baseProjects = [
    // Logos (IDs 1-20)
    { id: 1, title: "Code 116 Identity", client: "116 Tech", image: "assets/Logo Designs/116.png", category: "logos", tag: "Logo Design", role: "Identity Designer", deliverables: "Logo Mark, Asset Pack", timeline: "2 Weeks" },
    { id: 2, title: "Bravetechies Brandmark", client: "Bravetechies", image: "assets/Logo Designs/BRAVETECHIES 2.jpg", category: "logos", tag: "Logo Design", role: "Logo Designer", deliverables: "Vector Suite, Color Guide", timeline: "3 Weeks" },
    { id: 3, title: "DRTW Mark v3", client: "DRTW Corp", image: "assets/Logo Designs/DRTW 3.jpg", category: "logos", tag: "Logo Design", role: "Graphic Designer", deliverables: "Emblem Concepts", timeline: "1 Week" },
    { id: 4, title: "DRTW Mark v4", client: "DRTW Corp", image: "assets/Logo Designs/DRTW 4.jpg", category: "logos", tag: "Logo Design", role: "Graphic Designer", deliverables: "Final Emblem vector", timeline: "1 Week" },
    { id: 5, title: "Hetches Logo System", client: "Hetches Industries", image: "assets/Logo Designs/Hetches.jpg", category: "logos", tag: "Logo Design", role: "Lead Brand Designer", deliverables: "Logo System, Guidelines", timeline: "4 Weeks", branding: true },
    { id: 6, title: "Abstract Geometry Concept", client: "Design Labs", image: "assets/Logo Designs/IMG-20260506-WA0032.jpg", category: "logos", tag: "Logo Design", role: "Designer", deliverables: "Icon Mockup", timeline: "2 Weeks" },
    { id: 7, title: "Design.Szn Mark (Dark)", client: "Design.Szn", image: "assets/Logo Designs/Logo Black.jpg", category: "logos", tag: "Logo Design", role: "Self Identity", deliverables: "Monogram Signature", timeline: "Ongoing", branding: true },
    { id: 8, title: "Design.Szn Mark (Light)", client: "Design.Szn", image: "assets/Logo Designs/Logo White.jpg", category: "logos", tag: "Logo Design", role: "Self Identity", deliverables: "Monogram Signature", timeline: "Ongoing", branding: true },
    { id: 9, title: "Business Card Layout", client: "Corporate Client", image: "assets/Logo Designs/Mockup_Business_Card_90x50_3.jpg", category: "logos", tag: "Logo Design", role: "Brand & Layout Designer", deliverables: "Stationery Suite", timeline: "2 Weeks", branding: true },
    { id: 10, title: "Facade Signage Mockup", client: "Retail Partners", image: "assets/Logo Designs/Signboard_On_The_Wall_Mockup.jpg", category: "logos", tag: "Logo Design", role: "Mockup Designer", deliverables: "Vector Guide, Sign Board", timeline: "3 Weeks", branding: true },
    { id: 11, title: "Techfix Logo & Brand", client: "Techfix Services", image: "assets/Logo Designs/TECHFIX brand 2.jpg", category: "logos", tag: "Logo Design", role: "Lead Identity Designer", deliverables: "Complete Brand Identity", timeline: "4 Weeks", branding: true },
    { id: 12, title: "Astrologic Gaming Emblem", client: "Astrologic Gaming", image: "assets/Logo Designs/astrologic gaming logo.jpg", category: "logos", tag: "Logo Design", role: "Illustrator & Designer", deliverables: "Mascot Logo, Esports Mascot", timeline: "3 Weeks" },
    { id: 13, title: "designxszn Concept v1", client: "Design.Szn Studio", image: "assets/Logo Designs/designxszn-20260824-0001.webp", category: "logos", tag: "Logo Design", role: "Brandmark Designer", deliverables: "Wordmark variations", timeline: "1 Week" },
    { id: 14, title: "designxszn Concept v2", client: "Design.Szn Studio", image: "assets/Logo Designs/designxszn-20260824-0002.webp", category: "logos", tag: "Logo Design", role: "Brandmark Designer", deliverables: "Wordmark variations", timeline: "1 Week" },
    { id: 15, title: "Mahad Brand Emblem", client: "Mahad Brands", image: "assets/Logo Designs/not.thismahad-20260824-0002.webp", category: "logos", tag: "Logo Design", role: "Identity Designer", deliverables: "Geometric Logo", timeline: "2 Weeks" },
    { id: 16, title: "Poppies Florist Logo", client: "Poppies Floral", image: "assets/Logo Designs/poppies.jpg", category: "logos", tag: "Logo Design", role: "Designer", deliverables: "Handdrawn Logo, Brand Assets", timeline: "2 Weeks" },
    { id: 17, title: "Szn Rivera Monogram", client: "Design.Szn Studio", image: "assets/Logo Designs/szn.jpg", category: "logos", tag: "Logo Design", role: "Identity Designer", deliverables: "Personal Branding Grid", timeline: "Ongoing" },
    { id: 18, title: "Ussy Brand Emblem", client: "Ussy", image: "assets/Logo Designs/ussy.jpg", category: "logos", tag: "Logo Design", role: "Illustrator", deliverables: "Corporate Emblem", timeline: "2 Weeks" },
    { id: 19, title: "Velora Autos Emblem", client: "Velora Autos", image: "assets/Logo Designs/velora autos.jpg", category: "logos", tag: "Logo Design", role: "Lead Brand Identity", deliverables: "Car Emblem, Brand Kit", timeline: "4 Weeks", branding: true },
    { id: 20, title: "Zadious Gaming Identity", client: "Zadious Gaming", image: "assets/Logo Designs/zadious 23.jpg", category: "logos", tag: "Logo Design", role: "Lead Artist", deliverables: "Gaming Mascot & Font", timeline: "3 Weeks" },

    // Print & Stationery (IDs 21-24)
    { id: 21, title: "Custom Cap Printing", client: "Elite Apparel", image: "assets/Printing services/Black_Cap_Front_View_Mockup.jpg", category: "print", tag: "Print & Stationery", role: "Print Designer", deliverables: "Cap Vector Mockup", timeline: "1 Week" },
    { id: 22, title: "Branded T-Shirt Print", client: "Apparel Co", image: "assets/Printing services/Folded_T-Shirt_PSD_Template.jpg", category: "print", tag: "Print & Stationery", role: "Print Designer", deliverables: "T-Shirt Print File", timeline: "1 Week" },
    { id: 23, title: "Executive Gold Foil Jotter", client: "Jotter Corp", image: "assets/Printing services/JOTTER 2.jpg", category: "print", tag: "Print & Stationery", role: "Print Identity", deliverables: "Debossed Foil Cover", timeline: "2 Weeks", branding: true },
    { id: 24, title: "Lux Brand Shopping Bag", client: "SBMA Retail", image: "assets/Printing services/sbma bag.jpg", category: "print", tag: "Print & Stationery", role: "Packaging Specialist", deliverables: "Die-cut template & Bag print", timeline: "3 Weeks", branding: true },

    // Flyers & Posters (IDs 25-69)
    { id: 25, title: "Abbys Fashion Promo", client: "Abbys Boutique", image: "assets/Flyers/ABBYS.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Instagram Poster", timeline: "3 Days" },
    { id: 26, title: "Airbrush Enhancer Campaign", client: "Airbrush Studio", image: "assets/Flyers/Airbrush-IMAGE-ENHANCER-1782852682943-1782852682944.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Visual Creator", deliverables: "Retouch Campaign poster", timeline: "1 Week" },
    { id: 27, title: "All In One Bike Showcase", client: "Bike Hub", image: "assets/Flyers/All in one bike.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Layout Designer", deliverables: "Catalog Flyer", timeline: "5 Days" },
    { id: 28, title: "Fluxrware New Year Promo", client: "Fluxrware Tech", image: "assets/Flyers/FLUXRWARE NEW YEAR 2026.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Seasonal Banner", timeline: "4 Days" },
    { id: 29, title: "Forex Masterclass Flyer", client: "Forex Academy", image: "assets/Flyers/Forex.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Graphic Designer", deliverables: "Promo Graphic", timeline: "2 Days" },
    { id: 30, title: "Halal Global Conference", client: "Halal Global", image: "assets/Flyers/HALAL GLOBAL (4).jpg", category: "flyers", tag: "Flyers & Promotion", role: "Lead Event Designer", deliverables: "Conference Banner", timeline: "1 Week" },
    { id: 31, title: "Halal Smart Initiative", client: "Halal Smart", image: "assets/Flyers/HALAL SMART.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Official Launch Banner", timeline: "5 Days" },
    { id: 32, title: "Sumayya Collection Launch", client: "Sumayya Coll", image: "assets/Flyers/SUMAYYA coll.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Creative Director", deliverables: "Fashion Flyer Campaign", timeline: "2 Weeks", branding: true },
    { id: 33, title: "Szn Creative Art Print", client: "Design.Szn Studio", image: "assets/Flyers/Screenshot_20260611_182921.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Graphic Art Showcase", timeline: "Ongoing" },
    { id: 34, title: "Tama Luxe Catalog Price List", client: "Tama Luxe", image: "assets/Flyers/Tama luxe  price.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Brand Layout Designer", deliverables: "Product Catalog Flyer", timeline: "2 Weeks", branding: true },
    { id: 35, title: "Tama Luxe Promotion Vol 2", client: "Tama Luxe", image: "assets/Flyers/Tama luxe 2.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Collection Poster", timeline: "1 Week" },
    { id: 36, title: "Tama Luxe New Collection", client: "Tama Luxe", image: "assets/Flyers/Tama luxe new 3.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Launch Campaign Graphic", timeline: "1 Week" },
    { id: 37, title: "Dera Fashion Promo", client: "Dera Fashion", image: "assets/Flyers/dera f.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Marketing Poster", timeline: "4 Days" },
    { id: 38, title: "Creative Studio Promo Slot 1", client: "Creative Lab", image: "assets/Flyers/flyer_slot_1.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Flyer Mockup", timeline: "3 Days" },
    { id: 39, title: "Nightlife Event Flyer Slot 2", client: "Club Slot", image: "assets/Flyers/flyer_slot_2.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Illustrator", deliverables: "Vibrant Gig Flyer", timeline: "4 Days" },
    { id: 40, title: "Corporate Webinar Flyer Slot 3", client: "Slot Corp", image: "assets/Flyers/flyer_slot_3.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Layout Designer", deliverables: "Webinar Poster", timeline: "3 Days" },
    { id: 41, title: "Cultural Festival Poster", client: "Culture Initiative", image: "assets/Flyers/hindus.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Creative Director", deliverables: "Exhibition Poster", timeline: "1 Week" },
    { id: 42, title: "Global Logistics Flyer", client: "Import Logistics", image: "assets/Flyers/import.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Corporate Info Sheet", timeline: "5 Days" },
    { id: 43, title: "Memorial Celebration Banner", client: "Samson Family", image: "assets/Flyers/mummy samson.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Graphic Artist", deliverables: "Memorial Program Flyer", timeline: "4 Days" },
    { id: 44, title: "Mahad Brand Event Flyer A", client: "Mahad Brands", image: "assets/Flyers/not.thismahad-20260824-0001.webp", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Launch Visual", timeline: "1 Week" },
    { id: 45, title: "Mahad Brand Event Flyer B", client: "Mahad Brands", image: "assets/Flyers/not.thismahad-20260824-0004.webp", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Launch Visual", timeline: "1 Week" },
    { id: 46, title: "Mahad Brand Event Flyer C", client: "Mahad Brands", image: "assets/Flyers/not.thismahad-20260824-0005.webp", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Launch Visual", timeline: "1 Week" },
    { id: 47, title: "Szn Portfolio Art Print", client: "Design.Szn Studio", image: "assets/Flyers/szn.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Graphic Poster Art", timeline: "Ongoing" },
    { id: 48, title: "Velora Autos Promo Flyer", client: "Velora Autos", image: "assets/Flyers/velora autos flyer.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Marketing Flyer Campaign", timeline: "1 Week", branding: true },
    { id: 49, title: "Yarimiya Collection Showcase", client: "Yarimiya Fashion", image: "assets/Flyers/yarimiya 2.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Fashion Catalogue Flyer", timeline: "1 Week" },

    // Posters
    { id: 50, title: "5ive Concert Poster", client: "5ive Entertainment", image: "assets/Poster/5IVE 2.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Poster Artist", deliverables: "Gig Poster Campaign", timeline: "1 Week" },
    { id: 51, title: "The Conclave Event Poster", client: "Conclave Org", image: "assets/Poster/CONCLAVE-1.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Lead Designer", deliverables: "Official Event Poster", timeline: "2 Weeks" },
    { id: 52, title: "Retro Art Concept Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-05-08_16-31-54-905.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Creative Poster Art", timeline: "Ongoing" },
    { id: 53, title: "Cyberpunk Theme Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-05-10_08-48-21-816.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Digital Illustration Poster", timeline: "Ongoing" },
    { id: 54, title: "Minimalist Typographic Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-05-11_21-33-05-111.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Creative Typography", timeline: "Ongoing" },
    { id: 55, title: "Futuristic Portrait Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-05-18_18-53-06-322.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Vaporwave Concept Art", timeline: "Ongoing" },
    { id: 56, title: "Surreal Collage Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-05-31_20-58-41-725.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Collage Artwork", timeline: "Ongoing" },
    { id: 57, title: "Abstract Vector Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-07-16_12-04-25-681.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Vector Art Print", timeline: "Ongoing" },
    { id: 58, title: "Vintage Noise Poster", client: "Personal Project", image: "assets/Poster/Picsart_24-08-10_17-10-16-425.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Artist", deliverables: "Grit Texture Art", timeline: "Ongoing" },
    { id: 59, title: "Adizil Launch Campaign Poster", client: "Adizil Group", image: "assets/Poster/adizil.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Visual Designer", deliverables: "Launch Poster", timeline: "1 Week" },
    { id: 60, title: "Maz Energies Green Campaign", client: "Maz Energies", image: "assets/Poster/maz energies 2.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Eco Flyer & Poster", timeline: "5 Days" },
    { id: 61, title: "Festival Poster Slot 1", client: "Event Co", image: "assets/Poster/poster_slot_1.jpg.png", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Gig Poster", timeline: "4 Days" },
    { id: 62, title: "Concert Poster Slot 2", client: "Event Co", image: "assets/Poster/poster_slot_2.jpg.png", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Promo Poster", timeline: "4 Days" },
    { id: 63, title: "Cinema Poster Slot 3", client: "Film Co", image: "assets/Poster/poster_slot_3.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Layout Designer", deliverables: "Movie Poster", timeline: "1 Week" },
    { id: 64, title: "Theatre Poster Slot 4", client: "Theatre Co", image: "assets/Poster/poster_slot_4.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Stage Play Poster", timeline: "1 Week" },
    { id: 65, title: "Gig Poster Slot 5", client: "Band Co", image: "assets/Poster/poster_slot_5.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Music Poster", timeline: "3 Days" },
    { id: 66, title: "Event Poster Slot 6", client: "Event Co", image: "assets/Poster/poster_slot_6.jpg.png", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Vibrant Banner", timeline: "4 Days" },
    { id: 67, title: "Art Exhibition Poster Slot 7", client: "Gallery Co", image: "assets/Poster/poster_slot_7.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Exhibition Poster", timeline: "1 Week" },
    { id: 68, title: "Party Poster Slot 8", client: "Club Co", image: "assets/Poster/poster_slot_8.jpg.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Gig Poster", timeline: "2 Days" },
    { id: 69, title: "Sabez Chin Chin Promotion", client: "Sabez Foods", image: "assets/Poster/sabez CHIN CHIN.jpg", category: "flyers", tag: "Flyers & Promotion", role: "Designer", deliverables: "Food Poster Ad", timeline: "5 Days" }
];

// --- Case Study Templates Generator ---
const defaultTextTemplates = {
    logos: {
        description: (title, client) => `Designed a custom, premium brandmark for ${client}. The project focused on translating ${client}'s core principles of quality and modern aesthetics into a highly scalable, recognizable symbol.`,
        challenge: (title, client) => `Creating a mark that communicates identity instantly. The design needed to maintain high contrast and vector precision when scaled to tiny print templates or screen pixels.`,
        solution: (title, client) => `We built the brand symbol on a custom grid system. Using sleek typography and refined balance, the final logo presents a premium, timeless feel across all physical and digital platforms.`
    },
    flyers: {
        description: (title, client) => `Created an attention-grabbing promotional layout for ${client}'s campaign "${title}". This high-impact visual campaign is optimized for social media feeds and physical posters.`,
        challenge: (title, client) => `Combining dense informational details like dates, contact info, and offers with high-concept creative design without looking cluttered.`,
        solution: (title, client) => `We paired vibrant gradient accents with high-end typography layouts. By setting up a clear hierarchy, we drove maximum customer attention to the campaign's call to action.`
    },
    print: {
        description: (title, client) => `Engineered premium print collateral for ${client}, focusing on tactile sensory impact, material selection, and high-fidelity production finishes.`,
        challenge: (title, client) => `Balancing aesthetic layout structures with strict print margin parameters, bleed guidelines, and specialist foil/deboss plates.`,
        solution: (title, client) => `Utilized heavy-weight textured stocks combined with precise hot foil stamping and clean typography grids to deliver an incredibly premium, tactile experience.`
    },
    branding: {
        description: (title, client) => `Developed a comprehensive visual brand identity system for ${client}, ensuring seamless visual consistency across multiple marketing touchpoints.`,
        challenge: (title, client) => `Aligning visual tone across physical print stationery, digital media, packaging, and signboards to build a unified client impression.`,
        solution: (title, client) => `We created modular brand guidelines, color palettes, and custom typography pairings. This cohesive design kit bridges all channels for an authoritative, luxury brand presence.`
    }
};

const projectData = {};

// Dynamically populate projectData with templates
baseProjects.forEach(proj => {
    // If tagged under branding, we will use branding template if category is branding
    const cat = proj.branding && Math.random() > 0.4 ? "branding" : proj.category;
    const template = defaultTextTemplates[cat] || defaultTextTemplates["logos"];
    
    projectData[proj.id] = {
        title: proj.title,
        tag: proj.tag,
        client: proj.client,
        role: proj.role,
        deliverables: proj.deliverables,
        timeline: proj.timeline,
        image: proj.image,
        description: template.description(proj.title, proj.client),
        challenge: template.challenge(proj.title, proj.client),
        solution: template.solution(proj.title, proj.client)
    };
});

// --- Initialization on DOM Load ---
document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initThemeToggle();
    initMobileNav();
    initPortfolioFilters();
    initCaseStudyModal();
    initTestimonialsSlider();
    initContactForm();
    initScrollHighlights();
});

// --- 1. Custom Cursor Follower ---
function initCustomCursor() {
    const cursor = document.getElementById("cursorFollower");
    if (!cursor) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Track mouse coordinates
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Custom animation loop for cursor delay/smoothing
    function updateCursor() {
        // Linear interpolation for smooth trailing effect
        posX += (mouseX - posX) * 0.15;
        posY += (mouseY - posY) * 0.15;

        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;

        requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Apply hovering state on interactive elements
    const hoverables = document.querySelectorAll("a, button, .portfolio-item, .filter-btn, select, input, textarea");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });
}

// --- 2. Dark/Light Theme Switcher ---
function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    const body = document.body;

    // Check for cached theme or user preference
    const savedTheme = localStorage.getItem("Design.Szn-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }

    btn.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("Design.Szn-theme", "light");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("Design.Szn-theme", "dark");
        }
    });
}

// --- 3. Mobile Navigation Menu ---
function initMobileNav() {
    const toggle = document.getElementById("mobileNavToggle");
    const menu = document.getElementById("navMenu");
    const links = document.querySelectorAll(".nav-link");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        menu.classList.toggle("open");
    });

    // Close menu when clicking navigation links
    links.forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("open");
            menu.classList.remove("open");
        });
    });
}

// --- 4. Portfolio Dynamic Loader & Filter System ---
let visibleCount = 12;
let activeFilter = 'all';

function renderPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    if (!grid) return;

    // Filter projects based on active filter
    const filteredProjects = baseProjects.filter(proj => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'branding') return proj.branding === true;
        return proj.category === activeFilter;
    });

    // Slice projects to display up to the visible count
    const projectsToDisplay = filteredProjects.slice(0, visibleCount);

    // Clear grid
    grid.innerHTML = "";

    // Generate HTML for each project
    projectsToDisplay.forEach((proj, idx) => {
        const card = document.createElement("div");
        card.className = "portfolio-item card fade-in-up";
        card.style.animationDelay = `${(idx % 12) * 0.05}s`;
        card.setAttribute("data-category", proj.category);
        if (proj.branding) {
            card.setAttribute("data-branding", "true");
        }
        card.setAttribute("data-id", proj.id);

        card.innerHTML = `
            <div class="portfolio-img-wrapper">
                <img src="${proj.image}" alt="${proj.title} Showcase" class="portfolio-img" loading="lazy">
                <div class="portfolio-hover-overlay">
                    <span class="portfolio-action-btn"><i class="fa-solid fa-expand"></i> View Details</span>
                </div>
            </div>
            <div class="portfolio-meta">
                <span class="portfolio-item-tag">${proj.tag}</span>
                <h3 class="portfolio-item-title">${proj.title}</h3>
                <p class="portfolio-item-desc">${proj.client}</p>
            </div>
        `;

        grid.appendChild(card);
    });

    // Control visibility of "Load More" button container
    const loadMoreContainer = document.getElementById("loadMoreContainer");
    if (loadMoreContainer) {
        if (filteredProjects.length > visibleCount) {
            loadMoreContainer.style.display = "flex";
        } else {
            loadMoreContainer.style.display = "none";
        }
    }

    // Dynamic Hover Binding for custom cursor
    const cursor = document.getElementById("cursorFollower");
    if (cursor) {
        const hoverables = grid.querySelectorAll(".portfolio-item");
        hoverables.forEach(el => {
            el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
        });
    }
}

function initPortfolioFilters() {
    const filters = document.querySelectorAll(".filter-btn");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    // Initial render
    renderPortfolio();

    // Category button filters
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");

            activeFilter = btn.getAttribute("data-filter");
            visibleCount = 12; // Reset visible count on category change
            renderPortfolio();
        });
    });

    // Load More action
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            visibleCount += 12;
            renderPortfolio();
        });
    }
}

// --- 5. Case Study Modal Overlay (Event Delegation) ---
function initCaseStudyModal() {
    const grid = document.getElementById("portfolioGrid");
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    const contentBox = document.getElementById("modalContent");

    if (!grid || !modal) return;

    // Use event delegation on grid
    grid.addEventListener("click", (e) => {
        const item = e.target.closest(".portfolio-item");
        if (!item) return;

        const id = item.getAttribute("data-id");
        const data = projectData[id];

        if (data) {
            contentBox.innerHTML = `
                <span class="modal-header-tag">${data.tag}</span>
                <h2 class="modal-title">${data.title}</h2>
                
                <div class="modal-meta-grid">
                    <div>
                        <span class="modal-meta-item-label">Client</span>
                        <span class="modal-meta-item-val">${data.client}</span>
                    </div>
                    <div>
                        <span class="modal-meta-item-label">Role</span>
                        <span class="modal-meta-item-val">${data.role}</span>
                    </div>
                    <div>
                        <span class="modal-meta-item-label">Deliverables</span>
                        <span class="modal-meta-item-val">${data.deliverables}</span>
                    </div>
                    <div>
                        <span class="modal-meta-item-label">Timeline</span>
                        <span class="modal-meta-item-val">${data.timeline}</span>
                    </div>
                </div>
                
                <div class="modal-main-img-wrapper">
                    <img src="${data.image}" alt="${data.title} Case Study Preview" class="modal-main-img">
                </div>
                
                <div class="modal-case-body">
                    <div>
                        <h3 class="modal-body-title">Project Overview</h3>
                        <p class="modal-body-text">${data.description}</p>
                    </div>
                    <div>
                        <h3 class="modal-body-title">Challenge & Solution</h3>
                        <p class="modal-body-text"><strong>The Challenge:</strong> ${data.challenge}</p>
                        <br>
                        <p class="modal-body-text"><strong>Our Strategy:</strong> ${data.solution}</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="window.location.href='#contact'; document.getElementById('projectModal').classList.remove('active'); document.body.classList.remove('modal-open');">
                        Inquire About Similar Project <i class="fa-solid fa-arrow-right-long btn-icon"></i>
                    </button>
                </div>
            `;

            modal.classList.add("active");
            document.body.classList.add("modal-open");
        }
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
        setTimeout(() => {
            contentBox.innerHTML = '';
        }, 400);
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// --- 6. Testimonials Slider Carousel ---
function initTestimonialsSlider() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.getElementById("sliderDots");
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");

    if (slides.length === 0) return;

    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 6000;

    // Create Navigation Dot Indicators
    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.classList.add("slider-dot");
        if (i === 0) dot.classList.add("active");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => {
            goToSlide(i);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dot");

    // Transition logic
    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    // Next/Prev Buttons
    nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
        resetAutoplay();
    });

    prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
        resetAutoplay();
    });

    // Autoplay
    function startAutoplay() {
        slideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, intervalTime);
    }

    function resetAutoplay() {
        clearInterval(slideInterval);
        startAutoplay();
    }

    startAutoplay();

    // Pause autoplay on hover
    const sliderBox = document.querySelector(".testimonials-slider-container");
    sliderBox.addEventListener("mouseenter", () => clearInterval(slideInterval));
    sliderBox.addEventListener("mouseleave", startAutoplay);
}

// --- 7. Contact Form Simulation ---
function initContactForm() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("formSubmitBtn");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validation check
        if (!form.checkValidity()) return;

        // Button loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Inquiry...</span> <i class="fa-solid fa-spinner fa-spin btn-icon"></i>`;

        // Simulate network delay
        setTimeout(() => {
            // Show Success Toast
            showToast("Inquiry sent successfully! Szn will reach out shortly.", "success");

            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Reset fields
            form.reset();
        }, 1800);
    });
}

// Toast System
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = `<i class="fa-solid fa-circle-check toast-icon"></i>`;
    if (type === "error") {
        icon = `<i class="fa-solid fa-triangle-exclamation toast-icon"></i>`;
    }

    toast.innerHTML = `
        ${icon}
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Dismiss toast after 4 seconds
    setTimeout(() => {
        toast.style.animation = "slideInToast 0.3s ease reverse";
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 4000);
}

// --- 8. Dynamic Navigation Link Highlighting on Scroll ---
function initScrollHighlights() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            // Buffer to highlight slightly before entering the section fully
            if (window.scrollY >= top - 120) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}
