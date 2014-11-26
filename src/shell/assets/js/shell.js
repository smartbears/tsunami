App = Em.Application.create({
  rootElement: $('.view-container'),
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', ['a', 'b', 'c']);
  }
});
