SubjectApp.IndexController = Ember.ObjectController.extend({
    isSearching: false,
    actions: {
        search: function() {
          var pattern = this.get("searchPattern");
          var model = this.store.all('subject');

          if(pattern){
            this.set('isSearching', true);
            this.set("model", model.filter( function(subject){
                if(subject.get('firstName') != null)
                    return subject.get("firstName").toLowerCase()
                        .match(pattern.toLowerCase());
                else
                    return false;
            }));
          }
          //we are only looking by name for now.
          /*var results = this.store.find('subject', {name: pattern});
          this.set('model',results);*/
        },

        doneSearch: function() {
          this.set('isSearching', false);
          this.set('model',this.store.all('subject'));
          this.transitionToRoute('subjects');
        },

         dropDelete: function(item, elementName, senderElement){
          var subject = this.store.getById('subject',item);
            subject.destroyRecord();
        }
    }
});

