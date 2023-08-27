const lengthOfLongestSubstring = (s) =>{
  // counter variable
  let windowStart = 0
  // hash the values
  const soFar = {}

  let max = 0


  for(let i = 0; i < s.length; i++){
      let rightChar = s[i]

      // if the hash already has the char it will be increased by 1 else it will be set to 1
      soFar[rightChar] = soFar[rightChar] + 1 || 1

      while(soFar[rightChar] > 1){
          let leftChar = s[windowStart]

          // if the the following character is already in the hash the decrement it by 1
          if(soFar[leftChar] > 1){
              soFar[leftChar]--
          } else{
              delete soFar[leftChar]
          }
          windowStart++
      }

      max = Math.max(max, (i - windowStart) + 1)
  }

  return max

};
