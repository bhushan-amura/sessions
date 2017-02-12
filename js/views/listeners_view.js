define(['jquery','underscore','backbone','models/listener_model','collections/listeners_collection','views/listener_view'], function($, _, Backbone, Listener, Listeners, ListenerView){
       	var ListenersView = Backbone.View.extend({
		// tagName: "ul",
		// initialize: function(){
		// 	this.model.on("add",this.onListenerAdded,this);
		// 	this.model.on("remove",this.onListenerRemoved,this);
		// },
		render: function(){
			var self = this
			this.model.each(function(Listener){
				var listenerview = new ListenerView({model: Listener});
				self.$el.append(listenerview.render().$el);
			});
			return this;
		}
	});
	return ListenersView;
});