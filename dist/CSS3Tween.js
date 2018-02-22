var Tween = {
	callbacks : [],
	index : 0,
	to : function(elem, duration, props) {
		var index = this.index;
		//if there is a callback
		if (props.onComplete) {
			var callback = props.onComplete;
			this.callbacks[index] = function(event) {
				this.onComplete(elem, callback, index);
			}.bind(this);
			elem.addEventListener('transitionend', this.callbacks[index], false);
		}
		if (!props.delay)
			props.delay = 0;

		this.animate(elem, props.delay, duration, props, index);
		this.index++;

	},
	animate : function(elem, delay, duration, props) {
		var style = elem.style;
		style.transitionDelay = delay + "s";
		style.transitionDuration = duration + "s";
		style.transitionTimingFunction = props.ease ? props.ease : "ease";

		var trans = "";
		var transform = "";
		for (var name in props) {
			
			if (name.indexOf('transform')>=0) {
				transform += props[name] + " ";
			} else {

				trans += name + " ";
			}
		}
		style.setProperty("transition", trans);
		if (transform)
			style.setProperty("transform", transform);
		for (var name in props) {
			style.setProperty(name, props[name]);
		}
	},
	onComplete : function(elem, callback, index) {
		callback();
		elem.removeEventListener('transitionend', this.callbacks[index], false);
		this.callbacks[index] = null;
		delete this.callbacks[index];
		this.callbacks.splice(index, 1);
	}
};
