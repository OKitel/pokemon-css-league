import initModal from '../modules/modal';

describe('test modal module', () => {
    beforeAll(() => initModal());

    it('check modal component to be defined', () => {
        const modal = document.querySelector('.modal');
        expect(modal).toBeDefined();
    });

    it('check modal info to match string', () => {
        const modalInfoTitle = document.querySelector('.modal-content__info-title');
        const info = '🔥 Calling all aspiring trainers and CSS enthusiasts! 🔥';
        if (modalInfoTitle) {
            expect(modalInfoTitle.textContent).toMatch(info);
        }
    });
});
