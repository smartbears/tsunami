
App = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {

    this.resource("subjects", function(){
        this.resource('subject', { path:'/:id' }, function(){
            this.route('edit');            
        });
        
        this.route('new');            
    });

    this.route("insert", { path: "/insert" });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', ['a', 'b', 'c']);
  }
});

App.Subject = DS.Model.extend({
    name: DS.attr('string'),
    age:  DS.attr('int')
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

App.SubjectsNewController = Ember.ObjectController.extend({
    actions: {
        create: function(){
            var new_name = this.get('name');
            console.log(new_name);
            var new_age = this.get('age');
            console.log(new_age);

            var new_subject = this.store.createRecord(App.Subject,{
                                name: new_name,
                                age: new_age
                            });

            new_subject.save();
            console.log(new_subject);
            //subject.save(); //Not working
            //this.transitionToRoute('subject', new_subject);
        }
    }
});
