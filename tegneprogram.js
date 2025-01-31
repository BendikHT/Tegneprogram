const width = "500"
const height = "500"
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = width
canvas.height = height
const tegnebrett = document.querySelector('.tegnebrett')

let xMouse = 0
let yMouse = 0
let rect = canvas.getBoundingClientRect();

tegnebrett.style.gridTemplateColumns = "100px width 100px"
tegnebrett.style.gridTemplateRows = "100px height 100px"

function rektangel5(x, y) {
    ctx.beginPath()
    ctx.rect(x, y, 5, 5)
    ctx.fillStyle = 'black'
    ctx.fill()
}

function mousecordinate(event) {
    canvas.addEventListener("mousemove", function (event) {
        if (event.buttons === 1) {
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