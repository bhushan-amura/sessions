define(['jquery','underscore','backbone'],function($,_,Backbone){
 	var Listener = Backbone.Model.extend({
 		defaults: {
 			attended: 12
 		}
 	});
 	return Listener;
});