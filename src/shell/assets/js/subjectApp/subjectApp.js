SubjectApp = Em.Application.create({
  rootElement: $('.view-container'),
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
});

SubjectApp.Router.reopen({
  rootURL: '/subjects/' 
});

SubjectApp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8082/api'
});

//SubjectApp.ApplicationSerializer = DS.LSSerializer.extend();

//SubjectApp.ApplicationAdapter = DS.FixtureAdapter.extend({});

SubjectApp.Router.map(function() {

  this.resource('subjects', {path: '/'}, function(){
    this.route("add", {path:'/add'});
  });

  this.resource('subject', { path:'/:id' }, function(){
    this.route('edit');
  });


  this.resource("allergies", function(){
    this.resource('allergy', { path:'/:id' }, function(){
      this.route('edit');
    });
    this.route("add");
  });

  this.resource('medications'); 
  this.resource('medication', { path: ':medication_id' }); 
});

//Subjects
SubjectApp.SubjectsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('subject');
  }
});

SubjectApp.SubjectRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('subject', params.id);
  }
});

SubjectApp.SubjectsAddRoute = Ember.Route.extend({
  model: function(){    
      return this.store.createRecord('subject');   
  }
});

//Allergies
SubjectApp.AllergiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('allergy');
  }
});

SubjectApp.AllergyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('allergy', params.id);
  }
});

//Medications
SubjectApp.MedicationsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('medication');
  }
});

SubjectApp.MedicationRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('medication', params.medication_id);
  }
})


