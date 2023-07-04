import './sass/styles.scss';
import { Level, LevelJson } from './types/level';
import Pokemon from './types/pokemon';
import { Answer } from './types/answer';
import { initCssEditor, initHtmlEditor } from './scripts/editor';
import initMenu from './scripts/menu';
import initModal from './scripts/modal';
import * as dataBase from './levels.json';
import { getPokemonsByIds } from './repo/pokemonRepository';
import createHeader from './scripts/header';
import createFooter from './scripts/footer';
import createMain from './scripts/main';

interface LevelsData {
    levels: LevelJson[];
}

alert(
    'Уважаемые проверяющие! Я еще активно доделываю работу, поэтому буду очень признателна, если вы проверите мою работу не ранее 05.07.2023'
);

const jsonData = dataBase as LevelsData;

const createLevels = (data: LevelsData): Level[] => {
    return data.levels.map((level) => {
        const pokemonsters: Pokemon[] = getPokemonsByIds(level.pokemons);
        const corAns: Answer[] = level.correctAnswers.map(({ css, pokemons }) => ({
            css,
            pokemons: getPokemonsByIds(pokemons),
        }));
        const wrongAns: Answer[] | undefined = level.wrongAnswers?.map(({ css, pokemons }) => ({
            css,
            pokemons: getPokemonsByIds(pokemons),
        }));
        return { ...level, pokemons: pokemonsters, correctAnswers: corAns, wrongAnswers: wrongAns };
    });
};

const levels = createLevels(jsonData);

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
    initModal();
};

createView();

const editorField = document.querySelector<HTMLElement>('.editor');
if (editorField) {
    const cssEditorField = document.getElementById('css-editor');
    if (cssEditorField) initCssEditor(cssEditorField);
}

const renderTitle = (level: Level): void => {
    const main = document.querySelector('.main');
    const levelTitle = document.createElement('h2');
    levelTitle.className = 'task-title';
    levelTitle.innerText = level.title;
    if (main) {
        main.prepend(levelTitle);
    }
};

const renderHtmlViewer = (level: Level): void => {
    const htmlViewerField = document.getElementById('html-viewer');
    if (htmlViewerField) initHtmlEditor(htmlViewerField, level.html);
};

const renderPokemons = (level: Level): void => {
    const pokemonsField = document.querySelector('.pokemons');
    const correctPokemonIds = level.correctAnswers.flatMap((ans) => ans.pokemons.map((p) => p.id));
    if (pokemonsField) {
        const { pokemons } = level;
        pokemons.forEach((p: Pokemon) => {
            const pImg = document.createElement('img');
            pImg.src = p.src;
            pImg.classList.add('pokemon');

            if (correctPokemonIds.includes(p.id)) {
                pImg.classList.add('active-image');
            }
            pokemonsField.appendChild(pImg);
        });
    }
};

const render = (level: Level): void => {
    renderTitle(level);
    renderHtmlViewer(level);
    renderPokemons(level);
};

render(levels[0]);
