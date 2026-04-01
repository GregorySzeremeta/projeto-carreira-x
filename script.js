// Variáveis globais
let filteredCareers = [...careers];
let currentCategory = 'Todas';
let searchTerm = '';

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    renderCareers();
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value.toLowerCase();
        filterCareers();
    });

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current category
            currentCategory = this.dataset.category;
            filterCareers();
        });
    });
}

// Filtrar profissões
function filterCareers() {
    filteredCareers = careers.filter(career => {
        // Filtro de busca
        const matchesSearch = 
            career.title.toLowerCase().includes(searchTerm) ||
            career.description.toLowerCase().includes(searchTerm) ||
            career.skills.some(skill => skill.toLowerCase().includes(searchTerm));

        // Filtro de categoria
        const matchesCategory = 
            currentCategory === 'Todas' || career.category === currentCategory;

        return matchesSearch && matchesCategory;
    });

    renderCareers();
}

// Renderizar profissões
function renderCareers() {
    const careersGrid = document.getElementById('careersGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    if (filteredCareers.length === 0) {
        careersGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.style.display = 'none';
    } else {
        careersGrid.style.display = 'grid';
        noResults.style.display = 'none';
        resultsCount.style.display = 'block';
        
        // Atualizar contador
        const count = filteredCareers.length;
        resultsCount.textContent = `${count} ${count === 1 ? 'profissão encontrada' : 'profissões encontradas'}`;
        
        // Renderizar cards
        careersGrid.innerHTML = filteredCareers.map(career => createCareerCard(career)).join('');
    }
}

// Criar card de profissão
function createCareerCard(career) {
    return `
        <a href="detalhes.html?id=${career.id}" class="career-card">
            <div class="card-image-container">
                <img src="${career.image}" alt="${career.title}" class="card-image">
                <span class="card-badge">${career.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${career.title}</h3>
                <p class="card-description">${career.description}</p>
                <div class="card-info">
                    <div class="info-item">
                        <svg class="info-icon salary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span>${career.salary}</span>
                    </div>
                    <div class="info-item">
                        <svg class="info-icon market" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        <span>${career.marketOutlook}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}
