// business
//var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

function hasNumbers(originalSentence) {
  return /\d/.test(originalSentence);
}

function pigLatin(originalSentence) {
  var sentenceArray = originalSentence.split("");


if (((sentenceArray[0]) === "Q" || "q") && ((sentenceArray[1]) === "U" || "u")) {
  var qArray = sentenceArray.shift();
  sentenceArray.push(qArray);
  var finalQArray = sentenceArray.shift();
  sentenceArray.push(finalQArray);
};

// this only works if the letters are in the order they are in the array.
  for (i = 0; i < sentenceArray.length; i++) {
    consonants.forEach(function(consonant) {
      if (consonant === sentenceArray[0]) {
        var consonantArray = sentenceArray.shift();
        sentenceArray.push(consonantArray);
        // sentenceArray.push("ay");
      }
    });
 }


  sentenceArray.push("ay");
  finalSentence = sentenceArray.join("");
  console.log(finalSentence);
  return finalSentence;
};





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
