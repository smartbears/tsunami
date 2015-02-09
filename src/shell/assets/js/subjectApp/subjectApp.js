SubjectApp = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

SubjectApp.Router.reopen({
  rootURL: '/subjects/'
});

/*SubjectApp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8082/api'
});*/

SubjectApp.ApplicationAdapter = DS.FixtureAdapter.extend({});

SubjectApp.Router.map(function() {

  this.route("add");
  this.resource('subject', { path:'/:id' }, function(){
    this.route('edit');
  });


  this.resource("allergies", function(){
    this.resource('allergy', { path:'/:id' }, function(){
      this.route('edit');
    });
    this.route("add");
  });

  this.resource("dnd");
});

//Subjects
SubjectApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('subject');
  }
});

SubjectApp.SubjectRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('subject', params.id);
  }
});

SubjectApp.AddRoute = Ember.Route.extend({
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

SubjectApp.DndRoute = Ember.Route.extend({
  model: function(){
    return {
      inFolder: [
      {id: 1, name: "Procedure 1"},
      {id: 2, name: "Procedure 2"},
      {id: 3, name: "Procedure 3"}
      ],
      inTrash: [
      {id: 4, name: "Procedure 4"}
      ]
    };
  }
});
