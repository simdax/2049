function App2049(nb) {
	this.el=document.getElementById('table');
	this.gen= new Generator();
	var off = Math.ceil(nb/2);
	this.offset={x:nb-1,y:nb};
	this.nb=nb;
}

App2049.prototype={
	setOffset:function (x,y) {
		this.offset.x = x;
		this.offset.y = y;
		this.generate();
	},
 generate: function() {
	
	// this 
	var array = this.gen.genEmptyMatrix(this.nb);
	this.gen.fill(this.nb,array);

// this generate HTML

	var html = "";

	var math = new Maths();
	var flatMatrix = math.mean(math.flattenArrays(array));
	// console.log(math.flattenArrays(array));

	array = math.offsetMatrix(this.offset,array,this.nb);

	var colors = new Colors();

	var click = 'App.setOffset(${i},${j})';
	for (var i = 0; i < array.length ; i++) {
		html += "<tr>";
		for (var j = 0; j < array.length ; j++) {
			if (array[i][j]==0) {
				html += 
				`<td onclick=App.setOffset(${i},${j})
				style='background-color: black'>${array[i][j]}</td>`;
			} else{
				var br = colors.brightness(flatMatrix[array.length*i+j]);
				if ((i%2!=0 && j%2!=0)||(i%2==0 && j%2==0)) {
						html += `<td
						 onclick=App.setOffset(${i},${j})
						 style='background-color: rgba(${br[2]},${br[1]},${br[0]*10},1)'>${array[i][j]}
						 </td>`;
				}else{				
					html += `<td
					 onclick=App.setOffset(${i},${j})
					 style='background-color: rgba(${br[0]},${br[1]},${br[2]},1)'>
					 ${array[i][j]}
					 </td>`;
				}
			}

		}	
		html += "</tr>";
	}
	this.el.innerHTML =  html;
}

}

