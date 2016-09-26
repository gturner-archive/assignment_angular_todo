todoApp.directive("todoItem", ["todoService", function(todoService) {
  return {
    templateUrl: "angular/directives/TodoItemTemplate.html",
    restrict: "A",
    scope: {
      item: "=",
    },
    link: function(scope) {
      scope.todoService = todoService;
    }
  }
}])