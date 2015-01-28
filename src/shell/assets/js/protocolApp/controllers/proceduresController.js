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
