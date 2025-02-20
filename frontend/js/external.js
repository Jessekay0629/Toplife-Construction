/*============================== About us page | Team members ==========================================*/

document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        { name: "John Doe", position: "Project Manager", image: "assets/images/1.jpg" },
        { name: "Jane Smith", position: "Lead Engineer", image: "assets/images/2.jpg" },
        { name: "Michael Brown", position: "Architect", image: "assets/images/2.jpg" }
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