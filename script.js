let width = "500"
let height = "500"
let detTegnes = false
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



function clearCanvas() {
    ctx.clearRect(0, 0, width, height)
}

document.addEventListener('coloris:pick', event => {
    valgtFarge = event.detail.color
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

function stylePenselTjukkelse(knappId) {

    tjukkelseId = ["hviskeler", "2pxKnapp", "5pxKnapp", "10pxKnapp", "20pxKnapp"]

    for (let i = 0; i < tjukkelseId.length; i++) {
        let knapp = document.getElementById(tjukkelseId[i])
        knapp.style.border = "1px solid black"
    }

    let trykket = document.getElementById(knappId);
    if (knappId == "2pxKnapp") {
        pxStorrelse = 2
        valgtFarge = "black"
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "5pxKnapp") {
        pxStorrelse = 5
        valgtFarge = "black"
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "10pxKnapp") {
        pxStorrelse = 10
        valgtFarge = "black"
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "20pxKnapp") {
        pxStorrelse = 20
        valgtFarge = "black"
        trykket.style.border = "2px solid black"
    }
    else if (knappId == "hviskeler") {
        pxStorrelse = 5
        valgtFarge = "white"
        trykket.style.border = "2px solid black"
    }
}

function stylePenselFarge(knappId) {

    fargeId = [ "gron", "rod", "blaa", "fyll" ]

    for (let i = 0; i < fargeId.length; i++) {
        let knapp = document.getElementById(fargeId[i])
        knapp.style.border = "1px solid black"
    
    }

    let trykketFarge = document.getElementById(knappId);

    if (knappId == "gron") {
        valgtFarge = "green"
        trykketFarge.style.border = "2px solid black"
    }

    else if (knappId == "rod"){
        valgtFarge = "red"
        trykketFarge.style.border = "2px solid black"
    }
    
    else if (knappId == "blaa") {
        valgtFarge = "blue"
        trykketFarge.style.border = "2px solid black"        
    }

    else if (knappId == "fyll"){
        trykketFarge.style.border = "2px solid black"
    }
}



canvas.addEventListener("mousedown", function (event) {
    detTegnes = true
    let rect = canvas.getBoundingClientRect();
    xMouse = event.clientX - rect.left
    yMouse = event.clientY - rect.top

})

canvas.addEventListener("mouseup", function (event) {
    detTegnes = false
    ctx.stroke()
    ctx.beginPath()
})

canvas.addEventListener("mousemove", function (event) {
    if (event.buttons === 1) {
       
        let rect = canvas.getBoundingClientRect();
        xMouse = event.clientX - rect.left
        yMouse = event.clientY - rect.top

        ctx.lineWidth = pxStorrelse;
        ctx.lineCap = 'round';
        ctx.strokeStyle = valgtFarge;

        ctx.lineTo(xMouse, yMouse);
        ctx.stroke();
    }
})
