/**
 * Created by maiquel on 06/09/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").controller("userListCtrl", function ($scope, twitchAPI, streamsParseService, $q) {
		$scope.users = [];

		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
		var usersdata = usernames.map(function (username) {
			return twitchAPI.getUserData(username)
				.success(function (data, status) {
					$scope.users.push(streamsParseService.parseUserData(data, status));
				})
				.error(function (data, status) {
					$scope.users.push(streamsParseService.parseUserData(data, status, data.message));
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
								deferred.resolve(responses);
						}
					});
			});
			return deferred.promise;
		};

		var promise = $q.allComplete(usersdata);
		promise
			.then(function (values) {
				console.log($scope.users);
			})
			.catch(function (error) {
				console.log(error);
			});



	});

}());