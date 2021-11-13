const books = [
    {
        Title: 'Meditations',
        Author: 'Marcus Aurelius',
        Genre: ['Nonfiction', 'Philosophy'],
        Rating: 4.2,
        img: '/books/assets/Books/meditations.jpg',
        imgAlt: 'Image of the book "Meditations", by Marcus Aurelius.'
    },

    {
        Title: 'Travels With Charley: In Search of America',
        Author: 'John Steinbeck',
        Genre: ['Nonfiction', 'Travel'],
        Rating: 4.0,
        img: '/books/assets/Books/Travels With Charley.PNG',
        imgAlt: 'Image of the book "Travels With Charley: In Search of America", by John Steinbeck'
    },

    {
        Title: 'Thinking, Fast and Slow',
        Author: 'Daniel Kahneman',
        Genre: ['Nonfiction', 'Psychology'],
        Rating: 4.1,
        img: '/books/assets/Books/Thinking, Fast and Slow.PNG',
        imgAlt: 'Image of the book "Thinking, Fast and Slow", by Daniel Kahneman'
    },

    {
        Title: 'The Sixth Extinction: An Unnatural History',
        Author: 'Elizabeth Kolbert',
        Genre: ['Nonfiction', 'Science'],
        Rating: 4.1,
        img: '/books/assets/Books/Sixth Extinction.PNG',
        imgAlt: 'Image of the book "The Sixth Extinction" by Elizabeth Kolbert'
    },

    {
        Title: 'The Madness of Crowds: Gender, Race and Identity',
        Author: 'Douglas Murray',
        Genre: ['Nonfiction', 'Politics'],
        Rating: 4.2,
        img: '/books/assets/Books/Madness of Crowds.PNG',
        imgAlt: 'Image of the book "The Madness of Crowds" by Douglas Murray'
    },

    {
        Title: 'Mere Christianity',
        Author: 'C.S. Lewis',
        Genre: ['Christian', 'Nonfiction'],
        Rating: 4.3,
        img: '/books/assets/Books/Mere Christianity.PNG',
        imgAlt: 'Image of the book "Mere Christianity" by C.S. Lewis'
    },

    {
        Title: 'Leonardo da Vinci',
        Author: 'Walter Isaacson',
        Genre: ['Biography', 'Nonfiction'],
        Rating: 4.3,
        img: '/books/assets/Books/Leonardo.PNG',
        imgAlt: 'Image of the book "Leonardo da Vinci" by Walter Isaacson'
    },

    {
        Title: 'Breath: The New Science of a Lost Art',
        Author: 'James Nestor',
        Genre: ['Nonfiction', 'Science'],
        Rating: 4.2,
        img: '/books/assets/Books/Breath.PNG',
        imgAlt: 'Image of the book "Breath" by James Nestor'
    },

    {
        Title: 'The Signal and the Noise',
        Author: 'Nate Silver',
        Genre: ['Nonfiction', 'Science'],
        Rating: 4.0,
        img: '/books/assets/Books/Signal and the Noise.PNG',
        imgAlt: 'Image of the book "The Signal and the Noise" by Nate Silver'
    }
];

const posts = document.querySelectorAll('.book-info');
const headerArrow = document.querySelector('.header-content i');
const bookImages = document.querySelectorAll('.book-img img');
const navBar = document.querySelector('nav');


for (let i = 0; i < books.length; i++) {
    posts[i].firstElementChild.textContent = books[i].Title;
    posts[i].firstElementChild.nextElementSibling.textContent = `by ${books[i].Author}`;
    posts[i].firstElementChild.nextElementSibling.nextElementSibling.textContent = `Genre: ${books[i].Genre}`;
    posts[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent = `Rating: ${books[i].Rating}`;
    bookImages[i].setAttribute('src', books[i].img);
    bookImages[i].setAttribute('alt', books[i].imgAlt);
}

const arrowAnim = () => {
    if (window.innerWidth > 540) {
        if (headerArrow.classList.value.includes('arrowDown')) {
            headerArrow.classList.remove('arrowDown');
            headerArrow.classList.add('arrowUp');
        }   else {
            headerArrow.classList.add('arrowDown');
            headerArrow.classList.remove('arrowUp');
        }
        setTimeout(arrowAnim, 500);
    }
}

arrowAnim();


// Theme Toggler

const themeToggler = document.querySelector('.themeOverlay');
const mainContent = document.querySelector('main');
const allNotesBtn = document.querySelectorAll('.allNotes');
const header = document.querySelector('header');

themeToggler.addEventListener('click', () => {
    navBar.classList.toggle('darkMode');
    mainContent.classList.toggle('darkMode');
    themeToggler.classList.toggle('darkMode');
    themeToggler.parentElement.classList.toggle('darkMode');
    for (let btn of allNotesBtn) {
        btn.classList.toggle('darkMode');
    };
    header.classList.toggle('darkMode');
    if (themeToggler.classList.contains('darkMode')) {
        for (let letter of letters) {
            letter.style.color = '#fff'
        }
    }   else {
        for (let letter of letters) {
            letter.style.color = '#222'
        }    
    }

});

const colors = ['#AA0601', '#EEBB33', '#04550C', '#201BBA', '#906CCF'];
const letters = document.querySelectorAll('h1 span');

for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseover', () => {
        letters[i].style.color = colors[i];
    })
};

// Search Filter functionality

const searchBar = document.querySelector('#searchBar');
const allPosts = document.querySelectorAll('.post');
const bookTitles = document.querySelectorAll('.title');

let noBooksFound = document.createElement('h2');
    noBooksFound.classList.add('no-books-found');
    noBooksFound.innerText = "Sorry, we couldn't find any books matching that title.";
    noBooksFound.style.display = 'none';
    mainContent.append(noBooksFound);

searchBar.addEventListener('input', () => {
    let shownBooks = [];
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    for (let post of allPosts) {
        post.style.display = 'none'
    }
    for (let i = 0; i < books.length; i++) {
        if (books[i].Title.toLowerCase().includes(searchBar.value.toLowerCase())) {
            noBooksFound.style.display = 'none';
            allPosts[i].style.display = 'flex';
            shownBooks.push(books[i]);
        }
    }
    if (shownBooks.length === 0) {
        noBooksFound.style.display = 'block';
    }
});

