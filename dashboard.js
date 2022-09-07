let username = localStorage.getItem("username");
let token = localStorage.getItem("token") || "";
console.log(username);
console.log(token);

if(token === ""){
    location = "./login.html"
}

const role = async () => {
    let baseUrl = "https://masai-api-mocker.herokuapp.com";
    let roleRes = await fetch(`${baseUrl}/user/${username}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' +token
        }
    });
    let user = await roleRes.json();
    console.log(user.description);
    localStorage.setItem("userRole", user.description);

    if(user.description === "Product Manager"){
        managerFunctionalities();
    }
    else{
        developerFunctionalities();
    }
}
role();

const managerFunctionalities = async()=>{

    const project = ()=>{
        document.getElementById("createProject").style.display = "block";
    }
    const createProject = async()=>{
        let projectObj = {
            name : document.getElementById("proName").value,
        }
        let projectRes = await fetch ("http://localhost:3000/projects",{
            method: "POST",
            body: JSON.stringify(projectObj),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let project = await projectRes.json();
        console.log(project);
        document.getElementById("createProject").style.display = "none";
    }
    document.getElementById("crtprjt").addEventListener("click",createProject);
    document.getElementById("createBtn").addEventListener("click", project);

    const showProject = async ()=>{
        let projRes =  await fetch("http://localhost:3000/projects");
        let proj =  await projRes.json();
        console.log(proj);
        proj.map((element)=>{
            let div = document.createElement("div");
            div.append(element.name);
            div.addEventListener("click",()=>{
                projectDesc(element.id);
            });
            document.getElementById("projects").append(div);
        });
    }
    showProject();

    let projectId = localStorage.getItem("projectId");
    const addDevelopers = async (employeeObj)=>{
        // alert("Invited");
        let developerRes = await fetch (`http://localhost:3000/projects/${projectId}/developers`,{
            method: "POST",
            body: JSON.stringify(employeeObj),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let developers = await developerRes.json();
        console.log(developers);
        location = "./description.html";
        alert("Developers added for your project");
    }

    // const next = ()=>{
    //     location = "./description.html";
    //     alert("Developers added for your project");
    // }
    // document.getElementById('addDev1').addEventListener('click',next);

    const projectDesc = (projectId)=>{
        localStorage.setItem("projectId",projectId);
        document.getElementById("projects").style.display="none";   
        document.getElementById("addDeveloper").style.display="block";
        document.getElementById("addDev1").addEventListener("click",()=>{
            let employeeObj = {
                developer : document.getElementById("developer1").value,
            }
            addDevelopers(employeeObj)
        })
        // document.getElementById("addDev2").addEventListener("click",()=>{
        //     let employeeObj = {
        //         developer : document.getElementById("developer2").value,
        //     }
        //     addDevelopers(employeeObj)
        // })
        // document.getElementById("addDev3").addEventListener("click",()=>{
        //     let employeeObj = {
        //         developer : document.getElementById("developer3").value,
        //     }
        //     addDevelopers(employeeObj)
        // })
    }

}

const developerFunctionalities = async()=>{
    document.getElementById("tas").innerText = "Tasks"
    document.getElementById("createBtn").style.display = "none"
    document.getElementById("logout").style.marginLeft = "350px"
    let baseUrl = "https://masai-api-mocker.herokuapp.com";

    let roleRes = await fetch(`${baseUrl}/user/${username}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' +token
        }
    }); 
    let user = await roleRes.json();
    console.log(user.name);

    let tasksRes = await fetch("http://localhost:3000/tasks");
    let tasks = await tasksRes.json();
    console.log(tasks);
    let task = tasks.filter((element)=>{
        return element.developerName == user.name;
    })
    console.log(task)
    task.map((elem)=>{
        let div1 = document.createElement("div");

        let task = document.createElement("p");
        task.innerText = "Your Task : " +elem.taskk;

        let btn = document.createElement("button");
        btn.innerText = "Complete"
        btn.setAttribute("id","complete")
        btn.addEventListener("click",()=>{
            alert("Task Completed")
            document.getElementById("complete").style.backgroundColor = "green"
        })
        div1.append(task,btn);
        document.getElementById("projects").append(div1);
    })
}

const logout = ()=>{
    localStorage.clear();
    location = "./login.html";
}
document.getElementById("logout").addEventListener("click",logout);
