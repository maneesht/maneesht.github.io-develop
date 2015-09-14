angular.module("m-resume", ['ui.router', 'ngAnimate', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('experience', {
                url: "/experience",
                templateUrl: "app/experience/experience.html"
            })
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html"
            })
            .state('skills', {
                url: "/skills",
                templateUrl: "app/skills/skills.html"
            })
    });
