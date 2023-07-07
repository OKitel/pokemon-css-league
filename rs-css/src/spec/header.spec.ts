/**
 * @jest-environment jsdom
 */
import { createHeaderView } from '../modules/header';

describe('test header module', () => {
    beforeAll(() => createHeaderView());

    it('check header component to be defined', () => {
        const header = document.querySelector('.header');
        expect(header).toBeDefined();
    });

    it('check burger menu component to be defined', () => {
        const burger = document.querySelector('.burger');
        expect(burger).toBeDefined();
    });

    it('check title in the header to match CSS League', () => {
        const title = document.querySelector('.header__title');
        if (title) {
            expect(title.textContent).toMatch(/CSS League/);
        }
    });
});
