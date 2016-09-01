/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("twitchTVListCtrl", function ($scope, $sce, streams) {
		$scope.app = "TwitchTV List";
		$scope.streams = parseStreams(streams.data);

		/* Converte o JSON em um objeto mais simples e manipulável */
		function parseStreams(data) {
			var _keys = Object.keys(data);
			var _streams = [];

			data[_keys[1]].forEach(function (stream) {
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
	});
}());