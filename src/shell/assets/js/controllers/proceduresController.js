App.ProcedureController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);          
        },

        doneEditing: function() {
          var procedure = this.get('model');
          procedure.save().then(function(){
            $('.' + procedure.get('id') + ' span').each(function(){
                $(this).text(procedure.get('name'));
            });
          }); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var procedure = this.get('model');
             $('.' + procedure.get('id')).each(function(){
                  $(this).fadeOut("slow",function(){
                    $(this).remove();
                  });
                  
              }).then(function(){
                  procedure.destroyRecord();
              });
                 
              this.transitionToRoute('procedures');
        }
    }
});

App.VisitController = Ember.ObjectController.extend({
    isRenamingView: false,    
    actions: {
        destroyVisit: function(visit){
            $('#'+visit).fadeOut("slow",function(){             
              $(this).remove();
            });            
        },

       startRenaming: function(){
            this.set('isRenamingView', true);
        },
 
        doneRenaming: function(){
          var visit = this.get('model')
          visit.save();
          this.set('isRenamingView', false);
        },
      

        acceptElement: function(item, elementName, senderElement){ 
                //HERE IS THE THING!!!         
                var procedure = this.store.getById('procedure',item);
                if($('#'+ elementName +' .col-md-5 .' + item).length <= 0){ 
                  var procedureItem = Ember.View.create({ 
                                        templateName: 'procedure-item',                                      
                                        container: this.container, 
                                        id: item, 
                                        name: procedure.get('name')
                                      });
                  procedureItem.appendTo($('#'+ elementName +' .col-md-5').first());                
                }
                else
                {
                  alert('The procedure "' + procedure.get('name') + '" already exist in the current visit.');
                }
          }
      }    
});


App.ProceduresController = Ember.ObjectController.extend({    
    isCreating: false,    
    visitCount: 1,
    

    actions: {     
        newProcedure: function(){
          this.set('isCreating',true);
          this.transitionToRoute('procedures');
        },       

        addProcedure: function(){
            this.set('isCreating',false);
            var procedure = this.store.createRecord('procedure',
            {
              name: this.get('name'),              
              performedOn: Date.now(),
              comments: this.get('comments')
            });
            procedure.save();

            this.set('name', '');
            this.set('comments', '');            

            this.transitionToRoute('procedures');
        },

        cancelProcedure:function(){
            this.set('isCreating',false);
            this.transitionToRoute('procedures');
        },           

        newVisit: function(){
          var count = this.get('visitCount');
          this.incrementProperty('visitCount'); 

          var visit = this.store.createRecord('visit',
            {
              name: 'Visit ' + count             
            });
          visit.save();            

          var visitView = Ember.View.create({ 
                                      templateName: 'visit-item',
                                      controller: App.VisitController.create({ model: visit }),
                                      container: this.container,                                       
                                      elementName: 'visit' + count                                                                   
                                    });
          visitView.appendTo('#listOfVisits');
          
        }
      }

        
});