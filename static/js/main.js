'use strict';

// Importa as funções de inicialização dos seus respectivos módulos.
// O caminho deve ser relativo ao arquivo main.js
import { initSidebar } from './ui/sidebar.js';
import { initGradeConverter } from './core/gradeConverter.js';
import { initGallery } from './ui/gallery.js';

/**
 * Adiciona os event listeners principais após o carregamento do DOM.
 * Este é o ponto de entrada de todo o JavaScript do site.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Guia de Escalada RN - Módulos carregados.');

    // Inicializa cada módulo importado
    initSidebar();
    initGradeConverter();
    initGallery();
});