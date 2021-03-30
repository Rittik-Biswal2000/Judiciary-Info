document.querySelector(".register").addEventListener('click',e=>{
    e.preventDefault()
    const email=document.querySelector(".email").value;
    const password=document.querySelector(".Password").value;
    const fname=document.querySelector("#first_name").value;
    const lname=document.querySelector("#last_name").value;
    const Addr1=document.querySelector(".street").value;
    const addr2=document.querySelector(".additional").value;
    const city=document.querySelector(".city").value;
    const zip=document.querySelector(".zip").value;
    const state=document.querySelector("#state").value;
    const phone=document.querySelector(".phone").value
    console.log(email)
    console.log(password)
    console.log(fname)
    console.log(lname)
    console.log(Addr1)
    console.log(addr2)
    console.log(city)
    console.log(zip)
    console.log(state)
    console.log(phone)
    auth.createUserWithEmailAndPassword(email,password).then(()=>{
        console.log("hi")
        signupForm.reset() 
     }).then(
        db.collection('jims').doc('citizen').collection(city).doc(email).set({
            Name : fname+" "+lname,
            Address : Addr1+" "+addr2,
            City : city,
            Zip : zip,
            State : state,
            Phone : phone
        }).catch(function(error){
            console.error("Error adding : ",error);
        })
     ).catch(err=>{
         console.log("bye")
     })
})