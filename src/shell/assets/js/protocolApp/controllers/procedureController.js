ProtocolApp.ProcedureController = Ember.ObjectController.extend({
    isEditingName: false,    
    actions: {
        editName: function() {
          this.set('isEditingName', true);
        },

        updateName: function() {
        	this.set('isEditingName', false);        	       	
        },

        delete: function(){
            var procedure = this.get('model');
             $('.' + procedure.get('id')).each(function(){
                  $(this).fadeOut("slow",function(){
                    $(this).remove();
                  });

              }).then(function(){
                  procedure.destroyRecord();
              });

              this.transitionToRoute('procedures');
        }
    }
});