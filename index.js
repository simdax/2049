



function addScript(name) {
	var script = document.createElement('script');
	script.src=name;
	script.addEventListener('load', function (e) {
		try {
			App = new App2049();
			App.generate(5,{x:3,y:3});
			console.log("loadé");
		}catch(e){}
	});
	document.body.appendChild(script);
};

"recursive,color,main".split(',').forEach(function(v) {
	addScript("js/"+v+".js");
});

