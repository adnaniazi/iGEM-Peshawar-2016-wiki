$(window).on("load resize", function(e) {

    // SOCIAL MAIN FOOTER POISTIONING ON WINDOWS RELOAD AND RESIZE
    var menuHeight = $(window).height(); //$('.outermost-box').outerHeight();
    var mainSocialFooterHeight = $('#social-main-footer').outerHeight();
    var liHeight = $('.navigation-list li').outerHeight();
    var numLi = $('.navigation-list li').length;
    var hrHeight = 3 * 20; //approx
    console.log(menuHeight, mainSocialFooterHeight, liHeight, numLi, hrHeight);
    var pushDownByAmount = menuHeight - mainSocialFooterHeight - hrHeight - (liHeight * numLi) - 100;
    console.log('psu', pushDownByAmount);
    if (pushDownByAmount > 0) {
        $('#social-main-footer').css('margin-top', pushDownByAmount);
    }
});


// Recalculate the size and position of menu button
$(window).on("resize", function(e) {
    var button = document.getElementById('menu-button');
    button.style.position = "fixed";
    var buttonImage = document.getElementById("menu-background");

    var header = document.getElementById('header-oc');
    headerHeight = header.scrollHeight;
    screenWidth = header.scrollWidth;
    console.log('headerHeight', headerHeight, 'headerwidth', screenWidth);

    //Scale the button according to header height
    var buttonheight = headerHeight / 3.5;
    buttonImage.style.backgroundSize = buttonheight + 'px';
    buttonImage.style.height = buttonheight + 'px';
    buttonImage.style.width = buttonheight * 1.25 + 'px';

    // Calculate button coordinates
    menuButtonHeight = 80;
    var buttonTopPosition = headerHeight / 2 - buttonheight / 2;
    var buttonLeftPosition = screenWidth / 36;

    // Poistion the button at optimal location
    button.style.left = buttonLeftPosition + 'px';
    button.style.top = buttonTopPosition + 'px';
});




$(".js-toggle-left-slidebar").click(function() {
    // SOCIAL MAIN FOOTER POISTIONING ON WINDOWS RELOAD AND RESIZE
    var menuHeight = $(window).height(); //$('.outermost-box').outerHeight();
    var mainSocialFooterHeight = $('#social-main-footer').outerHeight();
    var liHeight = $('.navigation-list li').outerHeight();
    var numLi = $('.navigation-list li').length;
    var hrHeight = 3 * 20; //approx
    console.log(menuHeight, mainSocialFooterHeight, liHeight, numLi, hrHeight);
    var pushDownByAmount = menuHeight - mainSocialFooterHeight - hrHeight - (liHeight * numLi) - 100;
    console.log('psu', pushDownByAmount);
    if (pushDownByAmount > 0) {
        $('#social-main-footer').css('margin-top', pushDownByAmount);
    }
});


//-------------------------------------------------------------------
//Video
//-------------------------------------------------------------------
/** Document Ready Functions **/
/********************************************************************/

$(document).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function() {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function() {
        var videoAspectRatio = $(this).data('height') / $(this).data('width'),
            windowAspectRatio = windowHeight / windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({ 'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0 });
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


    });
}

//Parallel
$(document).ready(function() {
    if ($("#js-parallax-window").length) {
        parallax();
    }
});

$(window).scroll(function(e) {
    if ($("#js-parallax-window").length) {
        parallax();
    }
});

function parallax() {
    if ($("#js-parallax-window").length > 0) {
        var plxBackground = $("#js-parallax-background");
        var plxWindow = $("#js-parallax-window");

        var plxWindowTopToPageTop = $(plxWindow).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

        var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
        var windowInnerHeight = window.innerHeight;
        var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
        var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
        var plxSpeed = 0.35;

        plxBackground.css('top', -(plxWindowTopToWindowTop * plxSpeed) + 'px');
    }
}

















