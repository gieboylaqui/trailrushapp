angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

// .controller('LoadingCtrl', function($scope) {

// })

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

//FOR THE SCANNER -------------------------------------------------------------------------
.controller("AccountCtrl", function($scope, $cordovaBarcodeScanner, $http){
   $scope.othername = function() {
    var input = document.getElementById("userInput").value;
    alert("You are now registered to Station " + input);
}
$scope.insertdatako = function(){
$cordovaBarcodeScanner.scan().then(function(imageData){

var json = imageData.text;
var date = Date.now();
// var d = new Date(parseInt(date));
// var json = image.concat(date)

 var input = document.getElementById("userInput").value;
var obj = JSON.parse(json);
obj['Runners'].push({"DateNow": date, "Station" : input});
var json = JSON.stringify(obj);

     $http.post(
    'https://api.mongolab.com/api/1/databases/trailrush/collections/stats?apiKey=GW6gU4IP3dpT2bjwSyg0UKj8nDzGX0t1', 
    obj = JSON.parse(json)
  

  )
  .success(function(){
    alert(json);
    
    console.log(arguments);
    console.log("yes naman!");
  })
  .error(function(){
    console.log(arguments);
    console.log("awwww");
  });

});
}
});
