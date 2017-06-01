function App2049() {
	// body...
	// this.nb = document.getElementById('io').value;
	this.el=document.getElementById('table');
	this.gen= new Generator();
}

App2049.prototype={
	// body...
 generate: function(nb,centre=this.gen.getCenter(nb)) {
	
	// this 
	var array = this.gen.genEmptyMatrix(nb);
	this.gen.fill(nb,array,centre);

// this generate HTML

	var html = "";
	var arr = catArrays(array);
	var m = mean(arr);
	var click = 'App.generate(${nb},{x:${i},y:${j}})';
	for (var i = 0; i < array.length ; i++) {
		html += "<tr>";
		for (var j = 0; j < array.length ; j++) {
			if (array[i][j]==0) {
				html += 
				`<td onclick=App.generate(${nb},{x:${i},y:${j}})
				style='background-color: black'>${array[i][j]}</td>`;
			} else{
				var br = brightness(m[array.length*i+j]);
				if ((i%2!=0 && j%2!=0)||(i%2==0 && j%2==0)) {
						html += `<td
						 onclick=App.generate(${nb},{x:${i},y:${j}})
						 style='background-color: rgba(${br[2]},${br[1]},${br[0]*10},1)'>${array[i][j]}
						 </td>`;
				}else{				
					html += `<td
					 onclick=App.generate(${nb},{x:${i},y:${j}})
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

