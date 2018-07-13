/*https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/maximum-sum-4-f8d12458/

You are given an array of integers , you need to find the maximum sum that can be obtained by picking some non-empty subset of the array. If there are many such non-empty subsets, choose the one with the maximum number of elements. Print the maximum sum and the number of elements in the chosen subset.

Input:

The first line contains an integer , denoting the number of elements of the array. Next line contains  space-separated integers, denoting the elements of the array.

Output:

Print  space-separated integers, the maximum sum that can be obtained by choosing some subset and the maximum number of elements among all such subsets which have the same maximum sum.

SAMPLE INPUT 
5
1 2 -4 -2 3

SAMPLE OUTPUT 
6 3*/

function main(input) {

	let input1 = input.split('\n');

	let length = input1[0];

	// Convert the space seperated integers from the second line into an array
	let array = input1[1].split(' ').map(Number);

	let resultSum = 0;
	let subArrElemCount = 0;

	for (let i = 0; i < length; i++) {
		if (array[i] >= 0) {
			resultSum += array[i]
			subArrElemCount++
		}
	}

	// After the above for loop is completely run, if I have sum resultSum and subArrElemCount both still zero, that means all the elements are negative, so, I have to now find the same max sum among all the negative elements. But now, unlike the first for loop, I just need to find the max no from among all the -negavie elements, as all the rest will just add to reduce this max.

	if (resultSum === 0 && subArrElemCount === 0) {
		let min = Number.NEGATIVE_INFINITY;

		for (let i = 0; i < length; i++) {
			if (array[i] > min) {
				min = array[i]
			}
		}
		process.stdout.write(min + " " + 1);

	}
	process.stdout.write(resultSum + " " + subArrElemCount);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
	stdin_input += input;
});

process.stdin.on("end", function() {
	main(stdin_input);
});