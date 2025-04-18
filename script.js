const menuToggle = document.getElementById('menu-toggle');
const navContent = document.getElementById('nav-content');

// Toggle on click
menuToggle.addEventListener('click', () => {
  navContent.classList.toggle('active');
});

// Close nav if clicked outside
document.addEventListener('click', (e) => {
  if (!navContent.contains(e.target) && !menuToggle.contains(e.target)) {
    navContent.classList.remove('active');
  }
});
//for our cafe 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all the paragraphs inside the .cafes-section .cafes-content
document.querySelectorAll('.cafes-section .cafes-content p').forEach(p => {
  observer.observe(p);
});


//for pop up 

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("popup").style.display = "flex";
    }, 3000); // Change 3000 to 5000 for 5 seconds delay
  });

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
// for cart item 
