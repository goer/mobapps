app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk,$http) {
    $scope.beli = function (){
    	var response = JSON.parse(window.localStorage.getItem("response"));

		var res = response;
		var username = 'PPT1376541621';
        var password = '23ntcdjy';
    	var d = new Date();
		var timestamp = d.getFullYear()+''+d.getMonth()+''+d.getDay()+''+d.getHours()+''+d.getMinutes()+''+d.getSeconds();

        var pass = CryptoJS.SHA1(res.username_trx+password+timestamp).toString();
        var data = {
                   "userid": res.username,
                   "reffid": "GSMPRE-AIN-000001023"+Math.floor(Math.random()*700),
                   "target": "081289897687",
                   "amount":0,
                   "terminal":"terminal-mobapps-1",
                   "timestamp": timestamp,
                   "sign": pass,
                   "prodName":"TSEL50"
                };
        var link_beli = "http://103.16.78.45/admin/index.php/api/routers/router";

        $http({
            method: 'POST',
            url: link_beli,
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(res){
            console.log(res.data.message);
        });
    }
});