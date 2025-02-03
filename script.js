let width = "500"
let height = "500"
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const tegnebrett = document.querySelector('.tegnebrett')
const farge1 = document.getElementById('farge1')

let inputWidth = document.getElementById('width')
let inputHeight = document.getElementById('height')
let xMouse = 0
let yMouse = 0
let pxStorrelse = 5
let valgtFarge = 'black'

function start() {
    tegnebrett.style.gridTemplateColumns = `100px ${width}px 100px`
    tegnebrett.style.gridTemplateRows = `100px ${height}px 100px`
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, width, height)
}

start()

function rektangel(x, y, breddex, breddey, farge) {
    ctx.beginPath()
    ctx.rect(x, y, breddex, breddey)
    ctx.fillStyle = farge
    ctx.fill()
}



function clearCanvas() {
    ctx.clearRect(0, 0, width, height)
}

Coloris({
    el: '[data-coloris]',
    color: '#000000',
    onChange(color) {
        ctx.fillStyle = color
    }
})

document.addEventListener('coloris:pick', event => {
    console.log('New color', event.detail.color);
});

inputWidth.addEventListener('input', function () {
    if (inputWidth.value / window.innerWidth <= 0.85 && inputWidth.value >= 500) {
        width = inputWidth.value
        canvas.width = width
        start()
    }

})

inputHeight.addEventListener('input', function () {
    if (inputHeight.value / window.innerHeight <= 0.85 && inputHeight.value >= 500) {
        height = inputHeight.value
        canvas.height = height
        start()
    }
    console.log(height / window.innerHeight)
})

function lagreBilde() {
    let downloadLink = document.createElement('a')
    downloadLink.download = 'tegning.png'
    downloadLink.href = canvas.toDataURL()
    downloadLink.click()
}

function stylePensel(knappId) {

    tjukkelseId = ["hviskeler", "2pxKnapp", "5pxKnapp", "10pxKnapp", "20pxKnapp"]

    for (let i = 0; i < tjukkelseId.length; i++) {
        let knapp = document.getElementById(tjukkelseId[i])
        knapp.style.border = "1px solid black"
    }

    let trykket = document.getElementById(knappId);
    if (knappId == "2pxKnapp") {
        pxStorrelse = 2
        trykket.style.border = "2px solid black"
        }
    else if (knappId == "5pxKnapp") {
        pxStorrelse = 5
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "10pxKnapp") {
        pxStorrelse = 10
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "20pxKnapp") {
        pxStorrelse = 20
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "hviskeler") {
        valgtFarge = "white"
        trykket.style.border = "2px solid black"
}
}

function mousecordinate(event) {
    canvas.addEventListener("mousemove", function (event) {
        if (event.buttons === 1) {
            let rect = canvas.getBoundingClientRect();
            yMouse = event.clientY - rect.top
            xMouse = event.clientX - rect.left
            rektangel(xMouse, yMouse, pxStorrelse, pxStorrelse, valgtFarge)
        }
    })
}