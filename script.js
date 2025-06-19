document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  
  // Function to open the mobile menu
  const openMenu = () => {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close the mobile menu
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  
  // Event listeners for mobile menu
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMenu);
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }
  
  // Close menu when clicking on links
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Pricing toggle
  const billingToggle = document.getElementById('billing-toggle');
  const starterPrice = document.getElementById('starter-price');
  const professionalPrice = document.getElementById('professional-price');
  
  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      if (billingToggle.checked) {
        if(starterPrice) starterPrice.textContent = '$950';
        if(professionalPrice) professionalPrice.textContent = '$2870';
      } else {
        if(starterPrice) starterPrice.textContent = '$99';
        if(professionalPrice) professionalPrice.textContent = '$299';
      }
    });
  }
  
  // FAQ accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      
      content.classList.toggle('hidden');
      
      if (content.classList.contains('hidden')) {
        icon.classList.remove('rotate-180');
      } else {
        icon.classList.add('rotate-180');
      }
    });
  });
  
  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});