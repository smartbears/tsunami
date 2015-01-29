ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'procedures',
	isEditingLabel: false,
  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.procedures').store.getById('procedure',procedureId);
	    	if(!this.get("procedures"))
	    	    this.set("procedures", [procedure]);
	    	else
	    		this.get("procedures").pushObject(procedure);
   	 	},
   	 	
   	 	editLabel: function () {
	      this.set("isEditingLabel", true);       
	    },

	    updateLabel: function () {
	      this.set("isEditingLabel", false);       
	    },
  	}
});
