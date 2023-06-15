//your JS code here. If required.
let para = document.getElementById("status");
let button =  document.getElementById("enterBtn");
let h1 = document.getElementById("display");
button.addEventListener('click', ()=>{
	let h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	para.parentNode.replaceChild(h1,para);
});
