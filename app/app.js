(function(){
    
    
    angular.module("myApp",["header","home","register","login","ui.router"]);
    
    angular.module("myApp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
      // $urlRouterProvider.otherwise("/home");
        
    var homeObj={
        name:"home",
        templateUrl:"app/home/home.html",
        url:"/home",
        controller:"homeCtrl"
        }
    var regObj={
        
        name:"Register",
        templateUrl:"app/register/register.html",
        url:"/urlmine",
        controller: "registerCtrl",
        params:{
        loginData:""
    }
        
    }
    var loginObj={
        name:"login",
        templateUrl:"app/login/login.html",
        url:"/login",
        controller:"loginCtrl",
        params:{
            homeData:""
        }
        
    }
    
    
        
        $stateProvider.state("Home",homeObj);
        $stateProvider.state("Register",regObj);
        $stateProvider.state("login",loginObj);
        
        
    }]);
    
    
})();