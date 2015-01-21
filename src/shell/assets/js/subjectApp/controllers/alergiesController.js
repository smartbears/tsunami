App.AlergyController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {
          var alergy = this.get('model');
          alergy.save(); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var alergy = this.get('model');
            alergy.destroyRecord();
        }
    }
});


App.AlergiesController = Ember.ObjectController.extend({
    isSearching: false,
    actions: {
        search: function() {
          var pattern = this.get("searchPattern");
          var model = this.store.all('alergy');

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
          this.set('model',this.store.all('alergy'));
          this.transitionToRoute('alergies');
        }
    }
});

App.AlergiesAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var alergy = this.store.createRecord('alergy',
            {
              name: this.get('name'),
              reaction: this.get('reaction'),
              reactionOn: Date.now(),
              comments: this.get('comments')
            });
            alergy.save();            

            this.transitionToRoute('alergies');
        }
    }
});