SubjectApp.AllergiesAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var allergy = this.store.createRecord('allergy',
            {
              name: this.get('name'),
              reaction: this.get('reaction'),
              reactionOn: Date.now(),
              comments: this.get('comments')
            });
            alergy.save();

            this.transitionToRoute('allergies');
        }
    }
});