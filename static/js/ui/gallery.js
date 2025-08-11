'use strict';

/**
 * Inicializa a funcionalidade da galeria de imagens com visualização em modal.
 */
function initGallery() {
    const gallery = document.querySelector('.photo-gallery');
    if (!gallery) return; // Sai se não houver galeria na página

    console.log('Módulo Galeria de Imagens inicializado.');

    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal || !modalImg || !closeBtn) {
        console.error('Elementos do modal não encontrados. A galeria não funcionará.');
        return;
    }

    const galleryImages = gallery.querySelectorAll('img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fecha o modal ao pressionar a tecla 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

export { initGallery };