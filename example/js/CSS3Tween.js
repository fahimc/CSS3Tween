var Tween = {
	callbacks : [],
	timers:[],
	index : 0,
	to : function(elem, duration, props) {
		var root = this;
		var index = this.index;
		//if there is a callback
		if (props.onComplete) {
			var callback = props.onComplete;
			this.callbacks[index]=function(event) {
				root.onComplete(elem,callback, index);
			};
			elem.addEventListener('webkitTransitionEnd', this.callbacks[index], false);
		}
		if(!props.delay)props.delay=0;
		props.delay = props.delay *1000;

		this.timers[index]=setTimeout(function(){
			root.removeTimer(index);
			root.animate(elem, duration, props,index);
		},props.delay);
		this.index++;
		
	},
	animate:function(elem, duration, props)
	{
		elem.style.webkitTransitionDuration = duration + "s";
		elem.style.webkitTransitionTimingFunction = props.ease?props.ease:"ease";
		
		var trans ="";
		for(var name in props)
		{
			trans+=name+" ";
		}
		elem.style.setProperty("-webkit-transition", trans);
		for(var name in props)
		{
			elem.style.setProperty(name, props[name]);
		}
	},
	removeTimer:function(index)
	{
		clearTimeout(this.timers[index]);
			this.timers[index]=null;
			delete this.timers[index];
			this.timers.splice(index, 1);
	},
	onComplete : function(elem,callback, index) {
	
			callback();
			elem.removeEventListener('webkitTransitionEnd', this.callbacks[index], false);
			this.callbacks[index]=null;
			delete this.callbacks[index];
			this.callbacks.splice(index, 1);
	}
};
