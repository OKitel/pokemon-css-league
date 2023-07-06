import { EditorView, basicSetup } from 'codemirror';
import { placeholder, keymap } from '@codemirror/view';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { checkAnswer } from './level';

const handleSubmit = (target: EditorView): boolean => {
    const userAnswer = target.state.doc.toString();
    checkAnswer(userAnswer);
    return true;
};

const keysMap = keymap.of([
    {
        key: 'Enter',
        run: handleSubmit,
        preventDefault: true,
    },
]);

export const initCssEditor = (parent: HTMLElement): void => {
    const view = new EditorView({
        extensions: [keysMap, basicSetup, css(), placeholder(`Type your CSS here and hit Enter`)],
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

export const shakeEditor = (): void => {
    const editorField = document.querySelector('.editor');
    if (editorField) {
        editorField.classList.add('shake');
        setTimeout(() => {
            editorField.classList.remove('shake');
        }, 500);
    }
};
