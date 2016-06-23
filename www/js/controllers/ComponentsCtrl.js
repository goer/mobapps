app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk,$http,$ionicPopup) {
    $scope.beli = function (){
    	var response = JSON.parse(window.localStorage.getItem("response"));

		var res = response;
		var username = 'PPT1376541621';
        var password = '23ntcdjy';
    	var d = new Date();
		var timestamp = d.getFullYear()+''+d.getDate()+''+("0" + (d.getMonth() + 1)).slice(-2)+''+('0'+d.getHours()).substr(-2)+''+('0'+d.getMinutes()).slice(-2)+''+('0'+d.getSeconds()).slice(-2);
		var response = JSON.parse(window.localStorage.getItem("response"));

        var key = 'bWaYO1IvwO56S';
        key = CryptoJS.enc.Utf8.parse(key+'\u0000\u0000\u0000')
        var iv = CryptoJS.enc.Base64.parse(response.iv); //nilai iv ada di response
        var plaintext = CryptoJS.AES.decrypt(response.password, key, { iv: iv}); //kata merupakan password yg terenkripsi
        var text = CryptoJS.enc.Utf8.stringify(plaintext);

        console.log(timestamp);
        
        var pass = CryptoJS.SHA1(res.username_trx+password+timestamp).toString();
        var data = {
                   "userid": response.username,
                   "reffid": "GSMPRE-AIN-00000102"+Math.floor(Math.random()*700),
                   "target": $scope.data.notelp,
                   "amount":0,
                   "terminal":"terminal-klaudix-1",
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
            console.log(res);
            if(res.status==200){
            	if(res.data.status!="FAILED"){
	            	var alertPopup = $ionicPopup.alert({
		                title: 'Beli Pulsa Berhasil',
		                template: 'Selamat anda telah membeli pulsa'
		            });	
            	}else{
            		var alertPopup = $ionicPopup.alert({
		                title: 'Beli Pulsa Gagal',
		                template: res.data.message
		            });
            	}
            }else{
	            var alertPopup = $ionicPopup.alert({
	                title: 'Beli Pulsa Gagal',
	                template: res.data.status
	            });
            }
        });
    }
});