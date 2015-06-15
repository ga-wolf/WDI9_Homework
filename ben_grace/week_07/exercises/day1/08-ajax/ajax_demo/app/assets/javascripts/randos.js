// $(document).ready(function () {

//   var fetchRandom = function(){
//     var request = new XMLHttpRequest();
//     request.open('GET', '/random');
//     request.send(); //Async. it will take awhile to retrieve the data

//     request.onreadystatechange = function() {

//       if(request.readyState === 4){
//         $('#randos').append( request.responseText + ', ' );
//         fetchRandom(); // Recursion
//       };

//     };

//   };

//   fetchRandom();

// });