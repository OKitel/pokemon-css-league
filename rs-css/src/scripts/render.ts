import { Level } from '../types/level';
import Pokemon from '../types/pokemon';
import { initHtmlEditor } from './editor';

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
    console.log(correctPokemonIds, 'correct');
    if (pokemonsField) {
        pokemonsField.innerHTML = '';
        const { pokemons } = level;
        console.log(level, 'level', pokemons, 'pokemons');
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

export default render;