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

App.DragElementComponent = Ember.Component.extend({
  tagName:'tr',
  attributeBindings:['draggable', 'elementName', 'item'],
  draggable: 'true',
  elementName: null,
  item: null,
  dragStart: function(event) {
    if (this.get('elementName')){
        var o = {};
        o.container = true;
        o.item = this.get('item');
        o.elementName = this.get('elementName');
      event.dataTransfer.setData('text', JSON.stringify(o));
    } else {
        event.dataTransfer.setData('text', JSON.stringify(this.get('item')));
    }
  }
});

App.DropElementComponent = Ember.Component.extend({
  tagName:'div',
  attributeBindings:['elementName'],
  elementName: '',
  dragOver: function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  },
  drop: function(event) {
    var item = event.dataTransfer.getData('text');
    var o = JSON.parse(item);
    event.preventDefault();
    if (o.container){
      this.sendAction('dropAction', o.item, this.elementName, o.elementName);
    } else {
      this.sendAction('dropAction', o, this.elementName);
    }
    return false;
  }
});


