// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {name: "Wayne Barnett", role: "Founder & CEO", photo: "./img/wayne-barnett-founder-ceo.jpg" },
    {name: "Angela Caroll", role: "Chief Editor", photo: "./img/angela-caroll-chief-editor.jpg" },
    {name: "Walter Gordon", role: "Office Manager", photo: "./img/walter-gordon-office-manager.jpg" },
    {name: "Angela Lopez", role: "Social Media Manager", photo: "./img/angela-lopez-social-media-manager.jpg" },
    {name: "Scott Estrada", role: "Developer", photo: "./img/scott-estrada-developer.jpg" },
    {name: "Barbara Ramos", role: "Graphic Designer", photo: "./img/barbara-ramos-graphic-designer.jpg" },		
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
        
    const containerEl = document.querySelector("section.team-members-wrapper");
    const teamCardEl = document.createElement("article");
    teamCardEl.innerHTML = 
    `
    <div class="name">${teamMember.name}</div>
    <div class="role">${teamMember.role}</div>
    <div class="photo">${teamMember.photo}</div>
    `
    containerEl.appendChild(teamCardEl);
}