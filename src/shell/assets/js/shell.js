App = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.resource("subjects", function(){
        this.resource('subject', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });

    this.resource("alergies", function(){
        this.resource('alergy', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });
});

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


App.AlergiesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('alergy');
    }
}); 

App.AlergyRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('alergy', params.id);
    }
});

