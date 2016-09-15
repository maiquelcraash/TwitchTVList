/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").factory("twitchAPI", function ($http) {

		var configs = {
			headers: {
				'Client-ID': 'm0y2hfwhwzrij56faantomztoyx2oyj'
			}
		};

		var _getFeaturedStreams = function () {
			return $http.get("https://api.twitch.tv/kraken/streams/featured?limit=10", configs);
		};

		var _getStreamBySearch = function (search) {
			return $http.get("https://api.twitch.tv/kraken/search/streams?limit=10&offset=0&q=" + search, configs);
		};

		var _getUserData = function (username) {
			return $http.get("https://api.twitch.tv/kraken/users/" + username, configs);
		};

		var _getUserStreams = function (username) {
			return $http.get("https://api.twitch.tv/kraken/streams/" + username, configs);
		};

		return {
			getStreamBySearch: _getStreamBySearch,
			getFeaturedStreams: _getFeaturedStreams,
			getUserData: _getUserData,
			getUserStreams: _getUserStreams
		};
	});
}());
