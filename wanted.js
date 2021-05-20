




window.onload = function() {
    missing_list();
  };

function missing_list()
{
   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Wanted_List.json",function(result){
      // console.log(result)
       var ids=Object.keys(result)
       //console.log(ids)
       
       ids.forEach((id,index)=>{
           console.log(id)
           $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Wanted_List/"+id+"/.json",function(res){
               console.log(res)

               $(".jumbotron").append(`
          <h1>Wanted - ${index+1}</h1>
            <p>
            <ul>
            <li>Name - ${res.Name}</li>
            <li>Gender - ${res.Gender}</li>
            <li>Age - ${res.Age}</li>
            <li>Status - ${res.Status}</li>
            </ul>
            </p>

           `)
           })
       })
   }) 
}
