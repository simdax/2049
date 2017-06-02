function App2049(tailleMatrix,nbMvts) {
	document.querySelector("input[type=number]").value=tailleMatrix;
	this.el=document.getElementById('table');
	this.offset={x:nbMvts-1,y:nbMvts-1};
	this.nb=tailleMatrix;
	this.gen= new Generator(nbMvts);
};

App2049.prototype={
	setOffset:function (x,y) {
		this.offset.x = x;
		this.offset.y = y;
		this.generate();
	},
	setWidth:function (nb) {
		this.nb=nb;
		this.generate();
	},
	generate: function() {

		var array = this.gen.genEmptyMatrix(this.nb);
		this.gen.fill(array);

	// this generate HTML
	var html = "";

	var math = new Maths();

	array = math.offsetMatrix(this.offset,array,this.nb);
	var flatMatrix = math.mean(math.flattenArrays(array));

	var colors = new Colors();

	for (var i = 0; i < array.length ; i++) {
		html += "<tr>";
		for (var j = 0; j < array.length ; j++) {
			if (array[i][j]==0) {
				html += 
				`<td 
				onclick=App.setOffset(${i},${j})
				style='background-color: #666'>${array[i][j]}</td>`;
			} else{
				var br = colors.brightness(flatMatrix[array.length*i+j]);
				// if ((i%2!=0 && j%2!=0)||(i%2==0 && j%2==0)) {
				// 	html += `<td
				// 	onclick=App.setOffset(${i},${j})
				// 	style='background-color: rgba(${br[2]},${br[1]},${br[0]*10},1)'>${array[i][j]}
				// 	</td>`;
				// }else{				
					html += `<td
					onclick=App.setOffset(${i},${j})
					style='background-color: rgba(${br[0]},${br[1]},${br[2]},1)'>
					${array[i][j]}
					</td>`;
				// }
			}
		}	
		html += "</tr>";
	}
	this.el.innerHTML =  html;
}

}

