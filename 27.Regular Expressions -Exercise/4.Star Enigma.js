function starEnigma (input) {
    let messages = input.shift ();
  
    let pattern = /@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
  
    let attackedPlanets = [];
    let destroyedPlanets = [];
  
    for (let index = 0; index < messages; index++) {
      let encryptedMessages = input[index];
      let count = encryptedMessages
        .toLowerCase ()
        .split ('')
        .filter (el => el === 's' || el === 't' ||  el === 'a' ||  el === 'r')
        .length;
      let decryptedMessage = encryptedMessages
        .split ('')
        .map ((ch) => String.fromCharCode (ch.charCodeAt (0) - count))
        .join ('');
  
  
      let regexMatch = decryptedMessage.match(pattern);
      
      if (regexMatch) {
        if (regexMatch[2] === 'A') {
          attackedPlanets.push (regexMatch[1]);
        } else if(regexMatch[2] === 'D'){
          destroyedPlanets.push (regexMatch[1]);
        }
      }
    }
    console.log (`Attacked planets: ${attackedPlanets.length}`);
    Object.entries (attackedPlanets)
      .sort ((a, b) => a[1].localeCompare (b[1]))
      .forEach (p => console.log (`-> ${p[1]}`));
  
    console.log (`Destroyed planets: ${destroyedPlanets.length}`);
    Object.entries (destroyedPlanets)
      .sort ((a, b) => a[1].localeCompare (b[1]))
      .forEach (p => console.log (`-> ${p[1]}`)); 
  }
  starEnigma(['2',
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR']
  )

  console.log('---');

  starEnigma(['3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR'])