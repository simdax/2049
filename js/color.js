var Colors = function () {
	this.codes= new Codes();
};
Colors.prototype.setColorType = function(type) {
	this.codes.code=type;
	// this.brightness()
};
Colors.prototype.brightness = function(indice)
{
	var res = this.codes.do(indice);
	res.forEach(function (elem,ind,arr) {
		arr[ind]=Math.round(arr[ind])
	});
	return res;
};

var Codes= function(code="standard3"){

	//constructor
	this.code=code;
	// boilerplate
	var f = function(puissance=1,arg) {
		var res = [
			this.codes[this.code].code[0] * arg, 
			this.codes[this.code].code[1] * arg, 
			this.codes[this.code].code[2] * arg
		];
		return res.map(function (v) {
			return Math.pow(v,puissance)
		});
	};

	this.codes = {
		test:{code:[0.1,0.7,0.4], f:f.bind(this,1)},
		standard1: {code:[0.299, 0.587, 0.114], f:f.bind(this,1)},
		standard2: {code:[0.2126,0.7152,0.0722],f:f.bind(this,1)},
		standard3: {code:[0.1,0.587,0.8722],f:f.bind(this,1)},
	};
	// interface
	this.do=function (arg) {
		return this.codes[this.code].f(arg);
	}

};