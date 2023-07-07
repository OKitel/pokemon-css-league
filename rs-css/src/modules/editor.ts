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

let cssEditorView: EditorView;

export const initCssEditor = (parent: HTMLElement): void => {
    cssEditorView = new EditorView({
        extensions: [keysMap, basicSetup, css(), placeholder(`Type your CSS here and hit Enter`)],
        parent,
    });
};

export const getEditorValue = (): string => {
    const value = cssEditorView.state.doc.toString();
    return value;
};

let htmlEditorView: EditorView;

export const initHtmlEditor = (parent: HTMLElement, htmlDescription: string): EditorView => {
    htmlEditorView = new EditorView({
        doc: htmlDescription,
        extensions: [basicSetup, html()],
        parent,
    });
    return htmlEditorView;
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
