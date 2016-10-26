// business
var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

function hasNumbers(originalSentence) {
  return /\d/.test(originalSentence);
}

function pigLatin(originalSentence) {
  var finalSentence = [];
  var wordsArray = originalSentence.split(" ");
  console.log(wordsArray);

  wordsArray.forEach(function(word) {

    var lettersArray = word.split("");

    if (((lettersArray[0]) === "Q" || (lettersArray[0]) === "q") && ((lettersArray[1]) === "U" || (lettersArray[1]) === "u")) {
      var qArray = lettersArray.shift();
      lettersArray.push(qArray);
      var finalQArray = lettersArray.shift();
      lettersArray.push(finalQArray);
    };

    if (((lettersArray[0]) === "S" || (lettersArray[0]) === "s") && ((lettersArray[1]) === "Q" || (lettersArray[1]) === "q")) {
      var SqArray = lettersArray.shift();
      lettersArray.push(SqArray);
      var secondSqArray = lettersArray.shift();
      lettersArray.push(secondSqArray);
      var finalSqArray = lettersArray.shift();
      lettersArray.push(finalSqArray);
    };

      for (i = 0; i < lettersArray.length; i++) {
        consonants.forEach(function(consonant) {
          if (consonant === lettersArray[0]) {
            var consonantArray = lettersArray.shift();
            lettersArray.push(consonantArray);
          }
        });
     }
      lettersArray.push("ay");
      var finalWord = lettersArray.join("");
      finalSentence.push(finalWord);
    });
  var output = finalSentence.join(" ");
  return output;
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
      $("#output").show();
    }
  });
});
