let currentuser=null
document.querySelector(".register").addEventListener('click',e=>{

    e.preventDefault()
    
    const email=document.querySelector(".email").value;
    const password=document.querySelector(".Password").value;
    const fname=document.querySelector("#ps_name").value;
    //const lname=document.querySelector("#last_name").value;
    const Addr1=document.querySelector(".street").value;
    const addr2=document.querySelector(".additional").value;
    const city=document.querySelector(".city").value;
    const zip=document.querySelector(".zip").value;
    const state=document.querySelector("#state").value;
    const phone=document.querySelector(".phone").value
    console.log(email)
    console.log(password)
    console.log(fname)
    //console.log(lname)
    console.log(Addr1)
    console.log(addr2)
    console.log(city)
    console.log(zip)
    console.log(state)
    console.log(phone)
    async function writeindb(){
        console.log("Set 1")
        await firebase.database().ref('police/' + currentuser.uid).set({
            Name:fname,
            Email:email,
            Address:Addr1+" "+addr2,
            City:city,
            Zip:zip,
            State:state,
            Phone:phone
            


          })
          await firebase.database().ref(state+"/"+city+"/"+'police/').set({
           Id:currentuser.uid

          })
          if(currentuser!=null)
          {
              window.location.replace("police_next.html");
          }
    }
    async function loginuser(){
        await auth.createUserWithEmailAndPassword(email,password).then((user)=>{
            console.log("auth")
            //console.log(auth.currentUser.uid),
            currentuser=auth.currentUser
    
            //val currentuser=auth.currentUser.uid
            //signupForm.reset()
            /*if(user!=null){
                window.location.replace("login.html");
            } */
            if(currentuser!=null)
            {
                //window.location.replace("login_next.html");
            }
         })
         console.log(currentuser.uid)
         writeindb()

    }
    loginuser()
})