document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');


	var KEYCODE_LEFT = 37;
	var KEYCODE_RIGHT = 39;
	var KEYCODE_UP = 40;
	var KEYCODE_DOWN = 38;
	var KEYCODE_SPACE = 32;


	if (e.keyCode == KEYCODE_LEFT) {
		el.style.left = (parseInt(el.style.left) - 10) + 'px';

	}
	else if (e.keyCode == KEYCODE_RIGHT) {
		el.style.left = (parseInt(el.style.left) + 10) + 'px';
	}

	else if (e.keyCode == KEYCODE_UP) {
		el.style.top = (parseInt(el.style.top) + 10) + 'px';

	}

	else if (e.keyCode == KEYCODE_DOWN) {
		el.style.top = (parseInt(el.style.top) - 10) + 'px';
	}

	else if(e.keyCode == KEYCODE_SPACE){

		createFire();
		var fires = document.querySelectorAll('.fire');
		if (fires.length >= 1) {
			setInterval(function() {
				for (var i = 0; i < fires.length; i++) {
					fires[i].remove();
				}
			}, 300);
		}

	}

}



function createFire() {
	var fire = document.createElement('div');
	fire.className = 'fire';
	var element = document.getElementById('player');
	element.appendChild(fire);
}
