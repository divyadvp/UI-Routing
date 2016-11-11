(function(){
    function loginCtrlfn($state,$scope){
        $scope.data=$state.params.homeData;
        $scope.edit=function(user){
           /* localStorageService.set('localData';user);
            angular.copy(user,$scope.user);
           */ $state.go("edit",{editData:$scope.data});
        };
        
    }
    
    angular.module("login").controller("loginCtrl",["$state","$scope",loginCtrlfn]);
})();