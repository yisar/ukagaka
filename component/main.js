import classes from '../static/style.css'
import data from '../static/data.json'
import drag from './drag'


export default ()=>{
		const max = data.data.length-1
		let index=Math.round(Math.random()*max)
		let HTML=
		`<div class="tips">${data.data[index].tip}</div>
				<i class="icon"></i>
				<div class="face ${data.data[index].face}"></div>`		
		document.querySelector('.ukagaka').innerHTML=HTML	

		drag()
}