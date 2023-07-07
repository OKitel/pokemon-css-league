/**
 * @jest-environment jsdom
 */
import createFooterView from '../modules/footer';

describe('test footer module', () => {
    beforeAll(() => createFooterView());

    it('check footer component to be defined', () => {
        const footer = document.querySelector('.footer');
        expect(footer).toBeDefined();
    });

    it('check year in the footer to match 2023', () => {
        const year = document.querySelector('.footer__year');
        if (year) {
            expect(year.textContent).toMatch(/2023/);
        }
    });
});
