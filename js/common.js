/* 
	Common JavaScript library 
*/

common = (function($) {
    var o = {};
    var slider;
	
	
	// Final version
	o.showTopNavigation = function(){
		var $wrapper = $('.hidden-block-wrapper');
		var $button = $wrapper.find('> .show-block');		
        
		$button.on('click',function(){
			var $currentBlock = $(this).find('+ .hidden-block');			
			
			if ($currentBlock.hasClass('visible')) {				
				panelToggle($currentBlock); // Current block is hiding
			} else {				
				var $activeBlock = $wrapper.find('.visible');
				var isActiveBlock = $activeBlock.size() > 0;
				
				if (isActiveBlock) {
					panelToggle($activeBlock); // Active block is hiding
				}
				
				panelToggle($currentBlock); // Current block is appearing
			}			
        });
		
		function panelToggle(panel){
			var button = panel.parent().find('> .show-block');
			
			panel.slideToggle(function(){
				panel.toggleClass('visible').removeAttr('style');
			});
			button.toggleClass('active');
		}
    };	
	
	
	
	// I
	o.sliderInitialization = function() {
		var query = Modernizr.mq('(max-width: 768px)');
		

		$(document).ready(function(){
	  slider = $('.bxslider').bxSlider({
		  mode: 'horizontal',
		  captions: true
		});
	});
	};
    
	
$(window).resize(function(){
	
	//alert('Изменился размер окна');
});
    
    return o;
})($);



$(document).ready(function(){	
	common.showTopNavigation();
	common.sliderInitialization();
});

	// more-info

window.onload= function() {
	document.getElementById('toggler-ibm').onclick = function() {
		openbox('box-ibm', this);
		return false;
	};
	document.getElementById('toggler-dell').onclick = function() {
		openbox('box-dell', this);
		return false;
	};
	document.getElementById('toggler-hp').onclick = function() {
		openbox('box-hp', this);
		return false;
	};
	document.getElementById('toggler-cisco').onclick = function() {
		openbox('box-cisco', this);
		return false;
	};
	document.getElementById('toggler-sas').onclick = function() {
		openbox('box-sas', this);
		return false;
	};
	
};
function openbox(id, toggler) {
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
		toggler.innerHTML = 'more &#9660';
	}
	else {
		div.style.display = 'block';
		toggler.innerHTML = 'less &#9650';

	}
}


	// tabs
$(document).ready(function(){
	$("#TabsNav li a").each(function (i) {
		$("#TabsNav li a:eq("+i+")").click(function(){
			var tab_id=i+1;
			$("#TabsNav li a").removeClass("active");
			$(this).addClass("active");
			$("#content div").stop(false,false).hide();
			$("#tab"+tab_id).stop(false,false).show();
			return false;
		})
	})
})