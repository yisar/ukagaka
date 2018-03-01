import data from '../static/data.json'
export default () => {
    const MENU = `<ul>
    <li><a href="https://github.com/132yse/ukagaka">Github</a></li>
    <li><a href="https://www.yisaer.com">伊撒尔の窝</a></li>
    </ul>`

    let isBack = false


    document.querySelector('.menu').onclick = () => {
        isBack = !isBack
        if (!isBack) {
            const max = data.data.length - 1
            let index = Math.round(Math.random() * max)
            document.querySelector('.menu').innerHTML = 'menu'
            document.querySelector('.tips').innerHTML = data.data[index].tip
        } else {
            document.querySelector('.tips').innerHTML = MENU
            document.querySelector('.menu').innerHTML = 'back'
            return
        }
    }



}