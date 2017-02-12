define(['jquery','underscore','backbone','models/listener_model'], function($, _, Backbone, Listener){
       	
 	var ListenerView = Backbone.View.extend({
    tagName: 'li',
		render: function(){
			this.$el.html(this.model.get("name"));
      return this;
		}
 	});

 		return ListenerView;

});