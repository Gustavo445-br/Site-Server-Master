// Função para mostrar a seção selecionada
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção selecionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Fecha o menu mobile
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    // Fecha o dropdown de servidores
    const dropdown = document.getElementById('serverDropdown');
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para alternar o dropdown de servidores
function toggleServerDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('serverDropdown');
    dropdown.classList.toggle('active');
}

// Toggle do menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Fecha o menu quando clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Define a primeira seção como ativa por padrão
    const firstSection = document.getElementById('discord');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    // Fecha dropdown ao clicar fora
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('serverDropdown');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdown && dropdownToggle && !event.target.closest('.nav-dropdown')) {
            dropdown.classList.remove('active');
        }
    });
});


// Fecha o menu mobile quando clicar fora dele
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');

    if (navMenu && menuToggle && !navbar.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
