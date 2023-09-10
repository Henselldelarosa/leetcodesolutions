const searchInsert = (nums, target) =>{
  const secondNums = nums.slice()
  secondNums.push(target)

  if(nums.includes(target)){
      return nums.indexOf(target)
  }else{
      secondNums.sort(function(a, b) {
          return a - b}
          )
  }
  return secondNums.indexOf(target)
};


//example1
console.log(searchInsert([1,3,5,6], 5)) //2
//example2
console.log(searchInsert([1,3,5,6], 2)) //1
//example3
console.log(searchInsert([1,3,5,6], 7)) //4
