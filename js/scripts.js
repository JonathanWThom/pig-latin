// business

function hasNumbers(originalSentence) {
  return /\d/.test(originalSentence);
}

function pigLatin(originalSentence) {

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
    } else (
      $("#result").text(translated);
    )
  });
});
