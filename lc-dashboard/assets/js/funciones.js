$(document).ready(function(){
	
	//TOOLTIP
	$('[data-toggle="tooltip"]').tooltip();

	//CALENDARIO
	$('a#mostrarCalendario').click(function(){
		$('#calEventos').slideToggle();
		$("#mostrarCalendario").empty().html("<i class='fa fa-calendar'></i> Ocultar Calendario");
	});



	//COLAPSA MENUS DE BARRA LATERAL
	$(".nav-sidebar > li#m-status").click(function(){
		$(".nav-sidebar > li#m-status a").addClass("activo");
		$("#m-status > ul.sub-menu").slideToggle(500);
		$(".nav-sidebar > li#m-admin a").removeClass("activo");
		$("#m-admin > ul.sub-menu").slideUp(500);
	});

	$(".nav-sidebar > li#m-admin").click(function(){
		$(".nav-sidebar > li#m-admin a").addClass("activo");
		$("#m-admin > ul.sub-menu").slideToggle(500);
		$(".nav-sidebar > li#m-status a").removeClass("activo");
		$("#m-status > ul.sub-menu").slideUp(500);
	});

	// [estadoFlota] MUESTRA EL PANEL LATERAL DEL DETALLE Y PINTA LA FILA DE COLOR

	$(".nPatente").click(function(){
		$(".detalle").addClass("activo");
		$(".nPatente").closest('tr').addClass("filaActiva");
		$('.black_overlay').fadeIn(1000);
	});

	$(".b-colapsar").click(function(){
		$(".detalle").removeClass("activo");
		$(".nPatente").closest('tr').removeClass("filaActiva");
		$('.black_overlay').fadeOut(1000);
	})


	// [CLIENTES] MUESTRA EL PANEL LATERAL DEL DETALLE Y PINTA LA FILA DE COLOR

	$(".verItems").click(function(){
		$(".detalle").addClass("activo");
		$(".verItems").closest('tr').addClass("filaActiva");
		$('.black_overlay').fadeIn(1000);
	});

	$(".b-colapsar").click(function(){
		$(".detalle").removeClass("activo");
		$(".verItems").closest('tr').removeClass("filaActiva");
		$('.black_overlay').fadeOut(1000);
		$('.addItem').fadeOut('fast');
	})

	//ADD ITEM INDIVIDUAL
	$('#btn-add-item-ind').click(function(){
		$('.addItem').fadeIn('fast');
	});

	$('#saveItem').click(function(){
		$('.addItem').fadeOut('fast');
	})

	$('#cancelItem').click(function(){
		$('.addItem').fadeOut('fast');
	})


	//EDIT ITEM INDIVIDUAL
	$('.edit').click(function(){
		$('.addItem').fadeIn('fast');
	});

	//TABLA CLIENTES :  TREEGRID
	$('.tree').treegrid({
		initialState : 'collapsed'
	});

	//TABLE DETALLE
	$(".t-detalle-doc").floatThead({
		scrollContainer: function($table){
			return $table.closest('.wrp-items');
		}
	});

});










