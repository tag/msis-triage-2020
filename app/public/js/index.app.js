// console.log("I am in index.app.js");
//
// // console.lg("Error");
//
//
// var el = document.getElementById("ptName");
//
// var arr = document.getElementsByClassName("patientCard");
//
// var arr2 = $(".patientCard.triageCritical");
//
// console.log(arr2);


var schools = ["IU", "Arkansas", "Michigan", "Wyoming"];

console.log( schools.sort() );

var comparator = function (a, b) {
  if (a == b) {
    return 0;
  }
  if (a == "IU") {return -1}
  if (b == "IU") {return 1}

  if (a < b) {return -1}
  return 1
}

console.log( schools.sort(comparator) );
