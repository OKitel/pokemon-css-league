const initMenu = (): void => {
    const { body } = document;
    const adaptMenu = document.querySelector('.menu-container');
    const overlay = document.querySelector('.overlay') as HTMLDivElement;
    const burger = document.querySelector('.burger') as HTMLDivElement;
    if (adaptMenu) {
        const menuLinks = adaptMenu.querySelectorAll('.nav-links__item');
        let activeLink = adaptMenu.querySelector('.nav-links__item-active');
        const menuLinksArray = Array.from(adaptMenu.querySelectorAll('.nav-links__item'));
        const handleMenu = (event: MouseEvent): void => {
            const clickedElement = event.target as HTMLElement;
            if (clickedElement && burger && overlay) {
                const isClickOnBar = clickedElement.closest('.burger') === burger;
                const isClickOutsideOfAdaptMenu = !adaptMenu.contains(clickedElement);
                const isClickOnBurgerIcon = clickedElement === burger || isClickOnBar;
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
            menuLinks.forEach((link) => {
                link.addEventListener('click', () => {
                    if (activeLink) activeLink.classList.remove('nav-links__item-active');
                    link.classList.add('nav-links__item-active');
                    activeLink = link;
                });
            });
        };
        if (burger) burger.addEventListener('click', handleMenu);
        if (overlay) overlay.addEventListener('click', handleMenu);
    }
};

export default initMenu;
