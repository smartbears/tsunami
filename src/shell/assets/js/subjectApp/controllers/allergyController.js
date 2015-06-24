SubjectApp.AllergyController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {
          var alergy = this.get('model');
          alergy.save(); //Not working
          this.set('isEditing', false);
        },

        delete: function(){
            var alergy = this.get('model');
            alergy.destroyRecord();
        }
    }
});