function listItems(){
    var listName=document.getElementById("categories").value;
    if(listName=="teacherList"){
        for(var i=0; i<allTeachers.length-1; i++)
        document.getElementById("list").innerHTML=allTeachers;

    }
    if(listName=="studentList"){
        document.getElementById("list").innerHTML=allStudents;
    }
    if(listName=="sectionList"){
        document.getElementById("list").innerHTML=allSections;
    }
}