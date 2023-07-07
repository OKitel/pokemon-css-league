const createPokeballView = (): HTMLElement => {
    const container = document.createElement('div');
    container.className = 'pokeball__container';

    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball';

    const pokeballButton = document.createElement('div');
    pokeballButton.className = 'pokeball__button';

    pokeball.appendChild(pokeballButton);

    container.appendChild(pokeball);

    return container;
};

export default createPokeballView;
