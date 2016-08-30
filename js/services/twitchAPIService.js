/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").factory("twitchAPI", function ($http) {

		var _getStreams = function () {
			var streams = $http.get("https://api.twitch.tv/kraken/streams/featured?limit=5");
			return streams;
		};

		return {
			getStreams: _getStreams
		};
	});

}());

