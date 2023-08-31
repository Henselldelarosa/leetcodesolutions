const myAtoi = (s) =>{
  let strArr = s.split(' ')
  let alpha = "abcdefghijklmngoprstuvwxyz"

  if(parseInt(s) > (2**31) - 1){
     return (2**31) - 1
  }
  if(parseInt(s) < -1 * (2**31)){
      return (2**31) * -1
  }

  if(s.trim().length === 0 ) return 0

  for(let i = 0; i < strArr.length; i++){
       if(Number.isInteger(parseInt(strArr[i]))){
       return parseInt(strArr[i])
       }

      if(!alpha.includes(strArr[i].toLowerCase())){
      return 0
  }
  }
  return 0
};

//example 1
console.log(myAtoi('42'))
//example 2
console.log(myAtoi("   -42"))
//example 3
console.log(myAtoi("4193 with words"))
//example 4
console.log(myAtoi(''))
//example 5
console.log(myAtoi(' '))
//example 6
console.log(myAtoi('342353452543534543'))
//example 7
console.log(myAtoi('-4244324424324234324'))
//example 8
console.log(myAtoi('with words 4193'))
