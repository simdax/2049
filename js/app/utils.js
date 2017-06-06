function Maths () {
	this.gen=new Generator();
}
Maths.prototype = {
	offsetMatrix: function (offset,matrix,lg) {
		var copy = this.gen.genEmptyMatrix(lg);
		var offsetX = Math.ceil(lg/2)-offset.x ;
		var offsetY = Math.ceil(lg/2)-offset.y ;
		for (var i = copy.length - 1; i >= 0; i--) {
			for (var j = copy[i].length - 1; j >= 0; j--) {
				try {
					copy[i][j]=matrix[i+offsetX][j+offsetY];			
				} catch(e) {
					copy[i][j]=0
						// console.log(e);
					}
					if (copy[i][j] == undefined) {
						copy[i][j]=0
					}			
				}
			}
			return copy;
		},
	flattenArrays: function(arrays) {
			var tmp = [];
			for (var i = 0; i < arrays.length; i++) {
				for (var j = 0; j < arrays[i].length; j++) {
					tmp.push(arrays[i][j])
				}
			};
			return tmp;
		},
	mean: function(array) {
			var max = Math.max(...array);
			var tmp = [];
			for (var i = 0; i < array.length; i++) {
				tmp.push (Math.round(array[i] / max * 255));
			};
			return tmp;
		}
};