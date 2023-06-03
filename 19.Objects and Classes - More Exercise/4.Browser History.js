function browserHistory(browserObj,actionsArr){
 
    actionsArr.forEach(line => {
     let [command, page] = line.split(' ')
      if(command === 'Close'){
          let result = browserObj['Open Tabs'].filter(element => element !== page)
          if(browserObj['Open Tabs'].includes(page)){
            browserObj['Recently Closed'].push(page)
          browserObj['Open Tabs'] = result
          browserObj['Browser Logs'].push(line)}
          
      }else if (command === 'Open'){
        browserObj['Open Tabs'].push(page)
        browserObj['Browser Logs'].push(line)
      }else{
        browserObj['Open Tabs'] = []
        browserObj['Browser Logs'] = []
        browserObj['Recently Closed'] = []

      }
 });

   let browserData = Object.keys(browserObj)

   for (const key of browserData) {
       if(key === 'Browser Name'){
           console.log(browserObj[key]);
       }else{
        console.log(`${key}: ${browserObj[key].join(', ')}`);
       }
        
   }
    
}
browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
) 
console.log('---');

browserHistory({"Browser Name":"Mozilla Firefox",
 "Open Tabs":["YouTube"],
 "Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])