// var arr = ["thingOne", 22, true, {}, []];
// console.log(arr[0], arr[3]);

// var arr = ["Tombstone", 13, false, 1977];
// console.log(arr);
// console.log(arr.length);
//
//
// console.log(typeof(arr));
// console.log(Array.isArray(arr));
// var bestTeacher = prompt("who is the best teacher?", 'Damon');
// arr.push(bestTeacher);
// console.log(arr);
// arr.unshift(bestTeacher);
//
//
// var firstName = prompt("What is your fist name?");
// console.log(firstName);
//
// var favoriteColor = prompt("What is your favorite color?";
// console.log(favoriteColor);
//
// [red, orange, yellow, green, blue, pink, purple, black, white and gray];

var favoriteMovie = ["Tombstone", "Kurt Russell"];
var secondFavorite = ["Beauty and the Beast", "Beauty"];
var thirdFavorite = ["Snow White", "Grumpy"];
var fourthFavorite = ["Mickey Blue Eyes", "Hugh Grant"];
var leastFavorite = ["Lady and the Tramp", "Lady"];

var myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite, fourthFavorite, leastFavorite);
  console.log(myFavoriteMovies)

var movieTitles = [myFavoriteMovies[0][0],myFavoriteMovies[1][0], myFavoriteMovies[2][0],myFavoriteMovies[3][0],myFavoriteMovies[4][0]];
  alert(movieTitles);



let i = 0;

while (i < myFavoriteMovies.length) {
  console.log(myFavoriteMovies[i]);
  i++;
}

for(i=0; i < myFavoriteMovies.length; i++){
  console.log(myFavoriteMovies[i]);
var search = "Tombstone";
  if(myFavoriteMovies[i]){
    console.log("matchFound");
  }
  else{
    console.log("notFound");
  }
}
