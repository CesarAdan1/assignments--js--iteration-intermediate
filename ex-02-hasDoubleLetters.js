/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

// ++ YOUR CODE below
function hasDoubleLetters(string) {
   let x = false;
   var newString=string.toLowerCase();

  for(var i=0; i<newString.length; i++) {
    var doubleLetter=newString[i];
    var doubleHigh=newString[i+1];
    
    if(doubleLetter===doubleHigh){
      x =  true;
    }
  }
  return x;
}
    /*for(var j=1; j<=string.length; j++){
      var repeatedLetter=string[j];
    
    if(doubleLetter===repeatedLetter){
        return true;
      } 
      
    }*/
  
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-02');
  console.log('%cFunction: hasDoubleLetters', 'background-color: green; color: white')
console.groupEnd();

  console.log('Should return true for arg input "shutter"');
  console.assert(hasDoubleLetters('stutter') === true)

  console.log('Should return false for arg input "prospect"');
  console.assert(hasDoubleLetters('prospect') === false)


  console.log('Should return false for arg input "shoehorn"');
  console.assert(hasDoubleLetters('shoehorn') === false)

  console.log('Should return true for arg input "Aardvark"');
  console.assert(hasDoubleLetters('Aardvark') === true)

console.log('\n')
