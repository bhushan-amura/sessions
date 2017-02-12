define(['jquery','underscore','backbone','models/speaker_model'], function($,_,Backbone,Speaker){
	var SpeakerView = Backbone.View.extend({
		tagName: 'li',
		template: _.template("<p><%= name %> - <%= topic %></p>"),
		initialize: function(options){
			this.bus = options.bus;
		},
		events: {
			"click": "onClick",
		},
		onClick: function(){
			this.bus.trigger("speakerSelected", this.model);
		},
		render: function(){
			// this.$el.html(this.model.get("name")+" -- "+this.model.get("topic"));
			this.$el.html(this.template(this.model.toJSON()));
	    return this;
		}
	});

	return SpeakerView;
});
