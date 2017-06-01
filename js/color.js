var Colors = function () {
	this.codes= new Codes();
};
Colors.prototype.setColorType = function(type) {
	this.codes.code=type;
	// this.brightness()
};
Colors.prototype.brightness = function(indice, code = "standard1" )
{
	// if(isNaN(indice)){console.log(info);};
	// this.codes.code=code;
	var res = this.codes.do(indice + 150);
	res.forEach(function (elem,ind,arr) {
		arr[ind]=Math.round(arr[ind])
	});
	return res;
};

var Codes= function(code="standard1"){

	//constructor
	this.code=code;
	// boilerplate
	var f = function(arg) {
		return [this.codes[this.code].code[0] * arg, this.codes[this.code].code[1] * arg, this.codes[this.code].code[2] * arg];
	};
	var f2 = function(arg) {
		var res = this.f(arg);
		return res.forEach(function (argument,i,a) {
			a[i] = a[i].pow(2)
		})
	};

	this.codes = {
		test:{code:[0.1,0.7,0.4], f:f.bind(this)},
		standard1: {code:[0.299, 0.587, 0.114], f:f.bind(this)},
		standard2: {code:[0.2126,0.7152,0.0722],f:f.bind(this)},
		standard3: {code:[0.2126,0.7152,0.0722],f:f2.bind(this)},
	};
	// interface
	this.do=function (arg) {
		return this.codes[this.code].f(arg);
	}

};