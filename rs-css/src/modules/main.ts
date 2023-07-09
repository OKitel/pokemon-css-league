import { getEditorValue } from './editor';
import { checkAnswer } from './level';

const createCssEditorView = (): HTMLElement => {
    const cssEditorDiv: HTMLDivElement = document.createElement('div');
    cssEditorDiv.id = 'css-editor';

    const cssEditorHeader: HTMLHeadingElement = document.createElement('h3');
    cssEditorHeader.className = 'editor__header';
    cssEditorHeader.textContent = 'CSS Editor';

    const cssViewerContainer: HTMLDivElement = document.createElement('div');
    cssViewerContainer.className = 'css-viewer__container';

    const enterBtn: HTMLButtonElement = document.createElement('button');
    enterBtn.className = 'enter-btn btn';
    enterBtn.textContent = 'Enter';
    enterBtn.addEventListener('click', () => {
        const userAnswer: string = getEditorValue();
        checkAnswer(userAnswer);
    });

    cssEditorDiv.appendChild(cssEditorHeader);
    cssEditorDiv.appendChild(cssViewerContainer);
    cssEditorDiv.appendChild(enterBtn);

    return cssEditorDiv;
};

const createHtmlEditorView = (): HTMLElement => {
    const htmlViewerDiv: HTMLDivElement = document.createElement('div');
    htmlViewerDiv.id = 'html-viewer';

    const htmlViewerHeader: HTMLHeadingElement = document.createElement('h3');
    htmlViewerHeader.className = 'editor__header';
    htmlViewerHeader.textContent = 'HTML Viewer';

    const htmlViewerContainer: HTMLDivElement = document.createElement('div');
    htmlViewerContainer.className = 'html-viewer__container';

    htmlViewerDiv.appendChild(htmlViewerHeader);
    htmlViewerDiv.appendChild(htmlViewerContainer);

    return htmlViewerDiv;
};

const createMainView = (): HTMLElement => {
    const main: HTMLElement = document.createElement('main');
    main.className = 'main';
    const editorDiv: HTMLDivElement = document.createElement('div');
    editorDiv.className = 'editor';

    const cssEditorDiv: HTMLElement = createCssEditorView();
    const htmlViewerDiv: HTMLElement = createHtmlEditorView();

    editorDiv.appendChild(cssEditorDiv);
    editorDiv.appendChild(htmlViewerDiv);

    const pokemonsDiv: HTMLDivElement = document.createElement('div');
    pokemonsDiv.className = 'pokemons';

    main.appendChild(editorDiv);
    main.appendChild(pokemonsDiv);

    return main;
};

export default createMainView;
