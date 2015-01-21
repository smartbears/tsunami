var FormEditable = function () {

	var count=0;
    $.mockjaxSettings.responseTime = 500;

    var initAjaxMock = function () {
        //ajax mocks

        $.mockjax({
            url: '/post'            
        });     

       
    }

    var initEditables = function () {

        //set editable mode based on URL parameter
        
            drag();
	   
        $.fn.editable.defaults.mode = 'inline';
            
        

        //global settings 
        $.fn.editable.defaults.inputclass = 'form-control';
        $.fn.editable.defaults.url = '/post';

        //editables element samples 
        $('.procedure').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username'	
       });
	   
    }
	var drag= (function() {
		
		$( ".draggable" ).draggable({
			
			connectedWith:".sortable",
			helper: "clone",
			cursor:'move',
			scroll:false,
			zIndex:999999999,
			cancel:".procedure",
			appendTo:'body'
			
		});
		$( ".sortable" ).droppable({
			activeClass: "ui-state-default",
			hoverClass: "ui-state-hover",
			accept: ":not(.ui-sortable-helper)",
			cancel:".procedure",
			drop: function( event, ui ) {
				$( this ).find( ".placeholder" ).remove();
				var html=$( '<li class="ui-state-default"><a class="procedure">'+ ui.draggable.text() + '</a></li>' );
				jQuery($(this)).append(html);
				$(this).addClass('count_proc_V');
				initEditables();
			}
		}).sortable({
			items: "li:not(.placeholder)",
			cancel:".procedure",
			cursor: 'move',
			sort: function() {
				// gets added unintentionally by droppable interacting with sortable
				// using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
				$( this ).removeClass( "ui-state-default" );
			}
			
		});
		      
	});	
	var addEvent = function () {
					title = '';
					var html = $('<li class="ui-state-default scroll_El draggable ui-draggable-handle"><a class="procedure">' + title + '</a></li>');
					jQuery('.procedures').append(html);
				}


				$('#proc').unbind('click').click(function () {
						$('#number').css('display','block');
						addEvent();	
						initEditables();			
				});
	var addVisit=function(parent){
					var html = $('<div id="visit'+ count +'" class=" visit row margin-row"><h4 class="visit-title procedure col-sm-12">Visit ' + count +'</h4><ul id="" class="connectedSortable sortable col-sm-12"><li class="ui-state-default "><a class="procedure"></a></li><p class="count_proc" id="" style="display:none"> 17 procedures</p></ul><button style="display:block" class="btn bg-gray  addProc">+</button></div>');
					jQuery(parent).append(html);
				}
				
			$('#nV1').unbind('click').click(function () {
						$('#nvisit1').css('display','none');
						$('#nvisit2').css('display','block');
						count= count + 1;
						addVisit('#col1');	
						initEditables();			
				});
			$('#nV2').unbind('click').click(function () {
						$('#nvisit2').css('display','none');
						$('#nvisit3').css('display','block');
						count= count + 1;
						addVisit('#col2');	
						initEditables();			
				});
			$('#nV3').unbind('click').click(function () {
						$('#nvisit3').css('display','none');
						$('#nvisit4').css('display','block');
						count= count + 1;
						addVisit('#col3');	
						initEditables();			
				});
			$('#nV4').unbind('click').click(function () {
						$('#nvisit4').css('display','none');
						$('#nvisit1').css('display','block');
						count= count + 1;	
						addVisit('#col4');
						initEditables();			
				});
    return {
        //main function to initiate the module
        init: function () {

            drag();
            // inii ajax simulation
            initAjaxMock();

            // init editable elements
            initEditables();
            // init editable toggler
            $('#enable').click(function () {
                $('.editable').editable('toggleDisabled');
            });            

        }

    };
	
	
}();