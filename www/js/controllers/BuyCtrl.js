app.controller('BuyCtrl', 
	function($scope, $ionicModal, $ionicPopover, $ionicPopup, $timeout, $location, $ionicHistory, $http) {
		
		$scope.buyPulsa = function (){
			var url 	= "http://103.16.78.45/admin/index.php/api/routers/router"; 
			var data 	= {
							"userid":"<user_id_nextgen>",
							"reffid":"<reff_id_client>",
							"target":"<target>",
							"amount": 0,
							"terminal":"<terminal>",
							"timestamp":"<YYYYMMDDHHIISS>",
							"sign":"<sign>",
							"prodName":"TSEL50"
						}

			$http.post(url, data).then(function(r){
				console.log(r)
			});	
		}
	}
);