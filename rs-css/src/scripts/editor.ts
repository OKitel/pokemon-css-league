import { EditorView, basicSetup } from 'codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';

export const initCssEditor = (parent: HTMLElement): void => {
    const view = new EditorView({
        doc: `Type your css here...
{
  /* Styles would go here. */
}`,
        extensions: [basicSetup, css()],
        parent,
    });
};

export const initHtmlEditor = (parent: HTMLElement, htmlDescription: string): void => {
    const view = new EditorView({
        doc: htmlDescription,
        extensions: [basicSetup, html()],
        parent,
    });
};
