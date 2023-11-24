// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {name: "Wayne Barnett", role: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg" },
    {name: "Angela Caroll", role: "Chief Editor", photo: "angela-caroll-chief-editor.jpg" },
    {name: "Walter Gordon", role: "Office Manager", photo: "walter-gordon-office-manager.jpg" },
    {name: "Angela Lopez", role: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg" },
    {name: "Scott Estrada", role: "Developer", photo: "scott-estrada-developer.jpg" },
    {name: "Barbara Ramos", role: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg" },		
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
        
    const containerEl = document.querySelector("section.team-members-wrapper");
    const teamCardEl = document.createElement("article");
    teamCardEl.classList.add("card");
    teamCardEl.innerHTML = 
    `
    <div class="name">${teamMember.name}</div>
    <div class="role">${teamMember.role}</div>
    <img src="./img/${teamMember.photo}" alt="team member photo">
    `
    containerEl.appendChild(teamCardEl);
}
