
function Panel() {
    this.div = $('<div/>') ;
    $('body').append(this.div);

    var cssObj = {
        'position': 'relative',   // important!!!
        'width' : '200px',
        'height': '60%',
        'margin':'0 auto',
        'border':'1px solid gray',
        'borderRadius':'3px',
        'boxShadow':'rgba(0, 0, 0, 0.5) 0 4px 18px',
        'backgroundColor':'rgba(0,0,0,0.3)'       // to solved Child elements will opacity too
//        'opacity':'0.8',                          // Child elements will opacity too
    }
    var cssObj1 = {
    'position': 'relative',
    'width': '100px',
    'height': '100px',
    'padding': '0.5em',
    'float': 'left',
    'margin': '0 10px 10px 0',
    'background-color': 'red',
    'border': '2px solid gray'
}

    this.div.css(cssObj);

    this.div.bind("click", function(event){
        console.log('Click stop.....')
    });

//    this.div.attr('draggable','true');


//    this.div.draggable({      // using jquery ui
//        revert: "invalid",
//        start : function(event, ui) {
//            console.log('Drag start.....');
//        },
//        drag: function(event, ui) {
//            console.log('Draging ....');
//        },
//        stop: function(event, ui) {
//            console.log('Drag stop.....');
//        }
//    });


//    this.div.draggable({
//        // Can't use revert, as we animate the original object
//        //revert: true,
//
//        //axis: "y",
//        helper: function(){
//            // Create an invisible div as the helper. It will move and
//            // follow the cursor as usual.
//            return $('<div></div>').css('opacity',0);
//        },
//        create: function(){
//            // When the draggable is created, save its starting
//            // position into a data attribute, so we know where we
//            // need to revert to.
//            var $this = $(this);
//            $this.data('starttop',$this.position().top);
//        },
//        stop: function(){
//            // When dragging stops, revert the draggable to its
//            // original starting position.
//            var $this = $(this);
//            $this.stop().animate({
//                top: $this.data('starttop')
//            },1000,'easeOutBounce');
//        },
//        drag: function(event, ui){
//            // During dragging, animate the original object to
//            // follow the invisible helper with custom easing.
//            console.log('Draging ....');
//            $(this).stop().animate({
//                top: ui.helper.position().top
//            },1000,'easeOutCirc');
//        }
//
//    });

    this.div.draggable({
        // Can't use revert, as we animate the original object
        //revert: true,

        //axis: "y",
        helper: function(){
            // Create an invisible div as the helper. It will move and
            // follow the cursor as usual.
            return $('<div></div>').css('opacity',0);
        },
        create: function(){
            // When the draggable is created, save its starting
            // position into a data attribute, so we know where we
            // need to revert to.
            var $this = $(this);
            $this.data('startPosition',$this.position());
        },
        stop: function(){
            // When dragging stops, revert the draggable to its
            // original starting position.
            var $this = $(this);

            $this.stop().animate({
                top: $this.data('startPosition').top,
                left: $this.data('startPosition').left
            },1000,'easeOutBounce');
        },
        drag: function(event, ui){
            // During dragging, animate the original object to
            // follow the invisible helper with custom easing.
            console.log('Draging ....');
            $(this).stop().animate({
                top: ui.helper.position().top,
                left: ui.helper.position().left
            },1000,'easeOutCirc');
        }

    });

}