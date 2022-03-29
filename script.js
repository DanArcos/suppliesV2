console.log("Page Loaded")

const container = document.querySelector("#container")
let artboard1 = document.querySelector(".artboard1");
let animalDiv = document.createElement('div');
animalDiv.classList.add("animalDiv")
artboard1.append(animalDiv);

// Helper function to load animals
let loadAnimals = (array) => {
    for (let i = 0; i < array.length; i++) {
        currentAnimal = array[i]


        let img = document.createElement('img');
        img.classList.add('animal')
        img.src = "./images/" + currentAnimal + ".png";
        img.alt = currentAnimal;

        animalDiv.appendChild(img)

        // Create audio
        audio = document.createElement('audio')
        audio.classList.add('audio')
        audio.src = "./audio/" + currentAnimal + ".mp3";
        audio.dataset.key = currentAnimal;
        container.appendChild(audio);

    }
}

let animalArray = ['sheep', 'bear', 'carrot', 'cat', 'cow']
loadAnimals(animalArray)

let p = document.createElement('p');
artboard1.appendChild(p);
p.textContent = "";

// Function play animal sound
let playAnimalSound = (e) => {
    let sound = document.querySelector(`audio[data-key="${e.target.alt}"]`)
    sound.currentTime = 0;
    sound.play();
}

let i = 0;
animalBtns = document.querySelectorAll(".animal")
animalBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.alt)
        playAnimalSound(e)

        element.classList.add("animal_jump")

        // console.log(e.target.classList)
        // console.log(!e.target.classList.contains("animal_clicked"))

        if (!e.target.classList.contains("animal_clicked")) {
            i++;
            element.classList.add("animal_clicked")
        }

        if (i === 5) {
            console.log("All animals have been clicked!")
            p.textContent = "You found all the animals!"
            p.style.opacity = 1;
            // p.classList.add("p-fade-in")
        }

    });

    // Add an event listener for when the transition ends
    // Reverse scaling transition
    // Note that we keep opactiy the same.
    element.addEventListener('transitionend', (e) => {
        element.classList.remove("animal_jump")
    });

});

p.addEventListener('transitionend', (e) => {
    console.log("Fade out the first screen")
    artboard1.style.opacity = 0;
});