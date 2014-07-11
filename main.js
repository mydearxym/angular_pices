var myApp = angular.module("myApp", []);

myApp.factory("Data", function(){
  return {message: "i am data from a service"}
})

myApp.factory("People", function(){
  var People = {};
  
  People.cast = [
  {
    name : "simon",
    character: 'cool gay',
  },
  {
    name : "simon2",
    character: 'cool gay',
  },
  {
    name : "simon3",
    character: 'cool gay',
  },
  {
    name : "simon4",
    character: 'girl',
  },
  {
    name : "simon",
    character: 'boy',
  },
  {
    name : "simon",
    character: 'man',
  },
  {
    name : "simon",
    character: 'woman',
  },
  {
    name : "simon",
    character: 'cool gay',
  },
  ];
  return People;
})

// define a filter
myApp.filter('reverse', function(){
  return function(text){
    return text.split('').reverse().join('') + ' (reversed)';
  }
});

function firstCtrl($scope, Data){
  $scope.data = Data;
}

function secondCtrl($scope, Data){
  $scope.data = Data;
  // define a method on scope
  $scope.reversedMessage = function(message) {
    return message.split('').reverse().join('');
  }
}

function peopleCtrl($scope, People) {
  $scope.people = People;

}



