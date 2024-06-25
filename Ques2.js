/*Ques 2.*/

function gradeStudent(marks){
    let grade;

    if(marks > 90){
        grade = 'A';
    } else if(marks > 70){
        grade = 'B';
    } else if(marks > 50){
        grade = 'C';
    } else{
        grade = 'F';
    }
    return grade;
}

let marks1 = 95;
let marks2 = 85;
let marks3 = 45;

console.log('Marks: ${marks3}, Grade: ${gradeStudent(marks3)}');