// Function to handle scroll animations
function handleScrollAnimations() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  const carouselButtons = document.querySelectorAll(".cta-button[data-filter]");

  // Add active class to nav links based on scroll position
  function updateActiveNavLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  }

  // Handle section visibility
  function handleSectionVisibility() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("visible");
      }
    });
  }

  // Handle carousel button clicks
  function handleCarouselButtons() {
    carouselButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = button.getAttribute("data-filter");

        // Scroll to catalog section
        document
          .querySelector("#catalog")
          .scrollIntoView({ behavior: "smooth" });

        // Wait for scroll to complete before applying filter
        setTimeout(() => {
          // Find and click the corresponding filter button
          const filterButton = document.querySelector(
            `.filter-btn[data-filter="${filter}"]`
          );
          if (filterButton) {
            filterButton.click();
          }
        }, 1000); // Adjust timing based on scroll duration
      });
    });
  }

  // Initialize carousel button handlers
  handleCarouselButtons();

  // Initial check for sections in view
  handleSectionVisibility();

  // Add scroll event listeners
  window.addEventListener("scroll", () => {
    updateActiveNavLink();
    handleSectionVisibility();
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", handleScrollAnimations);
