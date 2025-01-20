//your JS code here. If required.


let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', submitInput);
async function submitInput(){
let text = document.getElementById('text').value.trim();
let delay = document.getElementById('delay').value;
let delayNumber = Number(delay);
	if(!delay || delay<=0 ){
		output.innerHTML = `<p>Please Enter Dealy in milliseconds</p>`
		return
	}
  await	new Promise((resolve , reject)=>{
	  		setTimeout(()=>{
		   output.innerHTML = `<p>${text}</p>`
				resolve();
	  },delayNumber);
  document.getElementById('text').value = '';
  document.getElementById('delay').value = '';
  })
}




