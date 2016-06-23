// app.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $ionicPopup, $timeout, $location, $ionicHistory, ngFB) {
app.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $ionicPopup, $timeout, $location, $ionicHistory,$http) {
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
    $scope.fullname = window.localStorage.getItem("username");
    $scope.balance  = window.localStorage.getItem("balance");
    $scope.login = function() {

        var username = 'PPT1376541621';
        var password = '23ntcdjy';
        var link = "http://103.16.78.45/admin/index.php/api/partner/login";
        var data = {"u" : 'alfian.malik@gmail.com', "p": 'apaansih'};
        var response = [];
        response.push({"id": "371",
                  "fullname": "alfian",
                  "username": "alfian.malik@gmail.com",
                  "password": "VVmk7Eqf6hmTw/Sj2D3mgQ==",
                  "role": "CUSTOMER",
                  "status": "1",
                  "appkey": "9d90b796ddd5510f50ea1b5665fe07bb",
                  "id_cust": "345",
                  "id_owner": "2",
                  "last_login": "2016-06-22 22:00:28",
                  "id_parent": "0",
                  "email": "alfian.malik@gmail.com",
                  "phone": "085759782580",
                  "name": "alfian",
                  "pricingId": "1",
                  "username_trx": "PPT1376541621",
                  "password_trx": "5OfVhBSjdXZ7t0C2k9yGBw==",
                  "store_name": "",
                  "address": "Kuningan - Jawa Barat - Indonesia",
                  "show_name": "1",
                  "iv": "jc0VHIc2Vib1piibEZdkLQ==",
                  "noerr": 0,
                  "status" : 200
                });
        $scope.options = $scope.options || {};

        var key = 'bWaYO1IvwO56S';
        key = CryptoJS.enc.Utf8.parse(key+'\u0000\u0000\u0000')
        var iv = CryptoJS.enc.Base64.parse('jc0VHIc2Vib1piibEZdkLQ=='); //nilai iv ada di response
        
        var plaintext = CryptoJS.AES.decrypt('VVmk7Eqf6hmTw/Sj2D3mgQ==', key, { iv: iv}); //kata merupakan password yg terenkripsi
        var text = CryptoJS.enc.Utf8.stringify(plaintext);

        var res = response[0];
        
        // $http({
        //     method: 'POST',
        //     url: link,
        //     data: data,
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        // }).then(function(res){
            // if(res.status="200"){
            //     if(null != res.email){
            //         window.localStorage.setItem("username", res.fullname);
                    
            //         window.localStorage.setItem("password", res.password);
            //         window.localStorage.setItem("response", JSON.stringify(response[0]));

            //         // window.localStorage.setItem("response", JSON.stringify(response[0]));
            //         // console.log(JSON.parse(window.localStorage.getItem("response")).fullname);
                        // var timestamp = Number(new Date()); 
                        // var pass = CryptoJS.SHA1(res.username_trx+password+timestamp).toString();
                        // var link_balance = 'http://103.16.78.45/admin/index.php/api/routers/balance/userid/'+res.username_trx+'/sign/'+pass+'/timestamp/'+timestamp;
                        // $http({
                        //     method: 'GET',
                        //     url: link_balance,
                        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        // }).then(function(balance){
                        //     console.log(balance.data.balance);
                        //     window.localStorage.setItem("balance", balance.data.balance);
                        // });
            //         window.location = "#/app/profile";
            //         $ionicHistory.nextViewOptions({
            //             disableBack: true
            //         });  
            //     }else{
            //         var alertPopup = $ionicPopup.alert({
            //             title: 'Login Gagal',
            //             template: res.data.error
            //         });    
            //     }
            // }else{
            //     var alertPopup = $ionicPopup.alert({
            //         title: 'Login Gagal',
            //         template: 'Masukan Username dan Password dengan benar'
            //     });
            // }
        // });
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
        window.localStorage.removeItem("balance");
        window.localStorage.removeItem("response");
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