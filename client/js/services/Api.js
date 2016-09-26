myApp.factory('Api', ['$resource', function($resource){
    return {
        Patient: $resource ('/api/patient/:id', {id: '@id'})
    }
}])