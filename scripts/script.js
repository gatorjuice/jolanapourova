var main = function() {
    $('img').click(function() {
        var url = $(this).attr('src');
        var bigUrl = $('.large-picture > img').attr('src');
        $('.large-picture > img').attr('src', url);
        $(this).attr('src', bigUrl);
    });
    
    
    $('img').click(function() {
        
        
    });
    
    $('img').click(function() {
        $(this).addClass('.selected');
    });
    $(window).load(function() {
            $("#my-thumbs-list").mThumbnailScroller({axis:"y"});
    });

    
};


$(document).ready(main);