function Person(firstName,lastName,id){
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=id;
}

function Student(grade){
    this.grade=grade;
}

Student.prototype = new Person();

function Teacher(firstName,lastName,subject){
    this.subject=subject;
}

Teacher.prototype = new Person();

function Section(name,maxSize){
    this.name=name;
    this.maxSize=maxSize;
}

function addStudent(Student,section){
    var students=section.students;
    students+=Student;

}