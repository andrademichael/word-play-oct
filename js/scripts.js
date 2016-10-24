$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentenceInput").val();
    var words = sentence.split(" ");
    console.log(words);

    var longWords = [];
    words.forEach(function(word) {
      if (word.length > 2) {
        console.log(word);
        longWords.push(word);
      }
    });
    longWords.reverse();
    console.log(longWords);
    alert(longWords.join(" "));
  });
});
