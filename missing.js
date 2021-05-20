




window.onload = function() {
    missing_list();
  };

function missing_list()
{
   $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Missing_List.json",function(result){
      // console.log(result)
       var ids=Object.keys(result)
       //console.log(ids)
       
       ids.forEach((id,index)=>{
           console.log(id)
           $.getJSON("https://jims-a9ce1-default-rtdb.firebaseio.com/Missing_List/"+id+"/.json",function(res){
               console.log(res)

               var m_f=res["Missing From"]
               var m_s=res["Missing Since"]

               $(".jumbotron").append(`
          <h1>Missing - ${index+1}</h1>
            <p>
            <ul>
            <li>Age - ${res.Age}</li>
            <li>Gender - ${res.Gender}</li>
            <li>Missing From - ${m_f}</li>
            <li>Street - ${m_s}</li>
            <li>Name - ${res.Name}</li>
            </ul>
            </p>

           `)
           })
       })
   }) 
}
