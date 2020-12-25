const dark = document.getElementsByClassName('light_ch')[0]
const body = document.getElementById('body')
const bg = document.getElementsByClassName('container')[0]
const list = document.getElementsByClassName('list')[0]
const input = document.getElementsByClassName('input')[0]
const out = document.getElementsByClassName('out')[0]

let dark_ch = 'black'

dark.addEventListener('click', function(){
    if (dark_ch === 'black'){
        body.style = 'background-color: rgb(24, 24, 36);'
        dark_ch = 'white'
        bg.style = "background-image: url('images/bg-desktop-dark.jpg');"
        dark.setAttribute('src', 'images/icon-sun.svg')
        list.style = 'background-color: hsl(233, 14%, 35%); color: white;'
        out.style = 'color: white;'
        input.style = 'background-color: hsl(233, 14%, 35%); color: white'
    }
    else {
        body.style = 'background-color: white;'
        dark_ch = 'black'
        bg.style = "background-image: url('images/bg-desktop-light.jpg');"
        dark.setAttribute('src', 'images/icon-moon.svg')
        list.style = 'background-color: white; color: black;'
        out.style = 'color: black;'
        input.style = 'background-color: white; color: black'
    }
})