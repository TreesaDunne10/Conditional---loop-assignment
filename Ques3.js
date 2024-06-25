/*Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
examples.

Ans3. Loops - Loops in js are used to repeatedly execute a block of code as long as a specified condition is true. They are essential for tasks that require repetitive operations, such as iterating over arrays or performing actions a certain number of times.

Why We need Loops:
1. Repetition : Loops allow you to repeat actions multiple times without redundant code.
2. Iteration : Loops help iterate over elements of arrays, strings, or objects.
3. Efficiency : Loops make the code concise and maintainable by avoiding manual repetition of code blocks.
4. Dynamic Operations : Loops can handle dynamic data structures where the size or number of elements isn't known in advance.

Types of Loops in JavaScript:
1. for loop - The 'for' loop is used when you know in advance how many times you want to execute a statement or a block of statements.

Syntax-*/
for(initialization; condition; increment/decrement ){
    //code block to be executed
}

//Example- 
for(let i = 0; i < 5; i++){
    console.log("The number is" + i);
}

/*2. while loop - The 'while' loop is used to execute a block of code as long as the specified condition is true.

Syntax-*/
while(condition){
    //code block to be executed
}

//Example-
let i = 0;
while(i < 5){
    console.log("The number is" +i);
    i++;
}

/*3. do-while loop - The 'do-while' loop is similar to the 'while' loop, but it executes the code block once before checking the condition, and then it repeats the loop as long as the condition is true.

Syntax-*/
do{
    //code block to be executed
    while(condition);
}

//Example-
let i = 0;
do{
    console.log("The number is" + i);
    i++;
} while(i < 5);