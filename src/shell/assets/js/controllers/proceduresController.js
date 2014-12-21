App.ProcedureController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {
          var procedure = this.get('model');
          procedure.save(); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var procedure = this.get('model');
            procedure.destroyRecord();
        }
    }
});


App.ProceduresController = Ember.ObjectController.extend({
    isSearching: false,
    actions: {
        search: function() {
          var pattern = this.get("searchPattern");
          var model = this.store.all('procedure');

          if(pattern){
            this.set('isSearching', true);
            this.set("model", model.filter( function(procedure){
                  return procedure.get("name").toLowerCase()
                                .match(pattern.toLowerCase());
                              }));
          }
          //we are only looking by name for now.
          /*var results = this.store.find('subject', {name: pattern});
          this.set('model',results);*/
        },

        doneSearch: function() {
          this.set('isSearching', false);
          this.set('model',this.store.all('procedure'));
          this.transitionToRoute('procedures');
        }
    }
});

App.ProceduresAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var procedure = this.store.createRecord('procedure',
            {
              name: this.get('name'),
              reaction: this.get('reaction'),
              reactionOn: Date.now(),
              comments: this.get('comments')
            });
            procedure.save();            

            this.transitionToRoute('procedures');
        }
    }
});