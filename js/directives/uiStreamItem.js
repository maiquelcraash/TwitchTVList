/**
 * Created by maiquel on 30/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").directive("uiStreamItem", function () {
		return {
			templateUrl: "view/stream.html",
			replace: true,
			restrict: "E",
			scope: {
				title: "@",
				description: "@",
				status: "@",
				viewers: "@",
				user: "@",
				userImg: "@",
				userUrl: "@",
				streamImg: "@",
				streamUrl: "@"
			}
		}
	});

}());