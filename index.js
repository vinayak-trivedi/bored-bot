
const taskBtn = document.getElementById("getIdeas")

taskBtn.addEventListener("click",() => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ideaContainer").textContent = data.activity
            document.getElementById("ideaContainer").classList.add("box")
            document.getElementById("title").textContent = "Here is your task👇"
            document.body.classList.add("fun")
        })
})