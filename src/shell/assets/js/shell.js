
App = Em.Application.create({
  rootElement: $('.view-container'),
});

App.Router.map(function() {
    this.route("subjects", { path: "/subjects" });
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

App.InsertRoute = Ember.Route.extend({
    model: function() {
        return App.MongoSample.one();
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});

App.InsertController = Ember.ObjectController.extend({
    actions: {
        insert_user: function() {
            App.MongoSample.save(this.get('model'));
        }
    }
});

App.SubjectController = Ember.ObjectController.extend({
  actions: {
	  removeSubject: function () {
	  	console.log("calling deleteSubject method...");
	    var subject = this.get('model');

        $.ajax({
		    url: 'http://localhost:8082/api/subjects/' + subject.id,
		    type: 'DELETE',
		    contentType: 'text/plain',
		    success: function(result) {
		        // Do something with the result
		        $('#'+subject.id).remove();
		        alert("Result: " + result);
		    }
		});
	  }
  }
});
