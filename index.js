
function addScript(name) {
	var script = document.createElement('script');
	script.src=name;
	script.addEventListener('load', function (e) {
		try {
			App = new App2049(5);
			App.generate();
			console.log("loadé");
		}catch(e){
			console.log(e);
		}
	});
	document.body.appendChild(script);
};


/// main load
"utils,recursive,color,main".split(',').forEach(function(v) {
	addScript("js/"+v+".js");
});

