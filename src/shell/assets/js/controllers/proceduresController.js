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
    isCreating: false,
    actions: {     
        newProcedure: function(){
          this.set('isCreating',true);
          this.transitionToRoute('procedures');
        },

        addProcedure: function(){
            this.set('isCreating',false);
            var procedure = this.store.createRecord('procedure',
            {
              name: this.get('name'),              
              performedOn: Date.now(),
              comments: this.get('comments')
            });
            procedure.save();            

            this.transitionToRoute('procedures');
        },

        acceptElement: function(item, elementName, senderElement){
              var procedure = this.store.getById('procedure',item);
              if($('#listone #' + item).length <= 0){ 
                $('#listone').append( '<div class="list-group-item" id="'+ item +'">' + procedure.get('name') + '</div>');
              }
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