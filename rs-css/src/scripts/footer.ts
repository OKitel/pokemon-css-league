const createFooter = (): HTMLElement => {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const githubLink = document.createElement('a');
    githubLink.className = 'footer__link';
    githubLink.href = 'https://github.com/OKitel';
    githubLink.target = '_blank';

    const githubIcon = document.createElement('div');
    githubIcon.className = 'github-icon';

    githubLink.appendChild(githubIcon);

    const year = document.createElement('h3');
    year.className = 'footer__year';
    year.textContent = '2023';

    const rssLink = document.createElement('a');
    rssLink.className = 'footer__link';
    rssLink.href = 'https://rs.school/js/';
    rssLink.target = '_blank';

    const rssIcon = document.createElement('div');
    rssIcon.className = 'rss-icon';

    rssLink.appendChild(rssIcon);

    footer.appendChild(githubLink);
    footer.appendChild(year);
    footer.appendChild(rssLink);

    return footer;
};

export default createFooter;
