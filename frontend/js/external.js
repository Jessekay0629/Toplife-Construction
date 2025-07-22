/*============================== FAQ page ==========================================*/

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/*============================== Home page (Navigation Bar - Responsive) | Dropdown Feature ==============*/

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-phone");
  const hiddenPhone = document.getElementById("hidden-phone");

  toggleBtn.addEventListener("click", function () {
      if (hiddenPhone.style.display === "none" || hiddenPhone.style.display === "") {
          hiddenPhone.style.display = "flex";
          toggleBtn.innerHTML = '<i class="las la-angle-up"></i>';
      } else {
          hiddenPhone.style.display = "none";
          toggleBtn.innerHTML = '<i class="las la-angle-down"></i>';
      }
  });
});


/*======================================================================================================*/

