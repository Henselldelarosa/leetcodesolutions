const isPalindrome = (x) =>{
  let numStr = x.toString()
  let compare = ''

  for(let i = numStr.length - 1; i >= 0; i--){
    compare += numStr[i]
  }

  if(compare === x.toString())
  return true
  else return false
};

// Example 1
console.log(isPalindrome(121))
// Example 2
console.log(isPalindrome(-123))
// Example 3
console.log(isPalindrome(10))
