var emailAddress = document.getElementsByClassName("email")[0]
var password = document.getElementsByClassName('pwd')[0]
var clickedButton = document.getElementsByClassName("b1")[0].addEventListener('click',checkClickedBuoon)

function checkClickedBuoon(){
    //alert('value us '+emailAddress.value)
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    try{
        if(emailAddress.value == " ") throw "Please enter email Address!"
        if(!(regEmail.test(emailAddress.value))) throw 'Please enter a valid email address! '
        if(password.value == "") throw "Please enter your password!"
        if(password.value.length < 6) throw "Your password must be over 6 characters!!!"
        else{
            alert("Your Login Success!!")
        }
    }
    catch(err){
        alert(err)
    }
    finally{
        emailAddress.value = ""
        password.value = ""
    }
}