define(function () {
	'use strict';
	return function (grandTotal) {
        return grandTotal.extend({
            isBaseGrandTotalDisplayNeeded: function () {
				// you custom logic for displaying base grand total
				// returning false prevents the section from being displayed
				return false;
			}
        });
    }
});