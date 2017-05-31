

function Generator() {};
Generator.prototype=
{
	getCenter: function(length){
		var res=length-1;
		return {x:res,y:res};
	},
	genTable: function(nb){
		var table = [];
		for (var i = 0; i < (nb*2-1) ; i++) {
			table.push([]);
			for (var j = nb*2-1; j > 0; j--) {
				table[i].push(0);
			}	
		};
		return table;
	},
	fill: function(nb,table,begin=this.getCenter(nb),c=0){
		var cc=c+1;	
		if (cc>nb) {return};
		if (cc>1) {
			table[begin.x][begin.y] += 1;
		};
		this.fill(nb,table,{x:begin.x+1,y:begin.y},cc);
		this.fill(nb,table,{x:begin.x,y:begin.y+1},cc);
		this.fill(nb,table,{x:begin.x-1,y:begin.y},cc);
		this.fill(nb,table,{x:begin.x,y:begin.y-1},cc);
	}
};
