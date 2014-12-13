App.SubjectsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var subject = this.store.createRecord('subject',
            {
              name: this.get("name"),
              age: this.get("age")
            });
            subject.save();
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
            var subject = this.get('model');            
            subject.deleteRecord();
            this.transitionTo('subjects');
        }
    }
});

