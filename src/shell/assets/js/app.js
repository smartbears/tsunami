//this is used by common assets. Ex datepicker, etc.

//App = Em.Application.create({});
App = {};

Handlebars.registerHelper('ifIsNthItem', function(options) {
  var index = options.data.view.contentIndex + 1,
  nth = options.hash.nth;

  if (index % nth === 0) {
    return options.fn(this);
  }
});
