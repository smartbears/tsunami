ProtocolApp.ProcedureController = Ember.ObjectController.extend({
    isEditingName: false,
    temporalProcName: null,

    actions: {
        editName: function() {
            if(this.get('name').toLowerCase() == 'new procedure')
                this.set('name', '');

            this.set('isEditingName', true);
        },

        updateName: function() {
            if(this.get('name') == '')
                this.set('name', 'New Procedure');

        	this.set('isEditingName', false);
            var procedure = this.get('model');
            procedure.save();
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
