import { EditorView, basicSetup } from 'codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';

export const initCssEditor = (parent: HTMLElement): void => {
    const view = new EditorView({
        doc: 'Type your css here...',
        extensions: [basicSetup, css()],
        parent,
    });
};

const starHtmltState = `
  <div class="pokemons">
    <img class='charmander' />
    <img class='bulbasaur' />
    <img class='squirtle' />
    <img class='pikachu' />
  </div>
  `;
export const initHtmlEditor = (parent: HTMLElement): void => {
    const view = new EditorView({
        doc: starHtmltState,
        extensions: [basicSetup, html()],
        parent,
    });
};
