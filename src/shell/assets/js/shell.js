
App = Em.Application.create({
  rootElement: $('.view-container'),
});

App.Router.map(function() {
    this.route("mongo", { path: "/mongo" });
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
            console.log(items);
            return items;
        });
    }
});


App.MongoRoute = Ember.Route.extend({
    model: function() {
        return App.MongoSample.all();
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