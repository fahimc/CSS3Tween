(function(window) {
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}
	}

	function onLoad() {
	Tween.to(document.getElementById('box'),1,{left:"300px",top:"400px",opacity:0.5,onComplete:onComplete});
	
	}
	function onComplete()
	{
	
	Tween.to(document.getElementById('box'),1,{delay:1,left:"0px",top:"0px",opacity:1});
	Tween.to(document.getElementById('box2'),1,{left:"300px",top:"400px",width:"300px",ease:"ease-in-out"});
	}

	Main();
} )(window); 