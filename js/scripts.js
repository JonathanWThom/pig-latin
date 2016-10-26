// business
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function hasNumbers(originalSentence) {
  return /\d/.test(originalSentence);
}

function pigLatin(originalSentence) {
  var sentenceArray = originalSentence.split("");
  vowels.forEach(function(vowel) {
    if (vowel === sentenceArray[0]) {
      sentenceArray.push("ay");
      console.log(sentenceArray);
    }
  });

  finalSentence = sentenceArray.join("");
  console.log(finalSentence);
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
