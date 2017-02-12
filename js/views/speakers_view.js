define(['jquery','underscore','backbone','models/speaker_model','views/speaker_view'],function($,_,Backbone,Speaker,SpeakerView){
	var SpeakersView = Backbone.View.extend({
		// tagName: "ul",
		// initialize: function(){
		// 	this.model.on("add",this.onSpeakerAdded,this);
		// 	this.model.on("remove",this.onSpeakerRemoved,this);
		// },
		render: function(){
			var self = this
			this.model.each(function(Speaker){
				var speakerview = new SpeakerView({model: Speaker, bus: self.bus});
				self.$el.append(speakerview.render().$el);
			});
			return this;
		}
	});
 
	return SpeakersView;

});