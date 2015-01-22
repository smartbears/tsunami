ProtocolApp.ProtocolsConfigureController = Ember.ObjectController.extend({
  actions: {
    add_procedure: function(){
      var procedure = this.store.createRecord('procedure', {name: "New Procedure"});
      this.get("procedures").pushObject(procedure);
    },
    rename_procedure: function(procedure){
      procedure.set("isEditing", true);
    },
    add_visit: function(){
      var visit = this.store.createRecord('visit', {label:"New Visit", number:0})
      this.get("visits").pushObject(visit);
    },
    add: function(){
      var protocol = this.get('model');

      protocol.save().then(function(){
        console.log(protocol.get('id'));
      });

      this.transitionToRoute('protocols');
    }
  }
});
