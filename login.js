let token = localStorage.getItem('token');
// if(!token==""){
//     location = "./index.html";
// }
// else{
//     location = "./login.html";
// }

const getUserData = ()=>{
    event.preventDefault();
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
        // console.log(loginRes.message,"msgs");
    }
    else{
        // console.log(userData.username);
        localStorage.setItem("username",userData.username);
        localStorage.setItem("token", loginRes.token);
        alert("Login successfully!");
        // location = "./index.html";
    }
    // console.log(loginRes.error,"err");
    // console.log(loginRes.message,"msg");
    // console.log(loginRes,"obj");
}


document.querySelector("form").addEventListener("submit", getUserData);

// Role : Student
// Username : tarun.__7
// Pass : Tarun@12
