function generateQuote() {
  $.getJSON("./data/quotes.json", function(json){
    var randNum = 0;
    var max = JSON.stringify(json.length-1);
    var min = 0;
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    var html = '<em>"' + json[randNum].quote + '"</em> - ' + json[randNum].author;
    $(".quote").html(html);
  });
}

function tweet(){
  var quote = $(".quote").text();
  window.open("https://twitter.com/intent/tweet?text="+quote+"&hashtags=CarlSagan, FreeCodeCamp");
}

$(document).ready(function () {
    generateQuote();

    $("#getQuote").on("click", generateQuote);
    $("#tweetQuote").on("click", tweet);
});
