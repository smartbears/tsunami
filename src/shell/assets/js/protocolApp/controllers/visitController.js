ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'procedures',
	isEditingLabel: false,
  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.procedures').store.getById('procedure',procedureId);
	        var exist = false;

	        if(!this.get("procedures"))
		    	this.set("procedures", [procedure]);
		    else{
		    	
		    	var procedures = this.get("procedures");
		    	for (var i = 0; i < procedures.length; i++) {
		    		if(procedures[i].get('id') === procedure.get('id')){
		    			exist = true;
		    			break;
		    		}
		    	};		    		

		    	if(exist){
		    		alert('This element already exist in this visit.');
		    	}
		    	else{
		    		this.get('procedures').pushObject(procedure);
		    	}
		    }
   	 	},

   	 	editLabel: function () {
	      this.set("isEditingLabel", true);       
	    },

	    updateLabel: function () {
	      this.set("isEditingLabel", false);       
	    },
  	}
});
