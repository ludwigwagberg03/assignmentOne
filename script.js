document.addEventListener("DOMContentLoaded", main);

function main() {
    let title = document.getElementById("title-text");
    let buttons = document.getElementById("buttons");
    let currentLocation = "forest";
    let CharacterInfo = document.querySelector(".character-info");

    let world = {
        forest: {
            image: "url('images/forest.jpg')",
            text: "You have entered Fangorn Forest, where ancient trees whisper secrets of old and Ents wander silently among the shadows.",
            exits: ["village", "cave"]
        },
        village: {
            image: "url('images/village.webp')",
            text: "You arrive at Rivendell, the hidden refuge of the Elves, where serene beauty and the song of water bring peace to weary travelers.",
            exits: ["forest", "river"]
        },
        cave: {
            image: "url('images/cave.jpg')",
            text: "You venture into the Glittering Caves beyond Helm's Deep, sparkling with crystal formations that shimmer like starlight in the dark.",
            exits: ["village", "river"]
        },
        river: {
            image: "url('images/river.jpg')",
            text: "You stand beside the Anduin, the Great River of the West, its waters flowing steadily through lands both fair and perilous.",
            exits: ["village", "cave"]
        }
    };

    let character = {
        name: "Player One",
        hitPoints: 100,
        inventory: ["sword", "axe"]
    }

    changeLocation(world, currentLocation, buttons, title);
    renderCharacterInformation(character, CharacterInfo);
}

function renderCharacterInformation(character, CharacterInfo) {
    createCharacterNameElement(character, CharacterInfo);
    createCharacterHitPointsElement(character, CharacterInfo);
}
function createCharacterNameElement(character, CharacterInfo) {
    let characterName = document.createElement("h4");
    characterName.innerHTML = character.name;

    CharacterInfo.append(characterName);
}

function createCharacterHitPointsElement(character, CharacterInfo) {
    let characterHitPoints = document.createElement("h4");
    characterHitPoints.innerHTML = character.hitPoints;

    CharacterInfo.append(characterHitPoints);
}
function createButtons(world, currentLocation, buttons, title) {
    buttons.innerHTML = "";

    world[currentLocation].exits.forEach(element => {
        let button = document.createElement("button");
        button.classList.add("my-button");
        button.innerHTML = "Go to " + element;

        button.addEventListener("click", function () {
            currentLocation = element;
            changeLocation(world, currentLocation, buttons, title);
        })
        buttons.appendChild(button);
    });
};

function changeLocation(world, currentLocation, buttons, title) {
    let data = world[currentLocation];

    document.body.style.backgroundImage = data.image;
    document.body.style.backgroundSize = "cover";
    title.innerHTML = data.text;
    createButtons(world, currentLocation, buttons, title);
};