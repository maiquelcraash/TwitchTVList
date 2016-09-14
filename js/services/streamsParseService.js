/**
 * Created by maiquel on 06/09/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").factory("streamsParseService", function ($sce, twitchAPI) {

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

		var _parseUserData = function (data, status) {
			var _user = {};

			if (status >= 200 && status <= 299) {
				_user.name = data.display_name;
				_user.bio = data.bio;
				_user.logoUrl = data.logo || "https://dummyimage.com/80x80/ecf0e7/5c5457.jpg&text=0x3F";
				_user.url = "https://www.twitch.tv/" + data.display_name + "/profile";

			}
			else {
				_user.name = data.message;
				_user.bio = "User not Found";
				_user.logoUrl = "https://dummyimage.com/80x80/ecf0e7/5c5457.jpg&text=0x3F";
				_user.url = null;
			}

			return _user;
		};

		var _parseUserStream = function (data) {
			var _stream = {};

			if (data.stream) {
				_stream.status = "Online";
				_stream.game = data.stream.game;
				_stream.url = data.stream.channel.url;
			}
			else {
				_stream.status = "Offline";
			}

			return _stream;
		};


		return {
			parseFeaturedStreams: _parseFeaturedStreams,
			parseSearchedStreams: _parseSearchedStreams,
			parseUserData: _parseUserData,
			parseUserStream: _parseUserStream
		};
	});

}());