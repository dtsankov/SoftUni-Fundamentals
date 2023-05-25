function solve(arr){
  let x1 = +arr[0]
  let x2 = +arr[2]
  let y1 = +arr[1]
  let y2 = +arr[3]

  let result = Math.sqrt(Math.pow(x2-x1)+Math.pow(y2-y1))

  console.log(result);
}
solve([3, 0, 0, 4])