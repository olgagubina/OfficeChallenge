// 1 - JAVASCRIPT FUNCTIONS
// Exercise 1
function calcAge (actYear,yearOfBorn) {
    var age = actYear - yearOfBorn;
    return(age);
    };
    
    var age = calcAge(2017, 1989);

//Exercise 2
function calcAge (actYear,yearOfBorn) {
    var age1 = actYear - yearOfBorn;
    var age2 = actYear - yearOfBorn -1;
    return("Youe are either " + age1 + " or " + age2);
    };
    
    var age = calcAge(2017, 1989);

//Exercise 3
// Write a JavaScript function called isPrime that accepts a number as a parameter and checks if 
//the number is prime or not. Return true if it is prime or false if it is not prime. Don't Google this one ;)
function isPrime(num){
    if(typeof(num) == "number") {
        for (i=2; i < num; i++) {
            if (num%i == 0){
                return false;
            } else {
                return true;
            };
        };
        
    } else {
        console.log ("Error");
    };
};

isPrime(13);
isPrime(14);
isPrime('Olga');

//Exrecise 4
// Write a JavaScript function that accepts an array of integers as a parameter and returns the average of all its items.
var arr = [1, 23, 45, 67, 3, 4, 8, 7, 6];

function Avverage(array) {
    if (typeof(array) == "object") {
        for (i = 0; i < array.length; i++) {
            if (Number.isInteger(array[i])){
            var counter = 0;
            for(var i = 0; i < array.length; i++){
            counter += array[i];
        };
        var avver = counter/array.length;
        console.log(avver);
        } else {
            console.log("Papa");
        };
    };
    } else {
        console.log("Mama!");
    };
};

//Exercise 5
//Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. 
//The function should return true or false depending on whether the number exists in the array.



//Exercise 6
// Write a C++ function (just kidding, use JavaScript) that accepts two parameters: one being an array of integers, 
//and the other being a number. The function should print all the numbers from the array that are smaller than 
//the number that was passed in.


