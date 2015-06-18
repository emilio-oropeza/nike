(function($){
	$.fn.hub = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('hub')) return;
			var myplugin = new hub(this);
			element.data('hub', myplugin);
			element.data('hub').methods.init();
		});
	};
	var hub = function(target){
		var componentObj = {
			videos: {"mexico":"dCU50jzxo3Y","rio":"_ulxu14R4DQ","santiago":"VlHopSlWfMs","baires":"Nntvtyph53I"},
			methods:{
				init:function(){
					if(componentObj.methods.is_touch_device()){
						$(".indepth_parallax_back").remove();
					}
					componentObj.methods.mouse_move();
					$(window).resize(function(){
						componentObj.methods.mouse_move();
					});
					$("#close").on("click", function(){
						$("#video_yt_cont").html("");
						$("#video_holder").hide();
					});
				},
				autoplay: function(vcode){
					"use strict";
				  	$("#video_yt_cont").html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
				},
				mouse_move: function() {
					$(".point").each(function(){
						var city = $(this).attr("tooltip");
						if(!componentObj.methods.is_touch_device()){
							$(this).on("mouseenter", function(){
								var tooltip = "#tool_"+city;
								$(tooltip).fadeIn();
							});
							$(this).on("mouseleave", function(){
								var tooltip = "#tool_"+city;
								$(tooltip).fadeOut();
							});
						}
						$(this).on("click", function(){
							$("#video_holder").show();
							componentObj.methods.autoplay(componentObj.videos[city]);
						});
					});
				},
				is_touch_device: function() {
				  return 'ontouchstart' in window // works on most browsers 
				      || 'onmsgesturechange' in window; // works on ie10
				}
			}
		};
		return componentObj;
	};	
})(jQuery);

$(document).ready(function(){
	$("#indepth_content").hub();
});