async function populate() {
    const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

    const request = new Request(requestUrl);

    const response = await fetch(request);

    const superHeroes = await response.json();


    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader (obj) {
    const header = document.querySelector('header');
    const h1 = document.createElement('h1');

    h1.textContent = obj.squadName;
    header.appendChild(h1);

    const para = document.createElement('p');
    para.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`; 

    header.appendChild(para);
}

// create superhero cards
function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes) {
        const article = document.createElement('article'); // hold the card

        const h2 = document.createElement('h2');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');
        const list = document.createElement('ul');

        h2.textContent = hero.name;
        para1.textContent = `Secret Identity: ${hero.secretIdentity}`;

        para2.textContent = `Age: ${hero.age}`;
        para3.textContent = `Superpowers:`;

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const li = document.createElement('li');
            li.textContent = power;
            list.appendChild(li);
        }

        article.appendChild(h2);
        article.appendChild(para1);
        article.appendChild(para2);
        article.appendChild(para3);
        article.appendChild(list);

        section.appendChild(article);
    }
}

populate();