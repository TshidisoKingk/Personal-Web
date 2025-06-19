
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
    function () {
      document.getElementById("form-status").textContent = "Message sent successfully ✅";
    },
    function (error) {
      document.getElementById("form-status").textContent = "Failed to send ❌";
      console.log(error);
    }
  );

  this.reset();
});


// Optional: Smooth scroll (if not using CSS scroll-behavior)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// Optional: Add animation on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
