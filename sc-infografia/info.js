$(window).load(function(){
	var x = 0;
	var y = 190;
	var c = $('#edificios');
	var timer = setInterval(function(){
		c.css('backgroundPosition', x + 'px' + ' ' + y + 'px' );
		x --;
		
	},0.5);


	function apareceCamion(){
		$('#camion').animate({
			left :'40%'
		}, 1500, function(){
			$('#camion').animate({
				left :'17%'
			}, 1500, function(){
				//$('.senal').fadeIn('slow');
				$('#satelite').animate({
					top :'25px'
				}, 1500);
				$('#antena').delay(1500).fadeIn('slow');
				$('#cloud').delay(2000).fadeIn('slow');
				$('#plataforma').delay(2500).fadeIn('slow');
				$('#l1').delay(3000).fadeIn('slow');
				$('#l2').delay(3500).fadeIn('slow');
				$('#l3').delay(4000).fadeIn('slow');
				$('#l4').delay(4500).fadeIn('slow');
			});
		});


	};

	/*function satelite(){

		$('#satelite').hover(function(e){
			$('#satelite > .popover').fadeToggle('slow');
		});

		$('#satelite').hover(function(e){
			$('#satelite > .popover').animate({
				right:'-65px',
				opacity: '1'
			},'slow');
		});

		$('#satelite > .popover .close').click(function(e){

			$('#satelite > .popover').animate({
				right:'-80px',
				opacity: '0'
			},'slow');
			e.stopPropagation();
		});

		$('#camion').click(function() {
			//$('#satelite').fadeIn('slow');
		});
	};*/


	function tips(){
		$('#satelite').hover(function(e){
			$('#satelite > .popover').fadeToggle('slow');
			e.stopPropagation();
		});

		$('#antena').hover(function(e){
			$('#antena > .popover').fadeToggle('slow');
			e.stopPropagation();
		});

		$('.senal').hover(function(e){
			$('.senal > .popover').fadeToggle('slow');
			e.stopPropagation();
		});

		$('#cloud').hover(function(e){
			$('#cloud > .popover').fadeToggle('slow');
			e.stopPropagation();
		});

		$('#plataforma').hover(function(e){
			$('#plataforma > .popover').fadeToggle('slow');
			e.stopPropagation();
		});

	}//fin funcion

	apareceCamion();
	tips();
});
