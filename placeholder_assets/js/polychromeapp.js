this.POLYCHROME = {}

$(document).ready(function(){
	POLYCHROME.app = new polychromeApp();
});

function polychromeApp(){

	var r,g,b;
	var rSpeed = 0.3;
	var gSpeed = 0.4;
	var bSpeed = 0.5;
	var counter = Math.round( Math.random() * 999999 );
	
	var shiftSpeedLow = 0.01;
	var shiftSpeedHigh = 0.02;
		
	var shiftSpeed = 0.01;

	var min = 70;
	var max = 120;
	
	var mouseIsOver = false;
	
	function init() {
		r = Math.random();
		g = Math.random();
		b = Math.random();
		initMailto();
		initRollover();
		update();
	}
	
	function initMailto() {
		var realhref2 = 'e@mo' + 'tht' + 'eeth.c' + 'om';
		var realhref1 = 'mai' + 'lto:le';
		var realhref = realhref1 + realhref2;
		$('a#mailme').attr( 'href', realhref );
	}
	
	function initRollover() {
		$( '#circle' ).mouseover( function(){
			mouseIsOver = true;
			shiftSpeed = shiftSpeedHigh;
		});
		$( '#circle' ).mouseout( function(){
			mouseIsOver = false;
			shiftSpeed = shiftSpeedLow;
		});
		
	}
	
	function update(){

		counter+= shiftSpeed;

		var range = max - min;

		$('#circle').css(
			 	'background-color',
			 	rgbToHex( 
				 	( Math.sin( rSpeed * counter) * 0.5 + 0.5 ) * range + min,
				 	( Math.sin( gSpeed * counter) * 0.5 + 0.5 ) * range + min,
				 	( Math.sin( bSpeed * counter) * 0.5 + 0.5 ) * range + min 
			 	)
		 );

		setTimeout( update , 16 );
	}
	
	function componentToHex( c ) {
		var hex = Math.floor(c).toString(16);
		hex = hex.length == 1 ? "0" + hex : hex;
		return hex;
	}
	
	function rgbToHex(r, g, b) {
		return "#" 
			+ componentToHex(r)
			+ componentToHex(g) 
			+ componentToHex(b);
	}
	
//	rgbToHex: function ( r, g, b ) {
//
//	   return ( r << 16 | g << 8 | b ).toString( 16 ).toUpperCase();
//	}

	init();
}