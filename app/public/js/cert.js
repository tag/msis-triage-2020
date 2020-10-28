var certApp = new Vue({
el: '#certApp',
data: {
certList: [],
certification: {}
},

 methods: {
addCert() {
fetch('api/certifications/add_cert.php', {
method:'POST',
body: JSON.stringify(this.certification),
headers:{
"Content-Type": "application/json; charset=utf-8"
}
})
.then( response => response.json() )
.then ( json => {certApp.certList = json} )
.catch ( err => {
console.error('WORK TRIAGE ERROR:');
console.error(err);
})
},
fetchCertifications() {
fetch('api/certifications/index.php')
.then(response => response.json())
.then(json => { certApp.certList = json })
},

 handleDelete() {
fetch('api/certifications/delete_cert.php', {
method:'POST',
body: JSON.stringify(this.certification),
headers:{
"Content-Type": "application/json; charset=utf-8"
}
})
.then( response => response.json() )
.then ( json => {certApp.certList = json} )
.catch ( err => {
console.error('WORK TRIAGE ERROR:');
console.error(err);
})
this.handleReset();
},

 handleReset() {
this.certification = {
certification_id: "",
certification_name: "",
certification_agency: "",
default_expiration_period: ""
}
}
},

 created() {

 // this.newMember = this.newMemberData();
this.fetchCertifications();
this.handleReset();
// this.handleDelete();

function submitMember() {
window.location.href = "view_members.html"
}
}})
