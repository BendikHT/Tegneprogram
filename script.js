let width = "500"
let height = "500"
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const tegnebrett = document.querySelector('.tegnebrett')
const farge1 = document.getElementById('farge1')
const form = document.querySelectorAll('form')

let inputWidth = document.getElementById('width')
let inputHeight = document.getElementById('height')



let xMouse = 0
let yMouse = 0

function start() {
    tegnebrett.style.gridTemplateColumns = `100px ${width}px 100px`
    tegnebrett.style.gridTemplateRows = `100px ${height}px 100px`
    canvas.width = width
    canvas.height = height
}

start()

function rektangel5(x, y) {
    ctx.beginPath()
    ctx.rect(x, y, 5, 5)
    ctx.fillStyle = 'black'
    ctx.fill()
}

function mousecordinate(event) {
    canvas.addEventListener("mousemove", function (event) {
        if (event.buttons === 1) {
            let rect = canvas.getBoundingClientRect();
            yMouse = event.clientY - rect.top
            xMouse = event.clientX - rect.left
            rektangel5(xMouse, yMouse)
        }
    })
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
        tegnebrett.style.gridTemplateColumns = `100px ${width}px 100px`
    }

})

inputHeight.addEventListener('input', function () {
    if (inputHeight.value / window.innerHeight <= 0.85 && inputHeight.value >= 500) {
        height = inputHeight.value
        canvas.height = height
        tegnebrett.style.gridTemplateRows = `100px ${height}px 100px`
    }
    console.log(height / window.innerHeight)
})

function lagreBilde() {
    let link = document.createElement('a')
    link.download = 'tegning.png'
    link.href = canvas.toDataURL()
    link.click()
}