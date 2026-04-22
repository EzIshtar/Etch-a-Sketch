const container = document.querySelector("#container")

function buildGrid(size) {
    for(let i = 1; i < size+1; i++)
    {
        for(let j = 1; j < size+1; j++)
        {
            let div = document.createElement("div")
            div.classList.add("div-class")
            div.style.flex = `1 0 ${(100/(size+1))}%`
            container.appendChild(div)
        }
    }
}
let only = true;

if(only == true){
    buildGrid(16)
    only = false;
}

container.addEventListener('mouseover', (event) => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(1)
})

const button = document.querySelector("#but");
button.addEventListener('click', (event) => {
    let i = Number(prompt("Enter Grid Size: "))
    container.replaceChildren();
    buildGrid(i)
})
