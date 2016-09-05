/**
 * Created by maiquel on 29/08/16.
 */

(function () {
	"use strict";

	angular.module("twitchTVList").run(function ($templateCache) {
		/* adicionado template diretamente na cache, evitando que seja necessário, ler externamente */
		$templateCache.put("view/twsearch.html", '<input class="form-control" type="text" ng-model="searchedTerm" placeholder="What you are looking for?" >');
	});

	angular.module("twitchTVList").directive("uiTwList", function () {
		return {
			// scope: true,													//herda o escopo do seu controller, mas cria um scopo unico para esta diretiva
			restrict: "E",
			controller: "twitchTVListCtrl"
		}
	});

	angular.module("twitchTVList").directive("uiTwSearch", function () {
		return {
			restrict: "E",
			templateUrl: "view/twsearch.html",
			require: "^^uiTwList",
			link: function (scope, element, attrs, ctrl) {
				ctrl.doSearch();										//carregamento inicial

				element.bind("keydown keypress", function (event) {		//carregamento após digitar termo
					if (event.which === 13) {
						ctrl.searchedterm = scope.searchedTerm;
						ctrl.doSearch();
					}
				});
			}
		}
	});

	angular.module("twitchTVList").directive("uiTwStreams", function () {
		return {
			restrict: "E",
			templateUrl: "view/twlist.html"
		};
	});
}());

