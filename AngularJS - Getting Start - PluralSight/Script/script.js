/**
 * Created by Louie on 7/09/14.
 */
var MainController = function($scope,$http){

     $scope.person={
        firstName:"Louie",
        lastName:"Fu"
    }

    $http.get("https://api.github.com/users/robconery")
       .then(function(response){
            $scope.user = response.data
       });
}