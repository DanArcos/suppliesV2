console.log("Page Loaded")

const container = document.querySelector("#container")

let artboard = document.querySelector(".artboard");
// artboard.textContent = "Content"

let animals = ['sheep', 'bear', 'carrot', 'cat', 'cow']

// Add 6 items to a
for (let i = 0; i < animals.length; i++) {
    currentAnimal = animals[i]

    let btn = document.createElement('button')
    btn.classList.add('animal')
    btn.textContent = currentAnimal;

    let img = document.createElement('img');
    img.classList.add('animal')
    img.src = "./images/" + currentAnimal + ".png";
    img.alt = currentAnimal;

    artboard.appendChild(img)

    // Create audio
    audio = document.createElement('audio')
    audio.classList.add('audio')
    audio.src = "./audio/" + currentAnimal + ".mp3";
    audio.dataset.key = currentAnimal;
    container.appendChild(audio);

}

animalBtns = document.querySelectorAll(".animal")
animalBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.alt)
        let sound = document.querySelector(`audio[data-key="${e.target.alt}"]`)
        sound.currentTime = 0;
        sound.play();

        element.classList.add("animal_jump")
        element.classList.add("animal_clicked")
    });

    // Add an event listener for when the transition ends
    // Reverse scaling transition
    // Note that we keep opactiy the same.
    element.addEventListener('transitionend', (e) => {
        element.classList.remove("animal_jump")
    });

});