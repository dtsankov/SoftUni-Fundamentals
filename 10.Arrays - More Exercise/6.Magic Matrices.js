function solve(arr) {
    let arr1 = arr[0];
    let arr2 = arr[1];
    let arr3 = arr[2];

    let totalSum = 0
    let markSum = 0

     

   
  
    for (let i = 0; i < arr.length; i++) {
          if(i == 0){
              markSum+=arr1[i]+arr2[i]+arr3[i]
              totalSum+=(arr1[i] + arr2[i] + arr3[i]) * 2
          }else{
            totalSum+=(arr1[i] + arr2[i] + arr3[i]) * 2
          }
    }
      
    console.log(
        totalSum / (arr.length * 2) == markSum
        ? 'true'
        : 'false'
    );
  }
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )
   solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )
   solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )