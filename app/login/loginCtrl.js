(function(){
    function loginCtrlfn($state,$scope){
        console.log($state);
        
    }
    
    angular.module("login").controller("loginCtrl",["$state","$scope",loginCtrlfn]);
})();