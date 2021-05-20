document.querySelector("#missing").addEventListener('click',e=>{
    window.location.href="missing.html"
})
document.querySelector("#wanted").addEventListener('click',e=>{
    window.location.href="wanted.html"
})
document.querySelector("#complaints").addEventListener('click',e=>{
    window.location.href="complaints.html"
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