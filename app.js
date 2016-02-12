angular.module('WebTemplateStore', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'templates']);

angular.module('WebTemplateStore').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/templates');

});

angular.module('WebTemplateStore').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
