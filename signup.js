
function formOpen() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("hide").style.filter = "blur(5px)";

}


function border() {
  document.getElementById("inputDiv").style.border =
    " 1px solid rgb(1,187,171)";
}

document.getElementById("getStarted").addEventListener("click",submit);

function submit() {
  if(document.getElementById("email").value!=0){
  var ei = document.getElementById("email").value;
  localStorage.setItem("emailId", ei);
  console.log(ei,"jio");
  document.getElementById("hide").style.display = "none";
  document.getElementById("shiftOtp").style.display = "none";
  document.getElementById("Otp").style.display = "block";

}
else{
  alert("Email is Empty ")
}
}
function otpVerify() {
  //var a=document.getElementsById("move1").value==0;
  // var b=document.getElementsById("move2").value==0;
  // var c=document.getElementsById("move3").value==0;
  // var d=document.getElementsById("move4").value==0;
    document.getElementById("shiftOtp").style.display = "none";
    document.getElementById("Otp").style.display = "none";
    document.getElementById("profile").style.display = "block";



  }
 

// let token = localStorage.getItem("token");
let demo = localStorage.getItem("emailId")||"";
console.log(demo,"id");

const getUserdetails = () => {
  let user = {
    name: document.getElementById("name").value,
    email: demo,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  console.log(user);
  registerUser(user);
};

const registerUser = async (user) => {
  let baseUrl = "https://masai-api-mocker.herokuapp.com";
  let registerRes = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
  });
  let userData = await registerRes.json();
  if (userData.error) {
    alert(userData.message);
  } else {
    alert(userData.message);
    //  location = "./login.html";
  }
};
// document.getElementById("registerBtn").addEventListener("submit", getUserdetails);
// /*color change */

function changeColor(){
  var name=document.getElementById("name").value
   var password= document.getElementById("password").value
   var username= document.getElementById("username").value
  var  mobile= document.getElementById("mobile").value
  var  description= document.getElementById("description").value
  if(name.length!=0 && password.length!=0 && username.length!=0 && mobile.length!=0 && description.length!=0){
 document.getElementById("registerBtn").style.backgroundColor="rgb(0,186,171)";
  }
}
//color

document.getElementById("fourdigit").innerHTML=`
We’ve sent a 4-digit confirmation code to <span>${demo}</span> It
          will expire shortly, so enter it soon.`