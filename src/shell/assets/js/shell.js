App = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.resource("procedures", function(){
        this.resource('procedure', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });

    this.resource("subjects", function(){
        this.resource('subject', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });

    this.resource("allergies", function(){
        this.resource('allergy', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });    

    this.resource("protocols", function(){
        this.resource('protocol', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });  
});


//Procedures
App.ProceduresRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('procedure');
    }
});

App.ProcedureRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('procedure', params.id);
    }
});


//Subjects
App.SubjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('subject');
    }
});

App.SubjectRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('subject', params.id);
    }
});

App.SubjectsAddRoute = Ember.Route.extend({
  model: function(){
    return {
      contactInformation : {},
      demographic: {},
      guardian: {},
      allergies: [],
    }
    //return this.store.createRecord('subject');
    //return null;
  }
});

//Allergies
App.AllergiesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('allergy');
    }
});

App.AllergyRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('allergy', params.id);
    }
});

//Protocols
App.ProtocolsRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.find('protocol');
  }
});

App.ProtocolRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function(params) {
      return this.store.find('protocol', params.id);
  }
});




