const panels = document.querySelectorAll('.panels')

panels.forEach(panels => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}