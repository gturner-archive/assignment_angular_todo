todoApp.factory("todoService", [function(){
  var stub = {}
  stub.items = [{ text: "Rent a movie",
                dueDate: new Date(),
                completed: false },

                { text: "Pay rent",
                dueDate: new Date(),
                completed: true },

                { text: "Deposit check",
                dueDate: new Date(),
                completed: false }
                ];

  stub.newTask = function(input) {
    stub.items.push({
      text: input.taskName,
      dueDate: input.taskDueDate,
      completed: false
    });

  };

  stub.switchCompleted = function(item) {
    var index = stub.items.indexOf(item);
    console.log(index)
    stub.items[index].completed = !stub.items[index].completed;
  }

  stub.deleteTask = function(item) {
    var index = stub.items.indexOf(item);
    stub.items.splice(index, 1);
    console.log("deleting")
  };

  stub.clearComplete = function() {
    var items = stub.items;
    for (var i = items.length - 1; i >= 0; i--) {
      if (items[i].completed) {
        items.splice(i, 1)
      }
    }
  };

  return stub;

}])