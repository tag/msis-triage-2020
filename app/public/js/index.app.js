var app = new Vue({
  el: '#cardPaneLeft',
  data: {
    message: 'Hello Vue!',
    ptList: [],
    user: {}
    times: 0
  },

  created() {
    //Do all my fetch() requests
    fetch("dummy/pt-list.php")
    .then( response => response.json() )
    .then( json => {
      console.log(jsonn)}
    );
  },

  methods: {
    yell() {
      this.times = this.times +1
      var msg = "Clicked" + this.times +" times";
      alert(msg);
    }

  }



//     onePatient: {
//       "patientGuid": "SOME-REALLY-LONG-1234",
//       "firstName": "Sylvia",
//       "lastName": "Hernandez",
//       "dob": "2012-09-01",
//       "sexAtBirth": "F",
//       "priority": "critical"
//     }
//   }
// })

fetch(url) //Returns the promise object (placeholder saying something is being ran, and after it is finished running, a capture/then function is ran)
//Sends HTTP request to this url
.then(someFunction)
//When finished sending HTTP request, then run this someFunction. (Method on promise object)



fetch("dummy/pt-list.php")
//fetch is asynchronous, will kick and go to function that has priority
.then( function(response) {return response.json()} )
.then( json => {
  //Do something cool with the data (this.project = json;)
  console.log(json)}
})

//.then( response => response.json() ) -> shorthanded version of.then( function(response)) above
