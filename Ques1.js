/*Q1. What are conditional statements? Explain conditional statements with syntax and examples.

Sol1. Conditional Statements - Conditional statements in js are used to perform different actions based on different conditions. They include 'if', 'if-else', 'if-else if-else', and 'switch' statements.

1. if statement - The 'if' statement executes a block of code if a specified condition is true.

Syntax-*/
if(condition){
    //block of code to be executed if the condition is true
}

//Example-
let x = 10;
if(x > 5){
    console.log("x is greater than 5");
}

/*2. if-else statement - The 'if-else' statement executes one block of code if the condition is true, and another block of code if the condition is false.

Syntax- */
if(condition){
    //block of code to be executed if the condition is true
} else{
    //block of code to be executed if the condition is false
}

//Example-
let y = 3;
if(y > 5){
    console.log("y is greater than 5");
} else{
    console.log("y is not greater than 5");
}

/*3. if-else if-else statement - The 'if-else if-else' statement allows you to test multiple conditions. It executes the block of code corresponding to the first true condition.

Syntax-*/
if(condition1){
    //block of code to be executed if condition1 is true
} else if(condition2){
    //block of code to be executed if condition2 is true
} else if(condition3){
    //block of code to be executed if condition3 is true
} else{
    //block of code to be executed if none of the conditions are true
}

//Example-
let a = 10;
if(a > 20){
    console.log("a is greater than 20");
} else if(a > 15){
    console.log("a is greater than 15 but less than or equal to 20");
} else if(a > 5){
    console.log("a is greater than 5 but less than or equal to 15");
} else{
    console.log("a is 5 or less");
}

/*4. switch statement - The 'switch' statement is used to perform different actions based on different conditions. Its often used when comparing the same variable to different values

Syntax-*/
switch(expression){
    case value1:
        //block of code to be executed if expression === value1
        break;
    case value2:
        //block of code to be executed if expression === value2
        break;
    //you can have any number of case statements
    default:
        //block of code to be executed if expression doesnt match any case         
}

//Example- 
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");                
}