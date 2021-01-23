let soat = document.querySelector('.h1')

function time() {
	let date = new Date
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let milliseconds = date.getMilliseconds()
	soat.innerText = hours + ":" + minutes + ":" + seconds + ":" + milliseconds
}

setInterval(time,100 )