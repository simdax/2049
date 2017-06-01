

function addScript(name) {
	var script = document.createElement('script');
	script.src=name;
	script.addEventListener('load', function (e) {
		count ++;
		if (count == deps.length) {
			App = new App2049(5);
			App.generate();
			console.log("loadé");
		}
	});
	document.body.appendChild(script);
};


var count = 0;
/// main load
var deps= "utils,recursive,color,main".split(",");
deps.forEach(function(v) {
	addScript("js/"+v+".js");
});

