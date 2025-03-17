/*============================== About us page | Team members ==========================================*/

document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        { name: "Dominic Zimba", position: "Founder & C.E.O", image: "assets/images/a.jpeg" },
        { name: "Clementine Chimutonya", position: "Administrative Assistant", image: "assets/images/b.jpeg" },
        { name: "Tikha Phiri", position: "Marketing Officer", image: "assets/images/c.jpeg" },
        { name: "Nachilila Nakamba", position: "Marketing Manager", image: "assets/images/d.jpeg" },
        { name: "Clementine Chimutonya", position: "Administrative Assistant", image: "assets/images/z.jpg" },
        { name: "Tikha Phiri", position: "Marketing Officer", image: "assets/images/z.jpg" }
        
    ];

    const teamContainer = document.getElementById("team-container");

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.position}</p>
        `;

        teamContainer.appendChild(memberDiv);
    });
});

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

