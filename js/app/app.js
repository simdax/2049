function App2049(tailleMatrix,nbMvts) {
	document.querySelector("input[type=number]").value=tailleMatrix;
	this.el=document.getElementById('table');
	this.offset={x:nbMvts-1,y:nbMvts-1};
	this.nb=tailleMatrix;
	this.gen= new Generator(nbMvts);
	// this.template=document.querySelector('#template');
	this.mvts=[];
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
	setMvts: function(mvts,i) {
		var s = document.querySelectorAll('.steps');
		this.mvts=[];
		s.forEach( function(v, i) {
			if (v.value.match(/[^<>v^,]/)) {
				console.log('non');
			}else{
					this.mvts[i]=v.value			
			}
		}.bind(this));
		this.gen.setMvts(this.mvts);
		this.generate();
	},
	setSteps:function(steps) {
		this.gen.setSteps(steps);
		this.generate();
	},
	callback : function (i,j) {
			return function(e){
				this.setOffset(i,j);
			}.bind(this);
		},
  createTd: function (i,j,val) {
		var td = document.createElement('td');
		td.textContent = val || 0;
		td.addEventListener('click',this.callback.bind(this)(i,j));
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
		// var template = document.importNode(this.template.content, true);

			for (var i = 0; i < array.length ; i++) {
				var tr = document.createElement("tr");
				for (var j = 0; j < array.length ; j++) {
					// var o = template.cloneNode(true);
					var td;
					if (array[i][j]==0) {
						var td = this.createTd(i,j);
						td.style.backgroundColor='#666';
					} else{
						var val = flatMatrix[array.length*i+j];
						var br = colors.brightness(val)
						var td = this.createTd(i,j,val);
						td.style.backgroundColor=`rgba(${br[0]},${br[1]},${br[2]},1)`;
					}
					tr.appendChild(td);
				}	
				this.el.appendChild(tr);
			}
	}

}

