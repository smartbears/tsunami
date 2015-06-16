ProtocolApp.ProtocolsIndexController = Ember.ObjectController.extend({
    protocolsCount: function(){   
        var protocols = this.get('model');
        return protocols.get('length');
        //View this using then function
    }.property('protocols.@each'),

    actions: {
        
    }
});