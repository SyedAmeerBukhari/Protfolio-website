document.addEventListener("DOMContentLoaded", function () {
  // Typing effect for hero section
  const typedTextSpan = document.querySelector(".typed-text");
  const textArray = [
    "Web Developer",
    "Designer",
    "Freelancer",
    "Problem Solver",
  ];
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      // Pause at end of text
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 50);
    } else {
      // Move to next text in array
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, 500);
    }
  }

  // Start the typing effect
  if (textArray.length) setTimeout(type, 1000);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    });
  });

  // Sticky navigation
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      console.log({
        name,
        email,
        subject,
        message,
      });

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Add animation to elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".project-card, .skill, .about-img, .about-text"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial styles for animation
  document
    .querySelectorAll(".project-card, .skill, .about-img, .about-text")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);
  // Run once on page load
  animateOnScroll();
});
