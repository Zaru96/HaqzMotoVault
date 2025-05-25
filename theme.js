// Theme switcher functionality
document.addEventListener("DOMContentLoaded", () => {
  // Create theme switch button
  const themeSwitch = document.createElement("button");
  themeSwitch.className = "theme-switch";
  themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';

  // Add theme switch to navbar
  const navLinks = document.querySelector(".nav-links");
  const themeSwitchItem = document.createElement("li");
  themeSwitchItem.appendChild(themeSwitch);
  navLinks.appendChild(themeSwitchItem);

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
