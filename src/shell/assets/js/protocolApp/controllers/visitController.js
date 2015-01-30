ProtocolApp.VisitController = Ember.ObjectController.extend({
	needs: 'protocolsConfigure',
  	actions: {
    	drop_procedure_into_visit: function(procedureId){
    		var procedure = this.get('controllers.protocolsConfigure')
														.get('procedures')
														.findBy("id", procedureId);

				if(!this.model.get("procedureIds"))
					this.model.set("procedureIds", [procedure.id]);
				else
					this.model.get("procedureIds").pushObject(procedure.id);
		 	}
  	},

		procedures: function(){
			var procIds = this.model.get("procedureIds");
			if(!procIds)
				return [];

			return this.get('controllers.protocolsConfigure')
					.get('procedures')
					.filter(function(p){
						return procIds.contains(p.id)
					});
		}.property("model.procedureIds.@each")
});
