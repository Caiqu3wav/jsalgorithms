function pigIt(str){
    let words = str.split(' ');
    let result = [];
      for (let i = 0; i < words.length; i++) {
        result.push(words[i].match(/[a-z]/i) ? 
        words[i].slice(1) + words[i][0] + 'ay' : words[i]);
      }
    
    return result.join(' ');
  }

  console.log(pigIt('Pig latin is cool'));