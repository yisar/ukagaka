import classes from './static/reset.css'
import main from './component/main'
import drag from './component/drag'

const DOM = `<div class="ukagaka"></div>`
document.querySelector('body').innerHTML += DOM

main()
drag()