export default ()=>{
	let offsetX=0
	let offsetY=0

	let isdrag=false


	// 鼠标按下事件
	document.querySelector('.face').addEventListener('mousedown',(e)=>{
		offsetX=e.pageX-document.querySelector('.ukagaka').offsetLeft
		offsetY=e.pageY-document.querySelector('.ukagaka').offsetTop
		isdrag=true

	})

	// 鼠标移动事件
	document.onmousemove=(e)=>{
		let mouseX=e.pageX
		let mouseY=e.pageY

		let moveX=0
		let moveY=0

		if(isdrag===true){
			moveX=mouseX-offsetX
			moveY=mouseY-offsetY

			let pageWidth=document.body.clientWidth
			let pageHeight=document.documentElement.clientHeight

			const ukaWidth=document.querySelector('.ukagaka').offsetWidth
			const ukaHeight=document.querySelector('.ukagaka').offsetHeight

			let maxX=pageWidth-ukaWidth
			let maxY=pageHeight-ukaHeight
			

			moveX=Math.min(maxX-10,Math.max(10,moveX))
			moveY=Math.min(maxY-10,Math.max(10,moveY))

			document.querySelector('.ukagaka').style.left=moveX+'px'
			document.querySelector('.ukagaka').style.top=moveY+'px'

		}
	}

	// 鼠标松开事件
	document.onmouseup=()=>{
		isdrag=false
	}
}