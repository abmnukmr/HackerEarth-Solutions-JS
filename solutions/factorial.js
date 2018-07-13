/*You have been given a positive integer  N. You need to find and print the Factorial of this number. 
Input Format:
The first and only line of the input contains a single integer N denoting the number whose factorial you need to find.

Output Format
Output a single line denoting the factorial of the number N. 

Constraints
1  ≤  N  ≤  10*/

// code to perform I/O withing Hackerearth
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
function main(input) {
    console.log(factorial(parseInt(input)));       // Writing output to STDOUT
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
 
 
// My solution code below
function factorial(num) {
    if (num < 0 ) {
        return 'undefined';
    }
    var fact = 1;
    
    for (var i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
}