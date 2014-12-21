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

    this.resource("dnd");
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
