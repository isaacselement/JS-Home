
function Panel() {
    this.div = $('<div/>') ;
    $('body').append($('<div/>').append(this.div));
    var cdToggle = true;

    var cssObj = {
        'position': 'relative',   // important!!!
        'float': 'left',
//        'display': 'inline-block',
//        'white-space': 'nowrap',
        'width' : 'auto',
        'height': 'auto',
        'margin':'0 auto',
        'border':'1px solid gray',
        'borderRadius':'3px',
        'boxShadow':'rgba(0, 0, 0, 0.5) 0 4px 18px',
        'backgroundColor':'rgba(255,255,255,0.01)'       // to solved Child elements will opacity too
//        'opacity':'0.8',                          // Child elements will opacity too
    }

    this.div.css(cssObj);

//    this.div.bind("click", function(event){
//        console.log('Click.....')
//    });

    this.div.click(function(event) {
        console.log('Click.....');
        if (cdToggle) {
            console.log('The Click you known.....');
        }
        cdToggle = true;
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


    // http://stackoverflow.com/questions/6398854/jquery-draggable-with-ease

    this.div.draggable({
        // Can't use revert, as we animate the original object
        //revert: true,

        helper: function(){
            // Create an invisible div as the helper. It will move and
            // follow the cursor as usual.
            return $('<div></div>').css('opacity',0);
        },
        start : function(event, ui) {
            console.log('Drag start.....');
            cdToggle = false;
        },
        create: function(){
            // When the draggable is created, save its starting
            // position into a data attribute, so we know where we
            // need to revert to.
            console.log('Drag create.....');
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
            },800,'easeOutBounce');
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

    this.appendImage = function(image) {
        this.div.append(image);
    }

    this.positionCenter = function() {
        var parent = this.div.parent();

        parent.css({
            'position': 'absolute',
            'top': '50%',
            'left': '50%'
        });
    }

}