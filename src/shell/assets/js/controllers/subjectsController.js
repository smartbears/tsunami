App.SubjectController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {
          var subject = this.get('model');
          subject.save(); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var subject = this.get('model');
            subject.destroyRecord();
        }


    }
});


App.SubjectsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var subject = this.store.createRecord('subject',
            {
              name: this.get("name"),
              age: this.get("age")
            });
            subject.save();

            this.set("name","");
            this.set("age","");

            this.transitionToRoute('subjects');
        }
    }
});

/*App.SubjectEditController = Ember.ObjectController.extend({
    actions: {
        update: function(){
            var subject = this.get('model');
            subject.save(); //Not working
            this.transitionToRoute('subject', subject);
        }
    }
});*/
