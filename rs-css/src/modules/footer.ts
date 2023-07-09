import { GITHUB_LINK, RSS_LINK } from '../consts';

const createFooterView = (): HTMLElement => {
    const footer: HTMLElement = document.createElement('footer');
    footer.className = 'footer';

    const githubLink: HTMLAnchorElement = document.createElement('a');
    githubLink.className = 'footer__link';
    githubLink.href = GITHUB_LINK;
    githubLink.target = '_blank';

    const githubIcon: HTMLDivElement = document.createElement('div');
    githubIcon.className = 'github-icon';

    githubLink.appendChild(githubIcon);

    const year: HTMLHeadingElement = document.createElement('h3');
    year.className = 'footer__year';
    year.textContent = '2023';

    const rssLink: HTMLAnchorElement = document.createElement('a');
    rssLink.className = 'footer__link';
    rssLink.href = RSS_LINK;
    rssLink.target = '_blank';

    const rssIcon: HTMLDivElement = document.createElement('div');
    rssIcon.className = 'rss-icon';

    rssLink.appendChild(rssIcon);

    footer.appendChild(githubLink);
    footer.appendChild(year);
    footer.appendChild(rssLink);

    return footer;
};

export default createFooterView;
