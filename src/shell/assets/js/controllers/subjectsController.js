App.SubjectsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var subject = this.store.createRecord('subject',
            {
              name: this.get("name"),
              age: this.get("age")
            });
            subject.save();
            
            this.set("name",""),
            this.set("age","")

            this.transitionToRoute('subjects');
        }
    }
});

App.SubjectEditController = Ember.ObjectController.extend({
    actions: {
        update: function(){
            var subject = this.get('model');
            subject.save(); //Not working
            this.transitionToRoute('subject', subject);
        },
        delete: function() {
            var id = this.get('id');     
            var subject = this.store.getById('subject', id);       
            subject.destroyRecord();          
            this.transitionTo('subjects');
        }
    }
});

App.SubjectController = Ember.ObjectController.extend({
  actions: {   
      delete: function() {
            var id = this.get('id');     
            var subject = this.store.getById('subject', id);       
            subject.destroyRecord();  
      }
  }
});

