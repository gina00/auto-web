var app = angular.module("myApp", [
    //"ajaxApp",
    "ui.router",
    "oc.lazyLoad"
    //"testApp",
]);
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when("", "/contain");
    $stateProvider
        .state("home", {
            url: "/contain",
            templateUrl: "src/containView/contain.html"

        })
        .state("ajax", {
            url: "/ajax",
            templateUrl: "src/ajax/ajax.html",
            controller: 'ajaxCtroller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('src/ajax/ajaxCtroller.js');
                }]
            }
        })
        .state("test", {
            url: "/test",
            templateUrl: 'src/test/text.html',
            controller: 'testCtroller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('src/test/testCtroller.js');
                }]
            }
            //templateUrl:"src/test/text.html"
        })
        .state("dom", {
            url: "/dom",
            templateUrl: "src/dom/dom.html",
            controller: "domCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'src/dom/addLoadEvent.js',
                        'src/dom/dom.js',
                        'theme/css/style.css'                        
                        ]);
                }]
            }
        })
        .state("animate", {
            url: "/animate",
            templateUrl: "src/Animate/animate.html",
            controller: "animateCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'src/Animate/animateCtroller.js',
                        'src/Animate/animate.css'                        
                        ]);
                }]
            }
        })
        .state("flex", {
            url: "/flex",
            templateUrl: "src/flex/flex.html",
            controller: "flexCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'src/flex/flexCtroller.js',
                        'src/flex/flex.css'                        
                        ]);
                }]
            }
        })
})
    .controller('myAppCotroller', function ($scope) {
        $scope.menu = {
            url: "src/publicView/header.html"
        }
        $scope.footer = {
            url: "src/publicView/footer.html"
        }
        // $(".navbar-nav").on("click","li",function(){
        //     console.log("aaa")
        //     $(this).addClass("active").siblings("li").removeClass("active");
        // })
    })
    .controller('addLoadctrl',function($scope,loadMyCtrl,util){
        
    });
 
