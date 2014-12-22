App.DroppableContainerComponent = Ember.Component.extend({
  overTrash: false,

  dragEnter: function(){
    this.set('overTrash', true);
  },

  dragLeave: function(){
    this.set('overTrash', false);
  },

  dragOver: function(event){
    event.preventDefault();
  },

  drop: function(event){
    id = event.dataTransfer.getData('text/data');
    record = this.get('inFolder').findProperty('id', parseInt(id));
    this.set('overTrash', false);
    this.get('inTrash').pushObject(record);
    this.get('inFolder').removeObject(record);
  }

});
