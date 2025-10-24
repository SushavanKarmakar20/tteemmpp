// Data Configuration
const serviceLinks = [
    {
        title: 'Service Desk Portal',
        description: 'Create and manage support tickets for technical issues and incidents',
        url: 'https://servicedesk.example.com'
    },
    {
        title: 'Incident Management',
        description: 'Report and track critical incidents and outages in real-time',
        url: 'https://incidents.example.com'
    },
    {
        title: 'Change Request System',
        description: 'Submit and approve change requests for production environments',
        url: 'https://changes.example.com'
    },
    {
        title: 'Problem Management',
        description: 'Track and resolve underlying problems causing incidents',
        url: 'https://problems.example.com'
    }
];

const azureLinks = [
    {
        title: 'Azure Portal',
        description: 'Access Azure cloud services, resources, and management tools',
        url: 'https://portal.azure.com'
    },
    {
        title: 'Azure DevOps',
        description: 'Manage DevOps pipelines, builds, and deployment processes',
        url: 'https://dev.azure.com'
    },
    {
        title: 'Azure Monitor',
        description: 'Monitor application performance and infrastructure health',
        url: 'https://portal.azure.com/#blade/Microsoft_Azure_Monitoring'
    }
];

const wikiLinks = [
    {
        title: 'Confluence Wiki',
        description: 'Team documentation, meeting notes, and knowledge base articles',
        url: 'https://confluence.example.com'
    },
    {
        title: 'Technical Wiki',
        description: 'API documentation, architecture diagrams, and technical guides',
        url: 'https://wiki.example.com'
    },
    {
        title: 'SharePoint Docs',
        description: 'Company policies, procedural documents, and templates',
        url: 'https://sharepoint.example.com'
    },
    {
        title: 'API Documentation',
        description: 'REST API endpoints, request/response examples, and integration guides',
        url: 'https://api-docs.example.com'
    }
];

const otherLinks = [
    {
        title: 'Team Calendar',
        description: 'View team schedules, meetings, and important events',
        url: 'https://calendar.example.com'
    },
    {
        title: 'Time Tracking',
        description: 'Log work hours, track project time, and submit timesheets',
        url: 'https://timesheet.example.com'
    },
    {
        title: 'HR Portal',
        description: 'Employee benefits, leave requests, and HR resources',
        url: 'https://hr.example.com'
    }
];

// Create Card Element
function createCard(cardData, index) {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-content">
            <h3 class="card-title">${cardData.title}</h3>
            <p class="card-description">${cardData.description}</p>
        </div>
        <div class="card-arrow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.open(cardData.url, '_blank');
    });
    
    return card;
}

// Render Cards
function renderCards(container, cardsData) {
    container.innerHTML = '';
    cardsData.forEach((cardData, index) => {
        const card = createCard(cardData, index);
        container.appendChild(card);
    });
}

// Generate Project Links
function generateProjectLinks(team, searchQuery = '') {
    if (!team) return [];
    
    const query = searchQuery.toLowerCase();
    const teamLower = team.toLowerCase();
    
    if (query && !teamLower.includes(query)) {
        return [];
    }
    
    return [
        {
            title: `${team} - ADO Pipeline`,
            description: `Azure DevOps CI/CD pipeline for ${team} team projects and deployments`,
            url: `https://dev.azure.com/${teamLower}/pipeline`
        },
        {
            title: `${team} - GitHub Repository`,
            description: `Source code repository and version control for ${team} team`,
            url: `https://github.com/company/${teamLower}`
        }
    ];
}

// Update Project Cards
function updateProjectCards() {
    const teamSelect = document.getElementById('teamSelect');
    const searchInput = document.getElementById('searchInput');
    const projectCards = document.getElementById('projectCards');
    
    const selectedTeam = teamSelect.value;
    const searchQuery = searchInput.value;
    
    if (!selectedTeam) {
        projectCards.innerHTML = '<p class="info-message">Please select a team to view project links</p>';
        return;
    }
    
    const projectLinks = generateProjectLinks(selectedTeam, searchQuery);
    
    if (projectLinks.length === 0) {
        projectCards.innerHTML = '<p class="no-results">No projects found matching your search criteria</p>';
        return;
    }
    
    renderCards(projectCards, projectLinks);
}

// Navigate to Category
function navigateToCategory(category) {
    // Hide all sections
    document.querySelectorAll('.welcome-section, .content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    if (category === 'home') {
        document.getElementById('home').classList.add('active');
    } else {
        document.getElementById(category).classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Application
function init() {
    // Render static sections
    renderCards(document.getElementById('serviceCards'), serviceLinks);
    renderCards(document.getElementById('azureCards'), azureLinks);
    renderCards(document.getElementById('wikiCards'), wikiLinks);
    renderCards(document.getElementById('otherCards'), otherLinks);
    
    // Setup project links event listeners
    const teamSelect = document.getElementById('teamSelect');
    const searchInput = document.getElementById('searchInput');
    
    teamSelect.addEventListener('change', updateProjectCards);
    searchInput.addEventListener('input', updateProjectCards);
    
    // Category card navigation
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
    
    // Nav link navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
    
    // Back button navigation
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateToCategory('home');
        });
    });
    
    // Show home section by default
    navigateToCategory('home');
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
