function removeEveryOther(arr){
  
  return arr.filter( (e, i) => i % 2 === 0)

}

console.log(removeEveryOther([1, 2, 3, 4, 5]))


// params: arr    // an array
// return newArr    // an array with every other element removed
// e.g. removeEveryOther([1, 2, 3, 4, 5])
// results in [1, 3, 5]

// 

// use filter method on the array to filter out for even numbers via index % 2 === 0
// return this array