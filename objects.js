stuId = 1;
teacherId = 1;
secId = 1;

function Student(firstName,lastName,grade){
    this.grade=grade;
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=stuId++;
}

function Teacher(firstName,lastName,subject){
    this.subject=subject;
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=teacherId++;
}

function Section(name,maxSize){
    this.name=name;
    this.maxSize=maxSize;
    this.id=secId++;
    this.currentSize=0;
}
