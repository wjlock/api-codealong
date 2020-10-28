function fetchBook(genre) {
    fetch(`http://openlibrary.org/subjects/${genre}.json`) // fetch from the api
    .then(response => response.json()) // take the reponse and give us the json
    .then((json) => { //take that json file and
        const randomBook = getRandomBook(json.works) // create the variable "randomBook" and set it equal to a the function getRandomBook with the parameter of the works array
        const title = randomBook.title
        const author = getAuthor(randomBook);
        const cover = `http://covers.openlibrary.org/b/ID/${randomBook.cover_id}-M.jpg`


        appendBookToDom(title, author, cover)

    })
}
function getRandomBook(books) { // create function getRandomBook with the parameter of books
    const randomIndex = Math.floor(Math.random() * books.length) // create a variable randomIndex that uses a formula that picks a random number (rounded down) out of the books.length array (i.e select random number out of 5000)
    return books[randomIndex] // print out parameter with the random index number from the above function
}

function getAuthor(book) {
    return book.authors[0].name;
}

// DOM manipulation functions

function appendBookToDom(title, author, cover) {
    const titleH3 = document.createElement('h3')
    titleH3.textContent = title
    document.querySelector("#display-book").append(titleH3);

    const coverImg = document.createElement('img')
    coverImg.src = cover
    coverImg.alt = title
    document.querySelector("#display-book").append(coverImg)
}

let genre = 'mystery'
const book = fetchBook(genre)
