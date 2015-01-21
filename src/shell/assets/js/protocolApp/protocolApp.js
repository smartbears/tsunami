ProtocolApp = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

ProtocolApp.Router.reopen({
  rootURL: '/protocols/'
});

ProtocolApp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8081/api'
});

ProtocolApp.Router.map(function() {
  this.route('configure', {path: '/:id'});
  this.route("add");

  this.resource("procedures", function(){
    this.resource('procedure', { path:'/:id' }, function(){
      this.route('edit');
    });
    this.route("add");
  });
});

ProtocolApp.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('protocol');
  }
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

//Procedures
ProtocolApp.ProceduresRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('procedure');
  }
});

ProtocolApp.ProcedureRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('procedure', params.id);
  }
});
