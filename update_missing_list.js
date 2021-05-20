document.querySelector("#btn_missing").addEventListener('click', e => {
    console.log("hi")
    e.preventDefault()
    const name = document.querySelector("#Name").value;
    const age = document.querySelector("#Age").value;
    const Gender = document.querySelector("#Gender").value;
    const Missing_from = document.querySelector("#MissingFrom").value;
    const Missing_Since = document.querySelector("#MissingSince").value;

    async function writeDB() {

        showLoading();
        var newPostKey = await firebase.database().ref().child('Missing_List').push().key;
        await firebase.database().ref('Missing_List/' + newPostKey).set({

            Name: name,
            Age: age,
            Gender: Gender,
            "Missing From": Missing_from,
            "Missing Since": Missing_Since,



        }).then((error) => {
            stopLoading()
            console.log(error)
        })
    }


    writeDB()
})


const showLoading = () => {
    console.log("Loading Start")
    document.getElementById("pageloader").style.display="flex"
}

const stopLoading = () => {
    console.log("Loading Stop")
    document.getElementById("pageloader").style.display="None"
    alert("Data Added Successfully")
    window.location.href="police_next.html"
}