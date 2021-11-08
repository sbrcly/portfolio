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
const mainNav = new Navbar(pages, mainNavbar, 'main-nav');

const mainNavLinks = document.querySelectorAll('.main-nav-link');
const pageHeading = document.querySelector('h1');
const latestWorkTitle2 = document.querySelector('.pt-2');
const projectImg2 = document.querySelector('.pi-2');
const projectTxt2 = document.querySelector('.pmit-2');
const latestWorkTitle1 = document.querySelector('.pt-1');
const projectImg1 = document.querySelector('.pi-1');
const projectTxt1 = document.querySelector('.pmit-1');

const loadAnimation = (itemsToAnimate, loadType, loadDirection, delay) => {
    setTimeout(() => {
        if (itemsToAnimate.length > 1) {
            for (let item of itemsToAnimate) {
                item.classList.add(`${loadType}-${loadDirection}`);
            }
        }   else {
            itemsToAnimate.classList.add(`${loadType}-${loadDirection}`);
        }
        
    }, delay);
}

const translateDown = loadAnimation(mainNavLinks, 'translate', 'down', 500);
const translateLeft = loadAnimation([
    pageHeading,
    latestWorkTitle2,
    projectImg2,
    projectTxt2], 'translate', 'left', 10);
const translateRight = loadAnimation([
    latestWorkTitle1,
    projectImg1,
    projectTxt1], 'translate', 'right', 10);

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
            const {name, techStack, description, img, projectLink, codeLink, imgAlt} = this.projects[i];
            this.title[i].innerHTML = `${name} <span>(${techStack})</span>`;
            this.description[i].innerText = description;
            this.img[i].setAttribute('src', img);
            this.img[i].setAttribute('alt', imgAlt);
            this.link1[i].setAttribute('href', projectLink);
            this.link2[i].setAttribute('href', codeLink);
        }
    }
}

const latestProjects = new Projects(projects, lpTitles, lpDescription, lpImg, lpViewBtn, lpCodeBtn);