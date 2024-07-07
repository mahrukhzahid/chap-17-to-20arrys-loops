// // // Q1) Declare and initialize an empty multidimensional array.(Array of arrays)

let emptyMultiArray = [[],[],[]];

// // // Q2) 

let multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (let i = 0;i < multiArray.length;i ++) {
    document.write(`<h1>${multiArray[i].join(' ')}</h2>`);
}

// // // Q3) Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    document.write(`${i}<br/>`);
}

// // // Q4) Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

tableNum = +prompt("Enter number of table");
tableLeng = +prompt("Enter length of table");
    document.write(`Multiplication table of : ${tableNum}<br> Length : ${tableLeng}<br/><br/>`)
for (let j = 1; j <= tableLeng; j++) {
    document.write(`${tableNum} x ${j} = ${tableNum*j}<br/>`);
}

// // // Q5) Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

fruits = ["apple","banana","mango","orange","strawberry"];
for (let i = 0; i<fruits.length;i++) {
    document.write(`${fruits[i]}<br/>`);
}
document.write("<br/>");
for(let j = 0;j<fruits.length;j++) {
    document.write(`Element at index ${j} is ${fruits[j]}<br>`);
}

// // // Q6) Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write(`<h2>Counting :</h2>`);

let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write(counting);

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

counting.reverse();

document.write(`<h2>Reverse Counting :</h2>`);

for (let i = 5; i <=14;i++) {
    document.write(`${counting[i]},`);
}
document.write(`<br/>`);

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write(`<h2>Even :</h2>`);

for (let j = 0;j<=20;j++) {
    if (j%2 == 0) {
        document.write(`${j},`);
    }
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write(`<h2>Odd :</h2>`);

for (let j = 0;j<=20;j++) {
    if (j%2 == 1) {
        document.write(`${j},`);
    }
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`<h2>Series :</h2>`);

for (let k = 2;k<=20;k++) {
    if (k % 2 ==0){
        document.write(`${k}k,`);
    }
}

// // // Q7) 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.

let things = ["cake","apple pie","cookie","chips","patties"];
let order = prompt("Welcome to the ABC Bakery.What do you want to order Sir/Ma'am ?");
if (things.includes(order)){
    document.write(`${order} is available at index ${things.indexOf(order)} in our bakery`);
}
else {
    document.write(`We are sorry.${order} is not available in our bakery`);
}

// // // Q8) Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

let numberArray = [24,53,78,91,12];

document.write("<h2>Array items</h2>");

let largestNum = Math.max(...numberArray);

document.write(`<h2>The Largest number is : ${largestNum}</h2>`);

// // // Q9) Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

let numbersArray = [24,53,78,91,12];

document.write("<h2>Array items</h2>");

let smallestNum = Math.min(...numbersArray);

document.write(`<h2>The Smallest number is : ${smallestNum}</h2>`);

// // // Q10) Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 1; i <= 100;i ++) {
    if (i % 5 == 0) {
        document.write(`${i},`);
    }
}