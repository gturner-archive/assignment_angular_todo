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

  $scope.newTask = function() {
    console.log($scope.taskName);
    console.log($scope.taskDueDate);
    $scope.taskName = "";
    $scope.taskDueDate = "";
  }

  }
]);