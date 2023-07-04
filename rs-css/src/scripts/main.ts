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

    cssEditorDiv.appendChild(cssEditorHeader);

    const htmlViewerDiv = document.createElement('div');
    htmlViewerDiv.id = 'html-viewer';

    const htmlViewerHeader = document.createElement('h3');
    htmlViewerHeader.className = 'editor__header';
    htmlViewerHeader.textContent = 'HTML Viewer';

    htmlViewerDiv.appendChild(htmlViewerHeader);

    editorDiv.appendChild(cssEditorDiv);
    editorDiv.appendChild(htmlViewerDiv);

    const pokemonsDiv = document.createElement('div');
    pokemonsDiv.className = 'pokemons';

    main.appendChild(editorDiv);
    main.appendChild(pokemonsDiv);

    return main;
};

export default createMain;
