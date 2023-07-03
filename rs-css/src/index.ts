import './sass/styles.scss';
import charmanderImage from './assets/charmander.png';
import bulbasaurImage from './assets/bulbasaur.png';
import pikachuImage from './assets/pikachu.png';
import squirtleImage from './assets/squirtle.png';
import { initCssEditor, initHtmlEditor } from './scripts/editor';
import initMenu from './scripts/menu';
import initModal from './scripts/modal';

const pokemonsField = document.querySelector('.pokemons');
const charmander = document.createElement('img');
charmander.src = charmanderImage as string;
charmander.classList.add('pokemon');
pokemonsField?.appendChild(charmander);

const bulbasaur = document.createElement('img');
bulbasaur.src = bulbasaurImage as string;
bulbasaur.classList.add('pokemon');
pokemonsField?.appendChild(bulbasaur);

const squirtle = document.createElement('img');
squirtle.src = squirtleImage as string;
squirtle.classList.add('pokemon');
pokemonsField?.appendChild(squirtle);

const pikachu = document.createElement('img');
pikachu.src = pikachuImage as string;
pikachu.classList.add('pokemon');
pokemonsField?.appendChild(pikachu);

const editorField = document.querySelector<HTMLElement>('.editor');
if (editorField) {
    const cssEditorField = document.getElementById('css-editor');
    if (cssEditorField) initCssEditor(cssEditorField);

    const htmlViewerField = document.getElementById('html-viewer');
    if (htmlViewerField) initHtmlEditor(htmlViewerField);
}

initMenu();
initModal();
