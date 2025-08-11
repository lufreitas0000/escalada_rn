'use strict';

// Dados de conversão baseados na tabela da Wikipedia.
// Organizados para facilitar a busca.
const gradeChart = [
    { br: '3', usa: '5.2', fra: '3' },
    { br: '4', usa: '5.3', fra: '4a' },
    { br: '4sup', usa: '5.4', fra: '4b' },
    { br: '5', usa: '5.5', fra: '4c' },
    { br: '5sup', usa: '5.6', fra: '5a' },
    { br: '6', usa: '5.7', fra: '5b' },
    { br: '6sup', usa: '5.8', fra: '5c' },
    { br: '7a', usa: '5.9', fra: '6a' },
    { br: '7b', usa: '5.10a', fra: '6a+' },
    { br: '7c', usa: '5.10b/c', fra: '6b' },
    { br: '8a', usa: '5.10d', fra: '6b+' },
    { br: '8b', usa: '5.11a/b', fra: '6c' },
    { br: '8c', usa: '5.11c', fra: '6c+' },
    { br: '9a', usa: '5.11d', fra: '7a' },
    { br: '9b', usa: '5.12a/b', fra: '7a+' },
    { br: '9c', usa: '5.12c', fra: '7b' },
    { br: '10a', usa: '5.12d', fra: '7b+' },
    { br: '10b', usa: '5.13a', fra: '7c' },
    { br: '10c', usa: '5.13b', fra: '7c+' },
    { br: '11a', usa: '5.13c', fra: '8a' },
    { br: '11b', usa: '5.13d', fra: '8a+' },
    { br: '11c', usa: '5.14a', fra: '8b' },
    { br: '12a', usa: '5.14b', fra: '8b+' },
    { br: '12b', usa: '5.14c', fra: '8c' },
    { br: '12c', usa: '5.14d', fra: '8c+' },
    { br: '13a', usa: '5.15a', fra: '9a' }
];

/**
 * Converte todas as graduações na página para o sistema alvo.
 * @param {string} targetSystem - O sistema para o qual converter ('br', 'usa', 'fra').
 * @param {HTMLElement[]} gradeElements - A lista de elementos a serem convertidos.
 */
function convertGrades(targetSystem, gradeElements) {
    gradeElements.forEach(el => {
        const originalGrade = el.dataset.originalGrade;
        if (originalGrade.toLowerCase().startsWith('v')) {
            // Não converte graduação de boulder
            el.textContent = originalGrade;
            return;
        }

        const conversion = gradeChart.find(g => g.br === originalGrade);
        if (conversion && conversion[targetSystem]) {
            el.textContent = conversion[targetSystem];
        } else {
            // Se não encontrar, mantém a original
            el.textContent = originalGrade;
        }
    });
}

/**
 * Inicializa o conversor de graduação de escalada.
 */
function initGradeConverter() {
    const controls = document.querySelector('.grade-converter-controls');
    if (!controls) return; // Não faz nada se os controles não existirem na página

    console.log('Módulo Conversor de Graduação inicializado.');

    const buttons = {
        br: document.getElementById('btn-br'),
        usa: document.getElementById('btn-usa'),
        fra: document.getElementById('btn-fra'),
    };
    const gradeElements = document.querySelectorAll('.grade-value');
    
    if (gradeElements.length === 0) return;

    Object.entries(buttons).forEach(([system, button]) => {
        if(button) {
            button.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões
                Object.values(buttons).forEach(btn => btn?.classList.remove('active'));
                // Adiciona a classe 'active' ao botão clicado
                button.classList.add('active');
                // Converte as graduações
                convertGrades(system, Array.from(gradeElements));
            });
        }
    });
}

export { initGradeConverter };