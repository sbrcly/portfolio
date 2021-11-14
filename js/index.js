const mainNavbar = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const latestSectionsContainer = document.querySelectorAll('.container-section');
const csTitles = document.querySelectorAll('.section-title');
const csDescription = document.querySelectorAll('.section-description');
const csImg = document.querySelectorAll('.section-img');
const csCodeBtn = document.querySelectorAll('.code-btn');
const csViewBtn = document.querySelectorAll('.view-btn');

const pages = [
    {
        name: 'Home',
        url: '#',
        icon: '#',
        important: false
    },
    {
        name: 'About',
        url: '#',
        icon: '#',
        important: false
    },
    {
        name: 'Books',
        url: '/books',
        icon: '#',
        important: false
    },
    // {
    //     name: 'Projects',
    //     url: '#',
    //     icon: '#',
    //     important: true
    // },
    {
        name: 'Contact',
        url: '#',
        icon: '#',
        important: true
    }
];

const social = [
    {
        name: 'Github',
        url: 'https://github.com/sbrcly',
        icon: '<i class="fab fa-github-square"></i>'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/sbrcly',
        icon: '<i class="fab fa-twitter-square"></i>'
    }
];

const projects = [
    {
        name: 'Testportal',
        type: 'Website Clone',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a clone of an existing website (https://www.testportal.net/). I used their site as design inspiration only (I use the word "inspiration" intentionally, as I changed many things to my own personal liking). All code is my own.',
        sectionLink: '/projects/testportal',
        codeLink: 'https://github.com/sbrcly/dribbleTemplateTestportal',
        img: '/images/testportalLogo.PNG',
        imgAlt: 'Testportal logo',
        imgMobile: '/images/testportal-mobile.PNG'
    },
    {
        name: 'Hangman',
        type: 'Game',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'A simple game of hangman. Try guessing the mystery value at the bottom of the screen. You may change the category using the "category" selector in the middle of the screen. You may also change the difficulty using the button in the top-right corner of the screen.',
        sectionLink: '/projects/hangman',
        codeLink: 'https://github.com/sbrcly/hangman',
        img: '/images/hangman.PNG',
        imgAlt: 'Screenshot of Hangman game',
        imgMobile: '/images/hangman-mobile.PNG'
    },
    {
        name: 'Stopwatch',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a stopwatch that tracks and compares lap times. Your current lap time is checked against your previous lap time to determine which was faster.',
        sectionLink: '/projects/stopwatch',
        codeLink: 'https://github.com/sbrcly/stopwatch',
        img: '#',
        imgAlt: 'Screenshot of Stopwatch app',
        imgMobile: '/images/'
    },
    {
        name: 'Betting Odds',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'Pick a sport, odds format and market type and you will be shown the current betting lines from a variety of sportsbooks.',
        sectionLink: '/projects/bettingOdds',
        codeLink: 'https://github.com/sbrcly/oddsTable',
        img: '#',
        imgAlt: 'Screenshot Betting odds app',
        imgMobile: '/images/'
    }
];

const skills = [
    {
        name: 'HTML',
        icon: '<i class="fab fa-html5"></i>',
        color: '#da4b22'
    },
    {
        name: 'CSS',
        icon: '<i class="fab fa-css3-alt"></i>',
        color: '#1570b3'
    },
    {
        name: 'JavaScript',
        icon: '<i class="fab fa-js"></i>',
        color: '#e4de31'
    },
    {
        name: 'Git',
        icon: '<i class="fab fa-git-square"></i>',
        color: '#e94f33'
    },
    {
        name: 'Bootstrap',
        icon: '<i class="fab fa-bootstrap"></i>',
        color: '#703cbc'
    },
    {
        name: 'Sass',
        icon: '<i class="fab fa-sass"></i>',
        color: '#c76395'
    }
]