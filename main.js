import classes from './static/style.css'

	export default ()=>{
		const data={
			tips:[
				'啦啦啦啦我是第一条',
				'啦啦啦啦我是第二条',
				'啦啦啦啦我是第三条'
			]
		}

		let HTML=
		`<div class="ukagaka">
				<div class="tips">
					${data.tips[1]}
				</div>
				<div class="icon"></div>
				<div class="face face1">
				</div>
			</div>`
		console.log(HTML)
		const main = document.getElementById('main')
		main.innerHTML=HTML
}