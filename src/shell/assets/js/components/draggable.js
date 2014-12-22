App.DraggableComponent = Ember.Component.extend({
  dragStart: function(event){
    event.dataTransfer.setData('text/data', this.get('file.id'));
  }
});
