ProtocolApp = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

ProtocolApp.Router.map(function() {
  this.resource("index", function(){
    this.route('configure', {path: '/:id'});
    this.route("add");
  });
});
