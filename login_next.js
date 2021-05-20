/*async function load_data(){
await firebase.database().ref('/users/' + auth.currentUser.uid).once('value').then((snapshot) => {
  console.log(snapshot.val().Address)
  // ...
});
}*/
async function fetch_data()
{
  // FirebaseUser user = await FirebaseAuth.getInstance().getCurrentUser();
  // String userid = user.getUid();

  //var x = await auth.getInstance().getCurrentUser();
  console.log(auth.currentUser.uid)
  await $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/users/"+auth.currentUser.uid+"/Case.json",function(result){
    console.log(result)
    //console.log(result['Case_ID'])
    var ids=Object.keys(result)

    ids.forEach((id,index)=>{
      $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Case/"+id+".json",function(res){
        //console.log(res)
        if(res!=null){
          console.log(res['Street'])
          $("#casediv").append(`
            <h1>${res.Case_details}</h1>
          `)
          var h1=document.createElement("h1")
          var ul=document.createElement("ul")
          var li1=document.createElement("li")
          var li2=document.createElement("li")
          var li3=document.createElement("li")
          var li4=document.createElement("li")
          var li5=document.createElement("li")
          var li6=document.createElement("li")
          var li7=document.createElement("li")
          var li8=document.createElement("li")
          var li9=document.createElement("li")
          li1.append("Case Details - " + res["Case_details"])
          li2.append("City - " + res["City"])
          li3.append("Email - " + res["Email"])
          li4.append("Name - " + res["Name"])
          li5.append("Phone - " + res["Phone"])
          li6.append("State - " + res["State"])
          li7.append("Street - " + res["Street"])
          li8.append("Status - " + res["Status"])
          //li.append(res["City"])
          //li.innerHTML=<h1>res["Street"]</h1>
          h1.innerHTML="Case id - "+(parseInt(index+1))
          ul.append(h1)
          ul.append(li1)
          ul.append(li2)
          ul.append(li3)
          ul.append(li4)
          ul.append(li5)
          ul.append(li6)
          ul.append(li7)
          ul.append(li8)
          var br=document.createElement("br")
          ul.append(br)
          var t=document.querySelector("#casediv")
          t.append(ul)
        }

        // var x=Object.keys(res)
        // console.log(x)

      })


    })

  });



}
document.getElementById("check_user").addEventListener('click',e=>{
  console.log("hi")
    e.preventDefault()
    //load data
    //load_data()
    fetch_data()
    /*console.log(auth.currentUser.email)
    firebase.database().ref("users/"+auth.currentUser.uid).get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      }
      else {
        console.log("No data available");
      }
    }).catch(function(error) {
      console.error(error);
    });*/
    
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
document.querySelector("#file_case").onclick = e=>{
  window.location.replace("case.html")
}
