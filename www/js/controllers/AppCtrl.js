// app.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $ionicPopup, $timeout, $location, $ionicHistory, ngFB) {
    app.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $ionicPopup, $timeout, $location, $ionicHistory) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    $scope.slideHasChanged = function ($index){

    }

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
        '   <ion-header-bar>' +
        '       <h1 class="title">My Popover Title</h1>' +
        '   </ion-header-bar>' +
        '   <ion-content class="padding">' +
        '       My Popover Contents' +
        '   </ion-content>' +
        '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });

    $scope.groups = [];
    for (var i = 0; i < 2; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j = 0; j < 3; j++) {
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    $scope.data = {};
    $scope.login = function() {

        var username = 'admin@admin.com';
        var password = '12345';
        $scope.options = $scope.options || {};
        if (($scope.data.username == username) && ($scope.data.password == password)) {
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("user.name", 'Sansa Siregar');
            window.localStorage.setItem("password", password);
            console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
            // $state.go('app.profile');
            window.location = "#/app/profile";
            // $ionicNavBarDelegate.showBackButton(false);
            // $scope.options.hideBackButton = true;
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        } else {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Gagal',
                template: 'Masukan Username dan Password dengan benar'
            });
        }
    }

    $scope.isLoggedIn = function() {
        if (window.localStorage.getItem("username") !== undefined && window.localStorage.getItem("password") !== undefined) {
            return true;
        } else {
            return false;
        }
    };

    $scope.isLoggedInClass = function() {
        if ((window.localStorage.getItem("username")) !== null && window.localStorage.getItem("password") !== null) {
            return '';
        } else {
            return 'hidden';

        }
    };

    $scope.isLoggedInClassLogin = function() {
        if (window.localStorage.getItem("username") !== null && window.localStorage.getItem("password") !== null) {
            return 'hidden';
        } else {
            return '';
        }
    };

    $scope.logout = function() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.location = "#/app/information";
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
    };

    // $scope.fbLogin = function () {
    //     ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
    //         function (response) {
    //             if (response.status === 'connected') {
    //                 console.log('Facebook login succeeded');
    //                 $scope.closeLogin();
    //             } else {
    //                 alert('Facebook login failed');
    //             }
    //         });
    // };

    // ngFB.api({
    //     path: '/me',
    //     params: {fields: 'id,name'}
    // }).then(
    //     function (user) {
    //         $scope.user = user;
    //         console.log(user);
    //     },
    //     function (error) {
    //         alert('Facebook error: ' + error.error_description);
    //     });

});