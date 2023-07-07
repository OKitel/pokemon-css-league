import { createMenu } from '../modules/menu';

describe('test menu module', () => {
    beforeAll(() => createMenu());

    it('check menu module to be defined', () => {
        const menu = document.querySelector('.menu-container');
        expect(menu).toBeDefined();
    });
});
