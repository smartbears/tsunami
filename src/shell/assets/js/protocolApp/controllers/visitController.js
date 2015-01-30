ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'protocolsConfigure',
	isEditingLabel: false,

	procedures: function(){
		var procIds = this.model.get("procedureIds");
		if(!procIds)
			return [];

		return this.get('controllers.protocolsConfigure')
				.get('procedures')
				.filter(function(p){
					return procIds.contains(p.id)
				});
	}.property("model.procedureIds.@each"),

	proceduresCount: function(){
		var procedures = this.get('procedures');
		if(!procedures) 
			return 0;
		else
			return procedures.get('length');	
	}.property('procedures.@each'),	

	haveProcedures: function(){
		return this.get('proceduresCount') > 0;
	}.property('proceduresCount'),

  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.protocolsConfigure')
														.get('procedures')
														.findBy("id", procedureId);
			if(!this.model.get("procedureIds"))
				this.model.set("procedureIds", [procedure.id]);
			else if(!this.model.get("procedureIds").contains(procedure.id))
				this.model.get("procedureIds").pushObject(procedure.id);
		},		
   	 	
   	 	insertNewProcedure: function(protocol){
   	 		var procedure = this.store.createRecord('procedure', {name: "New Procedure"});
      		protocol.get("procedures").pushObject(procedure);
      		
      		if(!this.model.get("procedureIds"))
				this.model.set("procedureIds", [procedure.id]);
			else
				this.model.get("procedureIds").pushObject(procedure.id);
   	 	},

   	 	editLabel: function () {
	      this.set("isEditingLabel", true);       
	    },

	    updateLabel: function () {
	      this.set("isEditingLabel", false);       
	    },
  	}    	

});
