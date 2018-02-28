import classes from '../static/style.css'
import data from '../static/data.json'
import close from './close'

export default ()=>{
		const max = data.data.length-1
		let index=Math.round(Math.random()*max)
		let HTML=
		`<div class="tips">${data.data[index].tip}<i class="menu">menu</i></div>
				<i class="icon"></i>
				<div class="face ${data.data[index].face}"></div>
				<i class="close">×</i>`


		document.querySelector('.ukagaka').innerHTML=HTML
		close()

		

}
	