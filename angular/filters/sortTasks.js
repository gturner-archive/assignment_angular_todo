todoApp.filter('sortTasks', function() {
  var options = {
    completedTop: function(a, b) {
      if (a.completed === true && b.completed === false) {
        return -1;
      } else if (a.completed === false && b.completed === true) {
        return 1;
      } else {
        return 0;
      }
    },
    completedBottom: function(a, b) {
      if (a.completed === true && b.completed === false) {
        return 1;
      } else if (a.completed === false && b.completed === true) {
        return -1;
      } else {
        return 0;
      }
    },
    dueDateTop: function(a, b) {
      if (a.dueDate > b.dueDate) {
        return -1;
      } else if (a.dueDate < b.dueDate) {
        return 1;
      } else {
        return 0;
      }
    },
    dueDateBottom: function(a, b) {
      if (a.dueDate > b.dueDate) {
        return 1;
      } else if (a.dueDate < b.dueDate) {
        return -1;
      } else {
        return 0;
      }
    }
  };
  return function(collection, sortOpt) {
    console.log(sortOpt);
    if (sortOpt === "" || sortOpt === 'default') { return collection }
    return collection.sort(options[sortOpt]);
  }
})
