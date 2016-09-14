/**
 * Created by maiquel on 06/09/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").directive("uiUserList", function () {
		return {
			restrict: "E",
			controller: "userListCtrl",
			templateUrl: "view/userlist.html"
		};
	});

}());