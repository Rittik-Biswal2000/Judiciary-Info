
document.querySelector(".login100-form-btn").addEventListener("click",e=>{
    e.preventDefault()
    console.log("hi")
    const email=document.querySelector("#user_name").value;
    const password=document.querySelector("#pass_word").value;
    console.log(email)
    console.log(password)
    async function loginuser(){
        await auth.signInWithEmailAndPassword(email,password).then((user)=>{
            console.log(user)
            
            if(user!=null)
            {
                console.log("Login Successful")
                window.location.replace("police_next.html");
            }
            else
            console.log("login failed")
   
        }).catch(err=>{
            console.log(err.message)
            
        })
        console.log("....................................")

    }
    
     loginuser()
})
