

function Generator(nb) {

	this.Dic  = {
			'>': {x:1,y:0},
			'v': {x:0,y:1},
			'<': {x:-1,y:0},
			'^': {x:0,y:-1},
		};
	this.steps=nb;
	this.dic={};
	this.mvts ="^,<,v,>".split(',');	
	this.generateDic();
};
Generator.prototype=
{
	generateDic:function() {
		this.mvts.forEach(function(v) {
			var x=0; var y=0;
			for (var i = v.length - 1; i >= 0; i--) {
				var w =v[i]
				x += this.Dic[w].x;
				y += this.Dic[w].y;
			};
			this.dic[v] = {x:x,y:y};
		}.bind(this));
	},
	setSteps:function(steps) {
		this.steps=steps;
	},
	setMvts:function(mvts) {
		this.mvts=mvts.split(',');
		this.generateDic();
	},
	getCenter: function(length){
		var res=length-1;
		return {x:res,y:res};
	},
	genEmptyMatrix: function(nb){
		var table = [];
		for (var i = 0; i < (nb*2-1) ; i++) {
			table.push([]);
			for (var j = nb*2-1; j > 0; j--) {
				table[i].push(0);
			}	
		};
		return table;
	},
	fill: function(table,begin=this.getCenter(this.steps),c=0){
		var cc=c+1;	
		if (cc>this.steps) {
			return
		};
		if (cc>1 && begin.x < table.length && begin.x >= 0) {
			try {
				table[begin.x][begin.y] += 1;
			} catch(e) {
				console.log(table,begin);
				console.log(e);
			}
		};
		this.mvts.forEach(function (v) {
			this.fill(table,
				{x:begin.x+this.dic[v].x,y:begin.y+this.dic[v].y},
				cc);
			}.bind(this));
	}
};
