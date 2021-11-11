// SET NAV LINKS
class Navbar {
    constructor (links, appendTo, destination) {
        this.links = links;
        this.appendTo = appendTo;
        this.destination = destination;

        this.createLinks();
    }
    createLinks = () => {
        for (let link of this.links) {
            const {name, url, icon, important} = link;
            const navLink = document.createElement('a');
            navLink.classList.add(`${this.destination}-link`);
            navLink.id = `${name}`;
            navLink.setAttribute('href', url);
            navLink.innerHTML = `${name}`;
            important === true ? navLink.classList.add('important-link') : null;
            this.appendLink(navLink);
        }
    }
    appendLink = (toAppend) => {
        this.appendTo.append(toAppend);
    }
}
const mainNav = new Navbar(pages, navLinks, 'main-nav');

const mainNavLinks = document.querySelectorAll('.main-nav-link');
const pageHeading = document.querySelectorAll('h1');
const latestWorkTitle2 = document.querySelector('.pt-2');
const sectionImg2 = document.querySelector('.pi-2');
const sectionTxt2 = document.querySelector('.pmit-2');
const latestWorkTitle1 = document.querySelector('.pt-1');
const sectionImg1 = document.querySelector('.pi-1');
const sectionTxt1 = document.querySelector('.pmit-1');

const loadAnimation = (itemsToAnimate, type, loadDirection, delay) => {
    setTimeout(() => {
        if (itemsToAnimate.length > 1) {
            for (let item of itemsToAnimate) {
                if (item.length > 1) {
                    for (let i of item) {
                        i.classList.add(`${type}-${loadDirection}`);
                    }
                }   else {
                    item.classList.add(`${type}-${loadDirection}`);
                }
            }
        }   else {
            itemsToAnimate.classList.add(`${type}-${loadDirection}`);
        }
        
    }, delay);
}

const translateDown = loadAnimation(mainNavLinks, 'translate', 'down', 250);
const translateLeft = loadAnimation([
    pageHeading,
    latestWorkTitle2,
    sectionImg2,
    sectionTxt2], 'translate', 'left', 10);
const translateRight = loadAnimation([
    latestWorkTitle1,
    sectionImg1,
    sectionTxt1], 'translate', 'right', 10);

// Hamburger Menu Toggle

const hamburgerMenu = document.querySelector('.hamburger-menu');

const siteSections = document.querySelectorAll('section');
const siteSectionLinks = document.querySelectorAll('.main-nav-link');

class SectionNavigation {
    constructor(sections, sectionLinks) {
        this.sections = sections;
        this.sectionLinks = sectionLinks;

        for (let link of sectionLinks) {
            link.addEventListener('click', () => {
                this.showSection(link);
            });
        }
    }
    showSection = (link) => {
        for (let section of this.sections) {
            if (section.classList.contains(link.id)) {
                section.classList.add('active');
            }   else {
                section.classList.remove('active');
            }
        }
    }
}

const pageNavigation = new SectionNavigation(siteSections, siteSectionLinks);

const toggleMenu = () => {
    navLinks.classList.toggle('show-on-mobile');
    for (let link of siteSectionLinks) {
        link.addEventListener('click', toggleMenu);
    }
}

hamburgerMenu.addEventListener('click', toggleMenu);



// SET LATEST PROJECT INFORMATION

class Projects {
    constructor (projects, title, description, img, link1, link2) {
       this.projects = projects;
       this.title = title;
       this.description = description;
       this.img = img;
       this.link1 = link1;
       this.link2 = link2;

        this.setLatestProjectInfo();
    }
    setLatestProjectInfo = () => {
        for (let i = 0; i < 2; i++) {
            const {name, techStack, description, img, sectionLink, codeLink, imgAlt} = this.projects[i];
            this.title[i].innerHTML = `${name} <span>(${techStack})</span>`;
            this.description[i].innerText = description;
            this.img[i].setAttribute('src', img);
            this.img[i].setAttribute('alt', imgAlt);
            this.link1[i].setAttribute('href', sectionLink);
            this.link2[i].setAttribute('href', codeLink);
        }
    }
}

const latestProjects = new Projects(projects, csTitles, csDescription, csImg, csViewBtn, csCodeBtn);


const socialBtns = document.querySelector('.social-media-accounts');

const applySocialBtns = (appendTo, accounts) => {
    for (let account of accounts) {
        const socialBtn = document.createElement('a');
        socialBtn.classList.add('social-media');
        socialBtn.classList.add(`${account.name}`);
        socialBtn.id = account.name;
        socialBtn.setAttribute('rel', 'noopener');
        socialBtn.setAttribute('href', account.url);
        socialBtn.setAttribute('target', '_blank');
        socialBtn.innerHTML = account.icon;
        appendTo.append(socialBtn);
    }
}

applySocialBtns(socialBtns, social);

// ABOUT ME

// SKILLS
const skillMainContent = document.querySelector('.skills-main');

const createIcons = (icons, appendTo) => {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    for (let icon of icons) {
        const newIcon = document.createElement('div');
        newIcon.innerHTML = icon.icon;
        newIcon.style.color = icon.color;
        iconContainer.append(newIcon);
    }
    appendTo.prepend(iconContainer);
};

createIcons(skills, skillMainContent);