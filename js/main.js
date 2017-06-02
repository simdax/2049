function App2049(tailleMatrix,nbMvts) {
	document.querySelector("input[type=number]").value=tailleMatrix;
	this.el=document.getElementById('table');
	this.offset={x:nbMvts-1,y:nbMvts-1};
	this.nb=tailleMatrix;
	this.gen= new Generator(nbMvts);

	this.template=document.querySelector('#template');
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
	callback : function (i,j) {
			return function(e){
				this.setOffset(i,j);
			}.bind(this);
		},
	createSVG: function () {
		var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
		var use = document.createElementNS('http://www.w3.org/2000/svg','use');
		use.setAttributeNS('http://www.w3.org/1999/xlink', 
			'href', 
			'img/svg/grass.svg#svg');
		svg.appendChild(use);
		return svg;
	},
  createTd: function (object,i,j) {
  	console.log(this);
		var td = document.createElement('td');
		td.addEventListener('click',this.callback.bind(this)(i,j));
		td.appendChild(object);
		// td.appendChild(this.createSVG());
		return td			
	},
	generate: function() {

		var children=this.el.children;
		for (var i = children.length - 1; i >= 0; i--) {
			var v =children[i];
			this.el.removeChild(v)
		}

		var array = this.gen.genEmptyMatrix(this.nb);
		this.gen.fill(array);

		// this generate HTML
		var html = "";

		var math = new Maths();

		array = math.offsetMatrix(this.offset,array,this.nb);
		var flatMatrix = math.mean(math.flattenArrays(array));

		var colors = new Colors();
		var template = document.importNode(this.template.content, true);

			for (var i = 0; i < array.length ; i++) {
				var tr = document.createElement("tr");
				for (var j = 0; j < array.length ; j++) {
					var o = template.cloneNode(true);
					var td;
					if (array[i][j]==0) {
						var td = this.createTd(o,i,j);
						td.style.backgroundColor='#666';
					} else{
						var br = colors.brightness(flatMatrix[array.length*i+j]);
						var td = this.createTd(o,i,j);
						td.style.backgroundColor=`rgba(${br[0]},${br[1]},${br[2]},1)`;
					}
					tr.appendChild(td);
				}	
				this.el.appendChild(tr);
			}
	}

}

