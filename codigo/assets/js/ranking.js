
const friends = document.getElementsByClassName("friend")


for (let index = 0; index < friends.length; index++) {
    const level = document.createElement("h1")
    level.innerText = "level"

    const pontos = document.createElement("h1")
    pontos.innerText = "80pts"

    friends[index].appendChild(level)
    friends[index].appendChild(pontos)

}