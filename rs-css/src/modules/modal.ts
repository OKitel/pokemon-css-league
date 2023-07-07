import pikachuImage from '../assets/pikachu.png';

const text1 =
    "Dive into the world of Pokemon and sharpen your web styling abilities in an exciting new way. With this immersive simulator, you'll embark on a breath-catching journey where your CSS selectors are your ultimate Pokemon-catching tools!";
const text2 = 'Are you ready to take your CSS selector skills to the next level?';

// eslint-disable-next-line max-lines-per-function
const createModal = (): HTMLElement => {
    const overlayModalDiv = document.createElement('div');
    overlayModalDiv.className = 'overlay-modal';
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';
    const modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';
    const link = document.createElement('a');
    link.className = 'header__link';
    link.href = 'https://www.pokemon.com/us';
    link.target = '_blank';
    const headerLogoDiv = document.createElement('div');
    headerLogoDiv.className = 'header__logo';
    link.appendChild(headerLogoDiv);
    const modalContentImageDiv = document.createElement('div');
    modalContentImageDiv.className = 'modal-content__image';
    const modalImage = document.createElement('img');
    modalImage.src = pikachuImage as string;
    modalContentImageDiv.appendChild(modalImage);
    const modalContentInfoDiv = document.createElement('div');
    modalContentInfoDiv.className = 'modal-content__info';
    const modalContentInfoTitle = document.createElement('h3');
    modalContentInfoTitle.className = 'modal-content__info-title';
    modalContentInfoTitle.textContent = '🔥 Calling all aspiring trainers and CSS enthusiasts! 🔥';
    const modalContentInfoText1 = document.createElement('h4');
    modalContentInfoText1.className = 'modal-content__info-text';
    modalContentInfoText1.textContent = text1;
    const modalContentInfoText2 = document.createElement('h4');
    modalContentInfoText2.className = 'modal-content__info-text';
    modalContentInfoText2.textContent = text2;
    const modalBtnContainerDiv = document.createElement('div');
    modalBtnContainerDiv.className = 'modal-btn-container';
    const modalBtn = document.createElement('button');
    modalBtn.className = 'modal-btn';
    modalBtn.textContent = 'Start your adventure now!';
    modalBtn.addEventListener('click', () => {
        localStorage.setItem('start', 'read');
    });
    modalBtnContainerDiv.appendChild(modalBtn);
    modalContentInfoDiv.appendChild(modalContentInfoTitle);
    modalContentInfoDiv.appendChild(modalContentInfoText1);
    modalContentInfoDiv.appendChild(modalContentInfoText2);
    modalContentInfoDiv.appendChild(modalBtnContainerDiv);
    modalContentDiv.appendChild(link);
    modalContentDiv.appendChild(modalContentImageDiv);
    modalContentDiv.appendChild(modalContentInfoDiv);
    modalDiv.appendChild(modalContentDiv);
    overlayModalDiv.appendChild(modalDiv);
    return overlayModalDiv;
};

const initModal = (): void => {
    const root = document.getElementById('root');
    if (root) root.appendChild(createModal());
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
