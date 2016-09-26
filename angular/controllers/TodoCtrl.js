todoApp.controller("TodoCtrl", ["$scope", "todoService", function($scope, todoService){

  $scope.todoService = todoService

  $scope.showCompleted = true;

  $scope.newTask = function() {
    var task = {
      taskName: $scope.taskName,
      taskDueDate: $scope.taskDueDate,
    }

    todoService.newTask(task)

    $scope.taskName = "";
    $scope.taskDueDate = "";
  };

  // $scope.switchCompleted = function(index) {
  //   $scope.items[index].completed = !$scope.items[index].completed
  //   console.log($scope.items);
  // }

  // $scope.deleteTask = function(index) {
  //   $scope.items.splice(index, 1);
  // };

  // $scope.clearComplete = function() {
  //   var items = $scope.items;
  //   for (var i = items.length - 1; i >= 0; i--) {
  //     if (items[i].completed) {
  //       items.splice(i, 1)
  //     }
  //   }
  // };

  }
]);
