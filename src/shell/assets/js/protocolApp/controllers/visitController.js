ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'procedures',
  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.procedures').store.getById('procedure',procedureId);
	    	if(!this.get("procedures"))
	    	    this.set("procedures", [procedure]);
	    	else
	    		this.get("procedures").pushObject(procedure);
   	 	}
  	}
});
