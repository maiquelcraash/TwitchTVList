/**
 * Created by maiquel on 06/09/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("userListCtrl", function ($scope, twitchAPI, streamsParseService, $q) {
		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
		$scope.users = usernames.map(function (username) {
			return twitchAPI.getUserData(username)
				.success(function (data, status) {
					return streamsParseService.parseUserData(data, status);
				})
				.error(function (data, status, username) {
					return streamsParseService.parseUserData(data, status, username);
				});
		});

		//Função que faz com que todas as promises sejam executadas, com ou sem erros.
		$q.allComplete = function (promises) {

			if (!angular.isArray(promises)) {
				throw Error("$q.allComplete only accepts an array.");
			}

			var deferred = $q.defer();
			var passed = 0;
			var failed = 0;
			var responses = [];

			angular.forEach(promises, function (promise, index) {
				promise
					.then(function (result) {
						console.info('done', result);
						passed++;
						responses.push(result);
					})
					.catch(function (result) {
						console.error('err', result);
						failed++;
						responses.push(result);
					})
					.finally(function () {
						if ((passed + failed) == promises.length) {
							console.log("COMPLETE: " + "passed = " + passed + ", failed = " + failed);
							if (failed > 0) {
								deferred.reject(responses);
							} else {
								deferred.resolve(responses);
							}
						}
					});
			});
			return deferred.promise;
		};

		$q.allComplete($scope.users).then(function (values) {
			console.log(values.data);
		});


	});

}());