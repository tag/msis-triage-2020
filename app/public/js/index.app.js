var app = new Vue({
  el: '#triagePage',
  data: {
    ptList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    //create variables for each form field and bind using v-model
    newPtForm:{
    }
  },
  computed: {
    activePtName() {
      return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
    }
  },
  methods: {
    newPt(){
      return{
          //returns a brand new empty object
          firstName:'',
          lastName:'',
          dob:'',
          sexAtBirth:'',

      }
    },
    submitTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.pt = this.activePt;
      console.log(this.triageForm);

    },
    handleCreatePatient(evt){

      evt.preventDefault(); //redundant, because we prevent it in the html file
      //ToDo: actually creat the pt
    //
    //   // fetch(url,){
    //     method:"POST",
    //     data:
    // })
    // //POST
    console.log("Creating");
    console.log(this.newPtForm);

    //when you hit submit, it'll appear on the list on the page whether or not it gets added to the databse
    this.ptList.push(this.newPtForm);

    // takes variable attached to the form and points it somewhere else
    this.newPtForm = this.newPt();

    }
  },
  //function that is a sibling of el and data
  created(){
    //fetch the url. If you can and fetch gets resolved, then run a function. But if you can't, then run the Error Function.
    //making HTTP request to webserver to retrieve pt-list
    fetch("dummy/pt-list.php")
    .then( response => response.json())
    //returns JSONified response as part of promise
    //above is shortcut way of writing .then ( function(response) {return response.json()})
    .then( json => { //second promise
          //this.project = json;
          this.ptList = json; //assigns json object as the variable ptList in application
          console.log(json)}
    );
  }
})
