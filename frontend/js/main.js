let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const slider = document.querySelector('.hero-slider');

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slider.appendChild(firstClone);
slider.insertBefore(lastClone, slider.firstChild);

// Update variables after cloning
const totalSlides = slides.length + 2; // Include clones
const slideWidth = 100 / totalSlides; // Percentage width for each slide
slider.style.width = `${totalSlides * 100}%`; // Adjust total slider width
slider.style.transform = `translateX(-${slideWidth}%)`; // Start at first actual slide
slider.querySelectorAll('.slide').forEach(slide => {
  slide.style.flex = `0 0 ${slideWidth}%`; // Adjust slide width
});

// Function to show the current slide
function initializeSlider() {
  // Move to the "clone" of the first slide for the infinite loop illusion
  slider.style.transition = 'none';
  slider.style.transform = `translateX(-${slideWidth}%)`; // Start at the first actual slide

  // Set the first indicator as active
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[0].classList.add('active');

  // Set currentSlide to the first slide
  currentSlide = 0;
}

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1; // Wrap to the last slide
    slider.style.transition = 'none'; // Disable transition for the loop effect
    slider.style.transform = `translateX(-${(slides.length) * slideWidth}%)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.8s ease-in-out'; // Re-enable smooth transition
      slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }, 20);
  } else if (index >= slides.length) {
    currentSlide = 0; // Wrap to the first slide
    slider.style.transition = 'none'; // Disable transition for the loop effect
    slider.style.transform = `translateX(0%)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.8s ease-in-out'; // Re-enable smooth transition
      slider.style.transform = `translateX(-${(currentSlide + 1) * slideWidth}%)`;
    }, 20);
  } else {
    currentSlide = index; // Regular movement
    slider.style.transition = 'transform 0.8s ease-in-out'; // Smooth transition
    slider.style.transform = `translateX(-${(currentSlide + 1) * slideWidth}%)`; // Adjust offset
  }

  // Update indicators
  indicators.forEach((indicator, i) => {
    if (i === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Initialize the slider on page load
initializeSlider();


// Handle seamless transition
slider.addEventListener('transitionend', () => {
  if (currentSlide === slides.length) {
    // Seamlessly jump to first slide
    slider.style.transition = 'none'; // Disable transition
    slider.style.transform = `translateX(-${slideWidth}%)`; // Reset to first actual slide
    currentSlide = 0;
  } else if (currentSlide === -1) {
    // Seamlessly jump to last slide
    slider.style.transition = 'none'; // Disable transition
    slider.style.transform = `translateX(-${slides.length * slideWidth}%)`; // Reset to last actual slide
    currentSlide = slides.length - 1;
  }
});

// Auto Slide Functionality
let autoSlide = setInterval(() => {
  showSlide(currentSlide + 1); // Increment slide and show it
}, 6000);

// Updated resetAutoSlide function
function resetAutoSlide() {
  clearInterval(autoSlide); // Stop the current auto slide
  autoSlide = setInterval(() => {
    showSlide(currentSlide + 1); // Automatically advance the slide
  }, 6000); // Maintain consistent interval
}

// Updated Manual Controls
prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1); // Show the previous slide
  resetAutoSlide(); // Restart auto sliding
  reanimateContent(); // Trigger reanimation
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1); // Show the next slide
  resetAutoSlide(); // Restart auto sliding
  reanimateContent(); // Trigger reanimation
});

// Updated indicator click handler
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    resetAutoSlide(); // Restart auto sliding
    reanimateContent(); // Trigger reanimation
  });
});


// Select the content container
const contentContainer = document.querySelector('.content-container');

// Function to trigger content animation after slide
function triggerContentAnimation() {
  setTimeout(() => {
    contentContainer.classList.add('content-appear'); // Add animation class
  }, 1500); // Adjust the delay to sync with image slide
}

// Call the function after the first slide transition
slider.addEventListener('transitionend', () => {
  triggerContentAnimation();
});

// Optional: Ensure animation runs on page load
window.addEventListener('load', () => {
  triggerContentAnimation();
});

// Function to handle content reanimation
function reanimateContent() {
  contentContainer.classList.remove('content-appear'); // Remove animation class
  setTimeout(() => {
    contentContainer.classList.add('content-appear'); // Reapply animation class
  }, 1500); // Short delay to allow reanimation
}

// Trigger reanimation on slide transition
slider.addEventListener('transitionend', () => {
  reanimateContent(); // Reanimate content after each slide
});

// Optional: Ensure it runs on page load for the first slide
window.addEventListener('load', () => {
  setTimeout(() => {
    contentContainer.classList.add('content-appear'); // Trigger animation on load
  }, 9000); // Delay to sync with initial image slide
});



const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
  const animate = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace('+', '');
    const increment = target / 200; // Adjusted for smoother animation

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}+`;
      setTimeout(animate, 25); // Slower interval for smoother animation
    } else {
      counter.innerText = `${target}+`;
    }
  };

  animate();
});

const testimonials = [
  {
      text: "Toplife Construction provided exceptional service. Highly recommended! Toplife Construction provided exceptional service. Highly recommended! Toplife Construction provided exceptional service. Highly recommended!",
      client: "Sarah Mwale"
  },
  {
      text: "Professional, timely, and reliable. Great experience!",
      client: "James Banda"
  },
  {
      text: "Their work exceeded our expectations. Would hire again!",
      client: "Chanda Mutale"
  }
];

let currentIndex = 0;
const textElement = document.querySelector(".testimonial-text");
const clientElement = document.querySelector(".client-name"); // Corrected to target .client-name
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateTestimonial(index) {
  // Fade out before changing content
  textElement.style.opacity = 0;
  clientElement.style.opacity = 0;

  setTimeout(() => {
      textElement.textContent = `"${testimonials[index].text}"`;
      clientElement.textContent = testimonials[index].client;

      // Fade back in
      textElement.style.opacity = 1;
      clientElement.style.opacity = 1;
  }, 400); // Delay change slightly for smoother effect
}


prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonial(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  updateTestimonial(currentIndex);
});









