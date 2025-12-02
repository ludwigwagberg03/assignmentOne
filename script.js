document.addEventListener("DOMContentLoaded", (event) => {
    let title = document.getElementById("title-text");
    let buttons = document.getElementById("buttons");
    let currentLocation = "forest";

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

    function createButtons() {
        buttons.innerHTML = "";

        world[currentLocation].exits.forEach(element => {
            let button = document.createElement("button");
            button.classList.add("my-button");
            button.innerHTML = "Go to " + element;

            button.addEventListener("click", function () {
                currentLocation = element;
                changeLocation();
            })
            buttons.appendChild(button);
        });
    };

    function changeLocation() {
        let data = world[currentLocation];

        document.body.style.backgroundImage = data.image;
        document.body.style.backgroundSize = "cover";
        title.innerHTML = data.text;
        createButtons();
    };
    changeLocation();
});