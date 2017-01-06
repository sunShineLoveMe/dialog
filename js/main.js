require.config({
	paths: {
		jquery: 'jquery-3.1.1.min'
	}
});

require(['jquery', 'window'], function($, w){
	$("#a").click(function(){
		new w.window().alert({
			title: '提示',
			content: "welcome",
			handler4AlertBtn: function(){
				alert("you are click the alert button");
			},
			handler4CloseBtn: function(){
				alert("you are click the close button");
			},
			width: 300,
			height: 150,
			y: 50,
			hasCloseBtn: true,
			skinClassName: "window_skin_a",
			confirmLabel: "确定",
		});
	});
});
