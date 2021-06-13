const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let indexSlide = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changesSlide('up')
})

downBtn.addEventListener('click', () => {
    changesSlide('down')
})

function changesSlide(direction) {
    if (direction === 'up') {
        indexSlide++
        if (indexSlide === slidesCount) {
            indexSlide = 0
        }
    } else if (direction === 'down') {
        indexSlide--
        if (indexSlide < 0) {
            indexSlide = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${indexSlide * height}px)`

    sidebar.style.transform = `translateY(${indexSlide * height}px)`
}