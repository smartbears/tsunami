ProtocolApp.VisitItemComponent = Em.Component.extend({
  tagName: 'div',
  attributeBindings: ['visitItem', 'protocol'],
  classNames: [],
  visitItem: null,
  protocol: null,
  isEditingLabel: false,
  collapsed: false,
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

	    minimizeVisit: function(){
	    	collapsed = this.get('collapsed');

	    	if(collapsed){
	    		$("#"+this.get('visitItem.id') + ' #visit1 .visit_N i').removeClass('glyphicon-chevron-down');
	    		$("#"+this.get('visitItem.id') + ' #visit1 .visit_N i').addClass('glyphicon-chevron-up');
	    		this.set('collapsed', false);
	    	}
	    	else{
	    		$("#"+this.get('visitItem.id') + ' #visit1 .visit_N i').removeClass('glyphicon-chevron-up');
	    		$("#"+this.get('visitItem.id') + ' #visit1 .visit_N i').addClass('glyphicon-chevron-down');
	    		this.set('collapsed', true);
	    	}
	    	
	    	$("#"+this.get('visitItem.id') + ' #visit1 .visit-body').toggle('slow');

	    }
  	},
  // didInsertElement: function() {
  //  
  // }.on('didInsertElement')

});
