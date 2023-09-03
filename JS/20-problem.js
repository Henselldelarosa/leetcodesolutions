const isValid = (s) =>{
  let valid = '() [] {}'
  let stack = []
  let i = 0

  while(i < s.length){
      stack.push(s[i])
      i++
      let open = stack[stack.length -2]
      let close = stack[stack.length -1]

      let allow = open + close

      if(valid.includes(allow)){
          stack.pop()
          stack.pop()
      }
  }
  return stack.length === 0
}



// exmaple 1
console.log(isValid('()')) // true
// exmaple 2
console.log(isValid('()[]{}')) // true
// exmaple 3
console.log(isValid('(]')) // false
