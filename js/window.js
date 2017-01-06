define(['jquery'], function($){

	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
			content: '',
			title: '系统消息',
			hasCloseBtn: false,
			handler4AlertBtn: null,
			handler4CloseBtn: null,
			skinClassName: null,
			confirmLabel: '确定',
			hasMask: true,
		};
		this.handlers = {};
	}

	Window.prototype = {
		// on: function(type, handler){
		// 	if(typeof this.handlers[type] == "undefined"){
		// 		this.handlers[type] = [];
		// 	}
		// 	this.handlers[type].push(handler);
		// },
		// fire: function(type, data){
		// 	if(this.handlers[type] instanceof Array){
		// 		var handlers = this.handlers[type];
		// 		for(var i=0,len = handlers.length;i<len;i++){
		// 			handlers[i](data);
		// 		}
		// 	}
		// },
		alert: function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $(
				'<div class="window_boundingBox">' +
				'<div class="window_header">' + CFG.title + '</div>' +
				'<div class="window_body">' + CFG.content + '</div>' +
				'<div class="window_footer"><input class="window_alertBtn" type="button" value='+ CFG.confirmLabel +'></div>' + '</div>'
 				);
			var btn = boundingBox.find(".window_alertBtn");
			var mask = null;
			var that = this;
			if(CFG.hasMask){
				mask = $('<div class="window_mask"></div>');
				mask.appendTo("body");
			};
			boundingBox.appendTo('body');
			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				boundingBox.remove();
				mask && mask.remove();
			});
			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
				top: (CFG.y || (window.innerHeight - CFG.Height) / 2) + 'px',
			});
			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
					mask && mask.remove();
				});
			};
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			};

		},
		confirm: function(){

		},
		prompt: function(){

		}
	}
return {
		window: Window
	}

});