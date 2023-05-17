function solve(ch1,ch2,ch3){
   let string = ch1+ch2+ch3
   let reversed = string.split('').reverse('').join(' ')
   console.log(reversed);
}
solve('A',
'B',
'C'
)