ProtocolApp.ProtocolController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {

        },

        delete: function(){

        }
    }
});

ProtocolApp.ProtocolsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var protocol = this.get('model');

            protocol.save().then(function(){
                console.log(protocol.get('id'));
            });

            this.transitionToRoute('protocols');
        }
    }
});
