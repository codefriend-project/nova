define([
    'jquery',
    'domReady',
    'matchMedia'
], function ($, domReady, mediaCheck) {
    'use strict';
    $.widget('kappa.novaLayout', {
        options: {
            responsive: false,
            disabled: false
        },
        _create: function () {
            var self = this;
            self._super();

            if (this.options.responsive === true) {

                mediaCheck({
                    media: '(min-width: 1200px)',
                    entry: $.proxy(function () {

                    }, this),
                    exit: $.proxy(function () {
                        self._setHeightMenu();
                    }, this)
                });

                $(window).on('resize', function () {
                    /* change menu when resizing from desktop and mobile and vice-versa */
                    if($(window).width() > 1199){
                    }else{
                    }
                });

                self._setElementPositionTop();
            }
        },
        _setElementPositionTop : function (){
            var headerHeight = 0;
            var resizedHeaderHeight = $('.page-header').outerHeight(true);
            var minicartWrapper = $('.minicart-wrapper');
            if(resizedHeaderHeight != headerHeight){
                headerHeight = resizedHeaderHeight;
                $('#maincontent').css('margin-top', headerHeight);
                $('.block-minicart' , minicartWrapper).css('top' , headerHeight);
            }
            $(window).on('resize', function () {
                var resizedHeaderHeight = $('.page-header').outerHeight(true);
                if(resizedHeaderHeight != headerHeight){
                    headerHeight = resizedHeaderHeight;
                    $('#maincontent').css('margin-top', headerHeight);
                    $('.block-minicart' , minicartWrapper).css('top' , headerHeight);
                }
            });
        },
        _setHeightMenu : function (){
            /* Set height only for mobile, unnecessary for desktop */
            console.log("_setHeightMenu");
        }
    });
    return $.kappa.novaLayout;
});
