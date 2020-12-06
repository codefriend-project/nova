define([
'Magento_Checkout/js/model/quote',
'Magento_Checkout/js/action/set-shipping-information'
], function (quote, setShippingInformationAction) {
    'use strict';

    return function (Component) {
        var currentMethod;

        return Component.extend({
            initialize: function() {
                this._super();

                quote.shippingMethod.subscribe(function (method) {
                    if (currentMethod !== method) {
                        setShippingInformationAction()
                        currentMethod = method
                    }
                });
            }
        });
    }
});