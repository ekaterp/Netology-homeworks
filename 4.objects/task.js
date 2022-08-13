function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const Student1 = new Student("Петр", "Male", "19");
const Student2 = new Student("Виктория", "Female", "23");
const Student3 = new Student("Савелий", "Male", "20");
const Student4 = new Student("Мариам", "Female", "18");



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  for (let m of marks) {
    this.addMark(m);
  }
}

Student.prototype.getAverage = function () {
  const marks = this.marks || [];
  return marks.reduce ((acc, item, idx, arr) => { 
    if (idx === arr.length -1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  }) 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}