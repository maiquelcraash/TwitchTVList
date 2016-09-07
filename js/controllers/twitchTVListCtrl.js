/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("twitchTVListCtrl", function ($scope, twitchAPI, streamsParseService) {
		$scope.app = "TwitchTV List";

		this.searchedterm = "";
		this.doSearch = function () {
			var _search = this.searchedterm;

			if (_search) {
				_search = parseSearch(_search);

				twitchAPI.getStreamBySearch(_search).success(function (data, status) {
					$scope.streams = streamsParseService.parseSearchedStreams(data);
				});
			}
			else {
				twitchAPI.getFeaturedStreams().success(function (data, status) {
					$scope.streams = streamsParseService.parseFeaturedStreams(data);
				});
			}
		};

		function parseSearch(search) {
			return search.toLowerCase().trim().replace(/\s\s+/g, '+');
		}

		$scope.toggleDescriptionShow = function(stream) {
			stream.showDescription = !stream.showDescription;
		}
	});
}());