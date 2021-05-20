console.log("hi")
console.log(window.location.search);
var x=(window.location.search);
//x.split('?')
console.log(x.split("=")[1])
//console.log(window.location.search.split("=")[2]);
async function update_case()
{
     await firebase.database().ref('Case/' +x.split("=")[1]).update({
         Status:document.querySelector("#case_5").value
        


      }).then((error) => {
        alert("Status Updated Successfully")
        window.location.href="police_next.html"
        console.log(error)
      })
}
document.querySelector("#up_case").addEventListener('click',e=>{
    e.preventDefault()

    console.log("bye")
    const case_update=document.querySelector("#case_5").value;
    console.log(case_update)
    update_case()
    //load data
    //load_data()
    //console.log(auth.currentUser.uid)
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