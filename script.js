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

    artboard.appendChild(btn)

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
        console.log(e.target.textContent)
        let sound = document.querySelector(`audio[data-key="${e.target.textContent}"]`)
        sound.play();
    });
});