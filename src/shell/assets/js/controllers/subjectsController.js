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
          var model = this.store.all('subject');

          if(pattern){
            this.set('isSearching', true);
            this.set("model", model.filter( function(subject){
                  return subject.get("name").toLowerCase()
                                .match(pattern.toLowerCase());
                              }));
          }
          //we are only looking by name for now.
          /*var results = this.store.find('subject', {name: pattern});
          this.set('model',results);*/
        },

        doneSearch: function() {
          this.set('isSearching', false);
          this.set('model',this.store.all('subject'));
          this.transitionToRoute('subjects');
        }
    }
});

App.SubjectsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var subject = this.store.createRecord('subject',
            {
              firstName: this.get('firstName'),
              middleName: this.get('middleName'),
              lastName: this.get('LastName'),
              address: this.get('firstName'),
              zipCode: this.get('firstName'),
              city: this.get('firstName'),
              state: this.get('firstName'),
              country: this.get('firstName'),
              email: this.get('firstName'),
              homePhone: this.get('firstName'),
              workPhone: this.get('firstName'),
              cellPhone: this.get('firstName'),
              alternatedCellPhone: this.get('firstName'),
              birthday: this.get('birthday'),
              gender: this.get('firstName'),
              height: this.get('firstName'),
              weight: this.get('firstName'),
              heartRate:this.get('firstName'),
              bloodPreasure: this.get('firstName'),
              race: this.get('firstName'),
              ethnicity: this.get('firstName'),
              maritalStatus: this.get('firstName'),
            });
            subject.save();

            this.set("name","");
            this.set("age","");

            this.transitionToRoute('subjects');
        }
    }
});