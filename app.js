const fadeIn = document.querySelectorAll(".player.fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});