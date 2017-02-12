define(['jquery','underscore','backbone','models/speaker_model','views/speaker_view','models/listener_model','views/listener_view'], function($,_,Backbone,Speaker,SpeakerView,Listener,ListenerView){

	var InfoView = Backbone.View.extend({
		el: "#info-container",
		template: _.template("<p><%= name %></p>"),

		initialize: function(options){
			this.bus = options.bus;
			this.bus.on("speakerSelected",this.onSpeakerSelected, this);
		},
		onSpeakerSelected: function(speaker){
			this.model = speaker;
			this.render();
		},
		render: function(){
			if (this.model){
				this.$el.html(this.template(this.model.toJSON()));
			}
			return this;
		}
	});

	return InfoView;
});