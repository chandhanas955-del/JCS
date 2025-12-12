    
    $(function(){
    const $box = $('#box');
    let score = 0;
    $('#score').text(score);

    const padding = 10;

    function moveBox(duration){
        const ww = $(window).width() - $box.outerWidth() - padding;
        const wh = $(window).height() - $box.outerHeight() - padding;
        const left = Math.max(0, Math.floor(Math.random() * ww));
        const top = Math.max(0, Math.floor(Math.random() * wh));
        $box.stop(true).animate({left: left, top: top}, duration, 'swing');
    }

    // Faster defaults: reduce interval and animation time to make movement quicker
    const moveIntervalMs = 400; // frequency of moves (smaller -> more frequent)
    const animDuration = 300;   // animation duration for each move (smaller -> snappier)

    // Place the box initially and start the loop
    moveBox(0);
    const timer = setInterval(() => moveBox(animDuration), moveIntervalMs);

    // Increase score when clicking the box
    $box.on('click', function(){
        score++;
        $('#score').text(score);
        // quick visual feedback
        $box.stop(true).animate({width: '+=10', height: '+=10'}, 80)
            .animate({width: '-=10', height: '-=10'}, 80);
    });

    // Keep the box inside viewport on resize
    $(window).on('resize', function(){ moveBox(0); });

});
