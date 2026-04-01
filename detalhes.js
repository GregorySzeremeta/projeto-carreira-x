// Obter parâmetro da URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Carregar detalhes da profissão
document.addEventListener('DOMContentLoaded', function() {
    const careerId = getUrlParameter('id');
    
    if (!careerId) {
        window.location.href = 'index.html';
        return;
    }

    const career = careers.find(c => c.id === careerId);
    
    if (!career) {
        window.location.href = 'index.html';
        return;
    }

    renderCareerDetails(career);
});

// Renderizar detalhes da profissão
function renderCareerDetails(career) {
    // Hero image
    document.getElementById('heroImg').src = career.image;
    document.getElementById('heroImg').alt = career.title;
    document.getElementById('categoryBadge').textContent = career.category;
    document.getElementById('careerTitle').textContent = career.title;

    // Info cards
    document.getElementById('salaryValue').textContent = career.salary;
    document.getElementById('marketValue').textContent = career.marketOutlook;
    document.getElementById('educationValue').textContent = career.education;

    // Description
    document.getElementById('descriptionText').textContent = career.detailedDescription;

    // Responsibilities
    const responsibilitiesList = document.getElementById('responsibilitiesList');
    responsibilitiesList.innerHTML = career.responsibilities.map(responsibility => `
        <li class="responsibility-item">
            <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${responsibility}</span>
        </li>
    `).join('');

    // Pros
    const prosList = document.getElementById('prosList');
    prosList.innerHTML = career.pros.map(pro => `
        <li>
            <span class="bullet green">•</span>
            <span>${pro}</span>
        </li>
    `).join('');

    // Cons
    const consList = document.getElementById('consList');
    consList.innerHTML = career.cons.map(con => `
        <li>
            <span class="bullet red">•</span>
            <span>${con}</span>
        </li>
    `).join('');

    // Skills
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = career.skills.map(skill => `
        <span class="skill-badge">${skill}</span>
    `).join('');

    // Education detail
    document.getElementById('educationDetail').textContent = career.education;

    // Update page title
    document.title = `${career.title} - Carreira X`;
}
