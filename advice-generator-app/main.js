const diceElement = document.querySelector('.circle');
const baseUrl = 'https://api.adviceslip.com/advice';

getRandomAdvice();

function getRandomAdvice() {
    fetch(baseUrl)
        .then((res) => res.json())
        .then(({ slip }) => {
            const titleElement = document.querySelector('.advice-title');
            const quoteElement = document.querySelector('.text-advice');
            titleElement.textContent = `Advice #${slip.id}`;
            quoteElement.textContent = `"${slip.advice}"`;
        })
        .catch((err) => console.error(err));
}
