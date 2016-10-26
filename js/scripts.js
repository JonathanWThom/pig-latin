// business









// UI
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var originalSentence = $("input#userInput").val();
    var translated = pigLatin(originalSentence);

    $("#results").text(translated);

  });
});
