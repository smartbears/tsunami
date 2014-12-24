App.ProcedureController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {
          var procedure = this.get('model');
          procedure.save().then(function(){
            $('.'+procedure.get('id') + ' span').each(function(){
                $(this).text(procedure.get('name'));
            });
          }); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var procedure = this.get('model');
             $('.'+procedure.get('id')).each(function(){
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
                $('#'+ elementName +' .col-md-5').append('<div class="list-group-item '+ item +'" style="font-size: 14px;">
                                                              <span>' + procedure.get('name') + '</span>
                                                          </div>');
              }
              else
              {
                alert('The procedure "' + procedure.get('name') + '" already exist in the current visit.');
              }
        },        

        destroyVisit: function(visit){
            $('#'+visit).fadeOut("slow",function(){
              $(this).remove();
            })
        }
      }
});

App.ProceduresAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var procedure = this.store.createRecord('procedure',
            {
              name: this.get('name'),
              reaction: this.get('reaction'),
              reactionOn: Date.now(),
              comments: this.get('comments')
            });
            procedure.save();            

            this.transitionToRoute('procedures');
        }
    }
});