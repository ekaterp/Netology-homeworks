class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix () {
        this.state = this.state * 1.5;
    }

    get state () {
        return this._state;
    }

    set state (_state) {
        if (_state < 0) {
            this._state = 0;
        } else if (_state > 100) {
            this._state = 100;
        } else {
            this._state = _state;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (fieldName, value) {
        for (let i in this.books) {
            if (this.books[i][fieldName] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let n in this.books) {
            if (this.books[n].name === bookName) {
                let book = this.books[0];
                this.books.splice(n, 1);
                return book;
            }
        }
        return null;
    }
}

class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            throw Error("incorrect mark value" + mark + ", an integer from 1 to 5 expected.");
        }
        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }

    getAverageBySubject(subjectName) {
        const marks = this.marks[subjectName];
        if (marks === undefined) {
            throw Error("unknown subject name: " + subjectName);
        }
        if (marks.length === 0) {
            return 0;
        }
        const sum = marks.reduce((acc, item) => acc + item);
        return sum / marks.length;
    }

    getAverage() {
        if (this.marks.length == 0) {
            return 0;
        }
        let sum = 0;
        for (const subjectName of Object.keys(this.marks)) {
            sum += this.getAverageBySubject(subjectName);
        };
        return sum / Object.keys(this.marks).length;
    }

}
