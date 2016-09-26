todoApp.filter('completedTasks', function() {
  return function(collection, showCompleted) {
    if (showCompleted) { return collection }
    return collection.filter(function(item) {
      return item.completed === false;
    });
  }
})
