function solve(str){
    type = typeof(str)
     
    if (type === 'string' || type === 'number') {
        console.log(type);
        console.log(str);
    }else{
        console.log('Parameter is not suitable for printing');
    }
    
}
solve(18)