//this is used by common assets. Ex datepicker, etc.

//App = Em.Application.create({});
App = {};

Ember.HTMLBars._registerHelper('ifIsNthItem', function(params, hash, options, env) {
  var index = env.data.view.contentIndex + 1,
  nth = hash.nth;

  if (index % nth === 0) {
    return options.template.render(this, env, options.morph.contextualElement);
  }
});

/*Ember.Handlebars.registerBoundHelper('repeat', function(value, options) {
  var count = options.hash.count;
  var a = [];
  while(a.length < count) {
      a.push(value);
  }
  return a.join('');
});*/
