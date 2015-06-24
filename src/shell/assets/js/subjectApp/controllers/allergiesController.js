SubjectApp.AllergiesController = Ember.ObjectController.extend({
    isSearching: false,
    actions: {
        search: function() {
          var pattern = this.get("searchPattern");
          var model = this.store.all('allergy');

          if(pattern){
            this.set('isSearching', true);
            this.set("model", model.filter( function(subject){
                  return subject.get("name").toLowerCase()
                                .match(pattern.toLowerCase());
                              }));
          }
          //we are only looking by name for now.
          /*var results = this.store.find('subject', {name: pattern});
          this.set('model',results);*/
        },

        doneSearch: function() {
          this.set('isSearching', false);
          this.set('model',this.store.all('allergy'));
          this.transitionToRoute('allergies');
        }
    }
}); 

