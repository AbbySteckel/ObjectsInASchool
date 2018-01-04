function listItems(){
    var listName=document.getElementById("categories").value;
    if(listName=="teacherList"){
        document.getElementById("list").innerHTML=allTeachers.firstName;
    }
    if(listName=="studentList"){
        document.getElementById("list").innerHTML=allStudents;
    }
    if(listName=="sectionList"){
        document.getElementById("list").innerHTML=allSections;
    }
}