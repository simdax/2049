function Step(elem,index,parent){
	
	this.el=elem;
	this.buttons=document.querySelector('ul');
	this.blur= new Event('sortie');

	this.el.addEventListener('click',function (e) {
		this.buttons.classList.add("visible");
		parent.index = index;
	}.bind(this), true)
	this.el.addEventListener('blur',function (e) {
		window.dispatchEvent(this.blur);
	}.bind(this), true)

	for (var i = this.buttons.children.length - 1; i >= 0; i--) {
		var el = this.buttons.children[i];
		!function (i){
			el.addEventListener('click',function(e){
				e.preventDefault();
				if (parent.index == index) {
					this.filter(i);
		      App.setMvts(this.el.value,index);
				}
			}.bind(this))
		}.bind(this)(i)
	}
}

Step.prototype = {
	filter:function(i){
		var mvts = '>,<,v,^'.split(',');
    this.el.value += mvts[i];
    if (this.el.value.length>3) {
    	this.el.value=this.el.value.slice(1)
    }
	}
};

function Steps(){
	
	this.steps = [];
	var elems = document.querySelectorAll('.steps');
	for (var i = elems.length - 1; i >= 0; i--) {
		this.steps.push(new Step(elems[i],i,this));
	}

}

s = new Steps();