ProtocolApp.ProcedureController = Ember.ObjectController.extend({
    isEditing: false,
    aa: "test",
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

ProtocolApp.VisitController = Ember.ObjectController.extend({
    needs: ['procedures'],
    isRenamingView: false,
    actions: {
        destroyVisit: function(visit){
            $('.ember-view #'+visit).fadeOut("slow",function(){
              $(this).remove();
            });
        },

       startRenaming: function(){
            this.toggleProperty('isRenamingView');
        },

        doneRenaming: function(){
          var visit = this.get('model')
          visit.save();
          this.toggleProperty('isRenamingView');
        },


        acceptElement: function(item, elementName, senderElement){
                //HERE IS THE THING!!!
                var procedure = this.get('controllers.procedures').store.getById('procedure',item);
                if($('.ember-view #'+ elementName +' .col-md-5 .ember-view .' + item).length <= 0){
                  var procedureItem = Ember.View.create({
                                        templateName: 'procedure-item',
                                        container: this.container,
                                        id: item,
                                        name: procedure.get('name')
                                      });
                  procedureItem.appendTo($('.ember-view ' + '#'+ elementName +' .col-md-5').first());
                }
                else
                {
                  alert('The procedure "' + procedure.get('name') + '" already exist in the current visit.');
                }
          }
      }
});


ProtocolApp.ProceduresController = Ember.ObjectController.extend({
    isCreating: false,
    visitCount: function(){
      var visits = this.store.find('visit');
      return visits.get('length');
    }.property()
    ,

    actions: {
        newProcedure: function(){
          this.toggleProperty('isCreating');
          this.transitionToRoute('procedures');
        },

        addProcedure: function(){
            this.toggleProperty('isCreating');
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
          this.incrementProperty('visitCount');
          var count = this.get('visitCount');

          var visit = this.store.createRecord('visit',
            {
              label: 'Visit ' + count
            });
          visit.save();
          var viewController = App.VisitController.create({ model: visit, container: this.container });
          var visitView = Ember.View.create({
                                      templateName: 'visit-item',
                                      controller: viewController,
                                      container: this.container,
                                      elementName: 'visit' + count,
                                      store: this.store
                                    });
          visitView.appendTo('#listOfVisits');

        }
      }


});
