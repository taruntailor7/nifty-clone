let token = localStorage.getItem('token');
const getUserData = ()=>{
    let userData = {
        password : document.getElementById("password").value,
        username : document.getElementById("username").value,   
    };
    console.log(userData);
    login(userData);
}

const login = async (userData)=>{
    let baseUrl = "https://masai-api-mocker.herokuapp.com";
    let loginUser = await fetch(`${baseUrl}/auth/login`,{
        method: "POST",
        body : JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let loginRes = await loginUser.json();
    if(loginRes.error){
        alert(loginRes.message);
    }
    else{
        localStorage.setItem("username",userData.username);
        localStorage.setItem("token", loginRes.token);
        alert("Login successfully!");
        location = "./dashboard.html";
    }
  
}

var us=document.getElementById("username").value;
var ps=document.getElementById("password").value;
if(us.length!=0 && ps.length!=0){
    alert("yes");
}
function dj(){
    
var us=document.getElementById("username").value;
var ps=document.getElementById("password").value;
if(us.length!=0 && ps.length!=0){
   document.getElementById("submit").style.backgroundColor="rgb(0,186,171)";
}
}
//  document.getElementById("signupforfree").addEventListener("click", moveto);
//  function moveto(){
//          window.location.href="index.html";
    
      
//  }

