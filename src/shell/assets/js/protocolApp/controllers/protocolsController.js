ProtocolApp.ProtocolController = Ember.ObjectController.extend({
    isEditing: false,
    haveDescription: function(){
        return this.get('description') != null ;
    }.property('model.haveDescription'),

    actions: {
        edit: function() {
          this.set('isEditing', true);
        },

        doneEditing: function() {

        },

        delete: function(){

        },

        toogleShow: function(){
            $('#'+ this.get('id') + ' ul').fadeToggle();

            if($('#'+ this.get('id') + ' i').hasClass('glyphicon-chevron-up')){
                $('#'+ this.get('id') + ' i').removeClass('glyphicon-chevron-up');
                $('#'+ this.get('id') + ' i').addClass('glyphicon-chevron-down');
            }
            else{
                $('#'+ this.get('id') + ' i').removeClass('glyphicon-chevron-down');
                $('#'+ this.get('id') + ' i').addClass('glyphicon-chevron-up');
            }
            
        }
    }
});

ProtocolApp.ProtocolsAddController = Ember.ObjectController.extend({
    actions: {
        add: function(){
            var protocol = this.get('model');

            protocol.save().then(function(){
                console.log(protocol.get('id'));
            });

            this.transitionToRoute('protocols');
        }
    }
});
