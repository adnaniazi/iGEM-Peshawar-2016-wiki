$.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
        console.log('preloaded');

    }
}

$.preloadImages(
    "http://2016.igem.org/wiki/images/2/23/T--Peshawar--govt-of-kpk-logo-small-compressed.png",
    "http://2016.igem.org/wiki/images/f/f0/T--peshawar--dost-logo-small-compresed2.png",
    "http://2016.igem.org/wiki/images/5/58/T--Peshawar--cecos-logo-small-compressed.png",
    "http://2016.igem.org/wiki/images/f/f7/T--Peshawar--iib-logo-small-compressed.png",
    "http://2016.igem.org/wiki/images/8/8f/T--Peshawar--ali-2.jpg",
    "http://2016.igem.org/wiki/images/a/a2/T--Peshawar--asif-2.jpg",
    "http://2016.igem.org/wiki/images/8/83/T--Peshawar--hadi-2.jpg",
    "http://2016.igem.org/wiki/images/b/ba/T--Peshawar--ismail-2.jpg",
    "http://2016.igem.org/wiki/images/e/e8/T--Peshawar--maleeha-2.jpg",
    "http://2016.igem.org/wiki/images/3/3d/T--Peshawar--mansoor-2.jpg",
    "http://2016.igem.org/wiki/images/e/e9/T--Peshawar--masoom-2.jpg",
    "http://2016.igem.org/wiki/images/e/ea/T--Peshawar--rabia-2.jpg",
    "http://2016.igem.org/wiki/images/7/7e/T--Peshawar--rayan-2.jpg",
    "http://2016.igem.org/wiki/images/0/09/T--Peshawar--sami-2.jpg",
    "http://2016.igem.org/wiki/images/b/b8/T--Peshawar--sarah-2.jpg",
    "http://2016.igem.org/wiki/images/1/17/T--Peshawar--sidra-2.jpg"
);
