




window.onload = function() {
    missing_list();
  };

function missing_list()
{
   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Case.json",function(result){
      // console.log(result)
       var ids=Object.keys(result)
       //console.log(ids)
       
       ids.forEach((id,index)=>{
           console.log(id)
           $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Case/"+id+"/.json",function(res){
               console.log(res)



               $(".jumbotron").append(`
          <h1>Case - ${index+1}</h1>
            <p>
            <ul>
            <li>Case Details - ${res.Case_details}</li>
            <li>City - ${res.City}</li>
            <li>Email - ${res.Email}</li>
            <li>Name - ${res.Name}</li>
            <li>Phone - ${res.Phone}</li>
            <li>State - ${res.State}</li>
            <li>Street - ${res.Street}</li>
            <li>Status - ${res.Status}</li>
            
            </ul>
            </p>

           `)
           })
       })
   }) 
}
