var form=document.getElementById("signupForm");
var form1=document.getElementById("signinForm");
// var email=document.getElementById("email").value;
// var pass=document.getElementById("pass").value;
// var cpass=document.getElementById("cpass").value;
// var add=document.getElementById("address").value;
// var dob=document.getElementById("dob").value;
function validate(){

 

var user={
    email:"",
    password:"",
    cpassword:"",
    address:"",
    doB:""

};

signupForm.addEventListener("submit" , (e) => {

    user.email=document.getElementById("email").value;;
    user.password=document.getElementById("pass").value;
    user.cpassword=document.getElementById("cpass").value;
    user.address=document.getElementById("address").value;
    user.doB=document.getElementById("dob").value;

    // var data=JSON.stringify(user);
    window.localStorage.setItem("user1",JSON.stringify(user));
   
});
 
}

function checkInputs(){

    var em=document.getElementById("email").value;
    var pas=document.getElementById("pass").value;
    var cpas=document.getElementById("cpass").value;
    var addr=document.getElementById("address").value;
    var dobb=document.getElementById("dob").value;


    if(em==='' || pas=== '' || cpas==='' || addr==='' || dobb===''){

        alert("Please fill the missing fields");
        return false;
    }

    else if(){

    }
}

function isEmail(emaill){
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}