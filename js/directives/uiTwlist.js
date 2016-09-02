/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").directive("uiTwlist", function () {
		return {
			restrict: "E",
			templateUrl: "view/twlist.html",
			controller: "twitchTVListCtrl",
			scope: {
				searchedterm: '='
			}
		};
	});
}());

