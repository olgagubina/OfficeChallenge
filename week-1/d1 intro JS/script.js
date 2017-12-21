
var simpleArray = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (i = 0; i < simpleArray.length; i++) {
   sum += simpleArray.length;
   break;
   var average = sum/simpleArray.length;
   console.log(average);
};

alert (sum);



/* Exercise Create an array called restaurants and inside it add the names 
of your favorite restaurants (at least 5). Then, create a for that loops 
through the array and console.logs the name of each restaurant.
*/

var restaurants = ["Moon", "American Burger", "Prego", "Xoho", "Shi-shi"];
for (indexRest = 0; indexRest < restaurants.length; indexRest++) {
    console.log (restaurants[indexRest]);
};


/* Exercise
Remember "fizz buzz"? With your partner, write a for loop that loops through 
the numbers 0 through 20 and console.logs "fizz" if the number is divisible 
by 5 and buzz if it's divisible by 3. 
If it's divisible by both 3 and 5, log "fizzbuzz". 
If it's divisible by none of these, just log the number. 
For this you'll need the modulo or % operator.

When you're finished show an instructor your code.
*/

for (var number=0; number <= 20; number++) {
    if (number % 5 == 0 && number % 3 == 0) {
        console.log ("fizzbuzz");
    }
    else if(number % 5 == 0) {
        console.log ("fizz");
    }
    else if (number % 3 == 0) {
        console.log ("buzz");
    }else {
        console.log (number);
    };
};




// Exersice 
var gender = prompt('Whats your gender?');
var age = prompt('Whats your age by the way?');

if (age < 18) {
    alert ("Sorry, baby, you are not yet allowed to drink alco :(")
} else if (gender === "female") {
    alert ("Welcome! You can get the free drink!")
} else if (gender === "male") {
    alert ("Welcome! You can get the drink but you need to pay.")
} else {
    alert ("We don't know what to do with you... Maybe you didn't write the gender right. Try it one more time.")
};

