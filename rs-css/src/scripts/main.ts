import { checkAnswer } from './level';

// eslint-disable-next-line max-lines-per-function
const createMain = (): HTMLElement => {
    const main = document.createElement('main');
    main.className = 'main';
    const editorDiv = document.createElement('div');
    editorDiv.className = 'editor';
    const cssEditorDiv = document.createElement('div');
    cssEditorDiv.id = 'css-editor';
    const cssEditorHeader = document.createElement('h3');
    cssEditorHeader.className = 'editor__header';
    cssEditorHeader.textContent = 'CSS Editor';
    const cssViewerContainer = document.createElement('div');
    cssViewerContainer.className = 'css-viewer__container';
    const enterBtn = document.createElement('button');
    enterBtn.className = 'enter-btn btn';
    enterBtn.textContent = 'Enter';
    enterBtn.addEventListener('click', () => {
        const userAnswer = '';
        checkAnswer(userAnswer);
    });

    cssEditorDiv.appendChild(cssEditorHeader);
    cssEditorDiv.appendChild(cssViewerContainer);
    cssEditorDiv.appendChild(enterBtn);

    const htmlViewerDiv = document.createElement('div');
    htmlViewerDiv.id = 'html-viewer';
    const htmlViewerHeader = document.createElement('h3');
    htmlViewerHeader.className = 'editor__header';
    htmlViewerHeader.textContent = 'HTML Viewer';

    const htmlViewerContainer = document.createElement('div');
    htmlViewerContainer.className = 'html-viewer__container';

    htmlViewerDiv.appendChild(htmlViewerHeader);
    htmlViewerDiv.appendChild(htmlViewerContainer);

    editorDiv.appendChild(cssEditorDiv);
    editorDiv.appendChild(htmlViewerDiv);

    const pokemonsDiv = document.createElement('div');
    pokemonsDiv.className = 'pokemons';

    main.appendChild(editorDiv);
    main.appendChild(pokemonsDiv);

    return main;
};

export default createMain;
