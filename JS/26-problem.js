const removeDuplicates = (nums) =>{
  let count = 0

  for(let i = 0; i <nums.length; i++){
      if(nums[i] !== nums[i+1]){
          nums[count] = nums[i]
          count++
      }
  }
  return count
};

//example1
console.log(removeDuplicates([1,1,2]))//2
//example2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))//5
//example3
console.log(removeDuplicates([]))//0
