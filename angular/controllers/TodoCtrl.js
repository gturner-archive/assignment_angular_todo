todoApp.controller("TodoCtrl", ["$scope", "todoService", function($scope, todoService){
  $scope.todoService = todoService;
  $scope.showCompleted = true;
  $scope.taskSortOpt = "";

  $scope.newTask = function() {
    var task = {
      taskName: $scope.taskName,
      taskDueDate: $scope.taskDueDate,
    };

    todoService.newTask(task);

    $scope.taskName = "";
    $scope.taskDueDate = "";
  };
}]);
