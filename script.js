document.getElementById('generateFactBtn').addEventListener('click', generateRandomFact);

const facts = [
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Bananas glow blue under black lights.",
    "Bees sometimes sting other bees.",
    "The unicorn is the national animal of Scotland.",
    "A group of flamingos is called a 'flamboyance'."
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('factDisplay').textContent = randomFact;
}
