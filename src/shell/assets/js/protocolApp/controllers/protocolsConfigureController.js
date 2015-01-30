ProtocolApp.ProtocolsConfigureController = Ember.ObjectController.extend({
  isEditingName: false,
  isEditingDescription: false,

  visitCount: function(){
    var visits = this.get('visits');
    return visits.get('length');
  }.property('visits.@each'),

  proceduresCount: function(){
    var procedures = this.get('procedures');
    return procedures.get('length');
    //View this using then function
  }.property('procedures.@each'),

  procedures: function() {
      return this.store.find('procedure');
  }.property('procedures'),

  actions: {
    editName: function () {
      this.set("isEditingName", true);
    },

    updateName: function () {
      this.set("isEditingName", false);
    },

    editDescription: function () {
      this.set("isEditingDescription", true);
    },

    updateDescription: function () {
      this.set("isEditingDescription", false);
    },

    add_procedure: function(){
      var procedure = this.store.createRecord('procedure', {name: "New Procedure"});
      var globalProcedureList = this.get("procedures");

      procedure.save().then(function(){
          
      });

    },
    rename_procedure: function(procedure){
      procedure.set("isEditing", true);
    },
    add_visit: function(){
      var labelText = "Visit " + this.get('visitCount');
      var visit = this.store.createRecord('visit', {label: labelText, number: this.get('visitCount') + 1})
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
