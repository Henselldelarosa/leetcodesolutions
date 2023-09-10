const removeElement = (nums, val) =>{
  let count = 0

  for (let i = 0; i < nums.length; i++){

      if(nums[i] !== val){
          nums[count] = nums[i]
          count ++
      }
  }
  return count
};


// example 1
console.log(removeElement([3,2,2,3], 3)) //2
// example 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //5
