
document.addEventListener("DOMContentLoaded", function () {
    
    const jojiLyrics = [
        "I'm just a small piece in a huge puzzle; if you don't fit somewhere, just carve yourself a spot.",
        "I think the best way to make a difference is to be different.",
        "Runnin' from the cameras, lookin' in my shadow. Love is lookin' narrow, but I'm lookin' broader.",
        "You've got your reasons, I've got my wants. Still got that highway star gleamin' in your eye.",
        "I don't wanna end me, I don't wanna end me without you.",
        "Trading all my friends for glory. Trading all my ends for glory.",
       
    ];

  
    const quoteDisplay = document.getElementById("quoteDisplay");
    const nextQuoteBtn = document.getElementById("nextQuoteBtn");

    
    let currentQuoteIndex = 0;
    quoteDisplay.textContent = jojiLyrics[currentQuoteIndex];

    
    function showNextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % jojiLyrics.length;
        quoteDisplay.textContent = jojiLyrics[currentQuoteIndex];
    }


    nextQuoteBtn.addEventListener("click", showNextQuote);
});
