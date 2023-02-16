/*

Question:

Left Rotations

Implement a function that returns an updated array with 1 left rotation on an array of integers
  rotateLeft([1,2,3,4]) // returns [2,3,4,1]


Solution:*/

  var arr=[1,2,3,4];

  function rotateLeft(arr) {
    	var first = arr.shift();       //here we store the shifting(first element from an array and and returns that removed element) of the elements of the array in the variable "first".
      arr.push(first);               //here we pass the "first" and push it the last
    	return arr;                    //here we return our new array.
  }
  console.log(rotateLeft(arr));
