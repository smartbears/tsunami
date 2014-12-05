
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

App.MongoSample = Ember.Object.extend();
App.MongoSample.reopenClass({
    all: function() {
        return $.getJSON("http://localhost:8081/api/home").then(function(response) {
            var items = [];
            response.forEach( function (item) {
                items.push( App.MongoSample.create(item) );
            });

            return items;
        });
    },
    one: function(){
        return App.MongoSample.create({name: "no-name", age:0});
    },
    save: function(user){
        //Save the user to the backend
        console.log(user);
    }
});

App.ReadRoute = Ember.Route.extend({
    model: function() {
        return App.MongoSample.all();
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
