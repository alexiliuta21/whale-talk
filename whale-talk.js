var input = 'whatever';
let vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log('i is: ', i);
    for (let j = 0; j < vowels.length; j++) {
    //console.log('j is: ', j);
      if ('whatever'[i] === vowels[j]) {
        resultArray.push('whatever'[i]);
      
      if ('whatever'[i] === 'e')  {
        resultArray.push('whatever'[i]);
      }
       if ('whatever'[i] === 'u')  {
        resultArray.push('whatever'[i]);
      }  
      }   
    } 
}

console.log(resultArray.join('').toUpperCase());