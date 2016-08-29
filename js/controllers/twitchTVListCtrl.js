/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("twitchTVListCtrl", function ($scope, streams) {
		$scope.app = "TwitchTV List";
		$scope.streams = streams.data;
	})

}());