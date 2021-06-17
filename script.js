const form = document.getElementById("form");
const heroButton = document.getElementById("getHeroes");

const url = "http://localhost:3000/hero"
const heroContent = document.getElementById("heroContent");
const heroes = [];



async function getHeroes() {
    // make fetch call to backend with get method
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    data.forEach(hero => {
        heroContent.innerText += `Hero Name: ${hero.heroName}, Hero Power: ${hero.heroPower}, Sidekick: ${hero.sidekick}, Catchphrase: ${hero.catchPhrase}`
    })
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

form.addEventListener("submit", postHero);
heroButton.addEventListener("click", getHeroes);