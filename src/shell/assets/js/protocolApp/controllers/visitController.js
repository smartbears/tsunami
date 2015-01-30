ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'protocolsConfigure',
	isEditingLabel: false,

  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.protocolsConfigure')
														.get('procedures')
														.findBy("id", procedureId);

			var id = parseInt(procedure.id);
			if(!this.model.get("procedureIds"))
				this.model.set("procedureIds", [id]);
			else if(!this.model.get("procedureIds").contains())
				this.model.get("procedureIds").pushObject(id);
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
  	},

		procedures: function(){
			var procIds = this.model.get("procedureIds");
			if(!procIds)
			return [];

			return this.get('controllers.protocolsConfigure')
			.get('procedures')
			.filter(function(p){
				return procIds.contains(parseInt(p.id))
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

});
