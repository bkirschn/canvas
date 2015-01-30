sectionsApp.factory('Courses', function ($http) {
  return {
    getCourses: function (url) {
      return $http.get(url, {cache: true}).then(
        function success(result) {
            return result;
        },
        function error(result) {
          result.errors = errorHandler(url, result);
          result.errors.failure = true;
          return result.errors;
        }
      );
    }
  };
});

sectionsApp.factory('Sections', function ($http) {
  return {
    getSectionsForCourseId: function (courseId, uniqname) {
      var url = '../../../section_data/sections-' + uniqname + '-' + courseId + '.json';
      console.log(url)
      return $http.get(url, {cache: true}).then(
        function success(result) {
          return result;
        },
        function error() {
          //do something in case of error
          //result.errors.failure = true;
          //return result.errors;
        }
      );
    }
  };
});
