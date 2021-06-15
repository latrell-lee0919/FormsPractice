
const form = document.getElementById("form");

const url = "http://localhost:3000/hero"
const heroes = [];

function getHeroes() {
    // make fetch call to backend with get method
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

postHero = (e) => {
    e.preventDefault();
    const heroName = document.getElementById("heroName").value;
    const heroPower = document.getElementById("heroPower").value;
    const sidekick = document.getElementById("sidekick").value;
    const catchPhrase = document.getElementById("catchPhrase").value;
    console.log(heroName, heroPower, sidekick, catchPhrase)
    //const formData = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            heroName: heroName,
            heroPower: heroPower,
            sidekick: sidekick,
            catchPhrase: catchPhrase
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    //console.log(result);
}

form.addEventListener("submit", postHero)

getHeroes()
