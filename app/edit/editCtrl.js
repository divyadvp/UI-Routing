(function(){
  function editCtrl($scope,$state){
   $scope.dataEdit=$state.params.editData;  
      
  }  
    angular.module("edit").controller("editCtrl",["$scope","$state",editCtrl]);
})();