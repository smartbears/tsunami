
App = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {

    this.resource("subjects", function(){
        this.resource('subject', { path:'/:id' }, function(){
            this.route('edit');
        });
    });

    this.route("insert", { path: "/insert" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return "subjects"; //todo: replace this a server call.
  },
  afterModel: function(model, transition) {
      this.transitionTo(model);
  }
});


App.SubjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('subject');
    }
});

App.SubjectRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('subject', params.id);
    },
});

App.SubjectEditController = Ember.ObjectController.extend({
    actions: {
        save: function(){
            var subject = this.get('model');
            //subject.save(); //Not working
            this.transitionToRoute('subject', subject);
        }
    }
});
