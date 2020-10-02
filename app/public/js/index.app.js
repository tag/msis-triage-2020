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
})
