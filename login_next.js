/*async function load_data(){
await firebase.database().ref('/users/' + auth.currentUser.uid).once('value').then((snapshot) => {
  console.log(snapshot.val().Address)
  // ...
});
}*/
document.querySelector("#check_user").addEventListener('click',e=>{
    e.preventDefault()
    //load data
    //load_data()
    console.log(auth.currentUser.email)
    
})
document.querySelector("#logout").addEventListener('click',e=>{
    firebase.auth().signOut().then(() => {
      window.location.replace("index.html");
        // Sign-out successful.
        console.log(auth.currentUser.uid)

        
      }).catch((error) => {
        // An error happened.
      });
})
document.querySelector("#file_case").addEventListener('click',e=>{
  window.location.replace("case.html")
})
