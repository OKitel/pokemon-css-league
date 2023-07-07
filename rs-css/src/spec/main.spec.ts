import createMainView from '../modules/main';

describe('test main module', () => {
    beforeAll(() => createMainView());

    it('check css editor to be defined', () => {
        const cssEditor = document.querySelector('.css-editor');
        expect(cssEditor).toBeDefined();
    });

    it('check html viewer to be defined', () => {
        const htmlViewer = document.querySelector('.html-viewer');
        expect(htmlViewer).toBeDefined();
    });

    it('check pokemons container to be defined', () => {
        const pokemons = document.querySelector('.pokemons');
        expect(pokemons).toBeDefined();
    });
});
