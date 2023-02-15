/*Question:

Implement a function “duplicate” to duplicate an array, as shown below:

For input arr=[1,2] duplicate(arr) should return [1,2,1,2]

//Write your function here
*/


function duplicate(arr) {
    // Write Logic here
  var len = arr.length;                         //here we store length of the array

  for (let i = 0; i < len; i++) {               //we will use for loop and iterate the array
    arr.push(arr[i]);                           //here push returns the new length of the array.
  }
  return arr;
}



// Input and output has already been handled for you



/*process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let arr = chunk.toString()
  arr = arr.split(' ')
  let nums = []
  for(const c of arr) {
      nums.push(parseInt(c))
  }

  const ans = duplicate(nums).join(' ')
  process.stdout.write(ans)
  process.exit();
});*/
