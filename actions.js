
function listItems(){
    var result = "";
    var selection=document.getElementById("categories").value;
    var category=allItems[selection];
    if(selection=="0"){
        result+="<table border='1'>";
        result+="<tr><td>Name</td>";
        result+="<td>Grade</td></tr>";
        for(var i=0; i<category.length; i++){
            result+="<tr><td>"+category[i].firstName + " " + category[i].lastName + "</td>";
            result +="<td>"+category[i].grade+"</td></tr>";
        }
        result+="</table>";
        document.getElementById("list").innerHTML=result;
    }

    if(selection=="1"){
        result+="<table border='1'>";
        result+="<tr><td>Name</td>";
        result+="<td>Subject</td></tr>";
        for(var i=0; i<category.length; i++){
            result+="<tr><td>"+category[i].firstName + " " + category[i].lastName + "</td>";
            result +="<td>"+category[i].subject+"</td></tr>";
        }
        result+="</table>";
        document.getElementById("list").innerHTML=result;
    }

    if(selection=="2"){
        result+="<table border='1'>";
        result+="<tr><td>Section</td>";
        result+="<td>Maximum Size</td>";
        result+="<td>Current Size</td></tr>";
        for(var i=0; i<category.length; i++){
            result += "<tr><td>"+category[i].name + "</td>";
            result+="<td>"+category[i].maxSize + "</td>";
            result+="<td>"+category[i].currentSize+"</td></tr>";

        }
        result+="</table>";
        document.getElementById("list").innerHTML=result;
    }

}

function listEdit(selection){
    var selection=document.getElementById("listEdit").value;
    var html="";
    if(selection==0){
        html+="<input type='text' id='studFirst' placeholder='first name' value=''>";
        html+="<input type='text' id='studLast' placeholder='last name' value=''>";
        html+="<input type='text' id='studGrade' placeholder='grade' value=''>";
        html+="<button id='addStudent' onclick='addStudent()'>add student</button>";
    }
    if(selection==1){
        html+="<input type='text' id='teachFirst' placeholder='first name' value=''>";
        html+="<input type='text' id='teachLast' placeholder='last name' value=''>";
        html+="<input type='text' id='subject' placeholder='subject' value=''>";
        html+="<button id='addTeacher' onclick='addTeacher()'>add teacher</button>";
    }
    if(selection==2){
        html+="<input type='text' id='sectionName' placeholder='subject' value=''>";
        html+="<input type='text' id='maxSize' placeholder='maximum size' value=''>";
        html+="<button id='addSection' onclick='addSection()'>add section</button>"
    }
    document.getElementById("dataFields").innerHTML=html;

}

function addStudent(){
    var firstName=document.getElementById("studFirst").value;
    var lastName=document.getElementById("studLast").value;
    var grade=document.getElementById("studGrade").value;
    allStudents.push(new Student(firstName,lastName,grade));
    document.getElementById("studFirst").value="";
    document.getElementById("studLast").value="";
    document.getElementById("studGrade").value="";
    selectStudent();
}

function addTeacher(){
    var firstName=document.getElementById("teachFirst").value;
    var lastName=document.getElementById("teachLast").value;
    var subject=document.getElementById("subject").value;
    allTeachers.push(new Teacher(firstName,lastName,subject));
    document.getElementById("teachFirst").value="";
    document.getElementById("teachLast").value="";
    document.getElementById("subject").value="";
}

function addSection(){
    var name=document.getElementById("sectionName").value;
    var maxSize=document.getElementById("maxSize").value;
    allSections.push(new Section(name,maxSize));
    document.getElementById("sectionName").value="";
    document.getElementById("maxSize").value="";
    selectSection();
}

function selectSection(){
    var sectionList="<select id='sectionList'>";
    for (var i=0; i<allSections.length; i++){
        sectionList+="<option value=" + allSections[i].id + ">" + allSections[i].name + "</option>"
    }
    sectionList+="</select>";
    document.getElementById("selectSection").innerHTML=sectionList;

    return sectionList;
}

function showEnrollment(){
    //get me the section id from the selected item in the list
    var sectionId=document.getElementById("sectionList").value;
    var section=findSectionById(sectionId);
    var sectionRoster="";
    document.getElementById("noOneEnrolled").innerHTML="";

    for(var i=0; i<section.students.length; i++){
        sectionRoster+=section.students[i].firstName;
        sectionRoster+=" ";
        sectionRoster+=section.students[i].lastName;
        sectionRoster+="<br>";
    }

    if(section.students.length==0){
        document.getElementById("noOneEnrolled").innerHTML="No students enrolled at this time";
    }

    document.getElementById("sectionRoster").innerHTML=sectionRoster;
}

function selectStudent(){
    var studentList="<select id='studentList'>";
    for (var i=0; i<allStudents.length; i++){
        studentList+="<option value=" + allStudents[i].id +">" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    studentList+="</select>";
    document.getElementById("selectStudent").innerHTML=studentList;
}

function addStudentToSection(){
    var sectionId=document.getElementById("sectionList").value;
    var studentId=document.getElementById("studentList").value;
    var section=findSectionById(sectionId);
    var student=findStudentById(studentId);
    //can't duplicate a student
    if(section.students.indexOf(student)<0){
        section.addStudent(student);
        document.getElementById("confirmationMessage").innerHTML="Student added";
    }else{
        document.getElementById("confirmationMessage").innerHTML="Student already in section";
    }

}

function removeStudentFromSection(){
    var sectionId=document.getElementById("sectionList").value;
    var studentId=document.getElementById("studentList").value;
    var section=findSectionById(sectionId);
    var student=findStudentById(studentId);
    section.removeStudent(studentId);
    document.getElementById("confirmationMessage").innerHTML="Student removed";
}

function findSectionById(sectionId) {
    for(var i=0;i<allSections.length;i++){
        if(sectionId==allSections[i].id){
            return allSections[i];
        }
    }
}

function findStudentById(studentId){
    for(var i=0;i<allStudents.length;i++){
        if(studentId==allStudents[i].id){
            return allStudents[i];
        }
    }
}

function findTeacherById(teacherId){
    for (var i=0;i<allTeachers.length;i++){
        if(teacherId==allTeachers[i].id){
            return allTeachers[i];
        }
    }
}

function selectSection2(){
    document.getElementById("selectSection2").innerHTML=selectSection();
}

function showTeacher(){
    var sectionId=document.getElementById("sectionList").value;
    var section=findSectionById(sectionId);
    document.getElementById("sectionTeacher").innerHTML=section.teacher.firstName + " " + section.teacher.lastName;
    document.getElementById("confirmMessage2").innerHTML="";
}

function selectTeacher(){
    var teacherList="<select id='teacherList'>";
    for(var i=0;i<allTeachers.length; i++){
        teacherList+="<option value=" + allTeachers[i].id + ">" + allTeachers[i].firstName + " " + allTeachers[i].lastName+"</option>";
    }
    teacherList+="</select>";
    document.getElementById("selectTeacher").innerHTML=teacherList;
}

function addTeacherToSection(){
    var teacherId=document.getElementById("teacherList").value;
    var sectionId=document.getElementById("sectionList").value;
    var section=findSectionById(sectionId);
    var assignTeacher=findTeacherById(teacherId);
    section.teacher=assignTeacher;
    document.getElementById("confirmMessage2").innerHTML="Teacher assigned";

}

function searchForStudent(){
    var firstName=document.getElementById("searchStudent").value;
    var result="";
    for(var i=0;i<allStudents.length;i++){
        if(firstName==allStudents[i].firstName){
            result+=allStudents[i].firstName+" "+allStudents[i].lastName+ "is in grade "+
                allStudents[i].grade +". ";
        }
    }
}

//display properties
function hideEverything(){
    var ids = ["categories","listItems","list","listEdit","dataFields","selectSection","showEnrollment",
        "selectStudent", "addStudentToSection", "removeStudentFromSection","selectSection2",
        "sectionList","selectTeacher", "showTeacher","addTeacherToSection","noOneEnrolled",
        "sectionRoster"];

    for(var i=0;i<ids.length;i++){
        document.getElementById(ids[i]).style.display='none';
    }


}

function displayViewLists(){
    hideEverything();
    document.getElementById("categories").style.display='inline';
    document.getElementById("listItems").style.display='inline';
    document.getElementById("list").style.display='inline';

}

function displayEditLists(){
    hideEverything();
    document.getElementById("listEdit").style.display='inline';
    document.getElementById("dataFields").style.display='inline';

}

function displayEditEnrollment(){
    hideEverything();
    document.getElementById("selectSection").style.display='inline';
    document.getElementById("showEnrollment").style.display='inline';
    document.getElementById("noOneEnrolled").style.display='inline';
    document.getElementById("sectionRoster").style.display='inline';
    document.getElementById("selectStudent").style.display='inline';
    document.getElementById("addStudentToSection").style.display='inline';
    document.getElementById("removeStudentFromSection").style.display='inline';
    document.getElementById("confirmationMessage").style.display='inline';
}

function displayEditTeacherAssignment(){
    hideEverything();
    document.getElementById("selectSection2").style.display='inline';
    document.getElementById("sectionTeacher").style.display='inline';
    document.getElementById("showTeacher").style.display='inline';
    document.getElementById("selectTeacher").style.display='inline';
    document.getElementById("addTeacherToSection").style.display='inline';
    document.getElementById("confirmMessage2").style.display='inline';
}

