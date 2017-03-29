function catArrays(arrays) {
	var tmp = [];
	for (var i = 0; i < arrays.length; i++) {
		for (var j = 0; j < arrays[i].length; j++) {
			tmp.push(arrays[i][j])
		}
	};
	return tmp;
}

function mean(array) {
	var max = Math.max(...array);
	var tmp = [];
	for (var i = 0; i < array.length; i++) {
		tmp.push (Math.round(array[i] / max * 255));
	};
	return tmp;
}

codes={

	f:function(arg) {
		return [this.code[0] * arg, this.code[1] * arg, this.code[2] * arg];
	},
	f2:function(arg) {
		var res=[this.code[0] * arg, this.code[1] * arg, this.code[2] * arg];
		return res.forEach(function (argument,i,a) {
			a[i]=a[i].pow(2)
		})
	},
	standard1: {code:[0.299, 0.587, 0.114],f:this.f};
	standard2: {code:[0.2126,0.7152,0.0722],f:this.f},
	standard3: {code:[0.2126,0.7152,0.0722],f:this.f2},
};
function brightness( indice, code = codes.standard1 )
{
	var res = code.f();
	res.forEach(function (elem,ind,arr) {
		arr[ind]=Math.round(arr[ind])
	})
	return res;

}
