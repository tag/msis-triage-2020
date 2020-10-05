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
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
      // /*
      // Validate the data!!!

      //Line 32, 43, 46

      //TODO: Hook to API
      fetch('api/recordes/post.php', {
       method: "post",
       data: JSON.stringify(this.newPtForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then( response => response.json() )
      .then ( json => {
        console.log("returned from post:", json);

        this.ptList.push(json[0]);
      });

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
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
    this.newPtForm = this.newPtData();
  }
})
