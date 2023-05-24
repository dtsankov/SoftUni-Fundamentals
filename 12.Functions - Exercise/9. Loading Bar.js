function loadingBar(num){

   loadedBar(num)
   loadingMessege(num)

    function loadedBar(percents){
        if (percents < 100) {
        console.log(`${percents}% [${'%'.repeat(percents/10)}${'.'.repeat(10-percents/10)}]`)
  
        }else{
           console.log('100% Complete!'); 
        }
    }
    function loadingMessege(percents) {
        if (percents < 100) {
            console.log('Still loading...');
        }else{

            console.log('[%%%%%%%%%%]');
        }
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)
