
export default ()=>{
	const HTML=	`
		<div class="call">召唤春菜</div>
	`
	document.querySelector('body').innerHTML+=HTML
	document.querySelector('.close').onclick=()=>{
		document.querySelector('.ukagaka').style.display='none'
		document.querySelector('.call').style.display='block'
		console.log('点击了')
	}
	document.querySelector('.call').onclick=()=>{
			document.querySelector('.ukagaka').style.display=''
			document.querySelector('.call').style.display='none'
			
		}	
}