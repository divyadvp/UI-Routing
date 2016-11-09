(function(){
    function loginCtrlfn($state,$scope){
        $scope.data=$state.params.homeData;
        $scope.edit=function(){
            $state.go("Register",{})
        };
        
    }
    
    angular.module("login").controller("loginCtrl",["$state","$scope",loginCtrlfn]);
})();