(function(){
    function loginCtrlfn($state,$scope,localStorageService){
$scope.user1={};
        $scope.data=$state.params.homeData;
        $scope.edit=function(user){
           localStorageService.set('localData',user);
            angular.copy(user,$scope.user1);
            console.log($scope.user1);
        
           $state.go("edit",{editData:$scope.user1});
        };
        
    }
    
    angular.module("login").controller("loginCtrl",["$state","$scope","localStorageService",loginCtrlfn]);
})();