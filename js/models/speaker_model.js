define([
       'jquery',
       'underscore',
       'backbone'],function($,_,Backbone){
       	var Speaker = Backbone.Model.extend({
       		name: "Human"
       	});
       	return Speaker;
}); 