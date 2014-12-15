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


App.SubjectsController = Ember.ObjectController.extend({  
    isSearching: false,  
    actions: {
        search: function() {
          var pattern = this.get("searchPattern");  
          var results = this.store.find('subject', {pattern: pattern});
          this.set('isSearching', true);
          this.set('model',results);
        },

        doneSearch: function() {
          this.set('isSearching', false);
          this.set('model',this.store.find('subject'));
          this.transitionToRoute('subjects');         
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
