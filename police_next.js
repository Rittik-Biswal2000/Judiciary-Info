/*async function load_data(){
await firebase.database().ref('/users/' + auth.currentUser.uid).once('value').then((snapshot) => {
  console.log(snapshot.val().Address)
  // ...
});
}*/
var case_id;
function fetch_data()
{
  // FirebaseUser user = await FirebaseAuth.getInstance().getCurrentUser();
  // String userid = user.getUid();

  //var x = await auth.getInstance().getCurrentUser();
  console.log(auth.currentUser.uid)
   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/police/"+auth.currentUser.uid+".json",function(result){
//   console.log(result)
//   console.log(result["State"])  
//   console.log(result["City"])
   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/"+result["State"]+"/"+result["City"]+"/Cases.json",function(res){
      console.log(res)
      var ids=Object.keys(res)
      console.log(ids)
      ids.forEach((id,index)=>{
          console.log(case_id)
           $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Case/"+id+".json",function(rt){
              console.log("======================")
              console.log(rt)
              $(".jumbotron").append(`
              <h1>Case Number - ${index+1}</h1>
              <p>
              <ul>
              <li>Case details - ${rt.Case_details}</li>
              <li>State - ${rt.State}</li>
              <li>City - ${rt.City}</li>
              <li>Street - ${rt.Street}</li>
              <li>Name - ${rt.Name}</li>
              <li>Phone - ${rt.Phone}</li>
              <li>Email - ${rt.Email}</li>
              <li>Case Staus - ${rt.Status}</li>
              <button id="update_case" onclick="window.location.href='./update_status.html?id=${id}';">Update Case</button>
              </ul>
              </p>

              `)
          })
      })

  })
    //console.log(result['Case_ID'])
    // var ids=Object.keys(result)

    // ids.forEach((id,index)=>{
    //   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Case/"+id+".json",function(res){
    //     //console.log(res)
    //     if(res!=null){
    //       console.log(res['Street'])
    //       $(".jumbotron").append(`
    //         <h1>${res.Case_details}</h1>
    //       `)
    //       var h1=document.createElement("h1")
    //       var ul=document.createElement("ul")
    //       var li1=document.createElement("li")
    //       var li2=document.createElement("li")
    //       var li3=document.createElement("li")
    //       var li4=document.createElement("li")
    //       var li5=document.createElement("li")
    //       var li6=document.createElement("li")
    //       var li7=document.createElement("li")
    //       var li8=document.createElement("li")
    //       var li9=document.createElement("li")
    //       li1.append("Case Details - " + res["Case_details"])
    //       li2.append("City - " + res["City"])
    //       li3.append("Email - " + res["Email"])
    //       li4.append("Name - " + res["Name"])
    //       li5.append("Phone - " + res["Phone"])
    //       li6.append("State - " + res["State"])
    //       li7.append("Street - " + res["Street"])
    //       //li.append(res["City"])
    //       //li.innerHTML=<h1>res["Street"]</h1>
    //       h1.innerHTML="Case id - "+(parseInt(index+1))
    //       ul.append(h1)
    //       ul.append(li1)
    //       ul.append(li2)
    //       ul.append(li3)
    //       ul.append(li4)
    //       ul.append(li5)
    //       ul.append(li6)
    //       ul.append(li7)
    //       var br=document.createElement("br")
    //       ul.append(br)
    //       var t=document.querySelector(".jumbotron")
    //       t.append(ul)
    //     }

    //     // var x=Object.keys(res)
    //     // console.log(x)

    //   })


    // })

  });



}
// document.querySelector("#check_police").addEventListener('click',e=>{
//     e.preventDefault()
//     console.log("hi")
//     //load data
//     //load_data()
//     //console.log(auth.currentUser.uid)
//     /*console.log(auth.currentUser.email)
//     firebase.database().ref("users/"+auth.currentUser.uid).get().then(function(snapshot) {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       }
//       else {
//         console.log("No data available");
//       }
//     }).catch(function(error) {
//       console.error(error);
//     });*/
    
// })
document.querySelector("#logout").addEventListener('click',e=>{
    firebase.auth().signOut().then(() => {
      window.location.replace("index.html");
        // Sign-out successful.
        console.log(auth.currentUser.uid)

        
      }).catch((error) => {
        // An error happened.
      });
})
document.querySelector("#view_cases").addEventListener('click',e=>{
  //window.location.replace("case.html")
  fetch_data()
})
document.querySelector("#missing_list").addEventListener('click',e=>{
  window.location.href="missing.html"
  //fetch_data()
})
document.querySelector("#wanted_list").addEventListener('click',e=>{
  window.location.href="wanted.html"
  //fetch_data()
})
document.querySelector("#update_Missing_list").addEventListener('click',e=>{
  window.location.href="update_missing_list.html"
  //fetch_data()
})
document.querySelector("#update_wanted_list").addEventListener('click',e=>{
  window.location.href="update_wanted_list.html"
  //fetch_data()
})
