define(['jquery','underscore','backbone','models/speaker_model', 'collections/speakers_collection' ,'views/speaker_view', 'views/speakers_view','models/listener_model','collections/listeners_collection','views/listener_view','views/listeners_view','views/info_view'],function($,_,BackBone,Speaker,Speakers,SpeakerView, SpeakersView,Listener,Listeners,ListenerView, ListenersView,InfoView){
 
		var initialize = function(){

			var bus = _.extend({},Backbone.Events);
			
// single speaker view
			// var speaker  = new Speaker({name:"bhushan", topic:"BLE"});
			// var speakerView = new SpeakerView({el: "#speaker", model: speaker})
			// speakerView.render();

// collection view

			var speakers = new Speakers([
			    {id:1,name:"Jayesh Jawale",topic:"Java"},
					{id:2,name:"Shubham Chintalwar",topic:"Android"},
					{id:3,name:"Akash Shingte",topic:"Bazinga"},
					{id:4,name:"Shaunak Pagnis",topic:"Ruby"}
				]);
			var speakersview = new SpeakersView({el:"#speakers", model: speakers});
			speakersview.render();

// audiance view
			var listeners = new Listeners([
			   {name:"Bhushan"},
			   {name:"Swapnil"}
			  ]);
			var listenersview = new ListenersView({el:"#listeners",model:listeners});
			listenersview.render();

// info view
			var infoView = new InfoView({ bus: bus });
			infoView.render();
		}
		return {
			initialize: initialize
		}
});
