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
    {
        name: 'Projects',
        url: '#',
        icon: '#',
        important: true
    },
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
    }
];

const projects = [
    {
        name: 'Testportal',
        type: 'Website Clone',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a clone of an existing website (https://www.testportal.net/). This is a work in progress and while it works on desktop, it is currently optimized for mobile only.',
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
        description: 'A simple game of hangman. Try guessing the mystery value at the bottom of the screen. This project is a demonstration of API usage.',
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
        img: '/images/stopwatch.png',
        imgAlt: 'Screenshot of Stopwatch app',
        imgMobile: '/images/'
    },
    {
        name: 'Stats & Odds',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'Team stats and comparison. Pick a sport, odds format and market type and you will be shown the current betting lines from a variety of sportsbooks.',
        sectionLink: '/projects/stats&odds',
        codeLink: 'https://github.com/sbrcly/oddsTable',
        img: '/images/stats-and-odds.png',
        imgAlt: 'Screenshot Betting odds app',
        imgMobile: '/images/'
    },
    {
        name: 'Trading Schedule',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This is a scheduling application that assigns employees to specific sporting events. In order for the application to work you will need to choose the Excel file attached to this project.',
        sectionLink: '/projects/tradingSchedule',
        codeLink: 'https://github.com/sbrcly/tradingSchedule',
        img: '/images/trading-schedule.png',
        imgAlt: 'Screenshot of Trading Schedule app',
        imgMobile: '/images/'
    },
    {
        name: 'BI Tool',
        type: 'Utility',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'This application extracts the Betting Index ID and team name from Don Best and exports that information to excel. In order for the application to work you will need to choose the Excel file attached to this project.',
        sectionLink: '/projects/biExtractingTool',
        codeLink: 'https://github.com/sbrcly/biExtractingTool',
        img: '/images/bi-tool.png',
        imgAlt: 'Screenshot of BI Tool',
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
        name: 'Python',
        icon: '<i class="fab fa-python"></i>',
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