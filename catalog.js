// Motorcycle data
const motorcycles = {
  "honda-cbr1000rr-r": {
    name: "Honda CBR1000RR-R",
    category: "sport",
    price: "Rp 1.250.000.000",
    image:
      "https://wallpapercat.com/w/middle-retina/e/4/7/1731411-2560x1707-desktop-hd-honda-cbr1000rr-wallpaper-image.jpg",
    specs: {
      engine: "999 cc",
      power: "217 HP",
      weight: "201 kg",
      fuel: "16.1 L",
    },
  },
  "yamaha-mt10": {
    name: "Yamaha MT-10",
    category: "naked",
    price: "Rp 850.000.000",
    image:
      "https://yamahamotorsports.com/media/images_products/2025-25-mt-10/1200px/11-2025-MT10SGY-MLNM4-US-04-YY-09-RGB.JPG.webp",
    specs: {
      engine: "998 cc",
      power: "160 HP",
      weight: "210 kg",
      fuel: "17 L",
    },
  },
  "bmw-r1250gs": {
    name: "BMW R 1250 GS",
    category: "touring",
    price: "Rp 1.150.000.000",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/67/2218/bmw-r-1250-gs-slant-rear-view-full-image-227919.jpg",
    specs: {
      engine: "1254 cc",
      power: "136 HP",
      weight: "249 kg",
      fuel: "20 L",
    },
  },
  "ducati-panigale-v4": {
    name: "Ducati Panigale V4",
    category: "sport",
    price: "Rp 1.350.000.000",
    image:
      "https://www.naikmotor.com/wp-content/uploads/2022/07/ducati-panigale-v4-2023.jpeg",
    specs: {
      engine: "1103 cc",
      power: "214 HP",
      weight: "195 kg",
      fuel: "16 L",
    },
  },
  "ktm-1290-super-duke-r": {
    name: "KTM 1290 Super Duke R",
    category: "naked",
    price: "Rp 950.000.000",
    image:
      "https://radarbanyumas.disway.id/upload/852fcb54036e3fb8a05afda6a0778da3.jpg",
    specs: {
      engine: "1301 cc",
      power: "180 HP",
      weight: "198 kg",
      fuel: "16 L",
    },
  },
  "triumph-tiger-1200": {
    name: "Triumph Tiger 1200",
    category: "touring",
    price: "Rp 1.100.000.000",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2021/12/Triumph-Tiger-1200-2.jpg",
    specs: {
      engine: "1160 cc",
      power: "141 HP",
      weight: "245 kg",
      fuel: "20 L",
    },
  },
  "yamaha-r1m": {
    name: "Yamaha R1M",
    category: "sport",
    price: "Rp 1.150.000.000",
    image:
      "https://i0.wp.com/jurnalbikers.com/wp-content/uploads/2022/02/img-4_copy_800x532_1.jpg?resize=800%2C532&ssl=1",
    specs: {
      engine: "998 cc",
      power: "200 HP",
      weight: "202 kg",
      fuel: "17 L",
    },
  },
  "bmw-s1000rr": {
    name: "BMW S1000RR",
    category: "sport",
    price: "Rp 1.250.000.000",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/67/936/bmw-s-1000-rr-slant-front-view-full-image-913209.jpg",
    specs: {
      engine: "999 cc",
      power: "207 HP",
      weight: "197 kg",
      fuel: "16.5 L",
    },
  },
  "kawasaki-zx10rr": {
    name: "Kawasaki ZX-10RR",
    category: "sport",
    price: "Rp 1.120.000.000",
    image:
      "https://www.olx.co.id/news/wp-content/uploads/2024/05/harga-ZX10R-1-696x464.webp",
    specs: {
      engine: "998 cc",
      power: "204 HP",
      weight: "207 kg",
      fuel: "17 L",
    },
  },
  "suzuki-gsxr1000": {
    name: "Suzuki GSX-R1000",
    category: "sport",
    price: "Rp 1.100.000.000",
    image:
      "https://imgcdn.zigwheels.ph/large/gallery/exterior/83/1840/suzuki-gsx-r1000-slant-rear-view-full-image-518200.jpg",
    specs: {
      engine: "999 cc",
      power: "202 HP",
      weight: "203 kg",
      fuel: "16 L",
    },
  },
};

// Function to create motorcycle card
function createMotorcycleCard(id, motorcycle) {
  return `
        <div class="motorcycle-card" data-category="${motorcycle.category}">
            <div class="card-image">
                <img src="${motorcycle.image}" alt="${motorcycle.name}">
            </div>
            <div class="card-content">
                <h3>${motorcycle.name}</h3>
                <div class="specs">
                    <p><i class="fas fa-tachometer-alt"></i> Engine: ${motorcycle.specs.engine}</p>
                    <p><i class="fas fa-bolt"></i> Power: ${motorcycle.specs.power}</p>
                    <p><i class="fas fa-weight"></i> Weight: ${motorcycle.specs.weight}</p>
                    <p><i class="fas fa-gas-pump"></i> Fuel Capacity: ${motorcycle.specs.fuel}</p>
                </div>
                <a href="detail.html?id=${id}" class="details-btn">View Details</a>
            </div>
        </div>
    `;
}

// Function to filter motorcycles
function filterMotorcycles(category, searchTerm = "") {
  const motorcycleGrid = document.querySelector(".motorcycle-grid");
  motorcycleGrid.innerHTML = "";

  Object.entries(motorcycles).forEach(([id, motorcycle]) => {
    const matchesCategory =
      category === "all" || motorcycle.category === category;
    const matchesSearch =
      searchTerm === "" ||
      motorcycle.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (matchesCategory && matchesSearch) {
      motorcycleGrid.innerHTML += createMotorcycleCard(id, motorcycle);
    }
  });
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Add filter button click handlers
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Filter motorcycles
      const searchTerm = document.getElementById("searchInput").value;
      filterMotorcycles(button.dataset.filter, searchTerm);
    });
  });

  // Add search input handler
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearch");

  searchInput.addEventListener("input", () => {
    const activeFilter =
      document.querySelector(".filter-btn.active").dataset.filter;
    filterMotorcycles(activeFilter, searchInput.value);

    // Show/hide clear button
    if (searchInput.value.length > 0) {
      clearSearchBtn.classList.add("visible");
    } else {
      clearSearchBtn.classList.remove("visible");
    }
  });

  // Add clear search functionality
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.classList.remove("visible");
    const activeFilter =
      document.querySelector(".filter-btn.active").dataset.filter;
    filterMotorcycles(activeFilter, "");
    searchInput.focus();
  });

  // Initial load with all motorcycles
  filterMotorcycles("all");
});
