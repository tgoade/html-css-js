$(document).ready(function(){
	$("#offer1 .options-plus").on('click', function(){
		$("#offer1 .offer-core ul, #offer1 .offer-addons").toggleClass("desktop-only mobile-only");
		$("#offer1 .offer-core").toggleClass("min-height-190 min-height-270");
		return false;
	});
	$("#offer2 .options-plus").on('click', function(){
		$("#offer2 .offer-core ul, #offer2 .offer-addons").toggleClass("desktop-only mobile-only");
		$("#offer2 .offer-core").toggleClass("min-height-190 min-height-270")
		return false;
	});
	$("#offer3 .options-plus").on('click', function(){
		$("#offer3 .offer-core ul, #offer3 .offer-addons").toggleClass("desktop-only mobile-only");
		$("#offer3 .offer-core").toggleClass("min-height-190 min-height-270")
		return false;
	});
});
