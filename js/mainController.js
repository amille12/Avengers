app.controller('mainController', ['$scope', 'dataServices', function($scope, dataServices) {


   $scope.getDemHeros = function () {
     dataServices.heroSender().then(function(response) {
       $scope.heros = response;
     });

   };
   $scope.getDemHeros();




}]);
