const reverse = (x) =>{

  let intChar = x.toString().split('')
  let intRev = []


  if(intChar[0] === '-'){
      for(let i = intChar.length -1; i > 0; i--){
          let idx = intChar[i]
          intRev.push(idx)
      }
      let strArr = intRev.join('')
      let negChecker =  parseInt('-' + strArr)
      if(negChecker < -2147483648){
          return 0
      }
      return negChecker
  }
  else{
     let arrToStr = intChar.reverse().join('')
     const checker = parseInt(arrToStr)

     if(checker > 2147483647){
         return 0
     }
     return checker


  }
 };

// example 1
console.log(reverse(123)) // 321
// example 2
console.log(reverse(-123)) // -321
// example 3
console.log(reverse(120)) // 21
