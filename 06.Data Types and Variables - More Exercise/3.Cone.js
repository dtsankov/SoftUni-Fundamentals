function solve(r,h){
let volume = 1/3*h*Math.PI*Math.pow(r,2)
let area = Math.PI*r*Math.sqrt(Math.pow(r,2)+Math.pow(h,2)) + Math.PI*Math.pow(r,2)
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);

}
solve(3,5)