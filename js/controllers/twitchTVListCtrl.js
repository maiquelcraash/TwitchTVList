/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("twitchTVListCtrl", function ($scope, streams) {
		$scope.app = "TwitchTV List";
		$scope.streams = parseStreams(streams.data);
		console.log($scope.streams);






		/* Converte o JSON em um objeto mais simples e manipulável */
		function parseStreams(data) {
			var _keys = Object.keys(data);
			var _streams = [];

			data[_keys[1]].forEach(function (stream) {
				var _stream = {};
				_stream.title = stream.title;
				_stream.description = stream.text;
				_stream.status = "online";
				_stream.viewers = stream.stream.viewers;
				_stream.user = stream.stream.channel.display_name;
				_stream.userImg = stream.stream.channel.logo;
				_stream.userUrl = stream.stream.channel.url;
				_stream.streamImg = stream.stream.preview.medium;
				_stream.streamUrl = stream.stream._links.self;

				_streams.push(_stream);
			});


			return _streams;
		}
	});
}());