var pharmaApp = angular.module("pharmaApp",[
'ngRoute',
'ngResource']).
config(['$routeprovider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/home', {templateUrl:'partials/home.html', controller: 'homeController'});
    $routeProvider.otherwise({redirectTo:'/home'});
    $locationProvider.html5Mode({enabled:true, requireBase:false});
}])

