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
        },
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
                if(subject.get('firstName') != null)
                    return subject.get("firstName").toLowerCase()
                        .match(pattern.toLowerCase());
                else
                    return false;
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
        },

         dropDelete: function(item, elementName, senderElement){
          var subject = this.store.getById('subject',item);
            subject.destroyRecord();
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
              lastName: this.get('lastName'),
              address: this.get('address'),
              zipCode: this.get('zipCode'),
              city: this.get('city'),
              state: this.get('state'),
              country: this.get('country'),
              email: this.get('email'),
              homePhone: this.get('homePhone'),
              workPhone: this.get('workPhone'),
              cellPhone: this.get('cellPhone'),
              alternatedCellPhone: this.get('alternatedCellPhone'),
              birthday: Date.now(),
              //gender: this.get('firstName'),
              height: 10,
              weight: 10,
              //heartRate: this.get('firstName'),
              //bloodPreasure: this.get('firstName'),
              //race: this.get('firstName'),
              //ethnicity: this.get('firstName'),
              //maritalStatus: this.get('firstName'),
            });

            subject.save().then(function(){
                 $("table tr").last().attr("item", subject.get('id') );
            });

            this.transitionToRoute('subjects');
        }
    }
});
