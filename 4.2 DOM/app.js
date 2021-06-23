const container = document.getElementById("container")

const container2 = document.querySelector("#container")

const listItems = document.querySelectorAll(".second")

const li = document.querySelector("ol .third")

container2.textContent = "Hello"

const div = document.querySelector(".footer")
div.classList.add("main")

div.classList.remove("main")

const li = document.createElement("li")

li.innerText = "four"

const ul = document.querySelector("ul")
ul.appendChild(li)

const lis = document.querySelectorAll("ol li");
for(let li in lis){
    li.style.backgroundColor = "green"
}

div.remove();