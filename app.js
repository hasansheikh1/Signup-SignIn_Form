var form=document.getElementById("signupForm");
var form1=document.getElementById("signinForm");
// var email=document.getElementById("email").value;
// var pass=document.getElementById("pass").value;
// var cpass=document.getElementById("cpass").value;
// var add=document.getElementById("address").value;
// var dob=document.getElementById("dob").value;
function validateForm(){
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
function gayab(){
var sign=document.getElementById("in");
    form1.style.display="none";
sign.style.display="none";
}