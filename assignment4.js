"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var array = [1, 2, 3, 4, 5, 6];
function funct_ion(array, index) {
    array.splice(2, 1);
    console.log(array);
    return array;
}
var newFuction = funct_ion([5, 4, 3, 2, 1], 54);
console.log(newFuction);
// Implement a simple shoppingcart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var shopping_cart = ["flour", "sugar", "salt", "water", "soup"];
function addItems(shopping_cart) {
    shopping_cart.splice(4, 1, "tooth_paste");
    console.log(shopping_cart);
}
// var shopping_cart:string []=["flour","sugar","salt","water", "soup"];
function removeItems(shopping_cart) {
    shopping_cart.splice(4, 1);
    console.log(shopping_cart);
}
// var shopping_cart:string []=["flour","sugar","salt","water", "soup"];
function updateItems(shopping_cart) {
    shopping_cart.splice(4, 1, "brush");
    console.log(shopping_cart);
}
addItems(shopping_cart);
removeItems(shopping_cart);
updateItems(shopping_cart);
// // - Write a program that uses a while loop to print the first 25 integers.
var integer = 1;
while (integer <= 25) {
    console.log(integer);
    integer++;
}
// using for loop
for (let integer = 1; integer <= 25; integer++) {
    console.log(integer);
}
// Write a program that uses a while loop to print the first 10 even numbers.
var numb = 2;
while (numb <= 10) {
    console.log(numb);
    numb += 2;
}
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    while (num = 4) {
        var factorial1 = num * (num - 1) * (num - 2) * (num - 3);
        console.log(factorial1);
        num++;
        return num;
    }
}
// var factorial2 = factorial(4) 
factorial(4);
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var arrayNum = [4, -7, 8, 9, -12, 14];
for (let i = 0; i < array.length; i++) {
    if (arrayNum[i] < 0) {
        arrayNum.splice(i, 1);
    }
}
console.log(arrayNum);
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
var numr = 0;
let total = 0;
function sum(array) {
    while (numr < array.length) {
        total += array[numr];
        numr++;
    }
    console.log("sum of array", total);
}
sum([1, 2, 3, 4, 5]);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var tempratureList = [35, 37, 38, 39, 40];
console.log("temrature in celcius =", tempratureList);
var a = 0;
var i = 0;
while (a < tempratureList.length) {
    i = (tempratureList[a] * 9 / 5) + 32;
    tempratureList[a] = i;
    a++;
}
console.log("temrature in fahernhiet =", tempratureList);
