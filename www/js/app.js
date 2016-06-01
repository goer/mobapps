// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.angsuran', {
        url: '/angsuran',
        views: {
            'menuContent': {
                templateUrl: 'templates/angsuran.html',
                controller: 'ListsCtrl'
            }
        }
    })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'ListsCtrl'
            }
        }
    })
     .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.pulsa', {
        url: '/pulsa',
        views: {
            'menuContent': {
                templateUrl: 'templates/pulsa.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.information', {
        url: '/information',
        views: {
            'menuContent': {
                templateUrl: 'templates/informasi.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
    

    .state('app.list', {
        url: '/list',
        views: {
            'menuContent': {
                templateUrl: 'templates/list.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.speedy', {
        url: '/speedy',
        views: {
            'menuContent': {
                templateUrl: 'templates/speedy.html'
            }
        }
    })

    .state('app.input', {
        url: '/input',
        views: {
            'menuContent': {
                templateUrl: 'templates/input.html'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.bpjs', {
        url: '/bpjs',
        views: {
            'menuContent': {
                templateUrl: 'templates/bpjs.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    .state('app.bpjs-list', {
        url: '/bpjs-list',
        views: {
            'menuContent': {
                templateUrl: 'templates/bpjs-list.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    .state('app.cc', {
        url: '/cc',
        views: {
            'menuContent': {
                templateUrl: 'templates/cc.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    .state('app.pln', {
        url: '/pln',
        views: {
            'menuContent': {
                templateUrl: 'templates/pln.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.fmedia', {
        url: '/fmedia',
        views: {
            'menuContent': {
                templateUrl: 'templates/fmedia.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.pembayaran', {
        url: '/pembayaran',
        views: {
            'menuContent': {
                templateUrl: 'templates/pembayaran.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.pembelian', {
        url: '/pembelian',
        views: {
            'menuContent': {
                templateUrl: 'templates/pembelian.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.tukar', {
        url: '/tukar',
        views: {
            'menuContent': {
                templateUrl: 'templates/tukar.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tukar');
});
