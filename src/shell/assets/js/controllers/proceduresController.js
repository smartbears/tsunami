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

        acceptElement: function(item, elementName, senderElement){          
              var procedure = this.store.getById('procedure',item);
              if($('#'+ elementName +' .col-md-5 .' + item).length <= 0){ 
                var procedureItem = Ember.View.create({ 
                                      templateName: 'procedure-item',                                      
                                      container: this.container, 
                                      id: item, 
                                      name: procedure.get('name')
                                    });
                procedureItem.appendTo($('#'+ elementName +' .col-md-5').first());
                /*$('#'+ elementName +' .col-md-5').append('<div class="list-group-item '+ item +'" style="font-size: 14px;">
                                                              <span>' + procedure.get('name') + '</span>
                                                          </div>');*/
              }
              else
              {
                alert('The procedure "' + procedure.get('name') + '" already exist in the current visit.');
              }
        },        

        newVisit: function(){
          var count = this.get('visitCount');
          this.incrementProperty('visitCount');          
          var visitItem = Ember.View.create({ 
                                      templateName: 'visit-item',
                                      controller: this,
                                      container: this.container, 
                                      id: 'visit' + count, 
                                      elementName: 'visit' + count,
                                      name: 'Visit ' + count
                                    });
          visitItem.appendTo('#listOfVisits');
          
        },

        destroyVisit: function(visit){
            $('#'+visit).fadeOut("slow",function(){             
              $(this).remove();
            });            
        }
      }
});