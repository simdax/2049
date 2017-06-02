var nbPersos=0;

function Perso(x,y) {

	var elem = document.createElement("div");
	document.body.appendChild(elem);
	elem.classList.add('pions');
	this.pion = elem;
	nbPersos++;

	this.anim = 'stop';
	this.x=0; this.y =0;

	window.addEventListener('keydown', function(e){
			switch (e.key) {
				case 'z':
				this.anim = this.anim=='down' ? "stop" : "up";
				break;
				case 's':
				this.anim = this.anim=='up' ? "stop" : "down";
				break;
				case 'q':
				this.anim = this.anim == "right" ? "stop" : "left";
				break;
				case 'd':
				this.anim = this.anim == "left" ? "stop" : "right";
				break;
				default:
					null //another key
					break;
				};
				this.update();
			}.bind(this))	
		setInterval(this.marche.bind(this), 50);
}

Perso.prototype = {
		// body...
		marche: function() {
			switch (this.anim) {
				case 'up':
				this.y--;
				break;
				case 'down':
				this.y++;
				break;
				case 'left':
				this.x--;
				break;
				case 'right':
				this.x++;
				break;
				default:
				null
				break;
			};
			this.pion.style.transform = `translate(${this.x}px, ${this.y}px)`;	
		},
		update: function() {
			if (this.anim=="stop") {
				this.pion.style.animationPlayState="paused"
			}else{
				this.pion.style.animation = `${this.anim} 0.3s steps(9) infinite`;		
			}
		}
};

var orc = new Perso();
var orc2 = new Perso();
