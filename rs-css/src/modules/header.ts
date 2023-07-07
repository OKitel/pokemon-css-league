export const createLogoWithLink = (): HTMLElement => {
    const link = document.createElement('a');
    link.className = 'header__link';
    link.href = 'https://www.pokemon.com/us';
    link.target = '_blank';

    const logo = document.createElement('div');
    logo.className = 'header__logo';

    link.appendChild(logo);
    return link;
};

const createHeaderView = (): HTMLElement => {
    const header = document.createElement('header');
    header.className = 'header';

    const link = createLogoWithLink();

    const title = document.createElement('h1');
    title.className = 'header__title';
    title.textContent = 'CSS League';

    const burger = document.createElement('div');
    burger.className = 'burger';

    for (let i = 0; i < 3; i += 1) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        burger.appendChild(bar);
    }

    header.appendChild(link);
    header.appendChild(title);
    header.appendChild(burger);

    return header;
};

export default createHeaderView;
