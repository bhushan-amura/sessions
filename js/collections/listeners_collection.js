define(['jquery','underscore','backbone','models/listener_model'], function($, _, Backbone, Listener){
	var Listeners = Backbone.Collection.extend({
		model: Listener
	});
	return Listeners;
});