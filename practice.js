"use strict";
var arr4 = [33.5, 41, 16, 26, 50];
console.log("Temperature in Celcius\n", arr4);
var a = 0;
var f = 0;
while (a < arr4.length) {
    f = (arr4[a] * 9 / 5) + 32;
    arr4[a] = f;
    a++;
}
console.log("Temperature in Farenheit\n ", arr4);
