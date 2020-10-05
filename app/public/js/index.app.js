var app = new Vue({
  el: '#triagePage',
  data: {
    ptList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newPtForm: {}
  },
  computed: {
    activePtName() {
      return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
    }
  },
  methods: {
    newPtData() {
      return {
        firstName: "",
        lastName: "",
        dob: "",
        sexAtBirth: ""
      }
    },
    handleNewPtForm( evt ){
      evt.preventDefault();  // Redundant w/ Vue's submit.prevent
      /*
      //TODO: Hook to API
      fetch( url, {
       method: "post",
       data: data
      })
      */

      console.log("Creating...!");
      console.log(this.newPtForm);

      this.ptList.push(this.newPtForm);

      this.newPtForm = this.newPtData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.pt = this.activePt;
      console.log(this.triageForm);

    }
  },
  created() {
    fetch("dummy/pt-list.php")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
    this.newPtForm = this.newPtData();
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
