// business
//var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

function hasNumbers(originalSentence) {
  return /\d/.test(originalSentence);
}


function pigLatin(originalSentence) {
  var superFinalSentence = [];
  var wordsArray = originalSentence.split(" ");
  console.log(wordsArray);

  wordsArray.forEach(function(word) {

    var sentenceArray = word.split("");

    if (((sentenceArray[0]) === "Q" || (sentenceArray[0]) === "q") && ((sentenceArray[1]) === "U" || (sentenceArray[1]) === "u")) {
      var qArray = sentenceArray.shift();
      sentenceArray.push(qArray);
      var finalQArray = sentenceArray.shift();
      sentenceArray.push(finalQArray);
    };

    if (((sentenceArray[0]) === "S" || (sentenceArray[0]) === "s") && ((sentenceArray[1]) === "Q" || (sentenceArray[1]) === "q")) {
      var SqArray = sentenceArray.shift();
      sentenceArray.push(SqArray);
      var secondSqArray = sentenceArray.shift();
      sentenceArray.push(secondSqArray);
      var finalSqArray = sentenceArray.shift();
      sentenceArray.push(finalSqArray);
    };

      for (i = 0; i < sentenceArray.length; i++) {
        consonants.forEach(function(consonant) {
          if (consonant === sentenceArray[0]) {
            var consonantArray = sentenceArray.shift();
            sentenceArray.push(consonantArray);
          }
        });
     }

      sentenceArray.push("ay");
      var finalSentence = sentenceArray.join("");
      console.log(finalSentence);
      //return finalSentence;

      superFinalSentence.push(finalSentence);

    });
  var superDuperFinalSentence = superFinalSentence.join(" ");
  console.log(superDuperFinalSentence);
  return superDuperFinalSentence;

}


// UI
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var originalSentence = $("input#userInput").val();
    var isNumber = hasNumbers(originalSentence);
    var translated = pigLatin(originalSentence);

    if (isNumber === true) {
      alert("Please only use letters");
    } else {
      $("#result").text(translated);
    }
  });
});
