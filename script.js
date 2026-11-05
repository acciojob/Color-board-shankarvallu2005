//your JS code here. If required.
const container = document.getElementById("container")
const fragment = document.createDocumentFragment()
for(let i =0; i<800; i++){
	const div = document.createElement("div")
	div.classList.add("square")
	div.addEventListener("mouseover",(e)=>{
	    const red = Math.floor(Math.random()*256)
	    const green = Math.floor(Math.random()*256)
	    const blue = Math.floor(Math.random()*256)
	    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
	})
	div.addEventListener("mouseout", (e)=>{
	    setInterval(()=>{
	    e.target.style.backgroundColor = `rgb(10, 10, 10)`;
	    },500)
	})
	fragment.appendChild(div)
}
container.append(fragment)
console.log(fragment)