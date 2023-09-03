const threeSum = (nums) =>{
  nums.sort((a,b) => a - b)
  let result = []

  for(let i = 0; i < nums.length; i++){
      if (i > 0 && nums[i] === nums[i -1]) continue

      const target = 0 - nums[i]

      let left = i + 1

      let right = nums.length -1

      while(right >left){
          const sum = nums[left] + nums[right]

          if(sum > target){
              right--
          }
          else if (sum < target){
              left++
          }
          else{
              result.push([nums[i], nums[left], nums[right]])
              while(nums[left] === nums[left + 1] ) left++
              while(nums[right] === nums[right - 1] ) right--
              left ++
              right --
          }
      }
  }
  return result
}


// example 1
console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]
// example 2
console.log(threeSum([0,1,1])) //[]
// example 3
console.log(threeSum([0,0,0])) //[[0,0,0]]
