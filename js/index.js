const mainNavbar = document.querySelector('nav');
const latestProjectsContainer = document.querySelectorAll('.latest-project');
const lpTitles = document.querySelectorAll('.project-title');
const lpDescription = document.querySelectorAll('.project-description');
const lpImg = document.querySelectorAll('.project-img');
const lpCodeBtn = document.querySelectorAll('.code-btn');
const lpViewBtn = document.querySelectorAll('.view-btn');

const pages = [
    {
        name: 'Home',
        url: '/',
        icon: '#',
        important: false
    },
    {
        name: 'About Me',
        url: '#',
        icon: '#',
        important: false
    },
    {
        name: 'Books',
        url: '#',
        icon: '#',
        important: false
    },
    {
        name: 'Projects',
        url: '#',
        icon: '#',
        important: true
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: '#',
        important: true
    }
];

const social = [
    {
        name: 'Github',
        url: 'https://github.com/sbrcly',
        icon: '#'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/sbrcly',
        icon: '#'
    }
];

const projects = [
    {
        name: 'Testportal',
        type: 'Website Clone',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a clone of an existing website (https://www.testportal.net/). I used their site as design inspiration only (I use the word "inspiration" intentionally, as I changed many things to my own personal liking). All code is my own.',
        projectLink: '/projects/testportal',
        codeLink: 'https://github.com/sbrcly/dribbleTemplateTestportal',
        img: '/images/testportalLogo.PNG',
        imgAlt: 'Testportal logo'
    },
    {
        name: 'Hangman',
        type: 'Game',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'A simple game of hangman. Try guessing the mystery value at the bottom of the screen. You may change the category using the "category" selector in the middle of the screen. You may also change the difficulty using the button in the top-right corner of the screen.',
        projectLink: '/projects/hangman',
        codeLink: 'https://github.com/sbrcly/hangman',
        img: '/images/hangman.PNG',
        imgAlt: 'Screenshot of Hangman game'
    },
    {
        name: 'Stopwatch',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a stopwatch that tracks and compares lap times. Your current lap time is checked against your previous lap time to determine which was faster.',
        projectLink: '#',
        codeLink: '#',
        img: '#',
        imgAlt: 'Screenshot of Stopwatch app'
    }
];

