var app = new Vue({
  el: '#cardPaneLeft',
  data: {
    message: 'Hello Vue!',
    onePt: {
      "patientGuid": "SOME-REALLY-LONG-1234",
      "firstName": "Sylvia",
      "lastName": "Hernandez",
      "dob": "2012-09-01",
      "sexAtBirth": "F",
      "priority": "critical"
    },
    ptList: [],
    user: {},
    times: 0
  },
  methods: {
    yell(msg) {
      this.times = this.times + 1;
      var msg = "Clicked " +this.times+ " times";
      alert(msg);
    }
  },
  created() {
    fetch("dummy/pt-list.php")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
  }
})
