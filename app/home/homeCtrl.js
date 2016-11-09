(function(){
    function homeCtrl($scope,$state){
        console.log($state);
        
        $scope.login=function(){
            
            $state.go("login",{});
        };
        $scope.register=function(){
          $state.go("Register",{});  
        };
        
    }
    
    angular.module("home").controller("homeCtrl",["$scope","$state",homeCtrl]);
})();