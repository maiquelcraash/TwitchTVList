/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("twitchTVListCtrl", function ($scope, $sce, twitchAPI, $attrs) {
		$scope.app = "TwitchTV List";

		this.searchedterm = "";
		this.doSearch = function () {
			var _search = this.searchedterm;

			if (_search) {
				_search = parseSearch(_search);

				twitchAPI.getStreamBySearch(_search).success(function (data, status) {
					$scope.streams = parseSearchedStreams(data);
				});
			}
			else {
				twitchAPI.getFeaturedStreams().success(function (data, status) {
					$scope.streams = parseFeaturedStreams(data);
				});
			}
		};

		/* Converte o JSON em um objeto mais simples e manipulável */
		function parseFeaturedStreams(data) {
			var _streams = [];

			data.featured.forEach(function (stream) {
				var _stream = {};
				_stream.title = stream.title;
				_stream.description = $sce.trustAsHtml(stream.text);
				_stream.status = "online";
				_stream.viewers = stream.stream.viewers;
				_stream.user = stream.stream.channel.display_name;
				_stream.userImg = stream.stream.channel.logo;
				_stream.userUrl = stream.stream.channel.url + "/profile";
				_stream.streamImg = stream.stream.preview.large;
				_stream.streamUrl = stream.stream.channel.url;
				_stream.views = stream.stream.channel.views;
				_stream.followers = stream.stream.channel.followers;
				_streams.push(_stream);
			});
			return _streams;
		}

		/* Converte o JSON em um objeto mais simples e manipulável */
		function parseSearchedStreams(data) {
			var _streams = [];

			data.streams.forEach(function (stream) {
				var _stream = {};
				_stream.title = stream.game;
				_stream.description = "";
				_stream.status = "online";
				_stream.viewers = stream.viewers;
				_stream.user = stream.channel.display_name;
				_stream.userImg = stream.channel.logo;
				_stream.userUrl = stream.channel.url + "/profile";
				_stream.streamImg = stream.preview.large;
				_stream.streamUrl = stream.channel.url;
				_stream.views = stream.channel.views;
				_stream.followers = stream.channel.followers;
				_stream.showDescription = false;
				_streams.push(_stream);
			});
			return _streams;
		}

		function parseSearch(search) {
			return search.toLowerCase().trim().replace(/\s\s+/g, '+');
		}

		$scope.toggleDescriptionShow = function(stream) {
			stream.showDescription = !stream.showDescription;
		}
	});
}());