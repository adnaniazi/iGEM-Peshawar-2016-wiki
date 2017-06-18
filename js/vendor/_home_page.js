$(window).on("load resize", function(e) {
    // REPOISTIONING THE TITLE DIV TO ACCOUNT FOR HEADER HEIGHT
    var headerHeight = $('.header-outer-container').outerHeight();
    console.log('adnan', headerHeight);
    $('#video-title-home-page').css('margin-top', -headerHeight*0.75);

});