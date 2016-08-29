/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").config(function ($routeProvider) {

		$routeProvider.when("/twlist", {
			templateUrl: "view/twlist.html",
			controller: "twitchTVListCtrl",
			resolve: {
				streams: function (twitchAPI) {
					return twitchAPI.getStreams();
				}
			}
		});

		/* caso a URL digitada não seja encontrada, usar por padrão a seguinte */
		$routeProvider.otherwise({redirectTo: "/twlist"});
	});

}());