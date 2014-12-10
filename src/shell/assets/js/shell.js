
App = Em.Application.create({
  rootElement: $('.view-container'),
});

App.Router.map(function() { 
    this.route("read", { path: "/read" });
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

App.ReadRoute = Ember.Route.extend({
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
