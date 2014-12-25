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
      var styles = {
        '-webkit-transform': 'rotate(35deg)', /* Safari and Chrome */
        '-moz-transform': 'rotate(35deg)',   /* Firefox */
        '-ms-transform': 'rotate(35deg)',   /* IE 9 */
        '-o-transform': 'rotate(35deg)',   /* Opera */
        'transform': 'rotate(35deg)',
        'z-index': '-3',
        position: 'absolute',
        top: '100px',
        right: '100px',
        opacity: 1.0        
      };

      var draggingStyles = {
        color: 'white',
        'background-color': 'gray'
      };
      clone_element.contents().filter('.list-group-item').css(draggingStyles);
      clone_element.contents().filter('.list-group-item').contents().filter('button').remove();

      clone_element.css(styles);//Applying style to the drag object.
      
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
       $(this.element).animate({ opacity: 10.0}, 500);
       var styles = {
          '-webkit-transform': 'rotate(0deg)', /* Safari and Chrome */
          '-moz-transform': 'rotate(0deg)',   /* Firefox */
          '-ms-transform': 'rotate(0deg)',   /* IE 9 */
          '-o-transform': 'rotate(0deg)',   /* Opera */
          'transform': 'rotate(0deg)'
        };
        $(this.element).css(styles);    
    }
  }

});