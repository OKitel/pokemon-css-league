import { levels, setLevel } from './level';

const MARK_EMOJI = '✔️';

export const createUl = (): HTMLElement => {
    const ul: HTMLUListElement = document.createElement('ul');
    ul.className = 'nav-links menu';

    levels.forEach(({ menuTitle }, index) => {
        const li: HTMLLIElement = document.createElement('li');
        const a: HTMLAnchorElement = document.createElement('a');
        a.className = 'nav-links__item';
        const done = !!localStorage.getItem(`level ${index}`);
        const mark: string = done ? MARK_EMOJI : '';
        a.textContent = `${menuTitle} ${mark}`;
        a.addEventListener('click', () => {
            setLevel(index);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    return ul;
};

export const createMenu = (): HTMLElement => {
    const overlayDiv: HTMLDivElement = document.createElement('div');
    overlayDiv.className = 'overlay';
    const menuContainerDiv: HTMLDivElement = document.createElement('div');
    menuContainerDiv.className = 'menu-container';
    const nav: HTMLElement = document.createElement('nav');
    const h3: HTMLHeadingElement = document.createElement('h3');
    h3.className = 'menu-title';
    h3.textContent = 'Choose a level';
    const ul: HTMLElement = createUl();
    nav.appendChild(h3);
    nav.appendChild(ul);
    menuContainerDiv.appendChild(nav);
    const resetBtn: HTMLButtonElement = document.createElement('button');
    resetBtn.textContent = 'Reset progress';
    resetBtn.className = 'reset-btn';
    resetBtn.addEventListener('click', () => {
        localStorage.clear();
        setLevel(0);
    });
    menuContainerDiv.appendChild(resetBtn);
    overlayDiv.appendChild(menuContainerDiv);
    return overlayDiv;
};

export const initMenu = (): void => {
    const root: HTMLElement | null = document.getElementById('root');
    if (root) root.appendChild(createMenu());
    const { body } = document;
    const adaptMenu: HTMLElement | null = document.querySelector('.menu-container');
    const overlay = document.querySelector('.overlay') as HTMLDivElement;
    const burger = document.querySelector('.burger') as HTMLDivElement;
    if (adaptMenu) {
        const menuLinksArray = Array.from(adaptMenu.querySelectorAll('.nav-links__item'));
        const handleMenu = (event: MouseEvent): void => {
            const clickedElement = event.target as HTMLElement;
            if (clickedElement && burger && overlay) {
                const isClickOnBar: boolean = clickedElement.closest('.burger') === burger;
                const isClickOutsideOfAdaptMenu = !adaptMenu.contains(clickedElement);
                const isClickOnBurgerIcon: boolean = clickedElement === burger || isClickOnBar;
                if ((isClickOutsideOfAdaptMenu && !isClickOnBurgerIcon) || menuLinksArray.includes(clickedElement)) {
                    burger.classList.remove('active');
                    overlay.classList.remove('active');
                    adaptMenu.classList.remove('active');
                    body.classList.remove('body-overflow');
                }
                if (isClickOnBurgerIcon) {
                    burger.classList.toggle('active');
                    overlay.classList.toggle('active');
                    adaptMenu.classList.toggle('active');
                    body.classList.toggle('body-overflow');
                }
            }
        };
        if (burger) burger.addEventListener('click', handleMenu);
        if (overlay) overlay.addEventListener('click', handleMenu);
    }
};
