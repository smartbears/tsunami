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

//ProtocolApp.ApplicationAdapter = DS.FixtureAdapter.extend({});

ProtocolApp.Router.map(function() {
  this.resource('protocols', {path: '/'}, function(){
    this.route('configure', {path: '/:id'});
    this.route("add", {path:'/add'});
  });


  this.resource("procedures", function(){
    this.resource('procedure', { path:'/:id' }, function(){
      this.route('edit');
    });
    this.route("add");
  });
});

ProtocolApp.DragElementComponent = App.DragElementComponent;
ProtocolApp.DropElementComponent = App.DropElementComponent;

//Protocols
ProtocolApp.ProtocolsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('protocol');
  }
});
ProtocolApp.ProtocolsConfigureRoute = Ember.Route.extend({
  model: function(params) {
      return this.store.find('protocol', params.id);
  },
    setupController: function(controller, model) {
        controller.set("model", model);
        if (Em.isEmpty(model.get("visits"))) {
            //This is where we find the full Protocol Object
            model.reload();
        }
    }
});
ProtocolApp.ProtocolsAddRoute = Ember.Route.extend({
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
