import classes from '../static/style.css'
import data from '../static/data.json'
import close from './close'
import menu from './menu'

export default () => {
    const max = data.data.length - 1
    let index = Math.round(Math.random() * max)
    let times = 0
    let HTML =
        `<div class="tips">${data.data[index].tip}</div>
				<i class="icon"></i>
				<div class="face ${data.data[index].face}"></div>
				<i class="close">×</i>
				<i class="menu">menu</i>`

    document.querySelector('.ukagaka').innerHTML = HTML

    const interval = setInterval(() => {
        times += 1
        if (times == data.times) {

            clearInterval(interval)
        }
        fetch('/').then((res) => {
            if (res.status === 200) {
                let index = Math.round(Math.random() * max)
                document.querySelector('.tips').innerHTML = data.data[index].tip
                document.querySelector('.face').classList.remove("face1", "face2", "face3")
                document.querySelector('.face').classList.add(data.data[index].face)
            }
        })
    }, data.time)



    close()
    menu()

}