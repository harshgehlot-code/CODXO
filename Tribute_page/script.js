const quotes = [
    "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    "The secret to creativity is knowing how to hide your sources."
];

document.addEventListener("DOMContentLoaded", function() {
    const quoteBtn = document.getElementById("quote-btn");
    const quoteElement = document.getElementById("quote");

    quoteBtn.addEventListener("click", function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = `"${randomQuote}"`;
    });
});