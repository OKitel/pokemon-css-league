const createPokeballView = (): HTMLElement => {
    const container: HTMLDivElement = document.createElement('div');
    container.className = 'pokeball__container';

    const pokeball: HTMLDivElement = document.createElement('div');
    pokeball.className = 'pokeball';

    const pokeballButton: HTMLDivElement = document.createElement('div');
    pokeballButton.className = 'pokeball__button';

    pokeball.appendChild(pokeballButton);

    container.appendChild(pokeball);

    return container;
};

export default createPokeballView;
