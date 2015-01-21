ProtocolApp = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

ProtocolApp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8081/api'
});

ProtocolApp.Router.map(function() {
  this.resource("index", function(){
    this.route('configure', {path: '/:id'});
    this.route("add");
  });
});

//Protocols
ProtocolApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('protocol');
  }
});
ProtocolApp.IndexConfigureRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('protocol', params.id);
  }
});
ProtocolApp.IndexAddRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('protocol');
  }
});
