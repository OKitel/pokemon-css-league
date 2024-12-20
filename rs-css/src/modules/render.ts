import { Level } from '../types/level';
import Pokemon from '../types/pokemon';
import { initCssEditor, initHtmlEditor } from './editor';
import { createUl } from './menu';

type RenderFunctionWithLevel = <T extends Level>(level: T) => void;
type RenderFunction = () => void;

const renderTitle: RenderFunctionWithLevel = (level: Level): void => {
    const title: Element | null = document.querySelector('.task-title');
    if (title instanceof HTMLElement) {
        title.innerText = level.title;
    } else {
        const main: HTMLElement | null = document.querySelector('.main');
        const levelTitle: HTMLHeadingElement = document.createElement('h2');
        levelTitle.className = 'task-title';
        levelTitle.innerText = level.title;
        if (main) {
            main.prepend(levelTitle);
        }
    }
};

const renderCssViewer: RenderFunction = (): void => {
    const editorField: HTMLElement | null = document.querySelector<HTMLElement>('.editor');
    if (editorField) {
        const cssEditorField: HTMLElement | null = document.querySelector('.css-viewer__container');
        if (cssEditorField instanceof HTMLElement) {
            cssEditorField.innerHTML = '';
            initCssEditor(cssEditorField);
        }
    }
};

const renderHtmlViewer: RenderFunctionWithLevel = (level: Level): void => {
    const htmlViewerField: HTMLElement | null = document.querySelector('.html-viewer__container');
    if (htmlViewerField instanceof HTMLElement) {
        htmlViewerField.innerHTML = '';
        initHtmlEditor(htmlViewerField, level.html);
    }
};

const renderPokemons: RenderFunctionWithLevel = (level: Level): void => {
    const pokemonsField: HTMLElement | null = document.querySelector('.pokemons');
    const correctPokemonIds: number[] = level.correctAnswers.flatMap((ans) => ans.pokemons.map((p) => p.id));
    if (pokemonsField) {
        pokemonsField.innerHTML = '';
        const { pokemons } = level;
        pokemons.forEach((p: Pokemon) => {
            const pImg: HTMLImageElement = document.createElement('img');
            pImg.src = p.src;
            pImg.classList.add('pokemon');

            if (correctPokemonIds.includes(p.id)) {
                pImg.classList.add('active-image');
            }
            if (p.attrClass) {
                pImg.classList.add('tiny');
            }
            pokemonsField.appendChild(pImg);
        });
    }
};

const renderMenu: RenderFunction = (): void => {
    const navLinks: HTMLElement | null = document.querySelector('.nav-links');
    const ul: HTMLElement = createUl();
    if (navLinks) {
        const parent: HTMLElement | null = navLinks.parentElement;
        if (parent) {
            parent.replaceChild(ul, navLinks);
        }
    }
    const menuLinks: NodeListOf<Element> = document.querySelectorAll('.nav-links__item');
    if (menuLinks) {
        menuLinks.forEach((link) => {
            link.classList.remove('nav-links__item-active');
        });
        const currentLevel: string = localStorage.getItem('level') || '0';
        menuLinks[+currentLevel].classList.add('nav-links__item-active');
    }
};

const render: RenderFunctionWithLevel = (level: Level): void => {
    renderTitle(level);
    renderCssViewer();
    renderHtmlViewer(level);
    renderPokemons(level);
    renderMenu();
};

export default render;
