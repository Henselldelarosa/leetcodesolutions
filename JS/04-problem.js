const findMedianSortedArrays = (nums1, nums2) =>{
  for(let num of nums1){
      nums2.push(num)
  }
let sort = nums2.sort(function(a,b){return a-b})

    if(nums2.length ===1) return nums2[0]

    if(nums2.length % 2 === 0){
        let half1 = sort.slice(0, sort.length/2)
        let half2 = sort.slice(sort.length/2, sort.length)
        let sum = half1[half1.length -1] + half2[0]
        return sum / 2
    }

    nums2.pop()
    let half = sort.slice(sort.length/2, sort.length)
   return half[0]
  }

// example 1
console.log(findMedianSortedArrays([1,3], [2]))
// example 2
console.log(findMedianSortedArrays([1,2], [3,4]))
