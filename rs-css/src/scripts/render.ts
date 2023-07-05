import { Level } from '../types/level';
import Pokemon from '../types/pokemon';
import { initCssEditor, initHtmlEditor } from './editor';

const renderTitle = (level: Level): void => {
    const title = document.querySelector('.task-title');
    if (title instanceof HTMLElement) {
        title.innerText = level.title;
    } else {
        const main = document.querySelector('.main');
        const levelTitle = document.createElement('h2');
        levelTitle.className = 'task-title';
        levelTitle.innerText = level.title;
        if (main) {
            main.prepend(levelTitle);
        }
    }
};

const renderCssViewer = (): void => {
    const editorField = document.querySelector<HTMLElement>('.editor');
    if (editorField) {
        const cssEditorField = document.querySelector('.css-viewer__container');
        if (cssEditorField instanceof HTMLElement) {
            cssEditorField.innerHTML = '';
            initCssEditor(cssEditorField);
        }
    }
};

const renderHtmlViewer = (level: Level): void => {
    const htmlViewerField = document.querySelector('.html-viewer__container');
    if (htmlViewerField instanceof HTMLElement) {
        htmlViewerField.innerHTML = '';
        initHtmlEditor(htmlViewerField, level.html);
    }
};

const renderPokemons = (level: Level): void => {
    const pokemonsField = document.querySelector('.pokemons');
    const correctPokemonIds = level.correctAnswers.flatMap((ans) => ans.pokemons.map((p) => p.id));
    if (pokemonsField) {
        pokemonsField.innerHTML = '';
        const { pokemons } = level;
        pokemons.forEach((p: Pokemon) => {
            const pImg = document.createElement('img');
            pImg.src = p.src;
            pImg.classList.add('pokemon');

            if (correctPokemonIds.includes(p.id)) {
                pImg.classList.add('active-image');
                if (p.attrClass) {
                    pImg.classList.add('tiny');
                }
            }
            pokemonsField.appendChild(pImg);
        });
    }
};

const render = (level: Level): void => {
    renderTitle(level);
    renderCssViewer();
    renderHtmlViewer(level);
    renderPokemons(level);
};

export default render;
