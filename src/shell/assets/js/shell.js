App = Em.Application.create({
  rootElement: $('.view-container'),
  //LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.resource("procedures", function(){
        this.resource('procedure', { path:'/:id' }, function(){
            this.route('edit');
        });
        this.route("add");
    });

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

    this.resource("dnd");
});


//Procedures
App.ProceduresRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('procedure');
    }
}); 

App.ProcedureRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('procedure', params.id);
    }
});


//Subjects
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


//Alergies
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

<<<<<<< HEAD


App.DragElementComponent = Ember.Component.extend({
  tagName:'div',
  attributeBindings:['draggable', 'elementName', 'item', 'tag:tagName'],
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


=======
App.DndRoute = Ember.Route.extend({
  model: function(){
    return {
      inFolder: [
        {id: 1, name: "Procedure 1"},
        {id: 2, name: "Procedure 2"},
        {id: 3, name: "Procedure 3"}
      ],
      inTrash: [
        {id: 4, name: "Procedure 4"}
      ]
    };
  }
});

App.DraggableComponent = Ember.Component.extend({
  dragStart: function(event){
    event.dataTransfer.setData('text/data', this.get('file.id'));
  }
}); 
>>>>>>> master
