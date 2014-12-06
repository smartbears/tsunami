
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

$.postJSON = function(url, data, success, args) {
  args = $.extend({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: true,
    success: success
  }, args);
  return $.ajax(args);
};

//$.postJSON('test/url', data, function(result) {
//  console.log('result', result);
//});

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
        console.log("llegue");

        $.ajax({
            type: "POST",
            dataType: 'json',
            contentType:"application/json; charset=utf-8",
            url: 'http://localhost:8081/api/home/CreateUser' ,
            data: JSON.stringify(user),
            success: function(data){
            },
            error: function(error){
                alert('The registration failed: ' + error.responseJSON.error.message);
            }
        });
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
