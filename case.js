let latitude;
let longitude;
/*const name=document.querySelector("#first-name").value+" "+document.querySelector("#last-name").value;
const email=document.querySelector("#email").value;
const phone=document.querySelector("#phone").value;
const street=document.querySelector("#location").value;
const city=document.querySelector("#city").value;
const state=document.querySelector("#state").value;
const lat_cord=latitude;
const long_cord=longitude;
const case_details=document.querySelector("#message").value;*/
function initMap() {
    console.log("in case.js")
    const myLatlng = { lat: 21.4888, lng: 83.8844 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        //let loc=(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2))
        //console.log(mapsMouseEvent.latLng.toJSON().lat)
        latitude=mapsMouseEvent.latLng.toJSON().lat
        longitude=mapsMouseEvent.latLng.toJSON().lng
      // Close the current InfoWindow.
      /*infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );*/
      //infoWindow.open(map);
    });
  }

  document.querySelector("#submit").addEventListener('click',e=>{
    const name=document.querySelector("#first-name").value+" "+document.querySelector("#last-name").value;
    const email=document.querySelector("#email").value;
    const phone=document.querySelector("#phone").value;
    const street=document.querySelector("#location").value;
    const city=document.querySelector("#city").value;
    const state=document.querySelector("#state").value;
    const lat_cord=latitude;
    const long_cord=longitude;
    const case_details=document.querySelector("#message").value;
      e.preventDefault()
      async function writeindb(){
        showLoading();
        console.log("Set 1")
        var timeInMs = Date.now();
        console.log(timeInMs)
        await firebase.database().ref('users/' + auth.currentUser.uid+"/Case/"+timeInMs).set({
          Case_ID:timeInMs




        


      });
        await firebase.database().ref('Case/'+timeInMs).set({

            Id:auth.currentUser.uid,
            Name:name,
            Email:email,
            Phone:phone,
            Street:street,
            City:city,
            State:state,
            Latitude:lat_cord,
            Longitude:long_cord,
            Case_details:case_details,
            Status:"Pending"



            


          });
          await firebase.database().ref(state+"/"+city+"/"+'Cases/'+timeInMs).set({
           Case_ID:timeInMs
 
           }).then((error) => {
            stopLoading()
            alert("Case Registered Successfully "+ timeInMs)
            window.location.href="login_next.html"
            
        })
          // await firebase.database().ref('users/' + auth.currentUser.uid+"/Cases/"+timeInMs).set({
          //     Case_ID:timeInMs




            


          // })

          /*
         
          await firebase.database().ref(state+"/"+city+"/"+'users/').set({
           Id:currentuser.uid

          })*/
          
    }
    writeindb()

  })
  const showLoading = () => {
    console.log("Loading Start")
    document.getElementById("pageloader").style.display="flex"
}

const stopLoading = () => {
    console.log("Loading Stop")
    document.getElementById("pageloader").style.display="None"
    //alert("Data Added Successfully")
}
  