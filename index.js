

function addScript(name) {
	var script = document.createElement('script');
	script.src=name;
	script.addEventListener('load', function (e) {
		count++;
		if (count == deps.length) {
			App = new App2049(8,5);
			App.generate();
			console.log("loadé");
		}
	});
	document.body.appendChild(script);
};


/// main load
var count = 0;
var deps= "utils,recursive,color,main,perso,svg".split(",");
deps.forEach(function(v) {
	addScript("js/"+v+".js");
});

