todoApp.controller("TodoCtrl", ["$scope", "$window", function($scope, $window){
  $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false };

  $scope.items = [{ text: "Rent a movie",
                dueDate: new Date(),
                completed: false },

                { text: "Pay rent",
                dueDate: new Date(),
                completed: true },

                { text: "Deposit check",
                dueDate: new Date(),
                completed: false }
                ];

  $scope.showCompleted = true;

  $scope.newTask = function() {
    $scope.items.push({
      text: $scope.taskName,
      dueDate: $scope.taskDueDate,
      completed: false
    });

    $scope.taskName = "";
    $scope.taskDueDate = "";
  };

  $scope.switchCompleted = function(index) {
    $scope.items[index].completed = !$scope.items[index].completed
    console.log($scope.items);
  }

  $scope.deleteTask = function(index) {
    $scope.items.splice(index, 1);
  };

  $scope.clearComplete = function() {
    var items = $scope.items;
    for (var i = items.length - 1; i >= 0; i--) {
      if (items[i].completed) {
        items.splice(i, 1)
      }
    }
  };

  }
]);
