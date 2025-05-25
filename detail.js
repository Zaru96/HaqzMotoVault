// Motorcycle data
const motorcycles = {
  "honda-cbr1000rr-r": {
    name: "Honda CBR1000RR-R",
    price: "Rp 1.250.000.000",
    mainImage:
      "https://img.autofun.co.id/file/0e79bdf753854da98122ffa46de5c9de.jpg?w=1200&h=800&fit=crop",
    thumbnails: [
      "https://www.honda-indonesia.com/glide/2021/04/06/ahm_hondacbrfireblade__1617677223079.jpg?w=900&s=8c4267a2b3e85a74b13de03ededf5a9b",
      "https://img.autofun.co.id/file/ede45316344d4d80ba2e2a0ae791e13e.jpg",
      "https://www.astra-honda.com/hondabigbike/photos/AHM_HondaCBRFireblade.%2002..jpg",
    ],
    quickSpecs: {
      engine: "999 cc",
      power: "217 HP",
      weight: "201 kg",
    },
    description:
      "The Honda CBR1000RR-R is the latest sport bike from Honda that combines MotoGP technology with exceptional performance. With a 999cc engine producing 217 HP, this motorcycle offers an unmatched riding experience.",
    specifications: {
      engine: [
        "Type: 4 Cylinder, 4 Stroke, DOHC",
        "Capacity: 999 cc",
        "Maximum Power: 217 HP @ 14,500 rpm",
        "Maximum Torque: 113 Nm @ 12,500 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,100 mm",
        "Width: 745 mm",
        "Height: 1,145 mm",
        "Wheelbase: 1,455 mm",
        "Seat Height: 830 mm",
      ],
      capacity: [
        "Fuel Tank: 16.1 L",
        "Engine Oil: 4.2 L",
        "Dry Weight: 201 kg",
        "Wet Weight: 217 kg",
      ],
      features: [
        "Throttle By Wire",
        "Quick Shifter",
        "Power Selector",
        "Traction Control",
        "Wheelie Control",
        "Launch Control",
        "ABS Cornering",
      ],
    },
  },
  "yamaha-mt10": {
    name: "Yamaha MT-10",
    price: "Rp 850.000.000",
    mainImage:
      "https://yamahamotorsports.com/media/images_products/2025-25-mt-10/1200px/11-2025-MT10SGY-MLNM4-US-04-YY-09-RGB.JPG.webp",
    thumbnails: [
      "https://yamahamotorsports.com/media/images_products/2025-25-mt-10/1200px/11-2025-MT10SGY-MLNM4-US-01-YY-07-RGB.JPG.webp",
      "https://yamahamotorsports.com/media/images_products/2025-25-mt-10/1200px/11-2025-MT10SGY-MLNM4-US-03-YY-08-RGB.JPG.webp",
      "https://yamahamotorsports.com/media/images_products/2025-25-mt-10/1200px/11-2025-MT10SGY-MLNM4-US-07-YY-12-RGB.JPG.webp",
    ],
    quickSpecs: {
      engine: "998 cc",
      power: "160 HP",
      weight: "210 kg",
    },
    description:
      "The Yamaha MT-10 is a naked bike that combines aggressive design with high performance. With its crossplane 998cc engine producing 160 HP, this motorcycle offers a unique and enjoyable riding character.",
    specifications: {
      engine: [
        "Type: 4 Cylinder, 4 Stroke, DOHC",
        "Capacity: 998 cc",
        "Maximum Power: 160 HP @ 11,500 rpm",
        "Maximum Torque: 111 Nm @ 9,000 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,095 mm",
        "Width: 800 mm",
        "Height: 1,110 mm",
        "Wheelbase: 1,400 mm",
        "Seat Height: 825 mm",
      ],
      capacity: [
        "Fuel Tank: 17 L",
        "Engine Oil: 3.8 L",
        "Dry Weight: 210 kg",
        "Wet Weight: 225 kg",
      ],
      features: [
        "YCC-T (Yamaha Chip Controlled Throttle)",
        "Quick Shifter",
        "Traction Control",
        "Slide Control",
        "Lift Control",
        "ABS Cornering",
      ],
    },
  },
  "bmw-r1250gs": {
    name: "BMW R 1250 GS",
    price: "Rp 1.150.000.000",
    mainImage:
      "https://imgcdn.oto.com/large/gallery/exterior/67/2218/bmw-r-1250-gs-slant-rear-view-full-image-227919.jpg",
    thumbnails: [
      "https://www.touratech.com/media/catalog/product/cache/a35709364b481f7357dc34df6f303a14/0/1/01_037_5661_0_01_0e0c.jpg",
      "https://www.motorbeam.com/wp-content/uploads/2021-BMW-R-1250-GS-2-1200x900.jpg",
      "https://imgcdn.oto.com/large/gallery/color/67/2218/bmw-r-1250-gs-color-379688.jpg",
    ],
    quickSpecs: {
      engine: "1254 cc",
      power: "136 HP",
      weight: "249 kg",
    },
    description:
      "The BMW R 1250 GS is the best adventure bike that combines touring comfort with off-road capability. With its boxer 1254cc engine producing 136 HP, this motorcycle is ready to take you on your next adventure.",
    specifications: {
      engine: [
        "Type: 2 Cylinder, 4 Stroke, DOHC",
        "Capacity: 1254 cc",
        "Maximum Power: 136 HP @ 7,750 rpm",
        "Maximum Torque: 143 Nm @ 6,250 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,207 mm",
        "Width: 980 mm",
        "Height: 1,460 mm",
        "Wheelbase: 1,525 mm",
        "Seat Height: 850 mm",
      ],
      capacity: [
        "Fuel Tank: 20 L",
        "Engine Oil: 4 L",
        "Dry Weight: 249 kg",
        "Wet Weight: 268 kg",
      ],
      features: [
        "Dynamic ESA",
        "Hill Start Control",
        "Riding Modes Pro",
        "Dynamic Traction Control",
        "ABS Pro",
        "Dynamic Brake Control",
      ],
    },
  },
  "ducati-panigale-v4": {
    name: "Ducati Panigale V4",
    price: "Rp 1.350.000.000",
    mainImage:
      "https://cdn.pertamax7.com/wp-content/uploads/2024/07/Suspensi-Ohlins-Ducati-Panigale-V4S-2025-Terbaru.jpg",
    thumbnails: [
      "https://cdn.pertamax7.com/wp-content/uploads/2024/07/Spesifikasi-Ducati-Panigale-V4S-2025-Terbaru-headlamp.jpg",
      "https://cdn.pertamax7.com/wp-content/uploads/2024/07/mesin-Ducati-Panigale-V4S-2025-Terbaru.jpg",
      "https://cdn.pertamax7.com/wp-content/uploads/2024/07/Rangka-Ducati-Panigale-V4S-2025-Terbaru.jpg",
    ],
    quickSpecs: {
      engine: "1103 cc",
      power: "214 HP",
      weight: "195 kg",
    },
    description:
      "The Ducati Panigale V4 is the latest sport bike from Ducati that combines MotoGP technology with stunning design. With its V4 1103cc engine producing 214 HP, this motorcycle offers exceptional performance.",
    specifications: {
      engine: [
        "Type: V4, 4 Stroke, DOHC",
        "Capacity: 1103 cc",
        "Maximum Power: 214 HP @ 13,000 rpm",
        "Maximum Torque: 124 Nm @ 10,000 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,070 mm",
        "Width: 745 mm",
        "Height: 1,150 mm",
        "Wheelbase: 1,469 mm",
        "Seat Height: 830 mm",
      ],
      capacity: [
        "Fuel Tank: 16 L",
        "Engine Oil: 4 L",
        "Dry Weight: 195 kg",
        "Wet Weight: 210 kg",
      ],
      features: [
        "Ducati Traction Control",
        "Ducati Wheelie Control",
        "Ducati Power Launch",
        "Ducati Quick Shift",
        "Ducati Slide Control",
        "Ducati Cornering ABS",
      ],
    },
  },
  "ktm-1290-super-duke-r": {
    name: "KTM 1290 Super Duke R",
    price: "Rp 950.000.000",
    mainImage:
      "https://cdn.pertamax7.com/wp-content/uploads/2021/04/Spesifikasi-KTM-1290-SUPER-DUKE-RR.jpg",
    thumbnails: [
      "https://cdn.pertamax7.com/wp-content/uploads/2021/04/KTM-1290-SUPER-DUKE-RR-Tampak-Kiri-.jpg",
      "https://img.webike-cdn.net/370x250/moto_img/cg/11/10499/L_db4d4394ba75a567c7facc40ed.jpg",
      "https://www.ktmmalaysia.com/wp-content/uploads/2024/05/PHO_BIKE_90_LI_MY24-KTM-1390-SUPER-DUKE-R-ORANGE-EU-90-Left_SALL_AEPI_V1.png",
    ],
    quickSpecs: {
      engine: "1301 cc",
      power: "180 HP",
      weight: "198 kg",
    },
    description:
      "The KTM 1290 Super Duke R is the most powerful naked bike from KTM that combines aggressive design with exceptional performance. With its V-twin 1301cc engine producing 180 HP, this motorcycle offers a brutal riding character.",
    specifications: {
      engine: [
        "Type: V-twin, 4 Stroke, DOHC",
        "Capacity: 1301 cc",
        "Maximum Power: 180 HP @ 9,500 rpm",
        "Maximum Torque: 140 Nm @ 8,000 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,117 mm",
        "Width: 889 mm",
        "Height: 1,180 mm",
        "Wheelbase: 1,482 mm",
        "Seat Height: 835 mm",
      ],
      capacity: [
        "Fuel Tank: 16 L",
        "Engine Oil: 3.5 L",
        "Dry Weight: 198 kg",
        "Wet Weight: 213 kg",
      ],
      features: [
        "Cornering ABS",
        "Traction Control",
        "Wheelie Control",
        "Launch Control",
        "Quick Shifter",
        "Riding Modes",
      ],
    },
  },
  "triumph-tiger-1200": {
    name: "Triumph Tiger 1200",
    price: "Rp 1.100.000.000",
    mainImage:
      "https://cdpcdn.dx1app.com/products/USA/TM/2025/MC/DUALPURP/TIGER_1200_GT_EXPLORER/50/SAPPHIRE_BLACK/2000000024.jpg",
    thumbnails: [
      "https://cdpcdn.dx1app.com/products/USA/TM/2025/MC/DUALPURP/TIGER_1200_GT_EXPLORER/50/SAPPHIRE_BLACK/2000000026.jpg",
      "https://cdpcdn.dx1app.com/products/USA/TM/2025/MC/DUALPURP/TIGER_1200_GT_EXPLORER/50/SAPPHIRE_BLACK/2000000023.jpg",
      "https://cdpcdn.dx1app.com/products/USA/TM/2025/MC/DUALPURP/TIGER_1200_GT_EXPLORER/50/SAPPHIRE_BLACK/2000000022.jpg",
    ],
    quickSpecs: {
      engine: "1160 cc",
      power: "141 HP",
      weight: "245 kg",
    },
    description:
      "The Triumph Tiger 1200 is a premium adventure bike that combines touring comfort with exceptional off-road capability. With its triple 1160cc engine producing 141 HP, this motorcycle is ready to take you on your next adventure.",
    specifications: {
      engine: [
        "Type: 3 Cylinder, 4 Stroke, DOHC",
        "Capacity: 1160 cc",
        "Maximum Power: 141 HP @ 9,350 rpm",
        "Maximum Torque: 122 Nm @ 7,600 rpm",
        "Transmission: 6-speed",
      ],
      dimensions: [
        "Length: 2,240 mm",
        "Width: 940 mm",
        "Height: 1,450 mm",
        "Wheelbase: 1,555 mm",
        "Seat Height: 850 mm",
      ],
      capacity: [
        "Fuel Tank: 20 L",
        "Engine Oil: 4 L",
        "Dry Weight: 245 kg",
        "Wet Weight: 265 kg",
      ],
      features: [
        "Semi-active Suspension",
        "Hill Hold Control",
        "Riding Modes",
        "Traction Control",
        "Cornering ABS",
        "Cruise Control",
      ],
    },
  },
};

// Get motorcycle ID from URL
const urlParams = new URLSearchParams(window.location.search);
const motorcycleId = urlParams.get("id");

// Load motorcycle data
function loadMotorcycleData() {
  const motorcycle = motorcycles[motorcycleId];
  if (!motorcycle) {
    window.location.href = "index.html";
    return;
  }

  // Set page title
  document.title = `${motorcycle.name} - MotoShowcase`;

  // Set main content
  document.getElementById("motorcycleName").textContent = motorcycle.name;
  document.getElementById("motorcyclePrice").textContent = motorcycle.price;
  document.getElementById("mainImage").src = motorcycle.mainImage;
  document.getElementById("engineSpec").textContent =
    motorcycle.quickSpecs.engine;
  document.getElementById("powerSpec").textContent =
    motorcycle.quickSpecs.power;
  document.getElementById("weightSpec").textContent =
    motorcycle.quickSpecs.weight;
  document.getElementById("motorcycleDescription").textContent =
    motorcycle.description;

  // Set thumbnails
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb, index) => {
    thumb.src = motorcycle.thumbnails[index];
  });

  // Set specifications
  const engineSpecs = document.getElementById("engineSpecs");
  const dimensionSpecs = document.getElementById("dimensionSpecs");
  const capacitySpecs = document.getElementById("capacitySpecs");
  const featureSpecs = document.getElementById("featureSpecs");

  motorcycle.specifications.engine.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    engineSpecs.appendChild(li);
  });

  motorcycle.specifications.dimensions.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    dimensionSpecs.appendChild(li);
  });

  motorcycle.specifications.capacity.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    capacitySpecs.appendChild(li);
  });

  motorcycle.specifications.features.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    featureSpecs.appendChild(li);
  });
}

// Thumbnail click handler
function handleThumbnailClick(event) {
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  event.target.classList.add("active");
  document.getElementById("mainImage").src = event.target.src;
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadMotorcycleData();

  // Add thumbnail click handlers
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", handleThumbnailClick);
  });

  // Add CTA button handlers
  document.querySelector(".test-ride-btn").addEventListener("click", () => {
    alert("Test Ride feature coming soon!");
  });

  document.querySelector(".contact-btn").addEventListener("click", () => {
    alert("Please contact your nearest dealer for more information.");
  });
});
