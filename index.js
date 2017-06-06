
var count = 0;

function addScript(name) {
	var script = document.createElement('script');
	script.src=name;
	script.addEventListener('load', function (e) {
		count++;
		if (count == deps.length) {
			App = new App2049(8,5);
			App.generate();
			console.log("App 2049 loadé");
		}
	});
	document.body.appendChild(script);
};


/// main load
var deps= "utils,generator,color,app,perso".split(",");
deps.forEach(function(v) {
	addScript("js/app/"+v+".js");
});

var deps2="steps".split(',');
$(function () {
	deps2.forEach( function(v) {
		var script = document.createElement('script');
		script.src = "js/interface/"+v+".js";
		document.body.appendChild(script);
	});
})