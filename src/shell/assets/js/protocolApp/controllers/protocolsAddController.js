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