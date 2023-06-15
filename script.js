//your JS code here. If required.
var para = document.getElementById("status");
var button =  document.getElementById("enterBtn");
var h1 = document.getElementById("display");
button.addEventListener('click', ()=>{
	setTimeout(()=>{
	let h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	para.parentNode.replaceChild(h1,para);
 },4000);
	
});
