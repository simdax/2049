var svg = document.querySelector('svg');

function create(x,y,wi,he) {
	var use = document.createElementNS('http://www.w3.org/2000/svg','use');
	use.setAttributeNS('http://www.w3.org/1999/xlink', 
		'href', 
		'img/svg/grass.svg#grass');
	use.setAttribute("x",x);
	use.setAttribute("y",y);
	use.setAttribute("transform", `scale(${wi},${he})`)
	use.setAttribute("style", "filter: url(#lightMe2);")
	svg.appendChild(use);
}

var nb = 20;
for(i=0; i<nb; i++){
	create(
		Math.random()*1000,
	 	Math.random()*500,
	 	Math.random()*1,
	 	Math.random()*1
	);
}
