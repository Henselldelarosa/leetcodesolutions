const romanToInt = (s) =>{
  let sum = 0

  for(let i = 0; i < s.length; i++){
      let pre = s[i -1]

      switch(s[i]){
          case 'I':
              sum += 1
              break

          case 'V':
              sum = pre === 'I' ? sum + 3 : sum + 5
              break

          case 'X':
              sum = pre === 'I' ? sum + 8 : sum + 10
              break

          case 'L':
              sum = pre === 'X' ? sum + 30 : sum + 50
              break

          case 'C':
              sum = pre === 'X' ? sum + 80 : sum + 100
              break

          case 'D':
              sum = pre === 'C' ? sum + 300 : sum + 500
              break

          case 'M':
              sum = pre === 'C' ? sum + 800 : sum + 1000
              break
      }

  }
  return sum
};


// example 1
console.log(romanToInt('III')) //3
// example 2
console.log(romanToInt('LVIII')) //58
// example 3
console.log(romanToInt('MCMXCIV')) //1994
