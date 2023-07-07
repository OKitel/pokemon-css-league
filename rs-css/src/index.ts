import './sass/styles.scss';
import initMenu from './modules/menu';
import initModal from './modules/modal';
import createHeaderView from './modules/header';
import createFooterView from './modules/footer';
import createMainView from './modules/main';
import { getCurrentLevel } from './modules/level';
import render from './modules/render';

const createView = (): void => {
    const root = document.getElementById('root');

    const container = document.createElement('div');
    container.classList.add('container');

    const header = createHeaderView();
    container.appendChild(header);

    const main = createMainView();
    const footer = createFooterView();

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
