//Ques4.

function generateNumbersBetween(num1 , num2){
    if(num1 >= num2){
        console.log("num1 should be less than num2");
        return;
    }

    for(let i = num1 + 1; i < num2; i++){
        console.log(i);
    }
}

const num1 = 10;
const num2 = 25;
generateNumbersBetween(num1, num2);