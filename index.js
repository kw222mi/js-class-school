class School {
    constructor(name, address, zipcode, city) {
        this.name = name,
            this.address = address,
            this.zipcode = zipcode,
            this.city = city,
            this.students = [],
            this.teachers = [],
            this.relegateStudent = function (student) {
                student.subjects.forEach((subject) => subject.removeStudent)
                student.subjects = []
            },
            this.fireTeacher = function (teacher) {
                teacher.subjects.forEach((subject) => subject.removeTeacher)
                teacher.subjects = []
            }
    }
}

class Student {
    constructor(name, age, gender) {
        this.name = name,
            this.age = age,
            this.gender = gender,
            this.subjects = [],
            this.grade = []
        this.addSubject = function (subject) {
            this.subjects.push(subject)
        },
            this.quitSubject = function (subject) {
                const index = this.subjects.indexOf(subject)
                const x = this.subjects.splice(index, 1)
            }
        this.setGrade = function (grade) {
            this.grade.push(grade)
        }
    }
}

class Teacher {
    constructor(name) {
        this.name = name,
            this.subjects = [],
            this.addSubject = function (subject) {
                this.subjects.push(subject)
            }
    }
}

class Subject {
    constructor(name) {
        this.name = name,
            this.students = [],
            this.teacher = {},
            this.addTeacher = function (teacher) {
                this.teacher = teacher
            },
            this.removeTeacher = function (teacher) {
                this.teacher = {}
            },
            this.addStudent = function (student) {
                this.students.push(student)
            },
            this.removeStudent = function (student) {
                this.students.indexOf(student)
                const x = this.students.splice(index, 1)
            }
    }
}
