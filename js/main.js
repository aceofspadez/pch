

window.addEventListener("load", function(){
	var element = document.getElementById('pyramid');
	element.classList.remove("off");

	var arrowElement = $('#arrow');
	var noElement = $('#no-order');
	var count = 0;
	
	setTimeout(function(){ 
		arrowElement.removeClass('off');
		setTimeout(function meme(){
			if(arrowElement.hasClass('closed')){
				noElement.removeClass('off'); 
				arrowElement.removeClass('closed'); 
				meme();
			}else{
				setTimeout(function(){
					$('.star, .order-place').removeClass('off');
					$('.order-place').addClass('labelOn');
					$("#no-order").addClass('off');
						setInterval(function(){ 
							if (count > 3) {contentLoad(); return;}
							if($('.order-place').hasClass('off')){
								$('.order-place').removeClass('off');
								count++;
							}else{
								$('.order-place').addClass('off') 
								count++;
							}
						}, 800);
				}, 3000);
			}
		},3000);
	}, 3000);

	function contentLoad(){
		$("h1").removeClass('off');
		$(".customerMessage h2").removeClass('off');
		$(".customerMessage h3").removeClass('off');
		$(".cont-btn").removeClass('off');
	};
})

