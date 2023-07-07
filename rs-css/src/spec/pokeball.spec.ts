import createPokeballView from '../modules/pokeball';

describe('test pokeball module', () => {
    beforeAll(() => createPokeballView());

    it('check pokeball to be defined', () => {
        const pokeball = document.querySelector('.pokeball');
        expect(pokeball).toBeDefined();
    });
});
