/* ==========================================================================
   CAFÉ AROMA - Interactive Web Engine
   ========================================================================== */

// 0. Central Configurations for Easy Admin Modification
const CONFIG = {
  whatsappNumber: "919876543210", // Phone number with country code, no symbols
  phoneNumber: "+91 98765 43210", // Display format
  mapsUrl: "https://maps.google.com/?q=Connaught+Place+New+Delhi",
  facebookUrl: "https://www.facebook.com/cafearoma",
  instagramUrl: "https://www.instagram.com/cafearoma",
  twitterUrl: "https://x.com/cafearoma",
  emailAddress: "hello@cafearoma.com"
};

const TODAY_SPECIAL = {
  name: "Paneer Tikka Roll",
  price: 199,
  originalPrice: 249,
  offerBadge: "20% OFF TODAY",
  description: "Fresh smoky paneer tikka wrapped in a soft rumali roti with green chutney, crunchy onions, and chat masala.",
  image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop"
};

// 1. Digital Menu Database
const MENU_DATA = [
  // --- STARTERS ---
  {
    id: "s1",
    name: "Veg Spring Rolls",
    price: 149,
    category: "starters",
    isVeg: true,
    isPopular: false,
    description: "Crispy fried golden wrappers stuffed with spiced shredded vegetables, served with sweet chilli dip.",
    image: "photos/veg%20spring%20rolls.png"
  },
  {
    id: "s2",
    name: "Paneer Tikka",
    price: 249,
    category: "starters",
    isVeg: true,
    isPopular: true,
    description: "Cubed cottage cheese marinated in spiced yogurt and grilled to smoky perfection in clay oven.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "s3",
    name: "Crispy Corn",
    price: 179,
    category: "starters",
    isVeg: true,
    isPopular: false,
    description: "Crisp fried sweet corn kernels tossed with diced onions, green chillies, and aromatic dry spices.",
    image: "photos/crispy%20corn.png"
  },
  {
    id: "s4",
    name: "Honey Chilli Potato",
    price: 189,
    category: "starters",
    isVeg: true,
    isPopular: true,
    description: "Crispy french fries tossed in sweet honey, hot chilli paste, and sprinkled with roasted sesame seeds.",
    image: "photos/honeychillipotato.png"
  },
  {
    id: "s5",
    name: "Chicken Lollipop",
    price: 279,
    category: "starters",
    isVeg: false,
    isPopular: true,
    description: "Frenched chicken wings fried in a spicy red batter, served with spicy Schezwan dipping sauce.",
    image: "photos/chicken%20lollipop.png"
  },
  {
    id: "s6",
    name: "Chilli Chicken Dry",
    price: 299,
    category: "starters",
    isVeg: false,
    isPopular: false,
    description: "Stir-fried batter coated chicken chunks tossed with bell peppers, green chillies, and soy-garlic glaze.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400&auto=format&fit=crop"
  },

  // --- CHINESE ---
  {
    id: "c1",
    name: "Veg Hakka Noodles",
    price: 229,
    category: "chinese",
    isVeg: true,
    isPopular: false,
    description: "Boiled noodles stir-fried in a wok with fresh crunchy vegetables, garlic, vinegar, and soy sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "c2",
    name: "Chicken Hakka Noodles",
    price: 269,
    category: "chinese",
    isVeg: false,
    isPopular: true,
    description: "Classic hakka style noodles stir-fried with egg, tender shredded chicken chunks, and crisp vegetables.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "c3",
    name: "Schezwan Noodles",
    price: 249,
    category: "chinese",
    isVeg: true,
    isPopular: false,
    description: "Spicy and fiery wok-tossed noodles flavored with home-style red Schezwan pepper sauce and garlic.",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "c4",
    name: "Veg Fried Rice",
    price: 219,
    category: "chinese",
    isVeg: true,
    isPopular: false,
    description: "Fluffy steamed rice stir-fried in high-flame wok with finely chopped carrots, beans, and spring onion greens.",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "c5",
    name: "Chicken Fried Rice",
    price: 259,
    category: "chinese",
    isVeg: false,
    isPopular: false,
    description: "Aromatic basmati rice stir-fried with diced chicken pieces, eggs, light soy sauce, and white pepper.",
    image: "photos/chicken%20fried%20rice.png"
  },
  {
    id: "c6",
    name: "Paneer Chilli Gravy",
    price: 279,
    category: "chinese",
    isVeg: true,
    isPopular: false,
    description: "Batter-fried paneer cubes submerged in a savory, thick dark soy sauce gravy infused with green chillies.",
    image: "photos/paneer%20chilly.png"
  },

  // --- INDIAN MAIN COURSE ---
  {
    id: "i1",
    name: "Paneer Butter Masala",
    price: 299,
    category: "indian",
    isVeg: true,
    isPopular: true,
    description: "Soft cottage cheese chunks cooked in rich, creamy and mildly sweet onion-tomato butter gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "i2",
    name: "Kadai Paneer",
    price: 319,
    category: "indian",
    isVeg: true,
    isPopular: false,
    description: "Paneer cooked with bell peppers in a freshly ground spicy Kadai masala sauce in traditional wok.",
    image: "photos/kadai%20paneer.png"
  },
  {
    id: "i3",
    name: "Dal Makhani",
    price: 249,
    category: "indian",
    isVeg: true,
    isPopular: true,
    description: "Black lentils simmered overnight on slow charcoal fire with butter and cream for an authentic rich texture.",
    image: "photos/dal%20makhani.png"
  },
  {
    id: "i4",
    name: "Butter Chicken",
    price: 379,
    category: "indian",
    isVeg: false,
    isPopular: true,
    description: "Tandoori grilled chicken shreds stewed in smooth, silky, buttery tomato gravy spiced with dried fenugreek.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "i5",
    name: "Chicken Curry",
    price: 349,
    category: "indian",
    isVeg: false,
    isPopular: false,
    description: "Home-style tender chicken pieces cooked with traditional fresh spices in local style thin spicy gravy.",
    image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "i6",
    name: "Mutton Rogan Josh",
    price: 499,
    category: "indian",
    isVeg: false,
    isPopular: true,
    description: "Kashmiri style slow-cooked mutton curry featuring rich red chilli oil extract and fine spices.",
    image: "photos/muttonrogan%20josh.png"
  },

  // --- BREADS ---
  {
    id: "b1",
    name: "Butter Naan",
    price: 45,
    category: "breads",
    isVeg: true,
    isPopular: false,
    description: "Fluffy leavened flatbread baked in clay oven (tandoor) and generously glazed with pure butter.",
    image: "photos/butter%20naan.png"
  },
  {
    id: "b2",
    name: "Garlic Naan",
    price: 65,
    category: "breads",
    isVeg: true,
    isPopular: true,
    description: "Traditional flatbread topped with minced fresh garlic and coriander before baking in clay oven.",
    image: "photos/garlic%20naan.png"
  },
  {
    id: "b3",
    name: "Tandoori Roti",
    price: 25,
    category: "breads",
    isVeg: true,
    isPopular: false,
    description: "Unleavened whole wheat flatbread baked on the inner walls of charcoal clay tandoor oven.",
    image: "photos/tandoori%20roti.png"
  },
  {
    id: "b4",
    name: "Lachha Paratha",
    price: 75,
    category: "breads",
    isVeg: true,
    isPopular: false,
    description: "Multi-layered flaky whole wheat flatbread brushed with butter, cooked to golden brown finish.",
    image: "photos/laccha%20paratha.png"
  },

  // --- RICE AND BIRYANI ---
  {
    id: "r1",
    name: "Jeera Rice",
    price: 149,
    category: "rice",
    isVeg: true,
    isPopular: false,
    description: "Aromatic Basmati rice tempered with golden cumin seeds (jeera) and butter fat glaze.",
    image: "https://images.unsplash.com/photo-1596790068538-2f0f6c41ca9c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "r2",
    name: "Veg Biryani",
    price: 269,
    category: "rice",
    isVeg: true,
    isPopular: false,
    description: "Layered mix of aromatic long-grain basmati rice, seasonal fresh vegetables, saffron water and herbs.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "r3",
    name: "Chicken Biryani",
    price: 349,
    category: "rice",
    isVeg: false,
    isPopular: true,
    description: "Fragrant basmati rice slow cooked in layers with spiced marinated chicken pieces, fresh mint and saffron.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "r4",
    name: "Hyderabadi Dum Biryani",
    price: 399,
    category: "rice",
    isVeg: false,
    isPopular: true,
    description: "Authentic dum style biryani cooked with marinated chicken, premium spices, yogurt base, on heavy low seal flame.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&auto=format&fit=crop"
  },

  // --- HOT BEVERAGES ---
  {
    id: "h1",
    name: "Espresso Shot",
    price: 119,
    category: "hot-beverages",
    isVeg: true,
    isPopular: false,
    description: "Intense, concentrated shot of pure 100% Arabica coffee beans brewed under high pressure.",
    image: "https://images.unsplash.com/photo-1510972527409-cef6e4a4d6f2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "h2",
    name: "Cappuccino",
    price: 149,
    category: "hot-beverages",
    isVeg: true,
    isPopular: true,
    description: "Double espresso shot layered with hot milk, topped with a thick, dense layer of silky milk foam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "h3",
    name: "Café Latte",
    price: 169,
    category: "hot-beverages",
    isVeg: true,
    isPopular: false,
    description: "Mild, creamy coffee combining espresso shot with steamed milk and a thin layer of light foam.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "h4",
    name: "Masala Chai",
    price: 79,
    category: "hot-beverages",
    isVeg: true,
    isPopular: true,
    description: "Freshly brewed Assam tea leaves boiled with fresh milk, crushed ginger, cardamom, cloves, and cinnamon.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400&auto=format&fit=crop"
  },

  // --- COLD BEVERAGES ---
  {
    id: "d1",
    name: "Cold Coffee",
    price: 169,
    category: "cold-beverages",
    isVeg: true,
    isPopular: true,
    description: "Rich chilled espresso blended with vanilla ice cream, whole cream milk, and crushed ice, drizzled with chocolate.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "d2",
    name: "Oreo Shake",
    price: 219,
    category: "cold-beverages",
    isVeg: true,
    isPopular: false,
    description: "Thick milk shake blended with crushed Oreo cookies, rich chocolate fudge sauce, and vanilla dairy scoop.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "d3",
    name: "Virgin Mojito",
    price: 179,
    category: "cold-beverages",
    isVeg: true,
    isPopular: false,
    description: "Refreshing fizzy mocktail made with fresh squeezed lemon chunks, muddled mint leaves, cane syrup, and club soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "d4",
    name: "Blue Lagoon",
    price: 199,
    category: "cold-beverages",
    isVeg: true,
    isPopular: true,
    description: "Vibrant tropical mocktail combining sweet blue curaçao extract, lime juice, sprite, and crushed ice.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=400&auto=format&fit=crop"
  },

  // --- DESSERTS ---
  {
    id: "de1",
    name: "Chocolate Lava Cake",
    price: 189,
    category: "desserts",
    isVeg: true,
    isPopular: true,
    description: "Warm individual chocolate cake with a molten liquid cocoa core, served with powdered sugar dust.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "de2",
    name: "Brownie with Ice Cream",
    price: 219,
    category: "desserts",
    isVeg: true,
    isPopular: true,
    description: "Warm fudgy dark chocolate brownie topped with a scoop of cold vanilla ice cream and hot chocolate fudge.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "de3",
    name: "Cheesecake Slice",
    price: 249,
    category: "desserts",
    isVeg: true,
    isPopular: false,
    description: "Classic smooth cream cheese baked slice on crumbly crust base, glazed with raspberry syrup finish.",
    image: "photos/cheese%20slicecake.png"
  },
  {
    id: "de4",
    name: "Gulab Jamun (2 Pcs)",
    price: 99,
    category: "desserts",
    isVeg: true,
    isPopular: false,
    description: "Traditional hot round milk dumplings fried and soaked in sweet cardamom-rosewater flavored syrup.",
    image: "photos/gulab%20jamun.png"
  }
];

// 2. Application State State variables
let currentCategory = "all";
let searchFilterQuery = "";
let isVegOnly = false;
let isNonVegOnly = false;

// 3. Document Elements Selection using Getters to prevent null elements issues on early script loads
const elements = {
  get header() { return document.getElementById("site-header"); },
  get themeToggle() { return document.getElementById("theme-toggle"); },
  get mobileThemeToggle() { return document.getElementById("mobile-theme-toggle"); },
  get hamburgerMenu() { return document.getElementById("hamburger-menu"); },
  get mobileDrawer() { return document.getElementById("mobile-drawer"); },
  get drawerClose() { return document.getElementById("drawer-close"); },
  get drawerOverlay() { return document.getElementById("drawer-overlay"); },
  get mobileNavLinks() { return document.querySelectorAll(".mobile-nav-link"); },
  
  // Menu items components
  get menuGrid() { return document.getElementById("menu-items-grid"); },
  get searchInput() { return document.getElementById("menu-search-input"); },
  get searchClear() { return document.getElementById("menu-search-clear"); },
  get categoryChips() { return document.querySelectorAll(".category-chip"); },
  get vegToggle() { return document.getElementById("veg-only-toggle"); },
  get nonVegToggle() { return document.getElementById("nonveg-only-toggle"); },

  // Modals
  get qrModal() { return document.getElementById("qr-modal"); },
  get qrTrigger() { return document.getElementById("qr-modal-trigger"); },
  get mobileQrTrigger() { return document.getElementById("mobile-qr-trigger"); },
  get qrClose() { return document.getElementById("modal-close"); },
  get qrDownloadBtn() { return document.getElementById("qr-download-btn"); },

  // Testimonials Carousel
  get track() { return document.getElementById("testimonials-track"); },
  get dots() { return document.querySelectorAll(".slider-dots .dot"); },

  // Lightbox Modal
  get lightbox() { return document.getElementById("lightbox-modal"); },
  get lightboxImg() { return document.getElementById("lightbox-img"); },
  get lightboxClose() { return document.getElementById("lightbox-close"); },
  get galleryItems() { return document.querySelectorAll(".select-zoom"); }
};

// 4. Initialize Application
function init() {
  initTheme();
  renderTodaySpecial();
  handleRouting();
  renderMenu();
  setupEventListeners();
  initTestimonialSlider();
  populateSocialLinks();
  initQrCode();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// 4.1 Today's Special Renderer
function renderTodaySpecial() {
  const container = document.getElementById("today-special-container");
  if (!container) return;
  
  const discountText = TODAY_SPECIAL.originalPrice 
    ? `<span class="special-old-price">₹${TODAY_SPECIAL.originalPrice}</span>` 
    : '';
    
  container.innerHTML = `
    <div class="today-special-card glass-card">
      <div class="today-special-img-wrapper">
        <img src="${TODAY_SPECIAL.image}" alt="${TODAY_SPECIAL.name}" loading="lazy">
        <span class="today-special-offer-badge">${TODAY_SPECIAL.offerBadge}</span>
      </div>
      <div class="today-special-info">
        <span class="today-special-badge-label">🔥 Today's Special</span>
        <h3 class="today-special-name">${TODAY_SPECIAL.name}</h3>
        <p class="today-special-desc">${TODAY_SPECIAL.description}</p>
        <div class="today-special-pricing">
          <span class="special-new-price">₹${TODAY_SPECIAL.price}</span>
          ${discountText}
        </div>
        <div class="today-special-actions">
          <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
            `Hi Café Aroma,\n\nI would like to order the Today's Special:\n${TODAY_SPECIAL.name}\n\nPrice: ₹${TODAY_SPECIAL.price}\n\nPlease confirm availability.`
          )}" target="_blank" rel="noopener" class="btn btn-accent btn-full">
            <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
}

// 4.2 QR Menu Router Controller
function handleRouting() {
  const isQrMode = 
    window.location.pathname.endsWith('/menu') || 
    window.location.pathname.endsWith('/menu.html') ||
    window.location.hash === '#/menu' || 
    window.location.search.includes('menu') || 
    window.location.search.includes('mode=qr');
  
  if (isQrMode) {
    document.body.classList.add("qr-menu-mode");
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      setTimeout(() => {
        menuSection.scrollIntoView({ behavior: "auto", block: "start" });
      }, 50);
    }
  } else {
    document.body.classList.remove("qr-menu-mode");
  }
}

// 5. Theme Settings Controller (Light / Dark Mode)
function initTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("cafe-aroma-theme");
  } catch (e) {
    console.warn("localStorage is not accessible in this environment:", e);
  }
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add("dark-theme");
    updateThemeIcons(true);
  } else {
    document.body.classList.remove("dark-theme");
    updateThemeIcons(false);
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  try {
    localStorage.setItem("cafe-aroma-theme", isDark ? "dark" : "light");
  } catch (e) {
    console.warn("localStorage is not accessible in this environment:", e);
  }
  updateThemeIcons(isDark);
  
  // Add quick micro-animation feedback
  const buttons = [elements.themeToggle, elements.mobileThemeToggle];
  buttons.forEach(btn => {
    if (btn) {
      btn.style.transform = "scale(0.9) rotate(45deg)";
      setTimeout(() => {
        btn.style.transform = "";
      }, 250);
    }
  });
}

function updateThemeIcons(isDark) {
  const iconClass = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  
  if (elements.themeToggle) {
    elements.themeToggle.innerHTML = `<i class="${iconClass}"></i>`;
  }
  if (elements.mobileThemeToggle) {
    const text = isDark ? " Light Mode" : " Dark Mode";
    elements.mobileThemeToggle.innerHTML = `<i class="${iconClass}"></i>${text}`;
  }
}

// 6. Navigation Drawers & Active Links Control
function toggleMobileMenu() {
  const isOpen = elements.mobileDrawer.classList.toggle("open");
  elements.drawerOverlay.classList.toggle("active", isOpen);
  elements.hamburgerMenu.classList.toggle("open", isOpen);
  elements.mobileDrawer.setAttribute("aria-hidden", !isOpen);
  elements.hamburgerMenu.setAttribute("aria-expanded", isOpen);
}

function closeMobileMenu() {
  elements.mobileDrawer.classList.remove("open");
  elements.drawerOverlay.classList.remove("active");
  elements.hamburgerMenu.classList.remove("open");
  elements.mobileDrawer.setAttribute("aria-hidden", "true");
  elements.hamburgerMenu.setAttribute("aria-expanded", "false");
}

// 7. Menu Rendering Engine with Filter-Match Rules
function renderMenu() {
  if (!elements.menuGrid) return;
  
  // Show spinner during processing
  elements.menuGrid.innerHTML = `
    <div class="menu-loading">
      <div class="loader-spinner"></div>
      <p>Customizing recipes...</p>
    </div>
  `;

  // Apply filters
  const filteredList = MENU_DATA.filter(dish => {
    // 1. Category check
    const matchesCategory = currentCategory === "all" || dish.category === currentCategory;

    // 2. Search query check
    const matchesSearch = !searchFilterQuery || 
      dish.name.toLowerCase().includes(searchFilterQuery) || 
      dish.description.toLowerCase().includes(searchFilterQuery);

    // 3. Dietary check
    let matchesDietary = true;
    if (isVegOnly && !dish.isVeg) matchesDietary = false;
    if (isNonVegOnly && dish.isVeg) matchesDietary = false;

    return matchesCategory && matchesSearch && matchesDietary;
  });

  // Delay slightly for smooth rendering animation transitions
  setTimeout(() => {
    if (filteredList.length === 0) {
      elements.menuGrid.innerHTML = `
        <div class="no-items-message">
          <i class="fa-solid fa-utensils"></i>
          <h3>No Dishes Found</h3>
          <p>We couldn't find matches for "${searchFilterQuery || 'your choices'}". Try checking spelling or change toggles.</p>
        </div>
      `;
      return;
    }

    elements.menuGrid.innerHTML = filteredList.map(dish => {
      const popularBadge = dish.isPopular 
        ? `<span class="bestseller-badge"><i class="fa-solid fa-star"></i> Bestseller</span>` 
        : '';
      const vegBadge = dish.isVeg 
        ? `<span class="diet-badge veg"><span class="diet-dot veg-dot"></span> Veg</span>` 
        : `<span class="diet-badge non-veg"><span class="diet-dot nonveg-dot"></span> Non-Veg</span>`;
      
      return `
        <article class="dish-card fade-up-card" data-id="${dish.id}">
          <div class="dish-img-wrapper">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy">
            ${popularBadge}
          </div>
          <div class="dish-info">
            <div class="dish-meta-row">
              <span class="dish-category-label">${dish.category.replace("-", " ")}</span>
              ${vegBadge}
            </div>
            <h3 class="dish-title">${dish.name}</h3>
            <p class="dish-desc">${dish.description}</p>
            <div class="dish-card-footer">
              <span class="dish-price">₹${dish.price}</span>
              <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
                `Hi Café Aroma,\n\nI would like to order:\n${dish.name}\n\nPrice: ₹${dish.price}\n\nPlease confirm availability.`
              )}" target="_blank" rel="noopener" class="btn btn-card-order-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }, 100);
}

// 8. Testimonials Swipe Carousel logic (Mobile Carousel, Grid Desktop)
function initTestimonialSlider() {
  if (!elements.track || elements.dots.length === 0) return;

  let startX = 0;
  let moveX = 0;
  let activeIndex = 0;
  let isSwiping = false;

  const cardsCount = elements.track.children.length;

  // Dot Click Handlers
  elements.dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const targetIndex = parseInt(e.target.getAttribute("data-index"));
      goToSlide(targetIndex);
    });
  });

  // Touch/Swipe support for mobile screens
  elements.track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  elements.track.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    moveX = e.touches[0].clientX - startX;
    
    // Prevent normal window scrolling if horizontal swipe is strong
    if (Math.abs(moveX) > 10) {
      e.preventDefault();
    }
  }, { passive: false });

  elements.track.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;

    // Minimum distance of 50px required to trigger slide transition
    if (moveX < -50 && activeIndex < cardsCount - 1) {
      goToSlide(activeIndex + 1);
    } else if (moveX > 50 && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
    moveX = 0;
  });

  function goToSlide(index) {
    // Only slide on screens < 768px (where track display is flex and cards wrap 100% width)
    if (window.innerWidth < 768) {
      activeIndex = index;
      elements.track.style.transform = `translateX(-${activeIndex * 100}%)`;
      
      // Update dots
      elements.dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeIndex);
      });
    }
  }

  // Handle window resizing to reset carousel offset calculations
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      elements.track.style.transform = "";
    } else {
      goToSlide(activeIndex);
    }
  });
}

// 9. QR Menu Download Actions
function openQrModal() {
  elements.qrModal.classList.add("active");
  elements.qrModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable scroll when modal is active
  closeMobileMenu();
}

function closeQrModal() {
  elements.qrModal.classList.remove("active");
  elements.qrModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// 9.1 Dynamic Social Links Wiring
function populateSocialLinks() {
  const footerSocials = document.querySelectorAll(".social-links a");
  footerSocials.forEach(link => {
    const label = link.getAttribute("aria-label");
    if (label === "Instagram") link.href = CONFIG.instagramUrl;
    if (label === "Facebook") link.href = CONFIG.facebookUrl;
    if (label === "Twitter") link.href = CONFIG.twitterUrl;
    if (label === "WhatsApp") link.href = `https://wa.me/${CONFIG.whatsappNumber}`;
  });
}

// 9.2 QR Code Dynamic Generator
let qrCodeInstance = null;
function initQrCode() {
  const qrContainer = document.getElementById("qrcode");
  if (!qrContainer) return;
  
  // Clear any existing content in the QR container
  qrContainer.innerHTML = "";
  
  // Create menu section target URL
  const menuUrl = window.location.href.split('?')[0].split('#')[0] + "?mode=qr";
  
  try {
    qrCodeInstance = new QRCode(qrContainer, {
      text: menuUrl,
      width: 156,
      height: 156,
      colorDark: "#1c110c",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (e) {
    console.error("Could not generate QR Code dynamically:", e);
  }
}

function handleQrDownload() {
  const qrImg = document.querySelector("#qrcode img");
  const qrCanvas = document.querySelector("#qrcode canvas");
  let downloadUrl = "";
  
  if (qrImg && qrImg.src) {
    downloadUrl = qrImg.src;
  } else if (qrCanvas) {
    downloadUrl = qrCanvas.toDataURL("image/png");
  }
  
  if (downloadUrl) {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Cafe-Aroma-QR-Menu.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success visual feedback
    const originalText = elements.qrDownloadBtn.innerHTML;
    elements.qrDownloadBtn.innerHTML = `<i class="fa-solid fa-check"></i> QR Code Saved!`;
    elements.qrDownloadBtn.style.backgroundColor = "#22C55E";
    
    setTimeout(() => {
      elements.qrDownloadBtn.innerHTML = originalText;
      elements.qrDownloadBtn.style.backgroundColor = "";
      closeQrModal();
    }, 1500);
  } else {
    console.warn("QR Code is not ready or has not been generated.");
  }
}

// 10. Image Gallery Lightbox Modal
function openLightbox(imageUrl) {
  if (!elements.lightbox || !elements.lightboxImg) return;
  elements.lightboxImg.src = imageUrl;
  elements.lightbox.classList.add("active");
  elements.lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!elements.lightbox) return;
  elements.lightbox.classList.remove("active");
  elements.lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// 11. Core Event Listeners Setup
function setupEventListeners() {
  // Scroll Actions: Header and Active Scroll Navigation
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      elements.header.classList.add("scrolled");
    } else {
      elements.header.classList.remove("scrolled");
    }
    
    // Highlight Active Link on Scroll
    const scrollPos = window.scrollY + 100;
    const sections = ["hero", "specials", "menu-section", "about", "reviews", "gallery", "contact"];
    
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      }
    });
  });

  // Theme Toggles
  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.mobileThemeToggle.addEventListener("click", () => {
    toggleTheme();
    setTimeout(closeMobileMenu, 400);
  });

  // Mobile Drawer Controls
  elements.hamburgerMenu.addEventListener("click", toggleMobileMenu);
  elements.drawerClose.addEventListener("click", closeMobileMenu);
  elements.drawerOverlay.addEventListener("click", closeMobileMenu);
  
  elements.mobileNavLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // QR Modal triggers
  elements.qrTrigger.addEventListener("click", openQrModal);
  elements.mobileQrTrigger.addEventListener("click", openQrModal);
  elements.qrClose.addEventListener("click", closeQrModal);
  elements.qrModal.addEventListener("click", (e) => {
    if (e.target === elements.qrModal) closeQrModal();
  });
  elements.qrDownloadBtn.addEventListener("click", handleQrDownload);

  // Gallery zoom interactions
  elements.galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const zoomUrl = item.getAttribute("data-image");
      openLightbox(zoomUrl);
    });
  });
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });

  // Close Modals with ESC Key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQrModal();
      closeLightbox();
      closeMobileMenu();
    }
  });

  // Menu Search Inputs
  elements.searchInput.addEventListener("input", (e) => {
    searchFilterQuery = e.target.value.toLowerCase().trim();
    elements.searchClear.classList.toggle("visible", searchFilterQuery.length > 0);
    renderMenu();
  });

  elements.searchClear.addEventListener("click", () => {
    elements.searchInput.value = "";
    searchFilterQuery = "";
    elements.searchClear.classList.remove("visible");
    renderMenu();
    elements.searchInput.focus();
  });

  // Menu Category Clicks
  elements.categoryChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      elements.categoryChips.forEach(c => {
        c.classList.remove("active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("active");
      chip.setAttribute("aria-selected", "true");
      
      currentCategory = chip.getAttribute("data-category");
      renderMenu();

      // Smooth horizontal chip scroll centering on mobile
      const chipOffset = chip.offsetLeft - (window.innerWidth / 2) + (chip.offsetWidth / 2);
      chip.parentElement.parentElement.scrollTo({
        left: chipOffset,
        behavior: "smooth"
      });
    });
  });

  // Menu Dietary Switches Toggles
  elements.vegToggle.addEventListener("change", (e) => {
    isVegOnly = e.target.checked;
    if (isVegOnly && isNonVegOnly) {
      isNonVegOnly = false;
      elements.nonVegToggle.checked = false;
    }
    renderMenu();
  });

  elements.nonVegToggle.addEventListener("change", (e) => {
    isNonVegOnly = e.target.checked;
    if (isNonVegOnly && isVegOnly) {
      isVegOnly = false;
      elements.vegToggle.checked = false;
    }
    renderMenu();
  });

  // Dynamic Routing Listeners
  window.addEventListener("hashchange", handleRouting);
  window.addEventListener("popstate", handleRouting);
}
