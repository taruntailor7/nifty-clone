let token = localStorage.getItem('token');
// if(!token==""){
//     location = "./index.html"
// }
// else{
//     location = "./login.html";
// }

const getUserdetails = ()=>{
    event.preventDefault();
    let user = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        username: document.getElementById('username').value,
        mobile : document.getElementById('mobile').value,
        // role : document.getElementById('role').value
        description: document.getElementById('description').value,
    };
    console.log(user);
    registerUser(user);
}

const registerUser = async (user)=>{
    let baseUrl = "https://masai-api-mocker.herokuapp.com";
    let registerRes = await fetch(`${baseUrl}/auth/register`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers : {
            'content-type': 'application/json'
        }
    });
    let userData = await registerRes.json();
    // console.log(userData.error);
    if(userData.error){
        alert(userData.message);
    }
    else{
        alert(userData.message);
        location = "./login.html";
    }
    // console.log(userData);
}
document.querySelector("form").addEventListener("submit", getUserdetails);