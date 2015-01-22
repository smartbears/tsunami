ProtocolApp.VisitController = Ember.ObjectController.extend({
  actions: {
    drop_procedure_into_visit: function(procedureName){
      if(!this.get("procedures"))
        this.set("procedures", [procedureName]);
      else
        this.get("procedures").pushObject(procedureName);
    },
  }
});
