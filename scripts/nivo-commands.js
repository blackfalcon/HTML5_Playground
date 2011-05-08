//functional commands for nivoSlider UX

/* =========================================================

 * <div class="slider nivoSlider">
 *     <img src="/images/home_slider/01.jpg" alt="" />
 *     <img src="/images/home_slider/02.jpg" alt="" />
 * </div>
 
// ========================================================= */

    $(window).load(function() {
        $('.slider').nivoSlider({
            effect:'fade', //Specify sets like: 'fold,fade,sliceDown'
            slices:15,
            animSpeed:1000, //Slide transition speed
            pauseTime:10000,
            startSlide:0, //Set starting Slide (0 index)
            directionNav:false, //Next & Prev
            directionNavHide:false, //Only show on hover
            controlNav:false, //1,2,3...
            controlNavThumbs:false, //Use thumbnails for Control Nav
            controlNavThumbsFromRel:false, //Use image rel for thumbs
            controlNavThumbsSearch: '.jpg', //Replace this with...
            controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
            keyboardNav:false, //Use left & right arrows
            pauseOnHover:false, //Stop animation while hovering
            manualAdvance:false, //Force manual transitions
            captionOpacity:0.8, //Universal caption opacity
            beforeChange: function(){},
            afterChange: function(){},
            slideshowEnd: function(){}, //Triggers after all slides have been shown
            lastSlide: function(){}, //Triggers when last slide is shown
            afterLoad: function(){} //Triggers when slider has loaded
        });
    });