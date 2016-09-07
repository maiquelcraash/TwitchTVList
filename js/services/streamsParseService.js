/**
 * Created by maiquel on 06/09/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").factory("streamsParseService", function ($sce) {

		/**
		 * Return the parsed featured streams
		 * @param {JSON} data
		 * @return {streams[]} _streams
		 */
		var _parseFeaturedStreams = function (data) {
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
		};

		/**
		 * Return the parsed searched streams
		 * @param {JSON} data
		 * @return {streams[]} _streams
		 */
		var _parseSearchedStreams = function (data) {
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
		};

		var _parseUserData = function (data, status, username) {
			var _user = {};

			if (status >= 200 && status <= 299) {
				_user.name = data.display_name;
				_user.bio = data.bio;
				_user.logoUrl = data.logo;
				_user.url = data._links.self;
			}
			else {
				_user.name = username;
				_user.bio = "User not Found";
				_user.logoUrl = null;
				_user.url = null;
			}
			return _user;
		};

		return {
			parseFeaturedStreams: _parseFeaturedStreams,
			parseSearchedStreams: _parseSearchedStreams,
			parseUserData: _parseUserData
		}
	});

}());