import { POKEMON_COM_LINK } from '../consts';

export const createLogoWithLink = (): HTMLElement => {
    const link: HTMLAnchorElement = document.createElement('a');
    link.className = 'header__link';
    link.href = POKEMON_COM_LINK;
    link.target = '_blank';

    const logo: HTMLDivElement = document.createElement('div');
    logo.className = 'header__logo';

    link.appendChild(logo);
    return link;
};

export const createHeaderView = (): HTMLElement => {
    const header: HTMLElement = document.createElement('header');
    header.className = 'header';

    const link: HTMLElement = createLogoWithLink();

    const title: HTMLHeadingElement = document.createElement('h1');
    title.className = 'header__title';
    title.textContent = 'CSS League';

    const burger: HTMLDivElement = document.createElement('div');
    burger.className = 'burger';

    for (let i = 0; i < 3; i += 1) {
        const bar: HTMLDivElement = document.createElement('div');
        bar.className = 'bar';
        burger.appendChild(bar);
    }

    header.appendChild(link);
    header.appendChild(title);
    header.appendChild(burger);

    return header;
};
