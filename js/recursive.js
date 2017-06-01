

function Generator() {};
Generator.prototype=
{
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
	fill: function(nb,table,begin,c=0){
		var cc=c+1;	
		if (cc>nb) {
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
		this.fill(nb,table,{x:begin.x+1,y:begin.y},cc);
		this.fill(nb,table,{x:begin.x,y:begin.y+1},cc);
		this.fill(nb,table,{x:begin.x-1,y:begin.y},cc);
		this.fill(nb,table,{x:begin.x,y:begin.y-1},cc);
	}
};
