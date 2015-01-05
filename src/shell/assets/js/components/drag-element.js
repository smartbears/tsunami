App.DragElementComponent = Ember.Component.extend({
  tagName:'div',
  attributeBindings:['draggable', 'elementName', 'item', 'tag:tagName', 'id', 'class', 'dragType'],
  draggable: 'true',
  elementName: null,
  item: null, 
  dragStart: function(event) {
    var dragType = this.get('dragType');

    if(dragType == 'visits'){
      $(this.element).animate({ opacity: 0.25 }, 500); 

      var clone_element =  $(this.element).clone(true); //Cloning the original element and creating the drag object.
      
      clone_element.contents().filter('.list-group-item').addClass('dragging-element');
      clone_element.contents().filter('.list-group-item').contents().filter('button').remove();

      clone_element.addClass('drag-element');//Applying style to the drag object.
      
      //Inserting into document the drag object.
      event.dataTransfer.effectAllowed = "copy";
      document.body.appendChild(clone_element[0]);
      event.dataTransfer.setDragImage(clone_element[0], 0, 0);
      

    }       
    
    if (this.get('elementName')){
        var o = {};
        o.container = true;
        o.item = this.get('item');
        o.elementName = this.get('elementName');            
        event.dataTransfer.setData('text', JSON.stringify(o));
    } else {
        event.dataTransfer.setData('text', JSON.stringify(this.get('item')));
    }
  },

  dragEnd: function(event) {
    var dragType = this.get('dragType');
    
    if(dragType == 'visits'){
       $(this.element).animate({ opacity: 1.0}, 500);        
    }
  }

});