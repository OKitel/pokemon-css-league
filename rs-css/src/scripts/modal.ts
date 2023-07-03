import pikachuImage from '../assets/pikachu.png';

const modalImageContainer = document.querySelector('.modal-content__image');
const modalImage = document.createElement('img');
modalImage.src = pikachuImage as string;
if (modalImageContainer) modalImageContainer.appendChild(modalImage);

const initModal = (): void => {
    const { body } = document;
    const modalBtn = document.querySelector('.modal-btn') as HTMLButtonElement;
    const modal = document.querySelector('.overlay-modal') as HTMLDivElement;
    const modalCont = document.querySelector('.modal-content');
    if (modal && body && modalCont) {
        const openModal = (): void => {
            modal.classList.add('active');
            body.classList.add('body-overflow');
        };
        openModal();
        const closeModal = (): void => {
            body.classList.remove('body-overflow');
            modal.classList.remove('active');
        };
        const handleModal = (event: MouseEvent): void => {
            const clickedElement = event.target as HTMLElement;
            const isClickOutsideOfModal = !modalCont.contains(clickedElement);
            const isClickOnModalBtn = clickedElement === modalBtn;
            if (isClickOutsideOfModal || isClickOnModalBtn) {
                closeModal();
            }
        };
        if (modalBtn) modalBtn.addEventListener('click', handleModal);
        if (modal) modal.addEventListener('click', handleModal);
    }
};
export default initModal;
