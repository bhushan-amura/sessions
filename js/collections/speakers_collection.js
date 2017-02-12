define(['jquery','underscore','backbone','models/speaker_model'],function($, _, Backbone, Speaker){
	var Speakers = Backbone.Collection.extend({
		model: Speaker
	});
	return Speakers;
});