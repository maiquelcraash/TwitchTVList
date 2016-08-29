/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").factory("twitchAPI", function ($http) {

		var _getStreams = function () {
			return $http.get("https://api.twitch.tv/kraken/streams/");
		};

		return {
			getStreams: _getStreams
		};
	});

}());