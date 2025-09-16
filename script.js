// Initialize AOS (Animate On Scroll)
AOS.init();

// Initialize Typed.js for the hero section typing effect
new Typed("#typed", {
  strings: ["Mohd Sohel"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Counter-up animation (Note: This part of the script will not run as there are no elements with the class 'counter' in the HTML.)
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});