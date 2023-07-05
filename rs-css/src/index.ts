import './sass/styles.scss';
import initMenu from './scripts/menu';
import initModal from './scripts/modal';
import createHeader from './scripts/header';
import createFooter from './scripts/footer';
import createMain from './scripts/main';
import { getCurrentLevel } from './scripts/level';
import render from './scripts/render';

const createView = (): void => {
    const root = document.getElementById('root');

    const container = document.createElement('div');
    container.classList.add('container');

    const header = createHeader();
    container.appendChild(header);

    const main = createMain();
    const footer = createFooter();

    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background';
    backgroundContainer.appendChild(main);
    backgroundContainer.appendChild(footer);
    container.appendChild(backgroundContainer);
    if (root) {
        root.appendChild(container);
    }

    initMenu();
    if (localStorage.getItem('start') !== 'read') {
        initModal();
    }
};

createView();

const currentLevel = getCurrentLevel();

render(currentLevel);
