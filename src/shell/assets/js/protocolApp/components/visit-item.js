ProtocolApp.VisitItemComponent = Em.Component.extend({
  tagName: 'div',
  attributeBindings: ['visitItem', 'protocol'],
  classNames: [],
  visitItem: null,
  protocol: null,
  isEditingLabel: false,
  actions: {
  		drop_procedure_into_visit: function(procedureId){
    		this.sendAction('dropProcedure',procedureId);
		},
   	 	insertNewProcedure: function(protocol){
   	 		this.sendAction('insertNewProcedure',this.get('protocol'));
   	 	},   
   	 	editLabel: function () {
	      this.set("isEditingLabel", true);
	    },

	    updateLabel: function () {
	      this.set("isEditingLabel", false);
	    },
  	},
  // didInsertElement: function() {
  //  
  // }.on('didInsertElement')

});
