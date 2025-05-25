// Theme switcher functionality
document.addEventListener("DOMContentLoaded", () => {
  // Create theme switch button
  const themeSwitch = document.createElement("button");
  themeSwitch.className = "theme-switch";
  themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';

  // Create mobile menu button
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

  // Add theme switch and mobile menu to navbar
  const navLinks = document.querySelector(".nav-links");
  const themeSwitchItem = document.createElement("li");
  themeSwitchItem.appendChild(themeSwitch);
  navLinks.appendChild(themeSwitchItem);

  // Add mobile menu button before nav links
  const nav = document.querySelector("nav");
  nav.insertBefore(mobileMenuBtn, navLinks);

  // Create and add overlay for mobile sidebar
  let overlay = document.querySelector(".mobile-nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "mobile-nav-overlay";
    document.body.appendChild(overlay);
  }

  // Open sidebar
  function openSidebar() {
    navLinks.classList.add("active");
    overlay.classList.add("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = "fas fa-times";
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
  // Close sidebar
  function closeSidebar() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = "fas fa-bars";
    document.body.style.overflow = "";
  }

  // Mobile menu click handler
  mobileMenuBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Overlay click closes sidebar
  overlay.addEventListener("click", closeSidebar);

  // Close sidebar when a nav link is clicked (mobile only)
  navLinks.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && e.target.tagName === "A") {
      closeSidebar();
    }
  });

  // Close mobile menu when clicking outside (desktop fallback)
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      !nav.contains(e.target) &&
      navLinks.classList.contains("active")
    ) {
      closeSidebar();
    }
  });

  // Get saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Theme switch click handler
  themeSwitch.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  // Navbar scroll behavior
  let lastScrollTop = 0;
  const header = document.querySelector("header");
  const scrollThreshold = 50; // Minimum scroll amount before hiding navbar

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Only apply scroll behavior on mobile devices
      if (window.innerWidth <= 768) {
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
          // Scrolling down
          header.style.transform = "translateY(-100%)";
          closeSidebar();
        } else {
          // Scrolling up
          header.style.transform = "translateY(0)";
        }
      } else {
        // Reset transform on larger screens
        header.style.transform = "translateY(0)";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },
    { passive: true }
  );
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-switch i");
  if (theme === "dark") {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}
