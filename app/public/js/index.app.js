var app = new Vue({
  el: '#triagePage',
  data: {
    ptList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newPtForm: {
      f
    }
  },
  computed: {
    activePtName() {
      return this.activePt ? this.activePt.lastName + '. ' + this.activePt.firstName : ''
    }
  }

  methods: {
    submitTriageForm( evt ) {
      console.log("Form submitted");
      console.log(this.activePt);
    },
    newPatient() {
      return {
        firstName: "",
        lastName: "",
        dob: "",
        sexAtBirth: ""
      }
    },
    handleNewPatient( evt ) {
      evt.preventDefault(); // Redundant w/ Vue's 'v-on:submit.p...'
      console.log("Creating...");
      console.log(this_newPtForm);
    }
  };
  created() {
    //Do all my fetch() requests
    fetch("dummy/pt-list.php")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(jsonn)}
    );
  },

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
