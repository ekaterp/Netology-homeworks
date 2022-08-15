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
        this.marks = [{
            subject:"",
            arrmarks: [],
            average: "",
        }];
    }
   
    setSubject (subjectName) {
        this.subject = subjectName;
    }
   
    addMark (subjectName, mark) {
        if (mark < 1 || mark > 5) {
            console.log ("Введена неверная оценка. Вводимое значение должно находится в диапазоне от 1 до 5 включительно")
        }

        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    
    addMarks (subject, ...marks) {
        for (let m of marks) {
          this.addMark(subject, m);
         }
    }

    getAverage (subject) {
        return this.marks[subject].reduce ((acc, item, idx, arr) => { 
          if (idx === arr.length -1) {
            return (acc + item) / arr.length;
          } else {
            return acc + item;
          }
        }) 
    }

    getAverageBySubject () {

    }

}
