(function(){
  function editCtrl($scope,$state,localStorageService){
      
   $scope.dataEdit=$state.params['editData'];
      
      if($scope.dataEdit==""){
          console.log($scope.dataEdit);
          $scope.dataEdit=localStorageService.get('localData');
        /*$scope.dataEdit=localStorageService.get('localData');*/
      
      }
      
  }  
    angular.module("edit").controller("editCtrl",["$scope","$state","localStorageService",editCtrl]);
})();