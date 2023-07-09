import { APP_DESCRIPTION, APP_INVITE_TEXT, APP_MODAL_TITLE } from '../consts';
import pikachuImage from '../assets/pikachu.png';
import { createLogoWithLink } from './header';

const createModalContentInfo = (): HTMLElement => {
    const modalContentInfoDiv: HTMLDivElement = document.createElement('div');
    modalContentInfoDiv.className = 'modal-content__info';

    const modalContentInfoTitle: HTMLHeadingElement = document.createElement('h3');
    modalContentInfoTitle.className = 'modal-content__info-title';
    modalContentInfoTitle.textContent = APP_MODAL_TITLE;

    const modalContentInfoText1: HTMLHeadingElement = document.createElement('h4');
    modalContentInfoText1.className = 'modal-content__info-text';
    modalContentInfoText1.textContent = APP_DESCRIPTION;

    const modalContentInfoText2: HTMLHeadingElement = document.createElement('h4');
    modalContentInfoText2.className = 'modal-content__info-text';
    modalContentInfoText2.textContent = APP_INVITE_TEXT;

    const modalBtnContainerDiv: HTMLDivElement = document.createElement('div');
    modalBtnContainerDiv.className = 'modal-btn-container';

    const modalBtn: HTMLButtonElement = document.createElement('button');
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

    return modalContentInfoDiv;
};

const createModalView = (): HTMLElement => {
    const overlayModalDiv: HTMLDivElement = document.createElement('div');
    overlayModalDiv.className = 'overlay-modal';

    const modalDiv: HTMLDivElement = document.createElement('div');
    modalDiv.className = 'modal';

    const modalContentDiv: HTMLDivElement = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    const link: HTMLElement = createLogoWithLink();

    const modalContentImageDiv: HTMLDivElement = document.createElement('div');
    modalContentImageDiv.className = 'modal-content__image';

    const modalImage: HTMLImageElement = document.createElement('img');
    modalImage.src = pikachuImage as string;

    modalContentImageDiv.appendChild(modalImage);

    const modalContentInfoDiv: HTMLElement = createModalContentInfo();

    modalContentDiv.appendChild(link);
    modalContentDiv.appendChild(modalContentImageDiv);
    modalContentDiv.appendChild(modalContentInfoDiv);

    modalDiv.appendChild(modalContentDiv);

    overlayModalDiv.appendChild(modalDiv);

    return overlayModalDiv;
};

const initModal = (): void => {
    const root: HTMLElement | null = document.getElementById('root');

    if (root) root.appendChild(createModalView());

    const { body } = document;
    const modalBtn = document.querySelector('.modal-btn') as HTMLButtonElement;
    const modal = document.querySelector('.overlay-modal') as HTMLDivElement;
    const modalCont: Element | null = document.querySelector('.modal-content');

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
            const isClickOnModalBtn: boolean = clickedElement === modalBtn;

            if (isClickOutsideOfModal || isClickOnModalBtn) {
                closeModal();
            }
        };

        if (modalBtn) modalBtn.addEventListener('click', handleModal);
        if (modal) modal.addEventListener('click', handleModal);
    }
};
export default initModal;
